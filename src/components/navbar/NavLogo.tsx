
import { NavLink } from "react-router-dom";

interface NavLogoProps {
  scrolled: boolean;
  onClick?: () => void;
}

const NavLogo = ({ scrolled, onClick }: NavLogoProps) => {
  return (
    <div className="flex-shrink-0">
      <NavLink to="/" onClick={onClick} className="flex items-center">
        {scrolled ? (
          // Scrolled logo (small, dark)
          <img 
            src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
            alt="ACG Logo" 
            className="h-16 transition-all duration-300" 
          />
        ) : (
          // Non-scrolled logo (large, white)
          <img 
            src="/lovable-uploads/76dd445d-23f5-411b-83a0-41e914b946cc.png" 
            alt="ACG Logo" 
            className="h-16 transition-all duration-300" 
          />
        )}
      </NavLink>
    </div>
  );
};

export default NavLogo;
