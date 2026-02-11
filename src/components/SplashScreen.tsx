
import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(onComplete, 1000); // Give time for exit animation before removing
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-acg-navy flex items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center flex items-center justify-center h-screen w-screen">
        <img 
          src="/acc-logo-white.png" 
          alt="ACC - Abdallah Contracting Company Logo" 
          className="w-[35%] max-w-[300px] h-auto mx-auto animate-fade-in" 
        />
      </div>
    </div>
  );
};

export default SplashScreen;
