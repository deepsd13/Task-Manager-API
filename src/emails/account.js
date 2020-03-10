const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shah98@sheridancollege.ca',
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shah98@sheridancollege.ca',
        subject: 'Sorry to see you go! ',
        text: `Goodbye,${name}. Hope to see you back soon.Is there anything we could have done to keep you on board.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}