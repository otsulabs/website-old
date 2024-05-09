import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CareersPage from './pages/Careers';
import ProjectsPage from './pages/Projects';
import CareerDetailsPage from './pages/CareerDetails';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import ProjectPage from './pages/projectList/ProjectDefault';
import TheWrathOfGods from './pages/projectList/TheWrathOfGods';
import SystemRoyalePart1 from './pages/projectList/SystemRoyalePart_1';
import SystemRoyalePart2 from './pages/projectList/SystemRoyalePart_2';
import TheDopeShtTypeSlash from './pages/projectList/TheDopeShtTypeSlash';
import Eris from './pages/projectList/Eris';
import TheBookOfNouns from './pages/projectList/TheBookOfNouns';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <HomePage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
      {
        path: 'careers/details',
        element: <CareerDetailsPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/item',
        element: <ProjectPage />,
      },
      {
        path: 'projects/the_wrath_of_gods',
        element: <TheWrathOfGods />,
      },
      {
        path: 'projects/system_royale_art_1',
        element: <SystemRoyalePart1 />,
      },
      {
        path: 'projects/system_royale_art_2',
        element: <SystemRoyalePart2 />,
      },
      {
        path: 'projects/the_dope_sht_type_slash',
        element: <TheDopeShtTypeSlash />,
      },
      {
        path: 'projects/eris',
        element: <Eris />,
      },
      {
        path: 'projects/the_book_of_nouns',
        element: <TheBookOfNouns />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
