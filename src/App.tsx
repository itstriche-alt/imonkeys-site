import Nav from './components/Nav';
import Hero from './components/Hero';
import { lazy, Suspense } from "react";

const RepairEstimate = lazy(() => import("./components/RepairEstimate"));
import Services from './components/Services';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
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
        <Suspense fallback={<div style={{ minHeight: 700 }} />}>
          <RepairEstimate />
        </Suspense>
        <Services />
        <Reviews />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
