import React from "react";

const CompanyDetailsPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Bedrijfsgegevens – Horeca Benelux</h1>

      <p className="mb-4">
        <strong>Handelsnaam:</strong> Horeca Benelux<br />
        <strong>Postadres:</strong><br />
        Horeca Benelux<br />
        Zinkstraat 24 Unit G5708<br />
        4823 AD Breda<br />
        Nederland
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Partnerschap tussen drie ondernemers:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Michael Bernard – Upxero OÜ (Websitebeheer & hosting)</li>
        <li>Jeffrey Joël de Kraker – via Xolo Go OÜ (Strategie & sales)</li>
        <li>Tibor Babori – Zelfstandige (Marketing & klantondersteuning)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Wettelijke en facturatiegegevens:</h2>
      <div className="mb-6">
        <p><strong>Websiteaanbieder:</strong><br />
          Upxero OÜ<br />
          Ahtri tn 12<br />
          10151 Tallinn, Estland<br />
          Ondernemingsnummer: 16534146<br />
          BTW-nummer: EE102522936
        </p>
      </div>
      <div className="mb-6">
        <p><strong>Dienstenaanbieder:</strong><br />
          Tibor Babori<br />
          Belgiëlei 129/A/33<br />
          2018 Antwerpen, België<br />
          BTW-nummer: BE0655845308
        </p>
      </div>
      <div className="mb-6">
        <p><strong>Vertegenwoordiging via Xolo Go OÜ:</strong><br />
          Xolo Go OÜ – vertegenwoordigt Jeffrey Joël De Kraker<br />
          Paju 1a<br />
          50603 Tartu, Estland<br />
          Registratienummer: 14717109<br />
          BTW-nummer: EE102156920
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contactinformatie:</h2>
      <ul className="mb-6">
        <li><strong>E-mail:</strong> info@horecabenelux.com / support@horecabenelux.com / dsa-contact@horecabenelux.com</li>
        <li><strong>Telefoon NL:</strong> +31 97 010268675</li>
        <li><strong>Telefoon BE:</strong> +32 491 10 01 43</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">DSA-verklaring:</h2>
      <p className="mb-4">
        In overeenstemming met artikel 24(2) van de <strong>Digital Services Act (DSA)</strong>, moeten onlineplatforms informatie publiceren over hun gemiddelde aantal maandelijks actieve gebruikers in de EU.
      </p>
      <p className="mb-4">
        Voor de periode <strong>1 januari 2025 – 30 april 2025</strong> telde Horeca Benelux minder dan <strong>100.000 maandelijkse actieve ontvangers</strong> binnen de EU.
      </p>
      <p>
        Horeca Benelux wordt daarom <strong>niet geclassificeerd als een Zeer Groot Onlineplatform (VLOP)</strong>.
      </p>
    </div>
  );
};

export default CompanyDetailsPage;
