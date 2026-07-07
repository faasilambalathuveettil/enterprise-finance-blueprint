import { Reveal, SectionEyebrow } from "./shared";
import { Award } from "lucide-react";

const timeline = [
  {
    when: "Nov 2025 — Present",
    role: "Accountant — ERP Implementation & Finance Operations",
    org: "Al Imtiaz Corner Logistics · Riyadh, KSA",
    body: "Designed the complete finance architecture from Excel baseline to multi-entity Orison ERP across 7 entities — 110+ COA, 11-stage ESS payment workflow (live Feb 2026), DPR module (live May 2026), Fixed Asset Register with auto-depreciation (live April 2026), ZATCA Phase 2 live across all 3 entities (June 11, 2026), HRMS 58-field specification (in active testing), and Google Opal AI automation delivering 50–70% manual entry reduction.",
    tags: ["Orison ERP", "ZATCA Phase 2 LIVE", "COA Design", "HRMS Spec", "Google Opal AI"],
    accent: "primary",
  },
  {
    when: "Nov 2022 — Apr 2025",
    role: "Associate Consultant — Business Transformation",
    org: "Ernst & Young GDS · Bengaluru, India",
    body: "Operated EY Regulatory Radar — end-to-end regulatory intelligence across EU, UK, HK, and Singapore. Engineered AI classification workflows in EYQ, decision-tree prompt architecture, 3-layer taxonomy mapping. Redesigned ingestion to parallel processing — 30–40% efficiency gain.",
    tags: ["EYQ", "RegTech", "Prompt Engineering", "4 Jurisdictions"],
    accent: "amber",
    award: "EY Spot Award",
  },
  {
    when: "May 2022 — Nov 2022",
    role: "PMO — Vendor Management Intern",
    org: "InCred Financial Services · Bengaluru, India",
    body: "Sole SPOC for 20+ vendors and 15+ critical tech subscriptions at an NBFC fintech lender. Managed TRAI DLT compliance. Contributed monthly provisioning to finance for budget preparation and variance analysis.",
    tags: ["Vendor Management", "TRAI DLT", "Provisioning"],
    accent: "purple",
  },
  {
    when: "Dec 2021 — Mar 2022",
    role: "Account Executive Intern",
    org: "Mann Hospitality LLP · Bengaluru, India",
    body: "Cloud kitchen environment. Built a semi-automated accounting workflow — QuickBooks-Razorpay integration (50% faster payments), VBA macros (25% less data entry), multi-aggregator reconciliation across Zomato, Swiggy, MagicPin, and DotPe.",
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
            From <span className="text-gradient">regulatory intelligence</span> to{" "}
            <span className="text-gradient">ERP architecture</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A consistent underlying capability across every role: designing structured
            data systems, engineering automation workflows, and operationalising
            governance frameworks.
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[11px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[15px]"
          />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.role} delay={i * 0.06}>
                <div className="relative pl-10 md:pl-14">
                  <span
                    className={`absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-background md:h-8 md:w-8 ${dotClass[t.accent]}`}
                  />
                  <div className="rounded-2xl border border-border bg-card p-6 backdrop-blur-md md:p-8">
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
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {t.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
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
