import dynamic from 'next/dynamic';
import Hero from '@/features/home/components/Hero';
import Features from '@/features/home/components/Features';
import PerformanceMonitor from '@/features/shared/components/PerformanceMonitor';

// Lazy load components below the fold for better performance
const LazyProjects = dynamic(() => import('@/features/home/components/Projects'), {
  loading: () => <div className="lazy-loading-fallback">Loading Projects...</div>
});

const LazyStats = dynamic(() => import('@/features/home/components/Stats'), {
  loading: () => <div className="lazy-loading-fallback">Loading Stats...</div>
});

const LazyContact = dynamic(() => import('@/features/home/components/Contact'), {
  loading: () => <div className="lazy-loading-fallback">Loading Contact...</div>
});

const LazyFooter = dynamic(() => import('@/features/home/components/Footer'), {
  loading: () => <div className="lazy-loading-fallback">Loading Footer...</div>
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LazyProjects />
      <LazyStats />
      <LazyContact />
      <LazyFooter />
      <PerformanceMonitor />
    </>
  );
}
