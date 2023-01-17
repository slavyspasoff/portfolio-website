import { useState, useEffect, type RefObject } from 'react';

const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const observerCallback: IntersectionObserverCallback = (entries) => {
    setIsIntersecting(entries[0].isIntersecting);
  };
  const observer = new IntersectionObserver(observerCallback);
  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
  });

  return isIntersecting;
};

export { useIntersectionObserver as default };
