import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Neem contact met ons op via onderstaand formulier
      </h1>
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
