import { Link, NavLink } from 'react-router';

import logo from '../assets/logo.png';

const data = [
  { title: 'Home', path: '/' },
  { title: 'Learn by images', path: 'learn-by-images' },
];

const Header = () => {
  return (
    <header className="bg-primary flex items-center gap-10 md:justify-between md:px-10 relative w-full">
      <Link to="/">
        <img src={logo} alt="logo" className="size-24" />
      </Link>

      <ul className="flex *:text-white *:text-lg *:font-semibold gap-3 md:gap-11">
        {data.map(({ path, title }) => (
          <li key={title}>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer hover:text-[#FFC909] ${
                  isActive ? 'text-[#FFC909]' : ''
                }`
              }
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
