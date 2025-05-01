
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
          src="/logo.png" 
          alt="FADCO Logo" 
          className="w-32 h-32 mx-auto mb-6 animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image if logo.png is not available
          }}
        />
        <h1 className="text-6xl text-white font-bold font-playfair animate-fade-in">
          FADCO
        </h1>
        <p className="text-xl text-fadco-gold mt-4 animate-fade-in delay-300">
          Building on Legacy, Developing the Future
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
