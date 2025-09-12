import React, { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  durationMs?: number;
  decimals?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  durationMs = 1200,
  decimals = 0,
  className,
}) => {
  const [value, setValue] = useState(from);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setValue(to); return; }
    let raf = 0;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const t = Math.min(1, (ts - startRef.current) / durationMs);
      setValue(from + (to - from) * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, from, durationMs]);

  return <span className={className}>{value.toFixed(decimals)}</span>;
};

export default CountUp;


