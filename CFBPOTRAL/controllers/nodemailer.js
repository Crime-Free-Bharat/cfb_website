require("../db/conn");
require("../controllers/registerController");
const { application } = require("express");
const nodemailer = require("nodemailer");


exports.mailVerification = async (req, res)=> {
const uniqueString = randString()
const isValid = false
sendEmail(email)
res.redirect('/login')
const randString = () =>{
    const len = 8
    const randStr =''
    for (let i=0; i<len; i++){
        const ch = Math.floor((Math.random()* 10)+1)
        randStr +=ch
    }
    return randStr
}
const sendMail =(email,uniqueString) =>{
    const Transport = nodemailer.createTransport({
        service: "Gmail",
        auth :{
            user:"crimefreebharatbatch4@gmail.com",
            pass:"crimefreebharat@4"
        }
    });
    const mailOptions;
    const sender = "CRIME FREE BHARAT MISSION";
    mailOptions = {
        from : sender `<p>No reply</p>`,
        to : email,
        subject : "Email Verification",
        html:`<a href =http://localhost:3000/verify/${uniqueString}>click here </a> to verify your email.Thanks for registering in CRIME FREE BHARAT `
    };
    Transport.sendMail(mailOptions,function(error,res){
        if (error){
            console.log(error);
        }else{
            console.log("message sent")
        }
    });
}
}
app.get('/verify/:uniqueString',async(res,req) => {
    const{uniqueString} = req.params
    const user = await user.findOne({uniqueString:uniqueString})
    if (user) {
        user.isValid = true
        await user.save()
        res.redirect('/login')
    }else{
        res.json('user not found')
    }
})

