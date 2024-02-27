import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

type EmailData = {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { name, email, message } : EmailData = data;
  
  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  }

  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: templateParams
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return new NextResponse('Email sent', { status: 200 });
  } catch (err) {
    return new NextResponse('Failed to send email', { status: 500 });
  }
}
