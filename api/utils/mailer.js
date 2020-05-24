const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
})

function sendTestMail(to) {
    let mailOptions = {
        from: process.env.GMAIL_ACCOUNT,
        to: to,   // list of receivers
        subject: "Nodemailer",
        text: "Testing Nodemailer TEXT",
        html: "<h1>Testing Nodemailer HTML</h1>"
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("error occurred", err)
        } else {
            console.log("email sent", info)
        }
    })
}

module.exports = {
    sendTestMail: sendTestMail,
};