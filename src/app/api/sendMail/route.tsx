import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log(process.env.NEXT_PUBLIC_SES_SMTP_USER);

  // nodemailerのトランスポーター作成
  const transporter = nodemailer.createTransport({
    host: 'email-smtp.ap-northeast-1.amazonaws.com', // SESのSMTPエンドポイント
    port: 587, // TLSポート
    secure: false, // TLSを使用するかどうか
    auth: {
      user: process.env.NEXT_PUBLIC_SES_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SES_SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // 自己署名証明書を許可
    },
  });

  try {
    // SMTP接続確認
    await transporter.verify();
    console.log('SMTPサーバー接続成功');

    // メール送信処理
    const info = await transporter.sendMail({
      from: 'catshanddev@gmail.com', // 送信元のメールアドレス
      to: 'catshanddev@gmail.com', // 受信者
      subject: `お問い合わせ: ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    console.log('送信成功:', info);
    return NextResponse.json({ message: '送信成功しました' });

  } catch (error) {
    // 'error' を 'instanceof Error' で型チェック
    if (error instanceof Error) {
      console.error('送信エラー: ', error.message);
      console.error('スタックトレース: ', error.stack);
      return NextResponse.json({ message: '失敗しました', error: error.message });
    } else {
      // 'error' が 'Error' オブジェクトでない場合の対応
      console.error('未知のエラー: ', error);
      return NextResponse.json({ message: '不明なエラーが発生しました' });
    }
  }
}
