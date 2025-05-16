import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import Hero from "../sections/Hero.section";
import Features from "../sections/Features.section";
import Work from "../sections/Work.section";
import Testimonials from "../sections/Testimonials.section";
import Contact from "../sections/Contact.section";
import Footer from "../components/Footer/Footer.component";

const Landing = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleCTA = () => {};

  return (
    <div>
      <Navbar onClick={() => setOpenAuthModal(true)} />
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)",
        }}
      />
      <div className="relative z-10">
        <div className="container mx-auto mt-[70px] md:mt-[90px] px-4">
          <Hero onClick={handleCTA} />
          <Features />
          <Work />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
