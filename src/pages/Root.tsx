import { Outlet } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Root;
