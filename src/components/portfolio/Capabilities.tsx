import { Reveal, SectionEyebrow } from "./shared";


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
    ],
  },
];


export function Capabilities() {
  return (
    <section id="capabilities" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Core Competencies</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Bridging{" "}
            <span className="text-gradient">Finance, Systems & AI</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-7 backdrop-blur-md">
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

      </div>
    </section>
  );
}
