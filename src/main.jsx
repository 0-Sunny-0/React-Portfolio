// sets up application routing behavior
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing css styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// importing in the pages that the router will use to show the proper views.
// Remember to import ALL from pages folders
import App from './App';
import AboutHer from "./pages/AboutHer/AboutHer";
// import Portfolio from "./pages/Portfolio/Portfolio";
// import Contact from "./pages/Contact/Contact";
// import Resume from "./pages/Resume/Resume";

// Define accessible routes, and which components respond to which URLs
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutHer />
      },
    //   {
    //     path: '/portfolio',
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: './contact',
    //     element: <Contact />,
    //   },
    //   {
    //     path: './resume',
    //     element: <Resume />,
    //   },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);