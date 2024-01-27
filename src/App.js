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

import './server';

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
