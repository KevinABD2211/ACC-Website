
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
  const shouldUseWhiteText = (!isScrolled && !isHomePage) || (!isScrolled && isHomePage);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            {/* Maintain consistent height and positioning for logos */}
            <div className="h-16 flex items-center justify-center transition-all duration-300">
              <img 
                src={shouldUseWhiteText 
                  ? "/lovable-uploads/b5b43ba2-52ac-492b-bac6-3ef59bd2539e.png" // White logo
                  : "/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" // Navy blue logo
                }
                alt="ACG Logo" 
                className="h-16 w-auto transition-colors duration-300" 
              />
            </div>
          </NavLink>

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  "font-opensans font-medium transition-colors hover:text-acg-gold",
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-semibold" : "text-acg-navy font-semibold" 
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
                  "font-opensans font-medium transition-colors hover:text-acg-gold",
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-semibold" : "text-acg-navy font-semibold" 
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
                  "font-opensans font-medium transition-colors hover:text-acg-gold",
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-semibold" : "text-acg-navy font-semibold" 
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
                  "font-opensans font-medium transition-colors hover:text-acg-gold",
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-semibold" : "text-acg-navy font-semibold" 
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
                  "font-opensans font-medium transition-colors hover:text-acg-gold",
                  isActive 
                    ? shouldUseWhiteText ? "text-white font-semibold" : "text-acg-navy font-semibold" 
                    : shouldUseWhiteText ? "text-white" : "text-acg-navy"
                )
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white rounded-lg mt-2 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 font-medium transition-colors",
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
                    "px-4 py-2 font-medium transition-colors",
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
                    "px-4 py-2 font-medium transition-colors",
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
                    "px-4 py-2 font-medium transition-colors",
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
                    "px-4 py-2 font-medium transition-colors",
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
