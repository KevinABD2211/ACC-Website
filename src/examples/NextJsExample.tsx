
import { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '../components/LoadingScreen';

interface ExampleAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function NextJsExample({ Component, pageProps }: ExampleAppProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Show loading screen on initial load
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    
    // Simulate route change events with a mock router
    const mockRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 500);
    };
    
    // This is just for demonstration purposes in this example component
    const mockRouter = {
      events: {
        on: (event: string, handler: () => void) => {
          // Mocked event listener
          console.log(`Added listener for ${event}`);
          return handler;
        },
        off: (event: string, handler: () => void) => {
          // Mocked event removal
          console.log(`Removed listener for ${event}`);
        }
      }
    };
    
    // Mock route change events
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setTimeout(() => setIsLoading(false), 500);
    
    // Register mock handlers
    mockRouter.events.on('routeChangeStart', handleStart);
    mockRouter.events.on('routeChangeComplete', handleComplete);
    mockRouter.events.on('routeChangeError', handleComplete);
    
    // No need to clean up mock event handlers in this example
  }, [isLoading]);
  
  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Component {...pageProps} />
    </>
  );
}

export default NextJsExample;
