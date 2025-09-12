import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type InViewProps = {
  className?: string;
  delayMs?: number;
  distancePx?: number;
  once?: boolean;
};

const ease = "cubic-bezier(0.25,0.46,0.45,0.94)";

export const InView: React.FC<PropsWithChildren<InViewProps>> = ({
  children,
  className,
  delayMs = 0,
  distancePx = 14,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (delayMs) {
            const id = setTimeout(() => setVisible(true), delayMs);
            if (once) observer.unobserve(entry.target);
            return () => clearTimeout(id);
          }
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${distancePx}px, 0)`,
        transition: `opacity 600ms ${ease}, transform 600ms ${ease}`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default InView;


