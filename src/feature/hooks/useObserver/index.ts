import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

type UseObserverPayload = {
  ref: RefObject<HTMLDivElement>;
  canLoad: boolean;
  callback: () => void;
};

export const useObserver = ({
  ref,
  canLoad,
  callback,
}: UseObserverPayload): void => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const cb = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, canLoad, ref]);
};
