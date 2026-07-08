import { Reveal, SectionEyebrow } from "./shared";
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
  { icon: Search, label: "Understand", descriptor: "Business requirements", tint: "text-primary-glow" },
  { icon: MapIcon, label: "Map", descriptor: "Processes & data", tint: "text-emerald" },
  { icon: PenLine, label: "Design", descriptor: "Operating model", tint: "text-purple" },
  { icon: CheckCircle2, label: "Validate", descriptor: "Controls & UAT", tint: "text-amber" },
  { icon: Rocket, label: "Implement", descriptor: "ERP deployment", tint: "text-primary-glow" },
  { icon: TrendingUp, label: "Improve", descriptor: "Continuous optimization", tint: "text-emerald" },
];

export function Approach() {
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

        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md md:p-8">
            <div className="flex flex-wrap items-stretch justify-center gap-2 md:gap-1">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-2 md:gap-1">
                    <div className="flex min-w-[110px] flex-col items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-4 md:min-w-[130px]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/60">
                        <Icon className={`h-4 w-4 ${s.tint}`} />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Step {i + 1}
                      </div>
                      <div className="text-center font-display text-[13px] font-bold text-foreground">
                        {s.label}
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
