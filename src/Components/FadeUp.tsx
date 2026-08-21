import { useEffect, useRef, useState } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  threshold?: number;
}

function FadeUp({ children, threshold = 0.2 }: FadeUpProps) {
  const [show, setShow] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`fade-up ${show ? "show" : ""}`}
    >
      {children}
    </div>
  );
}

export default FadeUp;