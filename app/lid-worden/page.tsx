import Link from 'next/link';
import { FaCheck, FaGem } from 'react-icons/fa';

const bundles = [
  {
    title: '3 maanden lidmaatschapbundel',
    pricePerMonth: 7.25,
    totalPrice: 21.75,
    duration: '3 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
    ],
    url: 'https://checkout.horecabenelux.com/product/3_maanden_lidmaatschap/122172',
  },
  {
    title: '6 maanden lidmaatschapbundel',
    pricePerMonth: 6.65,
    totalPrice: 39.90,
    duration: '6 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
      'Prioriteit op vermelding',
    ],
    url: 'https://checkout.horecabenelux.com/product/6_maanden_lidmaatschap/122173',
  },
  {
    title: '12 maanden lidmaatschapbundel',
    pricePerMonth: 6.00,
    totalPrice: 72.00,
    duration: '12 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
      'Prioriteit op vermelding',
      'Exclusieve promoties',
    ],
    url: 'https://checkout.horecabenelux.com/product/12_maanden_lidmaatschap/122174',
  },
];

export default function LidWordenPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{
          background: 'linear-gradient(135deg, #f57c00, #f06292, #8e24aa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Word lid van Horeca Benelux en zet jouw zaak in de kijker!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bundles.map(({ title, pricePerMonth, totalPrice, duration, benefits, url }) => (
          <div
            key={title}
            className="rounded-2xl p-8 shadow-xl text-white flex flex-col"
            style={{
              background: 'linear-gradient(135deg, #f57c00, #f06292, #8e24aa)',
            }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaGem className="text-cyan-300" />
              {title}
            </h2>

            <p className="text-lg mb-6">
              <span className="font-bold text-xl">€{pricePerMonth.toFixed(2)}</span> per maand incl. btw
              <br />
              <span className="text-sm opacity-90">
                Totaal: €{totalPrice.toFixed(2)} voor {duration}
              </span>
            </p>

            <ul className="mb-8 space-y-3 flex-grow">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <FaCheck className="text-green-300" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href={url} legacyBehavior>
              <a
                className="mt-auto inline-block bg-white text-black font-semibold py-3 px-6 rounded-full text-center transition duration-300 hover:bg-gray-100 hover:text-[#8e24aa]"
                target="_blank"
              >
                Lid worden
              </a>
            </Link>

            <p className="mt-4 text-sm text-white/80 text-center">Prijzen zijn inclusief btw.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
