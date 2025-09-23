import { useEffect } from 'react';

// Declare gtag for Google Analytics
declare global {
  function gtag(...args: any[]): void;
}

// Web Performance API type definitions
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (import.meta.env.NODE_ENV !== 'production') {
      return;
    }

    // Basic Web Vitals tracking without external dependencies
    const reportWebVitals = (metric: WebVitalsMetric) => {
      console.log(`[Performance] ${metric.name}:`, metric.value, `(${metric.rating})`);
      
      // Example: Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.rating,
          non_interaction: true,
        });
      }
    };

    // Performance Observer for custom metrics
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`[Performance] LCP: ${entry.startTime}ms`);
          const rating = entry.startTime <= 2500 ? 'good' : entry.startTime <= 4000 ? 'needs-improvement' : 'poor';
          reportWebVitals({ name: 'LCP', value: entry.startTime, rating });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          if (fidEntry.processingStart) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            console.log(`[Performance] FID: ${fid}ms`);
            const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs-improvement' : 'poor';
            reportWebVitals({ name: 'FID', value: fid, rating });
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as LayoutShift;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor';
        reportWebVitals({ name: 'CLS', value: clsValue, rating });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Long Tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`[Performance] Long task detected: ${entry.duration}ms`);
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        longTaskObserver.disconnect();
      };
    }
  }, []);

  // Monitor resource loading
  useEffect(() => {
    const handleLoad = () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData) {
        const metrics = {
          'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
          'TCP Connection': perfData.connectEnd - perfData.connectStart,
          'TLS Handshake': perfData.secureConnectionStart ? perfData.connectEnd - perfData.secureConnectionStart : 0,
          'Request': perfData.responseStart - perfData.requestStart,
          'Response': perfData.responseEnd - perfData.responseStart,
          'DOM Processing': perfData.domComplete - perfData.responseEnd,
          'Total Load Time': perfData.loadEventEnd - perfData.fetchStart,
        };

        console.log('[Performance] Navigation Timing:', metrics);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;