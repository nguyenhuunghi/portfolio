'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
