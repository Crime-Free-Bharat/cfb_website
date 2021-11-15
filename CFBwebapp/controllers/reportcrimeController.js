const conn = require("../db/conn");
const jwt = require("jsonwebtoken");
const User = require("../models/userschema");

exports.reports = async(req, res) => {
    try {
        const { category, date, state, district, policestation, victimImage, victimReport, suspectName, suspectImage, suspectReport } = req.body;
        if (!category || !date || !state || !district || !policestation || !victimImage || !victimReport || !suspectName || !suspectImage || !suspectReport) {
            return res.json({ error: "please fill all fields" });
        } else {
            const userReport = await User.findOne({ _id: req.userID });
            if (userReport) {
                const crimeReport = await userReport.addReport(
                    category,
                    date,
                    state,
                    district,
                    policestation,
                    victimImage,
                    victimReport,
                    suspectName,
                    suspectImage,
                    suspectReport
                );

                await userReport.save();

                res.status(201).json({ message: "successfully Send Report." });
            }
        }
    } catch (error) {
        console.log(error);
    }
};




exports.getReport = async(req, res) => {
    try {

        if (!jwt) {
            return res.json({ error: "Login Required" });
        } else {
            const getReports = await User.findOne({ _id: req.userID });
            if (getReports) {
                res.status(201).json({ message: "Get report successfully." });
                const displayreport = getReports.reports
                console.log(displayreport);
            }
        }
    } catch (error) {
        console.log(error);
    }
};