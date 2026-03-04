import { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'motion/react';
import Nav from './components/Nav';
import Hero from './components/Hero';

// Lazy load non-critical components
const RepairEstimate = lazy(() => import('./components/RepairEstimate'));
const Services = lazy(() => import('./components/Services'));
const Reviews = lazy(() => import('./components/Reviews'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen selection:bg-pink-500/30 selection:text-pink-200">
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        <Nav />

        <main>
          <Hero />
          <Suspense fallback={<div className="h-96" />}>
            <RepairEstimate />
            <Services />
            <Reviews />
            <Location />
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-40" />}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}
