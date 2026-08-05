import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../components/layout/RootLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import FleetPage from '../pages/FleetPage';
import ServiceAreasPage from '../pages/ServiceAreasPage';
import BookNowPage from '../pages/BookNowPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about-us', element: <AboutPage /> },
      { path: 'our-services', element: <ServicesPage /> },
      { path: 'our-fleet', element: <FleetPage /> },
      { path: 'service-areas', element: <ServiceAreasPage /> },
      { path: 'book-now', element: <BookNowPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
