import App from './app/app';
import { StrictMode } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

// screens/pages
import Dashboard from './pages/dashboard';
import NotFound from './not-found';
import Products from './pages/products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/products/:id',
    element: <Products />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
