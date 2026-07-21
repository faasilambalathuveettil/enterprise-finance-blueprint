import { Reveal, SectionEyebrow } from "./shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Map as MapIcon,
  PenLine,
  CheckCircle2,
  Rocket,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const steps = [
  { icon: Search, label: "Understand", tint: "text-primary-glow" },
  { icon: MapIcon, label: "Map", tint: "text-emerald" },
  { icon: PenLine, label: "Design", tint: "text-purple" },
  { icon: CheckCircle2, label: "Validate", tint: "text-amber" },
  { icon: Rocket, label: "Implement", tint: "text-primary-glow" },
  { icon: TrendingUp, label: "Improve", tint: "text-emerald" },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STEP_STAGGER = 0.13;
const STEP_DURATION = 0.32;

export function Approach() {
  const flowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(flowRef, { once: true, margin: "-80px" });

  return (
    <section
      id="approach"
      className="relative border-y border-border bg-surface/30 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <SectionEyebrow>My Approach</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Every transformation follows a{" "}
            <span className="text-gradient">structured approach</span>—understanding
            business requirements before designing systems that can scale.
          </h2>
        </Reveal>

        <div ref={flowRef}>
          <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md md:p-8">
            <div className="relative flex flex-wrap items-stretch justify-center gap-2 md:gap-1">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block"
              />
              {steps.map((s, i) => {
                const Icon = s.icon;
                const delay = 0.15 + i * STEP_STAGGER;
                return (
                  <div key={s.label} className="relative flex items-center gap-2 md:gap-1">
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: STEP_DURATION, ease: EASE_OUT, delay }}
                      className="relative z-10 flex min-w-[110px] flex-col items-center gap-2 rounded-xl border border-border bg-surface/80 px-3 py-4 md:min-w-[130px]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/60">
                        <Icon className={`h-4 w-4 ${s.tint}`} />
                      </div>
                      <div className={`font-display text-[15px] font-bold leading-none ${s.tint}`}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-center font-display text-[13px] font-semibold text-foreground">
                        {s.label}
                      </div>
                    </motion.div>
                    {i < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                          duration: 0.28,
                          ease: EASE_OUT,
                          delay: delay + STEP_STAGGER * 0.6,
                        }}
                        className="relative z-10"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/70" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

