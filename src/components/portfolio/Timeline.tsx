import { Reveal, SectionEyebrow } from "./shared";
import { Award } from "lucide-react";

const timeline = [
  {
    when: "Nov 2025 — Present",
    role: "Accountant — ERP Implementation & Finance Operations",
    org: "Al Imtiaz Corner Logistics · Riyadh, KSA",
    summary:
      "Designed and implemented the finance operating model supporting the transition from Excel-based accounting to a multi-entity Orison ERP environment across seven legal entities.",
    achievements: [
      "110+ Chart of Accounts",
      "11-stage ESS workflow",
      "Fixed Asset Register",
      "DPR Module",
      "HRMS Specification",
      "ZATCA Phase 2",
      "Google Opal Automation",
    ],
    tags: ["Orison ERP", "ZATCA Phase 2 LIVE", "Google Opal AI"],
    accent: "primary",
  },
  {
    when: "Nov 2022 — Apr 2025",
    role: "Associate Consultant — Business Transformation",
    org: "Ernst & Young GDS · Bengaluru, India",
    summary:
      "Operated EY Regulatory Radar — end-to-end regulatory intelligence across EU, UK, HK, and Singapore.",
    achievements: [
      "Regulatory Radar",
      "EYQ Prompt Engineering",
      "Structured Outputs",
      "30–40% Efficiency",
    ],
    tags: ["EYQ", "RegTech", "Prompt Engineering", "4 Jurisdictions"],
    accent: "amber",
    award: "2× EY Spot + GDS Recognition",
  },
  {
    when: "May 2022 — Nov 2022",
    role: "PMO — Vendor Management Intern",
    org: "InCred Financial Services · Bengaluru, India",
    summary:
      "Sole SPOC for 20+ vendors and 15+ critical tech subscriptions at an NBFC fintech lender.",
    achievements: [
      "Vendor Management",
      "TRAI DLT",
      "Provisioning",
    ],
    tags: ["Vendor Management", "TRAI DLT", "Provisioning"],
    accent: "purple",
  },
  {
    when: "Dec 2021 — Mar 2022",
    role: "Account Executive Intern",
    org: "Mann Hospitality LLP · Bengaluru, India",
    summary:
      "Built a semi-automated accounting workflow in a cloud kitchen environment.",
    achievements: [
      "QuickBooks-Razorpay Integration",
      "VBA Macros",
      "Multi-Aggregator Reconciliation",
    ],
    tags: ["QuickBooks", "VBA", "Reconciliation", "GST / TDS / TCS"],
    accent: "emerald",
  },
];

const dotClass: Record<string, string> = {
  primary: "bg-primary shadow-[0_0_20px_var(--color-primary)]",
  amber: "bg-amber shadow-[0_0_20px_var(--color-amber)]",
  purple: "bg-purple shadow-[0_0_20px_var(--color-purple)]",
  emerald: "bg-emerald shadow-[0_0_20px_var(--color-emerald)]",
};

export function Timeline() {
  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-16 text-center">
          <SectionEyebrow>Career Arc</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Building Finance Systems Through Every Role
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Across finance operations, regulatory intelligence, vendor management,
            and automation, each role has contributed to a broader progression
            toward finance systems transformation.
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[11px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[15px]"
          />
          <div className="flex flex-col gap-[30px]">
            {timeline.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.13}>
                <div className="relative pl-10 md:pl-14">
                  <span
                    className={`absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-background md:h-8 md:w-8 ${dotClass[t.accent]} ${i === 0 ? "ring-2 ring-primary-glow/40 ring-offset-2 ring-offset-background" : ""}`}
                    aria-hidden="true"
                  />
                  <div className="card-hover rounded-2xl border border-border bg-card p-[18px] backdrop-blur-md md:p-[26px]">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {t.when}
                      </span>
                      {t.award && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber/25 bg-amber/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber">
                          <Award className="h-3 w-3" /> {t.award}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                      {t.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary-glow">{t.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t.summary}
                    </p>
                    <div className="mt-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Highlights
                      </p>
                      <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                        {t.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary-glow" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
