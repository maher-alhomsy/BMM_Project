import { Link } from 'react-router';

import logo from '../assets/logo.png';

const data = ['Home', 'Lessons', 'Songs & Videos'];

const Header = () => {
  return (
    <header className="bg-primary flex items-center gap-10 md:justify-between md:px-10 relative w-full">
      <Link to="/">
        <img src={logo} alt="logo" className="size-24" />
      </Link>

      <ul className="flex *:text-white *:text-lg *:font-semibold gap-3 md:gap-11">
        {data.map((i) => (
          <Link key={i} to="learn-by-images">
            <li key={i} className="cursor-pointer hover:text-[#FFC909]">
              {i}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
