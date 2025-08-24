'use client';

import { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const numParticles = 30;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const element = document.createElement('div');
      element.className = styles.particle;
      container.appendChild(element);

      const particle: Particle = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        element
      };

      element.style.width = `${particle.size}px`;
      element.style.height = `${particle.size}px`;
      element.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      
      particlesRef.current.push(particle);
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > 100) particle.x = 0;
        if (particle.x < 0) particle.x = 100;
        if (particle.y > 100) particle.y = 0;
        if (particle.y < 0) particle.y = 100;

        particle.element.style.transform = `translate(${particle.x}vw, ${particle.y}vh)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      particlesRef.current.forEach(particle => {
        particle.element.remove();
      });
      particlesRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
