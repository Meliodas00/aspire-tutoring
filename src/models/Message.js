const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    text: {
        type: String,
        required: true,
    },


    sentOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Message", messageSchema);