import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import Logo from './Logo';
import AddCompany from './AddCompany';

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        {/* Logo + slogan wrapper */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
          <Logo />
          <span className="text-sm sm:text-base font-medium text-gray-700 mt-2 sm:mt-0">
            Hét platform voor iedereen met een passie voor horeca.
          </span>
        </div>

        <NavSearch />

        <div className='flex gap-4 items-center'>
          <DarkMode />
          <AddCompany />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
