
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
    <div className={`fixed inset-0 bg-fadco-navy flex flex-col items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center">
        <img 
          src="/lovable-uploads/d73cc946-9a60-4d35-91f0-b6221cc76b23.png" 
          alt="FADCO Logo" 
          className="w-64 h-auto mx-auto animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image if logo is not available
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
