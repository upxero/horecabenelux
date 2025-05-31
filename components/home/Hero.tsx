export default function Hero() {
  return (
    <section
      className="relative text-white py-10 px-6 rounded-2xl overflow-hidden shadow-xl mb-12"
      style={{
        background: 'linear-gradient(135deg, #f57c00, #f06292, #8e24aa)',
      }}
    >
      {/* Achtergrond effecten */}
      <div className="absolute top-[-60px] left-[-60px] w-[240px] h-[240px] bg-white opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[240px] h-[240px] bg-white opacity-10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hét platform voor iedereen met een passie voor horeca
        </h1>
        <p className="text-lg md:text-xl text-white">
          Ontdek, beleef en reserveer jouw favoriete horecazaak in België, Nederland of Luxemburg.
        </p>
      </div>
    </section>
  );
}