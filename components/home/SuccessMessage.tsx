'use client';

import { useEffect, useState } from 'react';

export default function SuccessMessage({
  success,
}: {
  success?: string;
}) {
  const [showSuccess, setShowSuccess] = useState(
    success === 'bedrijf-toegevoegd'
  );

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  if (!showSuccess) return null;

  return (
    <div className="bg-green-100 text-green-800 p-4 rounded mb-4 text-sm shadow">
      ✅ Bedrijf succesvol toegevoegd!
    </div>
  );
}
