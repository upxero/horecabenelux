import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID || "", 10);

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey!,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Brevo fout:", error);
      return NextResponse.json({ error: "Fout bij aanmelden" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Netwerkfout:", err);
    return NextResponse.json({ error: "Verbinding mislukt" }, { status: 500 });
  }
}
