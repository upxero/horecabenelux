import React from "react";

const CookiePage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookieverklaring – Horeca Benelux</h1>

      <p className="mb-6">
        Horeca Benelux maakt gebruik van cookies om de gebruikerservaring op onze website en bijbehorende diensten te verbeteren, en om anonieme webstatistieken te verzamelen. In deze cookieverklaring leggen we uit welke cookies wij gebruiken en waarom.
        Indien u meer wilt weten over hoe wij omgaan met persoonsgegevens, uw rechten als gebruiker of andere privacygerelateerde zaken, verwijzen wij u graag naar onze privacyverklaring.
      </p>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Wat zijn cookies?</h2>
        <p className="mb-4">
          Cookies zijn kleine tekstbestanden die door de server van een website worden geplaatst in de browser van uw computer of mobiele apparaat. Ze bevatten informatie waarmee uw browser herkend kan worden tijdens een huidig of toekomstig bezoek. Cookies maken het gebruik van onze website sneller, eenvoudiger en persoonlijker.
        </p>
        <p>
          Cookies kunnen ook persoonsgegevens bevatten, zoals een IP-adres of e-mailadres. Voor het plaatsen van cookies die niet strikt noodzakelijk zijn, vragen wij expliciet uw toestemming via de cookiebanner bij uw eerste bezoek.
        </p>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Soorten cookies die wij gebruiken</h2>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Noodzakelijke cookies</strong><br />
            Deze cookies zorgen ervoor dat onze website correct functioneert, zoals navigatie, inlogfunctionaliteit of het opslaan van uw cookievoorkeuren.<br />
            Voorbeelden:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Supabase (gebruikersdata en sessiebeheer)</li>
              <li>Clerk (gebruikersauthenticatie)</li>
              <li>Betaalproviders zoals Stripe of PayPro (beveiligde betalingen)</li>
            </ul>
          </li>
          <li>
            <strong>Analytische cookies</strong><br />
            Deze helpen ons om inzicht te krijgen in het gebruik van onze website. Met tools zoals Google Analytics verzamelen we geanonimiseerde gegevens over bezoekersaantallen, bezochte pagina’s, klikgedrag enz. Dit helpt ons om onze site continu te verbeteren.
          </li>
          <li>
            <strong>Voorkeurscookies</strong><br />
            Met deze cookies onthouden we uw voorkeuren (zoals taal of regio), zodat u een gebruiksvriendelijkere ervaring krijgt.
          </li>
          <li>
            <strong>Marketingcookies</strong><br />
            Deze cookies worden gebruikt om u relevante content en advertenties aan te bieden, op basis van uw surfgedrag. Denk aan cookies van platforms zoals Facebook, Instagram, of LinkedIn. Zij kunnen uw gedrag volgen op andere websites om zo gepersonaliseerde advertenties aan te bieden.
          </li>
          <li>
            <strong>Niet-geclassificeerde cookies</strong><br />
            Dit zijn cookies die nog in onderzoek zijn en waarvan we de categorie nog niet hebben kunnen bepalen. Zodra dit gebeurt, passen we onze verklaring aan.
          </li>
        </ol>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Cookies van derden</h2>
        <p className="mb-4">
          Wij maken gebruik van derden die cookies kunnen plaatsen op onze website. Hieronder een overzicht van de belangrijkste partners:
        </p>
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-3 py-2 font-semibold">Derde partij</th>
              <th className="border border-gray-300 px-3 py-2 font-semibold">Doel</th>
              <th className="border border-gray-300 px-3 py-2 font-semibold">Cookiecategorie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Google Analytics</td>
              <td className="border border-gray-300 px-3 py-2">Website-analyse en bezoekersstatistieken</td>
              <td className="border border-gray-300 px-3 py-2">Analytisch</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Meta (Facebook, Instagram, Messenger)</td>
              <td className="border border-gray-300 px-3 py-2">Remarketing, social media-integratie</td>
              <td className="border border-gray-300 px-3 py-2">Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">TikTok</td>
              <td className="border border-gray-300 px-3 py-2">Tracking en advertentiedoelen</td>
              <td className="border border-gray-300 px-3 py-2">Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">YouTube</td>
              <td className="border border-gray-300 px-3 py-2">Ingesloten video&apos;s en gebruikersinteractie</td>
              <td className="border border-gray-300 px-3 py-2">Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">LinkedIn Ads</td>
              <td className="border border-gray-300 px-3 py-2">B2B-marketing en rekrutering</td>
              <td className="border border-gray-300 px-3 py-2">Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Brevo (ex-Sendinblue)</td>
              <td className="border border-gray-300 px-3 py-2">Nieuwsbrieven, inschrijfformulieren en tracking</td>
              <td className="border border-gray-300 px-3 py-2">Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">WhatsApp</td>
              <td className="border border-gray-300 px-3 py-2">Contact via chatfunctie of kliklink</td>
              <td className="border border-gray-300 px-3 py-2">Functioneel/Marketing</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Supabase</td>
              <td className="border border-gray-300 px-3 py-2">Database, sessiebeheer en gebruikersdata</td>
              <td className="border border-gray-300 px-3 py-2">Noodzakelijk</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Clerk</td>
              <td className="border border-gray-300 px-3 py-2">Gebruikersauthenticatie en sessiebeheer</td>
              <td className="border border-gray-300 px-3 py-2">Noodzakelijk</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">PayPro</td>
              <td className="border border-gray-300 px-3 py-2">Beveiligde betalingen, antifraude, evt. tracking</td>
              <td className="border border-gray-300 px-3 py-2">Noodzakelijk / Marketing</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">
          Deze partijen handelen volgens hun eigen privacy- en cookiebeleid. Wij zorgen er echter voor dat zij voldoen aan de vereisten van de AVG (GDPR).
        </p>
      </section>

      <hr className="my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Cookiebeheer</h2>
        <p className="mb-4">
          U kunt via de cookiebanner aangeven welke categorieën cookies u toestaat. U kunt deze voorkeuren op elk moment aanpassen via de instellingen van uw browser of via de cookie-instellingen op onze website.
        </p>
        <p className="mb-4">
          Instructies voor het beheren of verwijderen van cookies in de meest gebruikte browsers:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>
            Google Chrome -{" "}
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://support.google.com/chrome/answer/95647
            </a>
          </li>
          <li>
            Firefox -{" "}
            <a
              href="https://support.mozilla.org/nl/kb/cookies-verwijderen-in-firefox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://support.mozilla.org/nl/kb/cookies-verwijderen-in-firefox
            </a>
          </li>
          <li>
            Microsoft Edge -{" "}
            <a
              href="https://support.microsoft.com/nl-nl/microsoft-edge/verwijderen-en-beheren-van-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://support.microsoft.com/nl-nl/microsoft-edge/verwijderen-en-beheren-van-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
            </a>
          </li>
          <li>
            Safari -{" "}
            <a
              href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://support.apple.com/nl-nl/guide/safari/sfri11471/mac
            </a>
          </li>
        </ul>
        <p>
          Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van onze website kan beperken.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p>
          Heeft u vragen over onze cookieverklaring of het gebruik van cookies? Neem gerust contact met ons op via{" "}
          <a
            href="mailto:info@horecabenelux.be"
            className="text-blue-600 underline"
          >
            info@horecabenelux.be
          </a>.
        </p>
      </section>
    </div>
  );
};

export default CookiePage;
