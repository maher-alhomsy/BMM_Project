const videos = import.meta.glob('../assets/videos/*', {
  eager: true,
});

const LearnByVideos = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const videoPaths = Object.values(videos).map((module) => module.default);

  return (
    <section className="px-2 md:px-8">
      <h1 className="text-primary text-3xl font-bold">Learn By Videos</h1>

      <ul className="flex flex-wrap gap-10 justify-center my-10">
        {videoPaths.map((i) => (
          <li
            key={i}
            className=" w-full md:w-[30%] p-2 border-2 border-primary rounded-lg"
          >
            {/* <img src={i} /> */}
            <video src={i} controls />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LearnByVideos;
