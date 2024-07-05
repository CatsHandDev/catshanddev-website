import React from 'react'
import { NextRequest } from 'next/server'
import nodeMailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, name, message } = reqBody;

  const user = process.env.NEXT_PUBLIC_MAIL_ADDRESS;
  const pass = process.env.NEXT_PUBLIC_MAIL_PASSWORD;

  try {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass
      },
      tls: {
        rejectUnauthorized: false
      },
      authMethod: 'PLAIN'
    })

    const mailOptions = {
      from: 'portfolio site',
      to: user,
      subject: 'コンタクトページ',
      text: `名前：${name} \n\nメールアドレス：${email}\n\nメッセージ：${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('成功しました');
    return NextResponse.json({message: '成功しました'})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: '失敗しました'})
  }
}
