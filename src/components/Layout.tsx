
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsLoading(true);
    // The LoadingScreen component will automatically hide itself
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
