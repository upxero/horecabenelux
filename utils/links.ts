type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/favorieten', label: 'favorieten' },
  { href: '/reviews', label: 'reviews' },
  { href: '/bedrijven/create', label: 'bedrijf toevoegen' },
  { href: '/bedrijven', label: 'mijn bedrijven' },
  { href: '/admin', label: 'admin' },
  { href: '/profiel', label: 'profiel' },
];
