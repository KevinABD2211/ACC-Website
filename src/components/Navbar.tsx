
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we're on the homepage
  const isHomePage = location.pathname === "/";
  
  // Determine text and logo color based on page and scroll position
  const shouldUseWhiteText = isHomePage && !isScrolled;

  // For debugging
  console.log("Logo visibility state:", { isScrolled, isHomePage, shouldUseWhiteText });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white shadow-md py-4" // Keep same padding as transparent bar
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20"> {/* Same height for both states */}
          {/* Logo container with consistent sizing */}
          <div className="h-20 w-64 flex items-center justify-start">
            <NavLink to="/" className="block">
              <div className="relative h-20 w-56 flex items-center justify-center"> {/* Increased logo container height */}
                {shouldUseWhiteText ? (
                  // White logo for transparent background
                  <img 
                    src="/lovable-uploads/76dd445d-23f5-411b-83a0-41e914b946cc.png"
                    alt="ACC Logo White" 
                    className="absolute top-0 left-0 h-full w-auto object-contain"
                    loading="eager"
                  />
                ) : (
                  // Navy logo for white background
                  <img 
                    src="/lovable-uploads/87bdccf5-0302-4634-8aa5-4e7321aa0379.png"
                    alt="ACC Logo Navy" 
                    className="absolute top-0 left-0 h-full w-auto object-contain"
                    loading="eager"
                  />
                )}
              </div>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("md:hidden", 
              shouldUseWhiteText ? "text-white" : "text-acg-navy"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation with same height as container */}
          <nav className="hidden md:flex items-center space-x-8 h-20">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-semibold text-lg transition-colors hover:text-acg-gold", 
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-bold" : "text-acg-navy font-bold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy"
                )
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-semibold text-lg transition-colors hover:text-acg-gold", 
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-bold" : "text-acg-navy font-bold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy"
                )
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-semibold text-lg transition-colors hover:text-acg-gold", 
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-bold" : "text-acg-navy font-bold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy"
                )
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-semibold text-lg transition-colors hover:text-acg-gold", 
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-bold" : "text-acg-navy font-bold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy"
                )
              }
            >
              Process
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-semibold text-lg transition-colors hover:text-acg-gold", 
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-bold" : "text-acg-navy font-bold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy",
                  !shouldUseWhiteText && isActive ? "bg-transparent" : ""
                )
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation - fixed to ensure correct background */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white rounded-lg mt-2 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-semibold text-lg transition-colors", 
                    isActive
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-semibold text-lg transition-colors", 
                    isActive
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-semibold text-lg transition-colors", 
                    isActive
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/process"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-semibold text-lg transition-colors", 
                    isActive
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Process
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-semibold text-lg transition-colors", 
                    isActive
                      ? "bg-acg-navy text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )
                }
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
