const nodemailer = require('nodemailer')
const secemail=process.env.SECEMAIL
const secpassword=process.env.SECPASSWORD

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: secemail,
                pass: secpassword
            }
        })
        await transporter.sendMail({
            from: secemail,
            to: email,
            subject,
            text
        })
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
module.exports = sendEmail;