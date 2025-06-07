"use client";

import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Image from "next/image";

type Consent = {
  essential: boolean; // altijd true
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = "cookie-consent";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieValue = Cookie.get(COOKIE_NAME);
    if (!cookieValue) {
      setIsVisible(true);
    } else {
      try {
        const savedConsent = JSON.parse(cookieValue);
        setConsent({
          essential: true,
          analytics: savedConsent.analytics ?? false,
          marketing: savedConsent.marketing ?? false,
        });
      } catch {
        // als cookie corrupt is, toon popup
        setIsVisible(true);
      }
    }
  }, []);

  const saveConsent = (newConsent: Consent) => {
    // Zet cookie met JSON-string, 365 dagen geldig
    Cookie.set(COOKIE_NAME, JSON.stringify(newConsent), { expires: 365 });

    // Zet of verwijder analytics cookie
    if (newConsent.analytics) {
      Cookie.set("analytics-enabled", "true", { expires: 365 });
    } else {
      Cookie.remove("analytics-enabled");
    }

    // Zet of verwijder marketing cookie
    if (newConsent.marketing) {
      Cookie.set("marketing-enabled", "true", { expires: 365 });
    } else {
      Cookie.remove("marketing-enabled");
    }

    setConsent(newConsent);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleSavePreferences = () => {
    saveConsent({ essential: true, analytics: consent.analytics, marketing: consent.marketing });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg bg-white shadow-2xl rounded-xl p-6 z-50 border border-gray-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex justify-center">
          <Image
            src="/horecabenelux-logo.png"
            alt="Horeca Benelux Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        {!showSettings ? (
          <>
            <h2 className="text-lg font-semibold text-gray-800">We gebruiken cookies 🍪</h2>
            <p className="text-sm text-gray-600">
              Wij gebruiken cookies om uw ervaring te verbeteren en om anonieme statistieken te verzamelen. 
              Door op <strong>Alles accepteren</strong> te klikken, gaat u akkoord met het gebruik van alle cookies. 
              U kunt ook <button
                onClick={() => setShowSettings(true)}
                className="text-blue-600 underline ml-1"
                type="button"
              >
                uw voorkeuren instellen
              </button>.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Lees onze{" "}
              <a href="/cookiebeleid" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                cookieverklaring
              </a>{" "}
              voor meer informatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Alles accepteren
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto px-5 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-200 transition cursor-pointer"
              >
                Instellingen
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-800">Cookievoorkeuren</h2>
            <p className="text-sm text-gray-600">
              Kies welke cookies u wilt toestaan:
            </p>

            <div className="w-full space-y-4 text-sm text-left mt-4">
              <div className="flex items-center justify-between">
                <span>Essentiële cookies</span>
                <span className="text-green-600 font-medium">Altijd aan</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Analytische cookies</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={consent.analytics}
                    onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition duration-300"></div>
                  <div
                    className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      consent.analytics ? "translate-x-5" : ""
                    }`}
                  ></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span>Marketingcookies</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={consent.marketing}
                    onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition duration-300"></div>
                  <div
                    className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      consent.marketing ? "translate-x-5" : ""
                    }`}
                  ></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full">
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Voorkeuren opslaan
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="w-full sm:w-auto px-5 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-200 transition cursor-pointer"
              >
                Sluiten
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookiePopup;
