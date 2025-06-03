import Link from 'next/link';
import { FaCheck, FaGem } from 'react-icons/fa';

const bundles = [
  {
    title: '3 maanden bundel',
    pricePerMonth: 5.99,
    totalPrice: 5.99 * 3,
    duration: '3 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
    ],
  },
  {
    title: '6 maanden bundel',
    pricePerMonth: 5.49,
    totalPrice: 5.49 * 6,
    duration: '6 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
      'Prioriteit op vermelding',
    ],
  },
  {
    title: '12 maanden bundel',
    pricePerMonth: 4.99,
    totalPrice: 59.88,
    duration: '12 maanden',
    benefits: [
      'Meer zichtbaarheid',
      'Maandelijkse rapportages',
      'Klanten kunnen reviews plaatsen',
      'Prioriteit op vermelding',
      'Exclusieve promoties',
    ],
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
        {bundles.map(({ title, pricePerMonth, totalPrice, duration, benefits }) => (
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
              <span className="font-bold text-xl">€{pricePerMonth.toFixed(2)}</span> per maand
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

            <Link href="/betaling" legacyBehavior>
              <a className="mt-auto inline-block bg-white text-black font-semibold py-3 px-6 rounded-full text-center transition duration-300 hover:bg-gray-100 hover:text-[#8e24aa]">
                Lid worden
              </a>
            </Link>
            <p className="mt-4 text-sm text-white/80 text-center">Prijzen zijn exclusief btw.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
