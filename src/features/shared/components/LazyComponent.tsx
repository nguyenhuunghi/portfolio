'use client';

import { Suspense, lazy, ComponentType } from 'react';

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  fallback?: React.ReactNode;
  props?: Record<string, unknown>;
}

export default function LazyComponent({ 
  component, 
  fallback = <div className="lazy-loading-fallback">Loading...</div>,
  props = {}
}: LazyComponentProps) {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Predefined lazy components for common use cases
export const LazyProjects = lazy(() => import('@/features/home/components/Projects'));
export const LazyStats = lazy(() => import('@/features/home/components/Stats'));
export const LazyContact = lazy(() => import('@/features/home/components/Contact'));
export const LazyFooter = lazy(() => import('@/features/home/components/Footer'));
