const conn = require("../db/conn");
const jwt = require("jsonwebtoken");
const User = require("../models/userschema");

exports.contact = async(req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;
        if (!name || !phone || !email || !subject || !message) {
            return res.json({ error: "plzz filled bhar do yrrr" });
        } else {
            const userContact = await User.findOne({ _id: req.userID });
            if (userContact) {
                const userMessage = await userContact.addMessage(
                    name,
                    phone,
                    email,
                    subject,
                    message
                );

                await userContact.save();

                res.status(201).json({ message: "successfully saved." });
            }
        }
    } catch (error) {
        console.log(error);
    }
};