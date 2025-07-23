"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Jouw e-mailadres"
          required
          className="w-full sm:w-auto flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#B75BAA]"
        />
        <button
          type="submit"
          className="bg-[#B75BAA] text-white px-4 py-2 rounded-md text-sm hover:bg-[#a84c9b]"
        >
          Abonneren
        </button>
      </form>

      <div className="mt-2 min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-green-600 text-sm">✅ Inschrijving gelukt!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">❌ Er ging iets mis.</p>
        )}
      </div>
    </>
  );
}
