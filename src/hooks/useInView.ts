import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Stop observing once the element has appeared (default: true) */
  once?: boolean;
  /** IntersectionObserver threshold (default: 0.15) */
  threshold?: number;
  /** Root margin, useful to trigger a bit earlier (default: '0px 0px -10% 0px') */
  rootMargin?: string;
}

/**
 * Observe an element and tell when it enters the viewport.
 * Returns a ref to attach to the element and a boolean `inView`.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  { once = true, threshold = 0.15, rootMargin = '0px 0px -10% 0px' }: UseInViewOptions = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect users who prefer reduced motion: reveal immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
