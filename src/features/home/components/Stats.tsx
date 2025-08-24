'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  target: number;
  label: string;
  duration?: number;
}

function StatItem({ target, label, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasAnimated && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const startTime = Date.now();
            const step = () => {
              const currentTime = Date.now();
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const currentValue = Math.floor(progress * target);
              
              setCount(currentValue);
              
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setHasAnimated(true);
              }
            };
            
            requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(elementRef.current);
      return () => observer.disconnect();
    }
  }, [target, duration, hasAnimated]);

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-number" data-target={target}>
        {count}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useIntersectionObserver<HTMLElement>();
  const stats = [
    { target: 50, label: "Projects Completed" },
    { target: 5, label: "Years Experience" },
    { target: 25, label: "Happy Clients" },
    { target: 99, label: "Code Quality Score" }
  ];

  return (
    <section ref={ref} className="stats animate-on-scroll">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              target={stat.target}
              label={stat.label}
              duration={2000}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
