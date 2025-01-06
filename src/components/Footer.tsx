const Footer = () => {
  return (
    <footer className="bg-[#FFC909] p-20">
      <ul className="flex justify-between gap-11">
        <li className="flex-1">
          <p className="text-white font-medium text-xl">About Company</p>

          <p className="text-primary">
            Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus
            magnis arcu vehicula nascetur feugiat
          </p>
        </li>

        <li className="flex-1">
          <p className="text-white font-medium text-xl">Our Services</p>

          <p className="flex flex-col *:text-primary">
            <span>Online class</span>
            <span>Baby care</span>
            <span>Shop</span>
            <span>Kids Playzone</span>
            <span>Nurse</span>
          </p>
        </li>

        <li className="flex-1">
          <p className="text-white font-medium text-xl">Useful links</p>

          <p className="flex flex-col *:text-primary">
            <span>About us</span>
            <span>Our team</span>
            <span>Privacy policy</span>
            <span>Contact us</span>
            <span>Terms of service</span>
          </p>
        </li>

        <li className="flex-1">
          <p className="text-white font-medium text-xl">Useful links</p>

          <span className="text-primary">
            Aplications prodize before front end ortals visualize front end
          </span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
