import { Reveal, SectionEyebrow } from "./shared";
import {
  Building2,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
} from "lucide-react";

type Pillar = {
  icon: typeof Layers;
  tint: string;
  title: string;
  lead: string | string[];
  highlight?: string;
  bullets?: string[];
  closer?: string | string[];
};

const pillars: Pillar[] = [
  {
    icon: Layers,
    tint: "primary",
    title: "Finance Systems Transformation",
    lead: "I help organisations replace fragmented, spreadsheet-driven finance operations with structured ERP operating models that improve governance, decision-making, and long-term scalability.",
    highlight: "The outcome isn't simply a new ERP system—it is a finance function designed to grow.",
  },
  {
    icon: Building2,
    tint: "emerald",
    title: "ERP Transformation",
    lead: "Transitioned seven legal entities from spreadsheet-based accounting to a structured ERP operating model.",
    bullets: [
      "Chart of Accounts",
      "Payment workflows",
      "Reporting structure",
      "Fixed Asset Register",
      "HRMS requirements",
      "Master data",
    ],
    closer: "Delivered without disrupting day-to-day finance operations.",
  },
  {
    icon: ShieldCheck,
    tint: "amber",
    title: "Compliance by Design",
    lead: "Compliance should be embedded into finance operations—not added afterwards.",
    closer: [
      "Translated Saudi ZATCA Phase 2 requirements into ERP specifications, customer master standards, and testing procedures.",
      "Delivered production-ready workflows that enabled successful go-live across multiple entities.",
    ],
  },
  {
    icon: Zap,
    tint: "purple",
    title: "Practical AI",
    lead: "I use AI to strengthen finance operations—not replace financial judgement.",
    closer:
      "Built practical AI workflows using Google Opal and EY AI tools to automate document processing while maintaining audit-quality outputs.",
  },
  {
    icon: Globe2,
    tint: "primary",
    title: "Building Systems That Scale",
    lead: [
      "Across EY, ERP implementation, and finance operations, one capability has remained constant:",
      "Translating finance, operational, and regulatory requirements into scalable business systems.",
    ],
  },
];

const tintClass: Record<string, { bg: string; text: string; bullet: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary-glow", bullet: "bg-primary-glow" },
  emerald: { bg: "bg-emerald/15", text: "text-emerald", bullet: "bg-emerald" },
  purple: { bg: "bg-purple/15", text: "text-purple", bullet: "bg-purple" },
  amber: { bg: "bg-amber/15", text: "text-amber", bullet: "bg-amber" },
};

export function ExecutiveSummary() {
  const lead = pillars[0];
  return (
    <section id="summary" className="relative px-4 pb-20 pt-14 md:px-8 md:pb-24 md:pt-16">
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
            <div className="group relative mx-auto h-full w-full max-w-4xl overflow-hidden rounded-2xl border border-border-strong bg-card p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant md:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                  <Layers className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="font-display text-[24px] font-semibold leading-tight text-foreground md:text-[30px]">
                  {lead.title}
                </h3>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
                <p>{lead.lead}</p>
                {lead.highlight && (
                  <p className="rounded-lg border-l-2 border-primary/60 bg-primary/5 py-3 pl-5 text-[17px] font-semibold leading-relaxed text-foreground md:text-[18px]">
                    {lead.highlight}
                  </p>
                )}
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
                    {Array.isArray(p.lead) ? (
                      p.lead.map((s, j) => <p key={j}>{s}</p>)
                    ) : (
                      <p>{p.lead}</p>
                    )}
                    {p.bullets && (
                      <ul className="grid grid-cols-1 gap-1.5 pt-1 sm:grid-cols-2">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-[14px] text-foreground/90">
                            <span className={`h-1.5 w-1.5 rounded-full ${t.bullet}`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {p.closer && (
                      Array.isArray(p.closer) ? (
                        p.closer.map((s, j) => <p key={j}>{s}</p>)
                      ) : (
                        <p>{p.closer}</p>
                      )
                    )}
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
