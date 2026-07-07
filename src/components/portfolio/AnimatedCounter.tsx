import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Parses a metric string like "110+", "50–70%", "~7 wks", "Jun 11"
 * into { prefix, number, suffix }. If no number is found, returns null
 * so callers can render the original string unchanged.
 */
function parseMetric(raw: string) {
  const match = raw.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const value = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(value)) return null;
  return { prefix, value, suffix, hasComma: numStr.includes(",") };
}

export function AnimatedCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseMetric(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!parsed) return;
    const unsub = spring.on("change", (v) => {
      const n =
        parsed.value >= 100 || Number.isInteger(parsed.value)
          ? Math.round(v)
          : Math.round(v * 10) / 10;
      setDisplay(
        parsed.hasComma ? n.toLocaleString() : n.toString(),
      );
    });
    return () => unsub();
  }, [spring, parsed]);

  useEffect(() => {
    if (inView && parsed) motionValue.set(parsed.value);
  }, [inView, motionValue, parsed]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
