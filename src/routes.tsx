import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Apply from './pages/Apply';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/process',
    element: <Process />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/apply',
    element: <Apply />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;