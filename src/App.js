import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Layout/Root.js';
import Host from './routes/Layout/Host.js';

import Home from './routes/Home';
import About from './routes/About';

import Vans from './routes/Vans/Vans.js';
import VanDetail from './routes/Vans/VanDetail.js';

import Dashboard from './routes/Host/Dashboard.js';
import Income from './routes/Host/Income.js';
import Reviews from './routes/Host/Reviews.js';
import HostVans from './routes/Host/HostVans.js';
import HostVanDetail from './routes/Host/HostVanDetail.js';

import './server';
import HostVanInfo from './routes/Host/HostVanInfo.js';
import HostVanPricing from './routes/Host/HostVanPricing.js';
import HostVanPhotos from './routes/Host/HostVanPhotos.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'host',
        element: <Host />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'income',
            element: <Income />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
          {
            path: 'vans',
            element: <HostVans />,
          },
          {
            path: 'vans/:id',
            element: <HostVanDetail />,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: 'pricing',
                element: <HostVanPricing />,
              },
              {
                path: 'photos',
                element: <HostVanPhotos />,
              },
            ],
          },
        ],
      },

      {
        path: 'vans',
        element: <Vans />,
      },
      {
        path: 'vans/:id',
        element: <VanDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
