import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  website?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const business = clean(payload.business, 160);
  const email = clean(payload.email, 180);
  const website = clean(payload.website, 220);
  const message = clean(payload.message, 2000);
  const honeypot = clean(payload.company, 120);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !business || !email || !isEmail(email)) {
    return NextResponse.json({ error: "Name, business, and a valid email are required." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!gmailUser || !gmailPassword) {
    return NextResponse.json({ error: "Email is not configured yet." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const subject = `Built by Vinh site scan: ${business}`;
  const text = [
    "New Built by Vinh site scan request",
    "",
    `Name: ${name}`,
    `Business: ${business}`,
    `Email: ${email}`,
    `Website: ${website || "Not provided"}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  await transporter.sendMail({
    from: `Built by Vinh <${gmailUser}>`,
    to: "vinh@builtbyvinh.com",
    replyTo: email,
    subject,
    text,
  });

  return NextResponse.json({ ok: true });
}
