import img_1 from '../assets/service_1.png';
import img_2 from '../assets/service_2.png';
import img_3 from '../assets/service_3.png';
import img_4 from '../assets/service_4.png';

const data = [
  {
    img: img_1,
    title: 'Learn by playing',
    subTitle: 'The child is taught French through electronic games',
  },
  {
    img: img_2,
    title: 'Learn by music',
    subTitle: 'The child is taught French through songs and music',
  },
  {
    img: img_3,
    title: 'Learn by videos',
    subTitle: 'The child is taught French through cartoon videos',
  },
  {
    img: img_4,
    title: 'Learn by lessons',
    subTitle: 'The child is taught French through educational lessons',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-10 px-10 space-y-9">
      <h1 className="text-center text-primary text-4xl">
        Through our website, we provide your child with distinguished services
      </h1>

      <ul className="flex justify-center flex-wrap gap-5">
        {data.map(({ subTitle, title, img }) => (
          <li
            key={title}
            className="w-full md:w-[40%] lg:w-[31%] p-2 border border-primary rounded-2xl h-[269px]"
          >
            <div className="bg-primary rounded-2xl h-full flex flex-col justify-center items-center *:text-white px-5">
              <img src={img} alt="icon" />
              <p className="font-semibold text-xl">{title}</p>
              <p>{subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
