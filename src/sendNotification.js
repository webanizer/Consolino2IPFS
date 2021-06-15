import nodemailer from "nodemailer"


const sendNotification = async (balance) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'user@webanizer.de',
            pass: 'passwort'
        }
    });

    var mailOptions = {
        from: "lena.stallinger@webanizer.de",
        to: "lenastalli@gmail.com",
        subject: "Dois sind bald leer",
        text: 'Dein Wallet hat nur noch ' + balance + ' Dois.'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendNotification
