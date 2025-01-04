import logo from '../assets/logo.png';
import img_1 from '../assets/img-1.png';

const data = ['Home', 'Lessons', 'Songs & Videos', 'About us'];

const Header = () => {
  return (
    <header className="bg-[#44A9A1] flex items-center justify-between px-10 relative">
      <img src={logo} alt="logo" className="size-24" />

      <ul className="flex *:text-white *:text-lg *:font-semibold gap-11">
        {data.map((i) => (
          <li key={i} className="cursor-pointer hover:text-[#FFC909]">
            {i}
          </li>
        ))}
      </ul>

      <img
        src={img_1}
        alt="backgrond"
        className="absolute left-0 -bottom-20 w-full"
      />
    </header>
  );
};

export default Header;
