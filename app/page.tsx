import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import USP from "./components/USP";
import About from "./components/About";
import Services from "./components/Services";
import PromoBanner from "./components/PromoBanner";
import Guide from "./components/Guide";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden selection:bg-kuku-highlight selection:text-kuku-text">
      <Navbar />
      <Hero />
      <USP />
      <Gallery />
      <About />
      <Services />
      <PromoBanner />
      <Guide />
      <Footer />
    </main>
  );
}
