import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

console.log("🟢 Contact API route geladen"); // <- Voeg dit toe

export async function POST(req: Request) {
  console.log("📩 POST-verzoek ontvangen"); // <- Log POST-verzoek
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Horeca Benelux Contactformulier" <info@horecabenelux.be>`,
      to: "info@horecabenelux.com", 
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h3>Nieuw contactbericht via Horeca Benelux</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fout bij verzenden e-mail:", error);
    return NextResponse.json(
      { error: "E-mail kon niet verzonden worden" },
      { status: 500 }
    );
  }
}
