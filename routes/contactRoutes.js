const express = require("express");
const router = express.Router();

const contactFormEmail = require("../emails/contactFormEmail");
const confirmationEmail = require("../emails/confirmationEmail");

const { Resend } = require("resend");
const rateLimit = require("express-rate-limit");

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 5,
    handler: (req, res) => {
        console.log(`Rate limit exceeded by ${req.ip}`);
        return res.redirect("/contact?success=ratelimited");
    }
});

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact",
        success: req.query.success ?? null
    });
});

router.post("/contact", contactLimiter, async (req, res) => {
    try {
        const { fullname, email, message } = req.body;

        if (
            !fullname.trim() ||
            !email.trim() ||
            !message.trim() ||
            fullname.length > 100 ||
            email.length > 254 ||
            message.length > 600
        ) {
            return res.redirect("/contact?success=invalid");
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.redirect("/contact?success=invalid");
        }

        const confirmationResult = await resend.emails.send({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank you for reaching out, ${fullname}`,
            html: confirmationEmail({
                fullname,
                email,
                message
            })
        });

        if (confirmationResult.error) {
            throw confirmationResult.error;
        }

        const contactResult = await resend.emails.send({
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_RECEIVER,
            subject: `New Contact Form Submission from ${fullname}`,
            html: contactFormEmail({
                fullname,
                email,
                message
            })
        });

        if (contactResult.error) {
            throw contactResult.error;
        }

        return res.redirect("/contact?success=true");

    } catch (error) {
        console.error("Contact form error:", error);
        return res.redirect("/contact?success=false");
    }
});

module.exports = router;