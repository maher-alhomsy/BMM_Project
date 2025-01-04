import intro_1 from '../assets/intro_1.png';
import intro_2 from '../assets/intro_2.png';

const IntroSection = () => {
  return (
    <section className="bg-[#FFC909] md:px-8 h-[50vh] flex justify-center items-center gap-60 overflow-hidden">
      <div className="flex-1 space-y-10 w-full md:max-w-[600px] text-center">
        <h1
          className="text-primary text-8xl"
          style={{
            WebkitTextStroke: '1px white',
            WebkitTextFillColor: 'currentColor',
          }}
        >
          Welcome to petit monde
        </h1>

        <h2 className="font-medium text-2xl text-primary">
          Our site is rich in educational methods to help your child learn
          French in an easy and unique way
        </h2>
      </div>

      <div className="hidden xl:flex flex-1 relative">
        <img src={intro_1} className="lg:size-80 absolute left-0 -top-40" />
        <img
          src={intro_2}
          className="absolute size-[300px] lg:right-0 right-28 -top-44"
        />
      </div>
    </section>
  );
};

export default IntroSection;
