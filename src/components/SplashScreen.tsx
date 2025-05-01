
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
    <div className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center">
        <img 
          src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
          alt="FADCO Logo" 
          className="w-64 md:w-96 h-auto mx-auto animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image if logo is not available
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
