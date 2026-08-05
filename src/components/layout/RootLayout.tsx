import { Outlet, ScrollRestoration } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../common/ScrollProgress';
import { ScrollToTopButton } from '../common/ScrollToTopButton';

export function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}


