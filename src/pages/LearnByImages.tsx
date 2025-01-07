const images = import.meta.glob('../assets/img-lessons/*', {
  eager: true,
});

const LearnByImages = () => {
  const imagePaths = Object.values(images).map((module) => module.default);

  return (
    <section className="px-2 md:px-8">
      <h1 className="text-primary text-3xl font-bold">Learn By Images</h1>

      <ul className="flex flex-wrap gap-10 justify-center my-10">
        {imagePaths.map((i) => (
          <li
            key={i}
            className=" w-full md:w-[30%] p-2 border-2 border-primary rounded-lg"
          >
            <img src={i} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearnByImages;
