export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-12 pt-4 pb-6 text-center text-sm text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <span>© {new Date().getFullYear()} Horeca Benelux</span>
        <a href="/privacy" className="hover:underline">
          PrivacyVoorwaarden
        </a>
        <a href="/algemene-voorwaarden" className="hover:underline">
          AlgemeneVoorwaarden
        </a>
        <a href="/bedrijfsgegevens" className="hover:underline">
          Bedrijfsgegevens
        </a>
      </div>
    </footer>
  );
}

  