'use client';

import { useRouter } from 'next/navigation';

export default function ScrollToCategories() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/#categories-list');
  };

  return (
    <li>
      <a href="/#categories-list" onClick={handleClick} className="hover:underline">
        Horecazaken in de buurt
      </a>
    </li>
  );
}
