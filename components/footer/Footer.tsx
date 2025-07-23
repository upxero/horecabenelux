import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';
import ScrollToCategories from '../home/ScrollToCategories';
import Logo from '../navbar/Logo'; 
import NewsletterForm from "../form/NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-12 pt-10 pb-6 text-sm text-gray-600 bg-gray-50">
      {/* Bovenste sectie met logo, links en nieuwsbrief */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo + slogan */}
        <div>
        <Logo size={100} /> 
          <p className="font-semibold text-gray-800">
            Hét platform voor iedereen met een passie voor horeca
          </p>
        </div>

        {/* Kolom 1 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Over</h4>
          <ul className="space-y-1">
            <li><a href="/ontstaan" className="hover:underline">Ontstaan Horeca Benelux</a></li>
            <li><a href="/over" className="hover:underline">Over Ons</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Kolom 2 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Voor horecaliefhebbers</h4>
          <ul className="space-y-1">
            <ScrollToCategories />
            {/*<li><a href="/faq" className="hover:underline">Veelgestelde vragen</a></li> */}
            <li><a href="/lid-worden" className="hover:underline">Lid worden</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Nieuwsbrief */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Nieuwsbrief</h4>
          <p className="text-gray-600 text-sm mb-2">Blijf op de hoogte van het laatste horecanieuws</p>
          <NewsletterForm />
        </div>
      </div>

      {/* Onderste rij met privacy links en social media */}
      <div className="max-w-6xl mx-auto mt-10 px-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span>© {new Date().getFullYear()} Horeca Benelux</span>
          <a href="/algemene-voorwaarden" className="hover:underline">AlgemeneVoorwaarden</a>
          <a href="/privacy" className="hover:underline">PrivacyVoorwaarden</a>
          <a href="/cookiebeleid" className="hover:underline">Cookiebeleid</a>
          <a href="/bedrijfsgegevens" className="hover:underline">Bedrijfsgegevens</a>
        </div>
        <div className="flex gap-4 text-gray-600">
          <a href="https://www.facebook.com/Partyeventsaruba" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/horecadebenelux" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.youtube.com/@HorecaBenelux-youtube" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.tiktok.com/@horecabenelux" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <SiTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

  