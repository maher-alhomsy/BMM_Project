import img from '../assets/learning.png';

const LearningSection = () => {
  return (
    <section className="bg-primary flex p-10 lg:px-20 items-center justify-between">
      <div className="flex-1 space-y-5">
        <h1 className="text-[#FFDD4D] text-3xl text-center md:text-left">
          Click here to play and learn
        </h1>

        <p className="text-xl font-medium text-white max-w-[600px] text-center md:text-left">
          We can learn by playing, This method is entertaining and not boring
          for your child Through it he can learn letters and then words
        </p>

        <button className="bg-[#FFC909] border border-white text-white rounded-2xl px-4 py-1 text-lg font-bold w-full md:w-fit">
          Start playing
        </button>
      </div>

      <div className="hidden flex-1 md:flex justify-center">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default LearningSection;
