const express = require("express");
const path = require("path");
const router = express.Router();

const contactFormEmail = require('../emails/contactFormEmail');

const { Resend } = require("resend");

const resend = new Resend(
    process.env.RESEND_API_KEY
);


router.get("/contact", (req, res) => {

    res.render("contact", {
        title: "Contact",
        success: req.query.success ?? null
    });

});

// simple feedback - using a message schema save the query as a db entry DEPRECATED

router.post("/contact", async (req, res) => {

    try {

        const { fullname, email, message } = req.body;

        if (!fullname || !email || !message) {
            return res.status(400).send("All fields are required.");
        }

        await resend.emails.send({
            from: "bot@zenithtuition.com",
            to: process.env.CONTACT_RECEIVER,
            subject: `New Contact Form Submission from ${fullname}`,
            html: contactFormEmail({
                fullname,
                email,
                message
            })
        });

        res.redirect("/contact?success=true");

    } catch (error) {
        console.error(error);
        res.redirect("/contact?success=false");
    }
});


module.exports = router;