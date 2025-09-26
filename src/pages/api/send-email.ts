import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, subject, message }: EmailRequestBody = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({
            message: 'All required fields must be filled'
        });
    }

    try {
        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hamza1937badr@gmail.com',
                pass: 'fyvw jbjn jcoe wdoy'
            },
        });

        // Formatted HTML email
        const mailOptions = {
            from: 'hamza1937badr@gmail.com',
            to: 'hamzabadrbus@gmail.com',
            subject: `📧 Portfolio: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #4F46E5; text-align: center;">New message from your portfolio</h2>
                    
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0;">
                        <p><strong>👤 Name:</strong> ${name}</p>
                        <p><strong>📧 Email:</strong> ${email}</p>
                        <p><strong>📞 Phone:</strong> ${phone || 'Not provided'}</p>
                        <p><strong>📋 Subject:</strong> ${subject}</p>
                        <p><strong>📅 Date:</strong> ${new Date().toLocaleString('en-US')}</p>
                    </div>
                    
                    <div style="background: white; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
                        <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error: any) {
        console.error('Email sending error:', error);
        res.status(500).json({
            message: 'Error sending email',
            error: error.message
        });
    }
}