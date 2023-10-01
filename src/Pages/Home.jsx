import { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import AboutSiklls from "../Components/AboutSkills/AboutSiklls";
import Work from "../Components/Work/Work";
import Contact from "../Components/Contact/Contact";
const navigationLinks = ["Home", "About", "Portfolio", "Contact"];
const Home = () => {
  const [collapsedNavbar, setCollapsedNavbar] = useState(true); // Initial state is collapsed
  const [activeLink, setActiveLink] = useState("Home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      Object.entries(sectionRefs).forEach(([link, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveLink(link);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Portfolio: portfolioRef,
    Contact: contactRef,
  };
  const handleLinkClick = (link) => {
    setCollapsedNavbar(true);
    setActiveLink(link);
    if (sectionRefs[link]) {
      sectionRefs[link].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleNavbar = () => {
    setCollapsedNavbar(!collapsedNavbar); // Toggle the collapsed state
  };
  return (
    <>
      <Navbar
        logoText="My Portfolio"
        links={navigationLinks}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
        collapsed={collapsedNavbar}
        toggleNavbar={toggleNavbar}
      />

      <main>
        <About homeRef={homeRef} />
        <AboutSiklls aboutRef={aboutRef} />
        <Work Portfolio={portfolioRef} />
        <Contact contactRef={contactRef} />
      </main>
    </>
  );
};

export default Home;
