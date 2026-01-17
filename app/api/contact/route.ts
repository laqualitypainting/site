import { Resend } from 'resend';
import dotenv from 'dotenv';
import { EmailTemplate } from '@/components/EmailTemplate';

dotenv.config();

const resend = new Resend(process.env.EMAIL_API);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();


    // ------------------------------
    // Server-side validation
    // ------------------------------
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ status: 'error', message: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ status: 'error', message: 'Invalid email address.' }),
        { status: 400 }
      );
    }

 
    const data = await resend.emails.send({
      from: 'Contact Form <noreply@laqualitypainting.com>',
      to: [process.env.EMAIL_USER as string],
      subject: `New Message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });


    return new Response(
      JSON.stringify(data),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    console.error("Error sending email:", err);

    let message = "Unknown server error";
    if (err instanceof Error) {
      message = err.message;
    } else if (typeof err === "string") {
      message = err;
    }

    return new Response(
      JSON.stringify({ status: "error", message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}