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
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-[100px]">
        <Hero />
        <Features />
        <Work />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Landing