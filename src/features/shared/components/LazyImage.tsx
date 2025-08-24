'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
}

export default function LazyImage({ 
  src, 
  alt, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1lcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTNhM2E2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  className = '',
  style = {},
  width,
  height
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to placeholder on error
    setIsLoaded(false);
  };

  return (
    <div 
      ref={containerRef} 
      className={`lazy-image-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        width: width || 'auto',
        height: height || 'auto',
        ...style 
      }}
    >
      {/* Placeholder */}
      {placeholder && (
        <Image
          src={placeholder}
          alt=""
          className="lazy-image-placeholder"
          fill={true}
          style={{
            objectFit: 'cover',
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
          priority={true}
        />
      )}
      
      {/* Actual Image */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          className="lazy-image"
          fill={true}
          style={{
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
          onLoadingComplete={handleLoad}
          onError={handleError}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      
      {/* Loading Spinner */}
      {!isLoaded && isInView && (
        <div className="lazy-image-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
