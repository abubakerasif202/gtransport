/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './app/router';
import { LoadingAnimation } from './components/LoadingAnimation';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <HelmetProvider>
      {showIntro ? (
        <LoadingAnimation onComplete={handleIntroComplete} />
      ) : (
        <RouterProvider router={router} />
      )}
    </HelmetProvider>
  );
}
