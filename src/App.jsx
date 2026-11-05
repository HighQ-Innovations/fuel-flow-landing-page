import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudienceStrip from "./components/AudienceStrip";
import Features from "./components/Features";
import SummaryShowcase from "./components/SummaryShowcase";
import OutdoorShowcase from "./components/OutdoorShowcase";
import Roles from "./components/Roles";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-forest"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <AudienceStrip />
        <Features />
        <SummaryShowcase />
        <OutdoorShowcase />
        <Roles />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
