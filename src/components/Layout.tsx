
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import ScrollToTopButton from "./ScrollToTopButton";
import { useEffect } from "react";

const Layout = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
