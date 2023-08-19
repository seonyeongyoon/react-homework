import Heading from '@/components/Heading';
import Nav from './Nav';

function Header() {
  return (
  <header className="fixed w-full h-16 flex justify-between items-center px-10  bg-blue-700 text-white">
    <Heading />
    <Nav />
  </header>
  );
}

export default Header;