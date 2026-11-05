import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Roles from "./components/Roles";
import HowItWorks from "./components/HowItWorks";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { SUMMARY_HIGHLIGHTS, VAN_HIGHLIGHTS } from "./data/content";
import reportImage from "./assets/showcase-report.svg";
import vanImage from "./assets/showcase-van.svg";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase
          id="summaries"
          eyebrow="Summaries and exports"
          title="Totals that add up, ready for Excel"
          text="Filter the summary by date range, see each product's figures, and export a formatted Excel file with a total at the bottom of every column."
          points={SUMMARY_HIGHLIGHTS}
          image={reportImage}
          alt="Excel-style table with a grey header, bordered cells, merged daily account cells, a totals row and an Export to Excel button"
        />
        <Showcase
          id="outdoor"
          eyebrow="Outdoor and van sales"
          title="Outdoor sales tracked beside the station"
          text="Keep van stock, outdoor customers and payments in the same system as the station, so balances are always current."
          points={VAN_HIGHLIGHTS}
          image={vanImage}
          alt="Illustration of a delivery van labelled Van Sales with a balance card showing fuel litres and zero outstanding"
          reverse
          background="bg-white"
        />
        <Roles />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
