import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const client = process.env.NEXT_PUBLIC_CLIENT_EMAIL;
    if (req.method === 'POST') {
        const {name, email, type, phone, description} = req.body
        const transporter = nodemailer.createTransport({
            host: 'mail.infomaniak.com',
            port: 465,
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false,
            },

            auth: {
                user: username,
                pass: password,
            },
        });
        try {
            const mail = await transporter.sendMail({
                from: username,
                to: client,
                subject: `New client for Web Waze Digital`,
                html: `
            <h1 style="text-align : center">New Client for Web Waze Digital</h1>
            <p>Nom : ${name}</p>
            <p>Mail : ${email}</p>
            <p>Numéro de téléphone : ${phone}</p>
            <p>type : ${type}</p>
            <p>Description : ${description}</p>
            `,
            });
        res.status(200).json({ message: description })
    }catch (err){
            res.status(400).json({message: err.message})
        }
    } else {
        res.status(400).json({ message: "Bad Request" })
    }
}