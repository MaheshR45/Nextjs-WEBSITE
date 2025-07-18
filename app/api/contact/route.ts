import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, surname, email, phoneNumber, message } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'maheramrsv@gmail.com',       // ✅ Your Gmail
                pass: 'cgsmjfhrpbdvcwya',           // ✅ Your Gmail App Password (no spaces)
            },
        });

        const mailOptions = {
            from: email,
            to:  ['maheramrsv@gmail.com', 'mahetech45@gmail.com'], // where the email will be sent
            subject: `New Contact Form Submission - ${name}`,
            html: `
  <h2>Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name} ${surname}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  <p><strong>Message:</strong></p>
  <p>${message}</p>
`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error.message);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
