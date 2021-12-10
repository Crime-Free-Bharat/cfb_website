const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
    reports: [{
        date: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        policestation: {
            type: String,
            required: true,
        },
        victimImage: {
            type: String,
            required: true,
        },
        victimReport: {
            type: String,
            required: true,
        },
        suspectName: {
            type: String,
            required: true,
        },
        suspectImage: {
            type: String,
            required: true,
        },
        suspectReport: {
            type: String,
            required: true,
        },
    }, ],
    messages: [{
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    }, ],
    feedbacks: [{
        fname: {
            type: String,
            required: true,
        },
        fphone: {
            type: Number,
            required: true,
        },
        femail: {
            type: String,
            required: true,
        },
        fsubject: {
            type: String,
            required: true,
        },
        fmessage: {
            type: String,
            required: true,
        },
    }, ],
    tokens: [{
        token: {
            type: String,
            required: true,
        },
    }, ],
});

// we are hasing the password
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// ==================================== we are generating token==================
userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};
//===================================== store the messages ============================
userSchema.methods.addMessage = async function(name, phone, email, subject, message) {
    try {
        this.messages = this.messages.concat({
            name,
            phone,
            email,
            subject,
            message,
        });
        await this.save();
        return this.messages;
    } catch (err) {
        console.log(err);
    }
};

//===================================== Storing Report to database  ============================
userSchema.methods.addReport = async function(category, date, state, district, policestation, victimImage, victimReport, suspectName, suspectImage, suspectReport) {
    try {
        this.reports = this.reports.concat({
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
        });
        await this.save();
        return this.reports;
    } catch (err) {
        console.log(err);
    }
};
//===================================== store the feedback ============================
userSchema.methods.addFeedback = async function(fname, fphone, femail, fsubject, fmessage) {
    try {
        this.feedbacks = this.feedbacks.concat({
            fname,
            fphone,
            femail,
            fsubject,
            fmessage,
        });
        await this.save();
        return this.feedbacks;
    } catch (err) {
        console.log(err);
    }
};

//=====================================collection creation ===============================
const User = mongoose.model("register", userSchema);

module.exports = User;