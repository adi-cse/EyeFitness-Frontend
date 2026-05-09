import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import MiniGamesShowcase from "../components/MiniGamesShowcase";
import ParentDashboardPreview from "../components/ParentDashboardPreview";
import GapSection from "../components/GapSection";
import FutureVision from "../components/FutureVision";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import SiteFooter from "../components/SiteFooter";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <MiniGamesShowcase />
        <GapSection />
        <ParentDashboardPreview />
        <FutureVision />
        <Testimonials />
        <FinalCTA />
        <SiteFooter />
      </main>
    </>
  );
};

export default Home;