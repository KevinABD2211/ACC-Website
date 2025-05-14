
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavLogo from './NavLogo';

interface MobileNavProps {
  scrolled: boolean;
}

const MobileNav = ({ scrolled }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close mobile menu when route changes or when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMenu} 
          className="mobile-menu-button text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X size={32} className={scrolled ? "text-acg-navy" : "text-white"} />
          ) : (
            <Menu size={32} className={scrolled ? "text-acg-navy" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`mobile-menu fixed top-0 left-0 w-full h-full bg-acg-navy bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <NavLogo scrolled={false} onClick={closeMenu} />
            <button onClick={closeMenu} className="text-white" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-2xl font-medium ${isActive ? "text-acg-gold" : "text-white"}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-2xl font-medium ${isActive ? "text-acg-gold" : "text-white"}`}
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `text-2xl font-medium ${isActive ? "text-acg-gold" : "text-white"}`}
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `text-2xl font-medium ${isActive ? "text-acg-gold" : "text-white"}`}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/process" 
              className={({ isActive }) => `text-2xl font-medium ${isActive ? "text-acg-gold" : "text-white"}`}
              onClick={closeMenu}
            >
              Process
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMenu} 
              className="mt-4"
            >
              <Button 
                className="w-full bg-acg-gold text-acg-navy hover:bg-white"
              >
                Contact Us
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
