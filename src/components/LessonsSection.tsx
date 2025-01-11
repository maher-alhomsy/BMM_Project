import img from '../assets/lesson.webp';

const LessonsSection = () => {
  return (
    <section className="p-10 lg:px-20">
      <h1 className="text-primary text-3xl font-bold mb-10">
        Click here to learn by lessons
      </h1>

      <ul className="flex flex-wrap gap-24 justify-center">
        {Array.from({ length: 6 }, (_, i) => (
          <li className="w-full lg:w-[25%] md:w-[40%] p-3 border-2 border-[#FFC909] bg-primary rounded-2xl">
            <img src={img} alt="" className="mx-auto w-[85%] h-[200px] mb-5" />

            <div className="flex justify-between items-center px-7 mb-5">
              <p className="text-white font-semibold text-2xl">
                Language Class
              </p>

              <span className="size-10 flex justify-center items-center text-2xl font-bold rounded-full text-white bg-[#FFC909]">
                {i + 1}
              </span>
            </div>

            <p className="px-7 text-white font-medium text-lg">
              Interactively brand client center through is customized value good
              ideas.
            </p>

            <div className="px-7 flex justify-between mt-5">
              <div className="text-white flex flex-col justify-center items-center">
                <span className="font-bold text-[#FFC909]">Age :</span>
                <span>3-5 Years</span>
              </div>

              <div className="text-white flex flex-col justify-center items-center">
                <span className="font-bold text-[#FFC909]">Time :</span>
                <span>8 - 10 am</span>
              </div>

              <div className="text-white flex flex-col justify-center items-center">
                <span className="font-bold text-[#FFC909]">Capacity :</span>
                <span>30 Kids</span>
              </div>
            </div>

            <button className="w-full rounded-full bg-[#FFC909] text-primary mt-5 font-bold py-2 cursor-pointer">
              Read more
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LessonsSection;
