import Footer from '../components/Footer';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import LearningSection from '../components/LearningSection';
import LessonsSection from '../components/LessonsSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <ServicesSection />
      <LearningSection />
      <LessonsSection />

      <Footer />
    </>
  );
};

export default Home;
