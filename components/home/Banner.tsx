'use client';

import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaSearchPlus } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function Banner() {
  const [followers, setFollowers] = useState(0);
  const targetFollowers = 40000;

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(targetFollowers / 80);
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetFollowers) {
        current = targetFollowers;
        clearInterval(interval);
      }
      setFollowers(current);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const buttonBaseClasses =
    'font-semibold px-6 py-3 rounded-full shadow transition flex items-center gap-2 border';

  return (
    <section className="relative bg-primary text-white py-20 px-6 rounded-2xl overflow-hidden shadow-xl mb-12">
      {/* Achtergrond-effect */}
      <div className="absolute top-[-60px] left-[-60px] w-[240px] h-[240px] bg-white opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[240px] h-[240px] bg-white opacity-10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Zet jouw horecazaak in de kijker!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Word lid vanaf slechts <strong>€4,99 / maand</strong> <br />
          <span className="text-sm text-white/90">Eerste maand gratis. Meer zichtbaarheid. Meer omzet.</span>
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {/* Als ingelogd, normale link */}
          <SignedIn>
            <a
              href="/bedrijven/create"
              className={`${buttonBaseClasses} bg-[#E00DDF] border-[#F54D5B] text-white hover:bg-[#F54D5B]`}
            >
              <FiPlus className="text-xl" />
              Voeg jouw zaak toe
            </a>
          </SignedIn>

          {/* Als uitgelogd, SignIn modal */}
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/bedrijven/create">
              <button
                className={`${buttonBaseClasses} bg-[#E00DDF] border-[#F54D5B] text-white hover:bg-[#F54D5B]`}
              >
                <FiPlus className="text-xl" />
                Voeg jouw zaak toe
              </button>
            </SignInButton>
          </SignedOut>

          <a
            href="#categories-list"
            className={`${buttonBaseClasses} border-[#F54D5B] text-white hover:bg-[#F54D5B] flex items-center gap-2`}
          >
            <FaSearchPlus className="text-xl" />
            Ontdek horecazaken
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Partyeventsaruba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white/70 transition"
            >
              <FaFacebookF className="text-3xl" style={{ color: '#1877F2' }} />
            </a>
            <a
              href="https://www.instagram.com/horecadebenelux"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white/70 transition"
            >
              <FaInstagram
                className="text-3xl"
                style={{ color: '#E4405F' }}
              />
            </a>
            <a
              href="https://www.youtube.com/@HorecaBenelux-youtube"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white/70 transition"
            >
              <FaYoutube className="text-3xl" style={{ color: '#FF0000' }} />
            </a>
          </div>
          <div className="text-lg md:text-xl mb-6">
            <span className="font-semibold text-white">{followers.toLocaleString()}+</span> volgers op social media
          </div>
        </div>
      </div>
    </section>
  );
}

