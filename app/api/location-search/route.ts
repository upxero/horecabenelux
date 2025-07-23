// app/api/location-search/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([], { status: 400 });
  }

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1`,
      {
        headers: {
          "User-Agent": "upxero.com info@upxero.com", 
        },
      }
    );

    if (!res.ok) {
      const text = await res.text(); // 🐞 log HTML of foutboodschap
      console.error("Nominatim fout:", res.status, text);
      return NextResponse.json([], { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("API crashed:", err.message);
    return NextResponse.json([], { status: 500 });
  }
}
