
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add console logs to debug image loading
console.log("Starting application...");
window.addEventListener('error', function(e) {
  if (e.target && (e.target as any).tagName === 'IMG') {
    console.error('Image failed to load:', (e.target as any).src);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
