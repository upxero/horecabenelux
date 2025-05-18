type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/favorieten ', label: 'favorieten' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/reviews ', label: 'reviews' },
  { href: '/reservaties ', label: 'reservaties' },
  { href: '/bedrijven/create ', label: 'bedrijf toevoegen' },
  { href: '/rentals', label: 'mijn bedrijven' },
  { href: '/admin', label: 'admin' },
  { href: '/profiel ', label: 'profiel' },
];
