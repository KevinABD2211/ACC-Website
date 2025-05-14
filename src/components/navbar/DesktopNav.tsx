import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
interface DesktopNavProps {
  scrolled: boolean;
}
const DesktopNav = ({
  scrolled
}: DesktopNavProps) => {
  const linkClasses = `text-lg font-medium hover:text-acg-gold transition-colors ${scrolled ? "text-acg-navy" : "text-white"}`;
  return <div className="hidden md:flex space-x-8 items-center">
      <NavLink to="/about" className={({
      isActive
    }) => `${linkClasses} ${isActive && (scrolled ? 'text-acg-gold' : 'text-acg-gold')}`}>
        About
      </NavLink>
      <NavLink to="/services" className={({
      isActive
    }) => `${linkClasses} ${isActive && (scrolled ? 'text-acg-gold' : 'text-acg-gold')}`}>
        Services
      </NavLink>
      <NavLink to="/projects" className={({
      isActive
    }) => `${linkClasses} ${isActive && (scrolled ? 'text-acg-gold' : 'text-acg-gold')}`}>
        Projects
      </NavLink>
      <NavLink to="/process" className={({
      isActive
    }) => `${linkClasses} ${isActive && (scrolled ? 'text-acg-gold' : 'text-acg-gold')}`}>
        Process
      </NavLink>
      <NavLink to="/contact">
        <Button variant={scrolled ? "default" : "outline"} className="">
          Contact Us
        </Button>
      </NavLink>
    </div>;
};
export default DesktopNav;