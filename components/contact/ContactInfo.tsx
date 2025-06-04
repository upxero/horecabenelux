"use client";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const ContactInfo: React.FC = () => {
  return (
    <div className="mt-12 bg-white shadow-md rounded-lg p-6 space-y-5">
      <h2 className="text-2xl font-semibold mb-4">Contactgegevens</h2>

      <div className="flex items-start gap-3">
        <FaMapMarkerAlt className="text-[#B75BAA] mt-1" />
        <p>
          <strong>Postadres:</strong>
          <br />
          Horeca Benelux
          <br />
          Zinkstraat 24 Unit G5708
          <br />
          4823 AD Breda, Nederland
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaEnvelope className="text-[#B75BAA] mt-1" />
        <p>info@horecabenelux.com</p>
      </div>

      <div className="flex items-start gap-3">
        <FaPhone className="text-[#B75BAA] mt-1" />
        <div>
          <p>
            <strong>Telefoon NL:</strong> +31 97 010268675
          </p>
          <p>
            <strong>Telefoon BE:</strong> +32 491 10 01 43
          </p>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="flex gap-4 mt-4 flex-wrap">
        <a
          href="https://www.facebook.com/Partyeventsaruba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/horecadebenelux"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com/@HorecaBenelux-youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@horecabenelux"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          <SiTiktok size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jeffrey-de-kraker-523432233"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
          title="Jeffrey De Kraker"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/tiborbabori/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
          title="Tibor Babori"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/upxero/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
          title="Michael Bernard"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;

