import { Reveal, SectionEyebrow } from "./shared";
import {
  Building2,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
  Layers,
  Workflow,
  Cpu,
} from "lucide-react";

const pillars = [
  {
    icon: Building2,
    tint: "primary",
    title: "I fix finance chaos.",
    body: "Joined Al Imtiaz with zero ERP and Excel-only accounting across 7 entities. Designed and deployed the complete finance architecture — 110+ account COA, 11-stage payment workflow, DPR module, Fixed Asset Register, ZATCA Phase 2, and AI automation — all while running live accounting.",
  },
  {
    icon: ShieldCheck,
    tint: "emerald",
    title: "I translate compliance into systems.",
    body: "Authored the formal 11-field ZATCA Customer Master specification, coordinated CSID generation and sandbox testing across three entities, and led go-live on June 11, 2026 — from CSID onboarding to live e-invoicing in under 7 weeks.",
  },
  {
    icon: Zap,
    tint: "purple",
    title: "I deploy practical automation fast.",
    body: "Built no-code AI apps (Google Opal) extracting structured JSON from HR and compliance PDFs — 50–70% reduction in manual data entry. Designed a 15-path Apps Script scope for bank categorization. Delivered 30–40% throughput gains at EY through AI-assisted workflows.",
  },
  {
    icon: Globe2,
    tint: "amber",
    title: "I scale across entities and jurisdictions.",
    body: "Systems supporting 7 legal entities, 1,500+ monthly transactions, and 681 employees tracked. Ran EY Regulatory Radar across EU, UK, HK, and Singapore. Managed 20+ vendors at InCred and multi-aggregator reconciliation at Mann Hospitality.",
  },
];

const tintClass: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary-glow" },
  emerald: { bg: "bg-emerald/15", text: "text-emerald" },
  purple: { bg: "bg-purple/15", text: "text-purple" },
  amber: { bg: "bg-amber/15", text: "text-amber" },
};

const capabilities = [
  { icon: Layers, label: "ERP Architecture" },
  { icon: Workflow, label: "Process Design" },
  { icon: ShieldCheck, label: "Regulatory Compliance" },
  { icon: Cpu, label: "AI-Assisted Automation" },
  { icon: Sparkles, label: "Requirements Engineering" },
];

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
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            I don't just close books. I design and deploy the systems, workflows, and
            compliance architecture that make accurate close cycles faster, cleaner, and
            audit-ready.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const t = tintClass[p.tint];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
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

        <Reveal delay={0.2} className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            {capabilities.map(({ icon: I, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-muted-foreground"
              >
                <I className="h-3.5 w-3.5 text-primary-glow" />
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
