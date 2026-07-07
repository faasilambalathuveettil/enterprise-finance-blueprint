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
    title: "Finance transformation begins with well-designed systems.",
    body: "My work focuses on enabling organisations to replace fragmented, spreadsheet-based accounting with scalable ERP operating models — improving governance, decision-making, and readiness for future growth. The outcome is not a new system. It is a finance function built to scale.",
  },
  {
    icon: Building2,
    tint: "emerald",
    title: "Finance transformation through ERP",
    body: "At Al Imtiaz, I enabled the organisation to replace fragmented Excel-based operations across seven legal entities with a scalable ERP operating model supporting governance, automation, and future growth. I designed the underlying finance architecture — Chart of Accounts, payment workflows, reporting structures, Fixed Asset Register, HRMS requirements, and master data — while keeping live accounting uninterrupted throughout implementation.",
  },
  {
    icon: ShieldCheck,
    tint: "amber",
    title: "Compliance engineered into operations",
    body: "Regulatory compliance is most effective when it becomes part of everyday business processes. I translated Saudi ZATCA Phase 2 requirements into ERP specifications, customer master standards, testing procedures, and production-ready workflows that enabled successful go-live across multiple entities without disrupting operations.",
  },
  {
    icon: Zap,
    tint: "purple",
    title: "Practical AI for finance",
    body: "Automation should reduce manual effort without reducing financial control. From AI-assisted document extraction using Google Opal to structured prompt engineering at EY, I build practical automation solutions that improve productivity, increase consistency, and support finance teams with reliable, auditable outputs.",
  },
  {
    icon: Globe2,
    tint: "primary",
    title: "Building systems that scale",
    body: "Across every role—from regulatory intelligence at EY to ERP implementation in Saudi Arabia—the underlying objective has remained consistent: design structured systems that enable finance teams to operate with stronger governance, better visibility, and greater operational efficiency.",
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
    <section id="summary" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <SectionEyebrow>Executive Summary</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Beyond accounting.{" "}
            <span className="text-gradient">Built for finance transformation.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal delay={0.05} className="md:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant md:p-10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                <Layers className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {pillars[0].title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {pillars[0].body}
              </p>
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
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
