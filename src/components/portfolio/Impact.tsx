import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, SectionEyebrow } from "./shared";

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function Metric({
  value,
  suffix = "",
  prefix = "",
  label,
  tint,
  active,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  tint: string;
  active: boolean;
}) {
  const v = useCountUp(value, active);
  return (
    <div className="card-hover rounded-2xl border border-border bg-card p-6 text-center backdrop-blur-md md:p-8">
      <div className={`font-display text-4xl font-bold md:text-5xl ${tint}`}>
        {prefix}
        {v.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-[13px] font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

const metrics = [
  { value: 7, label: "Legal Entities Migrated", tint: "text-primary-glow" },
  { value: 1500, suffix: "+", label: "Monthly Finance Transactions", tint: "text-emerald" },
  { value: 70, prefix: "50–", suffix: "%", label: "Manual Data Entry Reduced", tint: "text-purple" },
  { value: 3, label: "Entities ZATCA Live", tint: "text-amber" },
];

const supporting = [
  { k: "110+", v: "COA Accounts" },
  { k: "11", v: "ESS Workflow Stages" },
  { k: "4,590", v: "Workforce Financials Tracked" },
  { k: "7", v: "Jurisdictions at EY" },
  { k: "20+", v: "Vendors Managed" },
  { k: "58", v: "HRMS Fields Specified" },
];

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      id="impact"
      ref={ref}
      className="relative border-y border-border bg-surface/40 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Business Impact</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Business outcomes delivered{" "}
            <span className="text-gradient">through finance systems transformation.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <Metric {...m} active={inView} />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 rounded-2xl border border-border bg-surface/60 p-6 md:grid-cols-6 md:p-8">
            {supporting.map((s) => (
              <div key={s.v} className="text-center">
                <div className="font-display text-lg font-bold text-foreground md:text-xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[12px] font-medium text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
