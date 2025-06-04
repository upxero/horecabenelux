// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{
          background: "linear-gradient(135deg, #f57c00, #f06292, #8e24aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Over ons – Het team achter Horeca Benelux
      </h1>

      {/* UITGEBREIDE BESCHRIJVING */}
      <section className="space-y-12 mb-16 text-gray-800">
        <p>
          Horeca Benelux is meer dan een digitaal platform – het is een levendige
          community waar levensgenieters, horeca-uitbaters en professionals elkaar
          vinden. Achter deze snelgroeiende online plek staan drie gepassioneerde
          ondernemers, elk met hun eigen expertise.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Jeffrey De Kraker – Sociale media, sales & communitybeheer
          </h2>
          <p>
            Jeffrey is het gezicht achter de community en drijvende kracht op sociale
            media. Met zijn achtergrond in de horeca én zijn vlotte communicatie weet
            hij als geen ander hoe hij een sterke connectie opbouwt met zowel
            horecazaken als bezoekers. Hij is verantwoordelijk voor sales,
            leadgeneratie en het dagelijks beheer van onze bruisende community van
            meer dan 55.000 volgers. Zijn energie, netwerk en visie zorgen ervoor dat
            Horeca Benelux een plek is waar mensen graag terugkomen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Tibor Babori – Marketing & strategische communicatie
          </h2>
          <p>
            Tibor is een expert in inbound- en outbound prospectie. Met zijn
            achtergrond in sales en strategische marketing weet hij precies hoe je
            bedrijven benadert en betrekt. Dankzij zijn commerciële flair helpt hij
            Horeca Benelux te groeien, zowel in bereik als in partnerships. Tibor
            begrijpt de noden van zowel traditionele horecaondernemers als moderne
            ondernemers in een snel veranderende markt.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Michael Bernard – Webontwikkeling & technische infrastructuur
          </h2>
          <p>
            Michael is het brein achter de technologie van Horeca Benelux. Met meer
            dan 5 jaar ervaring in digitale oplossingen ontwikkelt hij de website,
            zorgt hij voor alle technische processen en optimaliseert hij de
            gebruikerservaring. Zijn achtergrond in de horeca én zijn bedrijf Upxero
            maken hem de perfecte schakel tussen techniek en praktijk. Hij zorgt
            ervoor dat het platform stabiel, snel en gebruiksvriendelijk blijft – voor
            zowel bezoekers als horeca-uitbaters.
          </p>
        </div>
      </section>

      {/* FOTO-SECTION ONDERAAN */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          src: "/images/jeffrey.png",
          alt: "Portret van Jeffrey De Kraker",
          name: "Jeffrey De Kraker",
          role: "Sociale media, sales & communitybeheer"
        },{
          src: "/images/tibor.png",
          alt: "Portret van Tibor Babori",
          name: "Tibor Babori",
          role: "Marketing & strategische communicatie"
        },{
          src: "/images/michael.png",
          alt: "Portret van Michael Bernard",
          name: "Michael Bernard",
          role: "Webontwikkeling & technische infrastructuur"
        }].map(({ src, alt, name, role }) => (
          <div key={name} className="text-center">
            <div className="flex justify-center items-center mx-auto mb-4 w-[300px] h-[300px] rounded-xl border-4 border-gray-200 overflow-hidden relative">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 200px, 300px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-orange-600">{name}</h3>
            <p className="text-sm text-gray-700">{role}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
