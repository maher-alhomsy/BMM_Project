import logo from '../assets/logo.png';

const data = ['Home', 'Lessons', 'Songs & Videos', 'About us'];

const Header = () => {
  return (
    <header className="bg-primary flex items-center justify-between md:px-10 relative w-full">
      <img src={logo} alt="logo" className="size-24" />

      <ul className="flex *:text-white *:text-lg *:font-semibold  md:gap-11">
        {data.map((i) => (
          <li key={i} className="cursor-pointer hover:text-[#FFC909]">
            {i}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
