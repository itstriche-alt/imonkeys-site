import Nav from './components/Nav';
import Hero from './components/Hero';
import RepairEstimate from './components/RepairEstimate';
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
      </div>

      <Nav />

      <main>
        <Hero />
        <RepairEstimate />
        <Services />
        <Reviews />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
