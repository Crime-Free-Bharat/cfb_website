const conn = require("../db/conn");
const User = require("../models/userschema");

exports.feedback = async(req, res) => {
    try {
        const { fname, fphone, femail, fsubject, fmessage } = req.body;
        if (!fname || !fphone || !femail || !fsubject || !fmessage) {
            return res.json({ error: "please fill all fields" });
        } else {
            const userFeedback = await User.findOne({ _id: req.userID });
            if (userFeedback) {
                const feedbackmessege = await userFeedback.addFeedback(
                    fname,
                    fphone,
                    femail,
                    fsubject,
                    fmessage
                );

                await userFeedback.save();

                res.status(201).json({ message: "successfully saved." });
            }
        }
    } catch (error) {
        console.log(error);
    }
};