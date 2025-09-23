import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for caching and offline functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      
      console.log('[ServiceWorker] Registration successful:', registration.scope);
      
      // Update on reload
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              console.log('[ServiceWorker] New content available, page will refresh');
              window.location.reload();
            }
          });
        }
      });
      
    } catch (error) {
      console.error('[ServiceWorker] Registration failed:', error);
    }
  });
}

// Basic performance monitoring for production
if (import.meta.env.PROD) {
  // Monitor page load performance
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      const metrics = {
        'DNS Lookup': Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
        'TCP Connection': Math.round(perfData.connectEnd - perfData.connectStart),
        'Request': Math.round(perfData.responseStart - perfData.requestStart),
        'Response': Math.round(perfData.responseEnd - perfData.responseStart),
        'DOM Processing': Math.round(perfData.domComplete - perfData.responseEnd),
        'Total Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart),
      };

      console.log('[Performance] Page Load Metrics:', metrics);
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
