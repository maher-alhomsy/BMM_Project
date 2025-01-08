import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './pages/Home';
import Root from './pages/Root';
import LearnByImages from './pages/LearnByImages';
import LearnByVideos from './pages/LearnByVideos';

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: 'learn-by-images', element: <LearnByImages /> },
        { path: 'learn-by-videos', element: <LearnByVideos /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
