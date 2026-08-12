import {useEffect, useRef, useState, type RefObject} from 'react';

/** Fade-in when the element enters the viewport. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options},
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, visible]);

  return [ref, visible];
}
