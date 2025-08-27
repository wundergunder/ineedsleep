import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Apply from './pages/Apply';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Nurses from './pages/Nurses';
import Affiliates from './pages/Affiliates';
import ChatBotPage from './pages/ChatBot';

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
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/nurses',
    element: <Nurses />,
  },
  {
    path: '/affiliates',
    element: <Affiliates />,
  },
  {
    path: '/chat',
    element: <ChatBotPage />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;