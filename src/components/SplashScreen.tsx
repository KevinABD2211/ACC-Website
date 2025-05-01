
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
    <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center">
        <img 
          src="/lovable-uploads/d73cc946-9a60-4d35-91f0-b6221cc76b23.png" 
          alt="FADCO Logo" 
          className="w-64 md:w-80 h-auto mx-auto animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image if logo is not available
          }}
        />
        <p className="text-fadco-navy text-xl md:text-2xl mt-6 font-opensans animate-fade-in">
          Your Complete Build Partner—Every Trade, Every Time.
        </p>
        <button 
          onClick={onComplete}
          className="mt-8 border-2 border-fadco-navy text-fadco-navy px-8 py-3 rounded font-semibold hover:bg-fadco-navy hover:text-white transition-colors animate-delayed-fade-in inline-block"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
