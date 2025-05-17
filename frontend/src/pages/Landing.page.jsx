import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import Hero from "../sections/Hero.section";
import Features from "../sections/Features.section";
import Work from "../sections/Work.section";
import Testimonials from "../sections/Testimonials.section";
import Footer from "../components/Footer/Footer.component";

const Landing = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleCTA = () => {};

  return (
    <div>
      <Navbar onClick={() => setOpenAuthModal(true)} />
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png"
        alt=""
        className="absolute top-0 left-0 h-[100vh] object-cover z-0"
      />
      <div className="absolute top-0 left-0 h-[100vh] inset-0 z-5 bg-white/70" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <Hero onClick={handleCTA} />
          <Features />
          <Work />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
