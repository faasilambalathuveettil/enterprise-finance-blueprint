import { Reveal, SectionEyebrow } from "./shared";
import {
  Building2,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
} from "lucide-react";

const pillars = [
  {
    icon: Layers,
    tint: "primary",
    title: "Finance Systems Transformation",
    body: [
      "I help organisations replace fragmented, spreadsheet-driven finance operations with structured ERP operating models that improve governance, decision-making, and long-term scalability.",
      "The outcome isn't simply a new ERP system—it is a finance function designed to grow.",
    ] as [string, string],
  },
  {
    icon: Building2,
    tint: "emerald",
    title: "ERP Transformation",
    body: [
      "At Al Imtiaz, I supported the transition from Excel-based accounting across seven legal entities to a structured ERP operating model.",
      "I designed the underlying finance operating model—including Chart of Accounts, payment workflows, reporting structures, Fixed Asset Register, HRMS requirements, and master data—while ensuring uninterrupted live finance operations throughout implementation.",
    ] as [string, string],
  },
  {
    icon: ShieldCheck,
    tint: "amber",
    title: "Compliance by Design",
    body: [
      "Effective compliance should be embedded into daily operations—not treated as a separate project.",
      "I translated Saudi ZATCA Phase 2 requirements into ERP specifications, customer master standards, testing procedures, and production-ready workflows that enabled successful go-live across multiple entities.",
    ] as [string, string],
  },
  {
    icon: Zap,
    tint: "purple",
    title: "Practical AI",
    body: [
      "I use AI to strengthen finance operations—not replace financial judgement.",
      "From Google Opal document extraction to AI-assisted regulatory workflows at EY, my focus has been practical automation that improves consistency, reduces manual effort, and maintains audit-quality outputs.",
    ] as [string, string],
  },
  {
    icon: Globe2,
    tint: "primary",
    title: "Building Systems That Scale",
    body: [
      "Across every role—from regulatory intelligence at EY to ERP implementation in Saudi Arabia—the same capability has remained consistent:",
      "translating finance, business, and regulatory requirements into structured systems that improve governance, operational efficiency, and long-term scalability.",
    ] as [string, string],
  },
];

const tintClass: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary-glow" },
  emerald: { bg: "bg-emerald/15", text: "text-emerald" },
  purple: { bg: "bg-purple/15", text: "text-purple" },
  amber: { bg: "bg-amber/15", text: "text-amber" },
};

export function ExecutiveSummary() {
  return (
    <section id="summary" className="relative px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 text-center md:mb-12">
          <SectionEyebrow>Executive Summary</SectionEyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            Beyond accounting.{" "}
            <span className="text-gradient">Built for finance transformation.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="group relative mx-auto h-full w-full max-w-[94%] overflow-hidden rounded-2xl border border-border-strong bg-card p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                  <Layers className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-display text-[26px] font-semibold leading-tight text-foreground md:text-[32px]">
                  {pillars[0].title}
                </h3>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
                <p>{pillars[0].body[0]}</p>
                <p className="rounded-lg border-l-2 border-primary/60 bg-primary/5 py-3 pl-5 text-[17px] font-semibold leading-relaxed text-foreground md:text-[18px]">
                  {pillars[0].body[1]}
                </p>
              </div>
            </div>
          </Reveal>

          {pillars.slice(1).map((p, i) => {
            const Icon = p.icon;
            const t = tintClass[p.tint];
            return (
              <Reveal key={p.title} delay={(i + 1) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${t.bg} ${t.text}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
                    <p>{p.body[0]}</p>
                    <p>{p.body[1]}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
