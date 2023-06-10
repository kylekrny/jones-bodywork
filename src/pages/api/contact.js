import nodemailer from "nodemailer";


async function main(body) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "fullofbulk@gmail.com",
            pass: "zvujxrgfqvwndfbb"
        },
    })


    await transporter.sendMail({
        from: `"Jones Bodywork`,
        to: "jeff@jonesbodywork.com",
        subject: "New Form Submission",
        text: `name: ${body.first} ${body.last},\r message: ${body.message},\r phone: ${body.phone},\r company: ${body.company}, `,
    })
}

export default async function handler(req, res) {
    const body = req.body;

    main(body).then(() => {
        res.status(200).json({title: "Thank you",  message: "I will reach out with in the next business day.", button: "Okay", code: 200 })
    }).catch(() => {
        res.status(400).json({title: "There seems to be an error",  message: "Looks like something went wrong. Please feel free to try that again or reach out to me directly.", button: "Okay", code: 400 })
    });

}