// components/MessengerButton.tsx
import React from "react";
import Link from "next/link";

const MessengerButton = () => {
  return (
    <Link
    href="https://m.me/Partyeventsaruba"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#0084FF] text-white p-3 rounded-full shadow-lg hover:bg-[#006bbd] z-50"
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="24"
        height="24"
    >
        <path d="M12 2C6.49 2 2 6.17 2 11.39c0 2.86 1.42 5.43 3.68 7.18v3.43l3.38-1.84c.95.26 1.96.4 3.02.4 5.51 0 10-4.17 10-9.39S17.51 2 12 2zm.15 11.75l-2.57-2.74-5.06 2.74 6.63-7.06 2.57 2.74 5.06-2.74-6.63 7.06z" />
    </svg>
    </Link>
  );
};

export default MessengerButton;
