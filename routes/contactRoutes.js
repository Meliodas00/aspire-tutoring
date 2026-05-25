const express = require("express");
const path = require("path");
const Message = require("../src/models/Message");
const router = express.Router();


router.get("/contact", (req, res) => {

    res.render("contact", {
        title: "Contact"
    });

});

// simple feedback - using a message schema save the query as a db entry

router.post("/contact", async (req, res) => {

    try {

        const message = new Message({

            fullname: req.body.fullname,
            email: req.body.email,
            text: req.body.message
        });


        await message.save();

        console.log("Message Saved!");

        res.redirect("/contact");

    } catch (err) {

        console.log(err);

        res.send("Error saving message");

    }

});

module.exports = router;