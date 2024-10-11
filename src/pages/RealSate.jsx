import AboutSection from "../components/layout/about-section/AboutSection";
import AvailableSection from "../components/layout/available/AvailableSection";
import ContactSection from "../components/layout/contact-section/ContactSection";
import CTASection from "../components/layout/cta-section/CTASection";
import FAQSection from "../components/layout/faq-section/FAQSection";
import Features from "../components/layout/features/Features";
import Footer from "../components/layout/footer/Footer";
import HeroSection from "../components/layout/hero-section/HeroSection";
import Navbar from "../components/layout/navbar/Navbar";
import TeamSection from "../components/layout/team-section/TeamSection";

const RealSate = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <AvailableSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default RealSate;
