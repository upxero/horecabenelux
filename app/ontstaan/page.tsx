// app/story/page.tsx

export default function StoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{
          background: 'linear-gradient(135deg, #f57c00, #f06292, #8e24aa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Ons verhaal – Het ontstaan van Horeca Benelux
      </h1>

      <section className="space-y-6">
        <p>
          Horeca Benelux begon in 2019 als een eenvoudige Facebookgroep voor horecaondernemers en liefhebbers. Wat startte als een
          passieproject, groeide al snel uit tot een actieve community van meer dan <strong>55.000 volgers</strong> op sociale media
          – verspreid over <strong>Facebook, Instagram, TikTok en YouTube</strong>.
        </p>

        <p>
          De liefde voor de horeca, het bourgondische leven en het verbinden van mensen stond centraal. Al snel zagen de oprichters
          de nood aan een centraal online platform waar alles samenkomt: van restaurants en hotels tot bakkers, slagers,
          leveranciers en events.
        </p>

        <p>
          Zo werd <strong>Horeca Benelux</strong> geboren – dé digitale gids voor iedereen die graag eet, drinkt, overnacht of
          onderneemt in de Benelux. Een plek waar bezoekers snel hun favoriete horecazaak kunnen vinden en reserveren. Maar ook een
          platform waar uitbaters hun zaak kunnen promoten, deals en menu’s kunnen delen, en in contact komen met hun publiek.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Vandaag biedt Horeca Benelux:</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Een zoekfunctie voor horecazaken en leveranciers.</li>
          <li>Interessante artikels over chefs, events, overnachtingen, tips en trends.</li>
          <li>
            De mogelijkheid voor horecazaken om zich <strong>gratis te registreren</strong> en te promoten via sociale media en SEO.
          </li>
          <li>
            Een community waar gasten en uitbaters elkaar vinden, met ruimte voor reviews, inspiratie en samenwerking.
          </li>
        </ul>

        <p>
          De toekomst? Horeca Benelux blijft groeien. Met plannen voor een vacatureplatform, marktplaats, webshop en nieuwe
          samenwerkingen wordt het dé digitale hotspot voor de horeca in België, Nederland en Luxemburg.
        </p>
      </section>
    </main>
  );
}
