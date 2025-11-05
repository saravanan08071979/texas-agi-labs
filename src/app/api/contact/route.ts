import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString() || 'No name';
    const email = data.get('email')?.toString() || 'no-reply@example.com';
    const message = data.get('message')?.toString() || '';

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@texasagilabs.com';

    if (!SENDGRID_API_KEY) {
      console.warn('SENDGRID_API_KEY not set; skipping send.');
      return NextResponse.json({ ok: true, info: 'no-sendgrid' });
    }

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: CONTACT_EMAIL }] }],
        from: { email: 'noreply@texasagilabs.com', name: 'TexasAgiLabs' },
        subject: `Contact form: ${name}`,
        content: [{ type: 'text/plain', value: `From: ${name} <${email}>\n\n${message}` }]
      })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('SendGrid error', text);
      return NextResponse.json({ ok: false, error: text }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'exception' }, { status: 500 });
  }
}
