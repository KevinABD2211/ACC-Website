
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 1000); // Give time for exit animation before removing
      }
    }, 1500); // Show splash for 1.5 seconds (shorter than initial splash)

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center flex items-center justify-center h-screen w-screen">
        <img 
          src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
          alt="FADCO Logo" 
          className="w-3/4 max-w-[400px] h-auto mx-auto animate-fade-in"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image if logo is not available
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
