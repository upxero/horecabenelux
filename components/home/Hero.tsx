import Link from 'next/link';
import { FaSearchPlus } from 'react-icons/fa';

export default function Hero() {
  const buttonClasses =
    'font-semibold px-6 py-3 rounded-full shadow transition flex items-center gap-2 border text-black border-black bg-transparent hover:bg-white hover:text-black';

  return (
    <section className="text-center py-12 px-4 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Hét platform voor iedereen met een passie voor horeca
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Ontdek, beleef en reserveer jouw favoriete horecazaak in België, Nederland of Luxemburg.
      </p>

      <Link href="#categories-list">
        <button className={buttonClasses}>
          <FaSearchPlus className="text-xl" />
          Ontdek horecazaken
        </button>
      </Link>
    </section>
  );
}
