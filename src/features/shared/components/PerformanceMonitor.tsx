'use client';

import { useState } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';

export default function PerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false);
  const { metrics, performanceScore, isGood, isNeedsImprovement } = usePerformanceMonitor();

  const getScoreColor = () => {
    if (isGood) return 'good';
    if (isNeedsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreLabel = () => {
    if (isGood) return 'Excellent';
    if (isNeedsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  const formatMetric = (value: number | null, unit: string) => {
    if (value === null) return '--';
    return `${value.toFixed(2)}${unit}`;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="performance-toggle"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 1001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem'
        }}
        title="Performance Monitor"
      >
        📊
      </button>

      {/* Performance Monitor Panel */}
      {isVisible && (
        <div className="performance-monitor">
          <div className="performance-score">
            <span>Performance Score:</span>
            <span className={getScoreColor()}>
              {performanceScore}/100 - {getScoreLabel()}
            </span>
          </div>
          
          <div className="performance-metrics">
            <div className="performance-metric">
              <span>FCP:</span>
              <span>{formatMetric(metrics.fcp, 'ms')}</span>
            </div>
            <div className="performance-metric">
              <span>LCP:</span>
              <span>{formatMetric(metrics.lcp, 'ms')}</span>
            </div>
            <div className="performance-metric">
              <span>FID:</span>
              <span>{formatMetric(metrics.fid, 'ms')}</span>
            </div>
            <div className="performance-metric">
              <span>CLS:</span>
              <span>{formatMetric(metrics.cls, '')}</span>
            </div>
            <div className="performance-metric">
              <span>TTFB:</span>
              <span>{formatMetric(metrics.ttfb, 'ms')}</span>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '0.5rem', 
            fontSize: '0.7rem', 
            opacity: 0.7,
            textAlign: 'center'
          }}>
            Core Web Vitals
          </div>
        </div>
      )}
    </>
  );
}
