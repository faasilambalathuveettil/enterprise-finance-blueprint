import { Reveal, SectionEyebrow } from "./shared";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

const groups = [
  {
    title: "Finance Systems Transformation",
    desc: "Designing scalable finance operating models that combine ERP, governance, workflows, and reporting.",
    tint: "text-primary-glow",
    items: [
      "ERP Functional Design",
      "Finance Operating Models",
      "Business Process Design",
      "Requirements Engineering",
      "Multi-Entity Finance",
    ],
  },
  {
    title: "Regulatory & Governance",
    desc: "Embedding compliance into finance operations through structured controls and business processes.",
    tint: "text-emerald",
    items: [
      "ZATCA Phase 2",
      "KSA VAT",
      "SOCPA",
      "Internal Controls",
      "Regulatory Intelligence",
    ],
  },
  {
    title: "Automation & AI",
    desc: "Applying practical automation to eliminate repetitive work while preserving finance-grade accuracy.",
    tint: "text-purple",
    items: [
      "Google Opal",
      "Prompt Engineering",
      "Google Apps Script",
      "Excel Automation",
      "Structured Output Design",
    ],
  },
  {
    title: "Finance Operations",
    desc: "Strong accounting fundamentals supporting transformation initiatives and operational excellence.",
    tint: "text-amber",
    items: [
      "GL",
      "Month-End Close",
      "Treasury",
      "Fixed Assets",
      "Intercompany",
      "Reporting",
    ],
  },
];

const certs = [
  {
    icon: BadgeCheck,
    name: "CertIFRS",
    body: "IFRS Certified — ACCA",
    tint: "text-primary-glow",
  },
  {
    icon: GraduationCap,
    name: "ACCA — P Level",
    body: "Association of Chartered Certified Accountants — Professional Level pursuing",
    tint: "text-emerald",
  },
  {
    icon: Award,
    name: "SOCPA Eligible",
    body: "Saudi Organization for Chartered and Professional Accountants",
    tint: "text-amber",
  },
  {
    icon: Award,
    name: "EY Spot Award",
    body: "Recognition for RegTech / AI classification engineering",
    tint: "text-purple",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Core Competencies</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            A rare blend of{" "}
            <span className="text-gradient">finance, systems, and AI.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 backdrop-blur-md">
                <h3
                  className={`font-display text-sm font-bold uppercase tracking-wider ${g.tint}`}
                >
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {g.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-border bg-surface/70 px-3 py-1.5 text-[13px] text-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <Reveal className="mt-20 mb-10 text-center" delay={0.05}>
          <SectionEyebrow>Certifications & Recognition</SectionEyebrow>
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            Credentials that <span className="text-gradient">back the work.</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant">
                  <Icon className={`h-6 w-6 ${c.tint}`} />
                  <div className="mt-4 font-display text-lg font-bold text-foreground">
                    {c.name}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {c.body}
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
