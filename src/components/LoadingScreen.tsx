
import { useState, useEffect } from 'react';
import { Construction, Loader, Building2 } from 'lucide-react';
import { cn } from "@/lib/utils";

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
    }, 2000); // Show splash for 2 seconds

    return () => {
      clearInterval(blockInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className={cn(
      "fixed inset-0 bg-white flex items-center justify-center z-50 transition-all duration-1000",
      animationComplete ? "opacity-0 scale-110" : "opacity-100"
    )}>
      <div className="text-center flex flex-col items-center justify-center h-screen w-screen">
        {/* ACG Logo */}
        <img 
          src="/lovable-uploads/54dd3a12-2705-45bd-a534-f01222dc4d2a.png" 
          alt="ACG Logo" 
          className="w-3/4 max-w-[300px] h-auto mb-8"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/200x200?text=ACG"; // Fallback image
          }}
        />
        
        {/* Construction Scene with improved crane design */}
        <div className="relative h-64 w-96 animate-pulse">
          {/* Building structure */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-52 flex flex-col-reverse items-center">
            {/* Building blocks being added one by one */}
            {[...Array(totalBlocks)].map((_, index) => (
              <div 
                key={index} 
                className={`w-full h-10 bg-acg-navy border border-acg-gold transition-all duration-300 ${
                  index < blocksAdded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              />
            ))}
            {/* Building foundation */}
            <div className="w-full h-6 bg-acg-gold mt-1 rounded-b" />
          </div>
          
          {/* Construction crane - more detailed and visibly a crane */}
          <div className="absolute top-0 right-10 flex flex-col items-center">
            {/* Crane base */}
            <div className="absolute bottom-[-108px] w-12 h-8 bg-acg-gold"></div>
            
            {/* Crane vertical tower */}
            <div className="h-40 w-6 bg-acg-navy border-r border-acg-gold"></div>
            
            {/* Crane horizontal arm */}
            <div className="absolute top-2 w-40 h-5 bg-acg-navy border border-acg-gold -right-16"></div>
            
            {/* Crane counterweight */}
            <div className="absolute top-4 w-12 h-8 bg-acg-navy border border-acg-gold left-[-16px]"></div>
            
            {/* Crane cabin */}
            <div className="absolute top-10 -right-2 w-10 h-8 bg-acg-gold border border-acg-navy"></div>
            
            {/* Moving cable and block animation - no pulse on this element */}
            <div className="animate-none">
              {blocksAdded < totalBlocks && (
                <>
                  <div className="absolute w-1 bg-gray-600" style={{
                    height: `${48 + (blocksAdded * 14)}px`,
                    right: '-32px',
                    top: '5px'
                  }}></div>
                  <div 
                    className="absolute w-12 h-12 bg-acg-navy border-2 border-acg-gold animate-bounce"
                    style={{
                      right: '-38px',
                      top: `${48 + (blocksAdded * 14)}px`
                    }}
                  />
                </>
              )}
            </div>
          </div>
          
          {/* Construction icon for decoration */}
          <div className="absolute bottom-0 left-0 text-acg-navy">
            <Construction size={32} />
          </div>
        </div>
        
        {/* Loading text */}
        <p className="mt-10 text-acg-navy font-medium text-xl">
          Building your experience...
          <Loader className="inline-block ml-2 animate-spin" size={20} />
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
