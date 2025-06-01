"use client";

import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error("Fout bij versturen:", err);
      setIsError(true);
    }
  };

  if (isSubmitted) {
    return <p className="text-green-600">Bedankt! We nemen snel contact met je op.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Naam"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mailadres"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Jouw bericht"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-[#B75BAA] text-white py-2 px-4 rounded hover:bg-[#9e4893]"
      >
        Verstuur
      </button>

      {isError && <p className="text-red-600">Er is iets misgegaan. Probeer opnieuw.</p>}
    </form>
  );
};

export default ContactForm;
