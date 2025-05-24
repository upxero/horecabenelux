"use client";

import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Image from "next/image";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = Cookie.get("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookie.set("cookie-consent", "accepted", { expires: 365 });
    Cookie.set("analytics-enabled", "true", { expires: 365 });
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    Cookie.set("cookie-consent", "custom", { expires: 365 });
    Cookie.set("analytics-enabled", analyticsEnabled.toString(), { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-lg bg-white shadow-2xl rounded-xl p-6 z-50 border border-gray-200">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Logo afbeelding vanuit de public/images map */}
        <div className="w-24">
          <Image
            src="/images/horecabenelux-logo.png"
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
              We gebruiken cookies om jouw ervaring te verbeteren. Door op "Alles accepteren" te klikken, ga je akkoord met ons gebruik van cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full">
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
              Kies welke cookies je wilt toestaan:
            </p>

            <div className="w-full space-y-4 text-sm text-left mt-4">
              <div className="flex items-center justify-between">
                <span>Noodzakelijke cookies</span>
                <span className="text-green-600 font-medium">Altijd aan</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Analytische cookies</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition duration-300"></div>
                  <div
                    className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      analyticsEnabled ? "translate-x-5" : ""
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
