
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
          src="/lovable-uploads/76dd445d-23f5-411b-83a0-41e914b946cc.png" 
          alt="ACG Logo" 
          className="w-[35%] max-w-[300px] h-auto mx-auto animate-fade-in" 
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=ACG"; // Fallback image if logo is not available
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
