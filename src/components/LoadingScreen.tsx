
import { useState, useEffect } from 'react';
import { Construction, Loader, Building2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [blocksAdded, setBlocksAdded] = useState(0);
  const totalBlocks = 5; // Total blocks to add during loading

  useEffect(() => {
    // Add blocks one by one
    const blockInterval = setInterval(() => {
      setBlocksAdded(prev => {
        if (prev < totalBlocks) return prev + 1;
        clearInterval(blockInterval);
        return prev;
      });
    }, 300);

    // Complete the animation after blocks are added
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 1000); // Give time for exit animation before removing
      }
    }, 1500); // Show splash for 1.5 seconds (shorter than initial splash)

    return () => {
      clearInterval(blockInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-all duration-1000 ${animationComplete ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="text-center flex flex-col items-center justify-center h-screen w-screen">
        {/* FADCO Logo */}
        <img 
          src="/lovable-uploads/403c2cc7-7a66-4fd0-a15f-7bbabc170ba8.png" 
          alt="FADCO Logo" 
          className="w-3/4 max-w-[300px] h-auto mb-8"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=FADCO"; // Fallback image
          }}
        />
        
        {/* Building and Construction Animation */}
        <div className="relative h-48 w-64">
          {/* Building under construction */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 flex flex-col-reverse items-center">
            {[...Array(totalBlocks)].map((_, index) => (
              <div 
                key={index} 
                className={`w-full h-8 bg-fadco-navy border border-fadco-gold transition-all duration-300 ${
                  index < blocksAdded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              />
            ))}
            {/* Building foundation */}
            <div className="w-full h-2 bg-fadco-gold mt-1" />
          </div>
          
          {/* Construction crane representation with available icons */}
          <div className="absolute top-0 right-0 text-fadco-navy animate-pulse">
            <Building2 size={48} />
            {/* Moving block animation */}
            {blocksAdded < totalBlocks && (
              <div 
                className="absolute w-8 h-8 bg-fadco-navy border border-fadco-gold animate-bounce"
                style={{
                  left: '-12px',
                  top: '48px'
                }}
              />
            )}
          </div>
          
          {/* Construction icon for decoration */}
          <div className="absolute bottom-0 left-0 text-fadco-navy">
            <Construction size={28} />
          </div>
        </div>
        
        {/* Loading text */}
        <p className="mt-8 text-fadco-navy font-medium">
          Building your experience...
          <Loader className="inline-block ml-2 animate-spin" size={16} />
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
