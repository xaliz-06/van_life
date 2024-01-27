import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import About from './routes/About';
import Vans from './routes/Vans.js';

import './server';
import VanDetail from './routes/VanDetail.js';

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/vans',
        element: <Vans />,
      },
      {
        path: '/vans/:id',
        element: <VanDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
