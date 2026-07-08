import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

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

// easeOutExpo — premium, smooth deceleration
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView || !parsed) return;
    const controls = animate(0, parsed.value, {
      duration: 1.6,
      ease: EASE_OUT_EXPO,
      onUpdate: (v) => {
        const n =
          parsed.value >= 100 || Number.isInteger(parsed.value)
            ? Math.round(v)
            : Math.round(v * 10) / 10;
        setDisplay(parsed.hasComma ? n.toLocaleString() : n.toString());
      },
    });
    return () => controls.stop();
  }, [inView, parsed]);

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

