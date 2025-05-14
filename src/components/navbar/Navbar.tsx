
import { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white text-acg-navy py-3 shadow-md" 
          : "bg-transparent text-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLogo scrolled={scrolled} />
          
          <DesktopNav scrolled={scrolled} />
          
          <MobileNav scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
