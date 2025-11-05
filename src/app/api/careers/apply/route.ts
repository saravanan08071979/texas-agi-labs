import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = form.get('name')?.toString() || 'Anonymous';
    const email = form.get('email')?.toString() || '';
    const role = form.get('role')?.toString() || '';
    console.log('New application', { name, email, role });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
