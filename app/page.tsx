import HeroSection from "./components/HeroSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <SolutionSection />
      <HowItWorksSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
