import { Reveal, SectionEyebrow } from "./shared";
import { Award, GraduationCap, BadgeCheck } from "lucide-react";

const groups = [
  {
    title: "ERP & Systems Architecture",
    tint: "text-primary-glow",
    items: [
      "Orison ERP — Full Configuration",
      "COA Design (110+ accounts)",
      "ESS Payment Workflow",
      "DPR Module",
      "Fixed Asset Register",
      "HRMS Requirements",
      "QuickBooks",
      "Multi-Entity Architecture",
      "Bulk Upload Design",
    ],
  },
  {
    title: "Tax & Regulatory Compliance",
    tint: "text-emerald",
    items: [
      "ZATCA Phase 2 — LIVE",
      "KSA VAT (Monthly + Quarterly)",
      "e-Invoicing",
      "SOCPA Standards",
      "GST / TDS / TCS (India)",
      "TRAI DLT Compliance",
    ],
  },
  {
    title: "Automation & AI",
    tint: "text-purple",
    items: [
      "Google Opal — No-Code AI",
      "EYQ Prompt Engineering",
      "Google Apps Script",
      "Excel VBA / Macros",
      "Document Extraction",
      "Structured Output Design",
    ],
  },
  {
    title: "Finance & Process",
    tint: "text-amber",
    items: [
      "General Ledger",
      "Bank Reconciliation",
      "Month-End Close",
      "Intercompany Accounting",
      "Workflow Design",
      "Internal Controls",
      "Vendor Management",
      "Requirements Authoring",
      "FP&A",
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
    name: "ACCA (P)",
    body: "Association of Chartered Certified Accountants",
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
