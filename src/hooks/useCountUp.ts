import { useEffect, useRef, useState } from "react";

/**
 * Animate an integer from 0 → target when the returned ref enters the viewport.
 * Non-numeric prefixes/suffixes (e.g. "~", "+", "%", "wks") are preserved by the caller.
 */
export function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || started.current) continue;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value } as const;
}

/**
 * Parse a display metric like "110+", "~7 wks", "30–40%", "Jun 11" into
 * { prefix, number, suffix }. Falls back to the raw string when no leading integer is found.
 */
export function splitMetric(raw: string): {
  prefix: string;
  number: number | null;
  suffix: string;
} {
  const m = raw.match(/^([^\d]*)(\d+)(.*)$/);
  if (!m) return { prefix: raw, number: null, suffix: "" };
  return { prefix: m[1], number: parseInt(m[2], 10), suffix: m[3] };
}
