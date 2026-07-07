import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionEyebrow } from "./shared";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { CaseVisual } from "./CaseVisuals";
import erpImg from "@/assets/project-erp.jpg.asset.json";
import aiImg from "@/assets/project-ai.jpg.asset.json";
import eyImg from "@/assets/project-ey.jpg.asset.json";
import commercialImg from "@/assets/project-commercial.jpg.asset.json";

type Paragraphs = string | string[];
type Section = { title: string; body: Paragraphs; bullets?: string[] };
type Case = {
  id: string;
  eyebrow: string;
  title: string;
  org: string;
  image: string;
  headline: Paragraphs;
  metrics: { k: string; v: string }[];
  tagsHeading?: string;
  tags: string[];
  sections: Section[];
  accent: string;
  transition?: Paragraphs;
  outcome?: Paragraphs;
  takeaway?: Paragraphs;
};

function toParas(p: Paragraphs): string[] {
  return Array.isArray(p) ? p : [p];
}


const cases: Case[] = [
  {
    id: "erp",
    eyebrow: "Flagship 01 — End-to-End Build",
    title: "Multi-Entity ERP Finance System",
    org: "Al Imtiaz Corner Logistics · Nov 2025 → Present",
    image: erpImg.url,
    headline: [
      "The organisation operated seven legal entities using Excel-based accounting, disconnected approval processes, and inconsistent financial structures that limited governance, reporting consistency, and scalability.",
      "The objective extended beyond implementing ERP software. It required designing a finance operating model capable of supporting growth while maintaining uninterrupted finance operations.",
    ],
    metrics: [
      { k: "7", v: "Legal Entities" },
      { k: "110+", v: "COA Accounts" },
      { k: "1,500+", v: "Txn / Month" },
      { k: "11", v: "ESS Stages" },
    ],
    tagsHeading: "Finance Operating Model Components",
    tags: [
      "Orison ERP",
      "COA Architecture",
      "ESS Workflow",
      "DPR Module",
      "Fixed Asset Register",
      "Bulk Upload",
      "HRMS Requirements",
      "Multi-Entity Accounting",
      "Intercompany",
    ],
    accent: "primary",
    transition: [
      "Before ERP configuration could begin, the underlying finance operating model had to be defined.",
      "This included master data, governance rules, approval workflows, reporting structures, and internal controls that would shape how finance operated long after the software was implemented.",
    ],
    outcome: [
      "The implementation established a structured finance operating model supporting seven legal entities through standardised master data, controlled workflows, improved reporting consistency, and regulatory readiness.",
      "Rather than replacing spreadsheets with ERP, the project created the operational foundation for automation, compliance, and scalable finance operations.",
    ],
    takeaway: [
      "Successful ERP implementation depends less on software configuration and more on designing the finance operating model that connects people, processes, controls, and data.",
      "This project reflects my approach to translating finance requirements into scalable business systems that support both operational efficiency and long-term governance.",
    ],
    sections: [
      {
        title: "01 · Chart of Accounts Architecture",
        body: [
          "Designed a 110+ account Chart of Accounts across a four-level hierarchy (Group → Sub-Group → Account Head → Detail Account).",
          "Structured the model for multi-company, project, phase, and cost-centre reporting while redesigning the Balance Sheet with dedicated asset, accumulated depreciation, and expense mappings.",
        ],
      },
      {
        title: "02 · ESS Payment Workflow",
        body: [
          "Replaced informal WhatsApp approvals with an 11-stage ERP workflow covering the complete payment lifecycle from Draft to Closed.",
          "Introduced role-based approvals, conditional routing, treasury separation, and a complete audit trail.",
        ],
        bullets: [
          "Draft → Submitted → PM Approval → Finance Review",
          "Finance Manager → Management Approval → Release Readiness",
          "Treasury → Executed → Finance Closing → Closed",
          "Defined user role and access logic across the workflow",
        ],
      },
      {
        title: "03 · Fixed Asset Register",
        body: [
          "Designed the Fixed Asset Register covering nine asset groups with structured asset master data, useful life, depreciation rates, and accumulated depreciation.",
          "Automated monthly straight-line depreciation aligned with KSA Zakat/Income Tax Article 17, eliminating manual calculations and reducing posting risk.",
        ],
      },
      {
        title: "04 · DPR Module",
        body: [
          "Designed a dedicated Direct Payment Receipt workflow for post-execution treasury payments outside the standard approval cycle.",
          "Added 25 payment categories, mandatory supporting documentation, unique numbering, and full ERP audit traceability.",
        ],
      },
      {
        title: "05 · HRMS Requirements",
        body: [
          "Authored Employee Master Specification v2.0 comprising 58 fields across ten business categories.",
          "Defined calculated fields, expiry logic, dashboard requirements, bulk upload templates, and UI specifications to support future HRMS deployment.",
          "Status: Currently in active testing with the ERP vendor.",
        ],
      },
      {
        title: "06 · Bulk Upload Infrastructure",
        body: [
          "Developed a controlled Excel-based bulk upload framework supporting approximately 1,500 monthly transactions across seven legal entities.",
          "Embedded validation rules, account mapping, dropdown controls, and company-project-phase eligibility to improve data quality before ERP import.",
        ],
      },
      {
        title: "07 · Vendor Coordination & Requirements Engineering",
        body: [
          "Acted as the finance point of contact throughout implementation.",
          "Authored functional specifications, coordinated user acceptance testing, validated configuration changes, and ensured ERP behaviour aligned with finance and business requirements.",
        ],
      },
    ],
  },
  {
    id: "zatca",
    eyebrow: "Flagship 02 — KSA Regulatory Transformation",
    title: "ZATCA Phase 2 e-Invoicing Integration",
    org: "Al Imtiaz · 3 entities live · June 2026",
    image: eyImg.url, // placeholder — using existing asset library

    headline:
      "The transition to ZATCA Phase 2 required organisations to redesign how invoices were generated, validated, and reported. Success depended not only on technical ERP integration but also on aligning finance processes, master data, compliance controls, and operational workflows with evolving regulatory requirements.",
    metrics: [
      { k: "3", v: "Entities Live" },
      { k: "~7 wks", v: "CSID → Live" },
      { k: "11", v: "Master Data Fields" },
      { k: "Jun 11", v: "Go-Live 2026" },
    ],
    tags: [
      "ZATCA Phase 2",
      "e-Invoicing",
      "CSID Coordination",
      "Sandbox Simulation",
      "PDF/A-3 + XML",
      "Functional Analysis",
      "Compliance Spec",
    ],
    accent: "emerald",
    transition:
      "Rather than treating compliance as a standalone technical project, the implementation focused on embedding regulatory requirements directly into finance operations through structured master data, ERP configuration, validation procedures, and controlled business workflows.",
    outcome:
      "The implementation established a repeatable compliance framework supporting three legal entities through standardised customer master data, structured testing, controlled invoice validation, and production-ready ERP processes. The outcome was not simply successful ZATCA integration — it strengthened governance, reduced compliance risk, and created a sustainable foundation for future regulatory change.",
    takeaway:
      "Successful regulatory transformation depends on integrating compliance into everyday business processes rather than treating it as a separate implementation exercise. This project demonstrates my approach to translating regulatory requirements into scalable finance systems that support both operational efficiency and long-term governance.",
    sections: [
      {
        title: "01 · Compliance Data Standards",
        body: "Designed the business-side customer master specification defining mandatory compliance attributes required for successful ERP integration, invoice validation, and production deployment.",
      },
      {
        title: "02 · ERP Specification & Vendor Coordination",
        body: "Translated the ZATCA technical requirements into ERP configuration specs — invoice numbering, buyer/seller data, VAT breakdown, PDF/A-3 rendering with embedded XML — and coordinated the change requests with Orison.",
      },
      {
        title: "03 · Sandbox Testing (Invoices + Credit Notes)",
        body: "Ran structured sandbox test cycles for both invoice and credit-note flows across all three entities — Mawared Mahara, Al Imtiaz Corner, Wahat Al Asnad — validating XML structure, hash, and QR code.",
      },
      {
        title: "04 · CSID Coordination & Go-Live",
        body: "Coordinated CSID generation and ERP configuration from April 24, drove simulation testing May 5 – June 6, and led the live cutover on June 11, 2026. First real credit note issued from Al Imtiaz Corner on the live connection.",
        bullets: [
          "CSID onboarding & ERP config: April 24 – May 4, 2026",
          "Simulation testing (invoices + credit notes): May 5 – June 6, 2026",
          "All 3 entities LIVE: June 11, 2026",
          "Real credit note issued from Al Imtiaz Corner on live connection",
        ],
      },
      {
        title: "05 · Post-Go-Live Protocol & Business Impact",
        body: "Established a 4-step post-go-live monitoring protocol covering submission status, clearance, exception handling, and reconciliation. Full ZATCA compliance achieved with zero disruption to live invoicing.",
      },
    ],
  },
  {
    id: "ey",
    eyebrow: "Flagship 03 — Regulatory Intelligence & AI Workflows",
    title: "EY Regulatory Intelligence & AI Workflows",
    org: "Ernst & Young GDS · 2.5 Years · Spot Award",
    image: eyImg.url,
    headline:
      "Financial institutions operate in rapidly evolving regulatory environments where new guidance must be analysed, interpreted, and communicated quickly. The challenge was to transform large volumes of regulatory publications into structured, actionable intelligence while maintaining consistency, accuracy, and governance across multiple jurisdictions.",
    metrics: [
      { k: "4", v: "Jurisdictions" },
      { k: "30–40%", v: "Efficiency Gain" },
      { k: "3", v: "AI Failure Modes Mitigated" },
      { k: "1", v: "EY Spot Award" },
    ],
    tags: [
      "EY Regulatory Radar",
      "EYQ / OpenAI",
      "Prompt Engineering",
      "Structured Output",
      "AI-Assisted Classification",
      "Human-in-the-Loop",
    ],
    accent: "amber",
    transition:
      "The growing volume and complexity of regulatory publications made traditional manual review increasingly difficult to scale. The objective was not to replace human judgement, but to augment regulatory analysis with structured AI-assisted workflows that improved efficiency while preserving quality and consistency.",
    outcome:
      "The redesigned workflow improved processing efficiency by approximately 30–40% while maintaining review quality through structured validation and human oversight. Standardised outputs improved consistency across regulatory summaries and supported more efficient knowledge sharing within the team.",
    takeaway:
      "Effective regulatory intelligence depends on structured workflows that transform complex regulatory information into consistent, actionable insights. This experience strengthened my ability to combine finance knowledge, regulatory analysis, and AI-assisted processes to improve operational efficiency without compromising quality or governance.",
    sections: [
      {
        title: "01 · My Role",
        body: "I contributed to improving the regulatory intelligence workflow by combining structured research methodologies, AI-assisted classification, prompt engineering, and standardised output formats that increased consistency while supporting faster regulatory analysis.",
      },
      {
        title: "02 · EYQ Prompt Architecture",
        body: "Engineered a decision-tree prompt architecture in EYQ (OpenAI-based EY internal tool) with a multi-stage classification pipeline and conditional logic for multi-sector and ambiguous publications.",
        bullets: [
          "Multi-stage classification with conditional logic for ambiguous publications",
          "Machine-readable outputs directly matching the Radar data model",
          "Standardised and institutionalised across the team",
        ],
      },
      {
        title: "03 · AI Validation & Structured Output",
        body: "Implemented human-in-the-loop validation targeting three AI failure modes: over-generalisation, misclassification, and incomplete extraction. Designed a standardised output framework (Theme / One-Liner / Impact Lines / EY Relevance Tagging).",
      },
      {
        title: "04 · Process Engineering — 30–40% Faster",
        body: "Redesigned document ingestion from sequential to parallel processing (bulk URL batching), delivering a 30–40% efficiency improvement in end-to-end throughput.",
      },
      {
        title: "05 · Recognition — EY Spot Award",
        body: "Recognised with the EY Spot Award for engineering the AI-assisted classification system and delivering measurable efficiency improvements across the regulatory intelligence workflow.",
      },
    ],
  },
  {
    id: "automation",
    eyebrow: "Flagship 04 — Practical AI at Work",
    title: "Finance Process Automation",
    org: "Google Opal · Apps Script · Spreadsheet Engineering",
    image: aiImg.url,
    headline:
      "Many finance processes continue to rely on repetitive document handling, spreadsheet manipulation, and manual data extraction. I focused on applying practical automation using no-code AI tools, Apps Script, and spreadsheet engineering to reduce manual effort while preserving finance-grade accuracy, traceability, and operational control.",
    metrics: [
      { k: "50–70%", v: "Entry Reduction" },
      { k: "3", v: "Opal Apps in Production" },
      { k: "15", v: "Apps Script Paths" },
      { k: "3", v: "Tier Processing Logic" },
    ],
    tags: [
      "Google Opal",
      "Google Apps Script",
      "JSON Extraction",
      "REGEX Routing",
      "VLOOKUP",
      "Spreadsheet Engineering",
      "AI Workflow Design",
    ],
    accent: "purple",
    sections: [
      {
        title: "01 · Google Opal — No-Code AI Extraction",
        body: "Deployed three production Opal apps extracting structured data from HR and compliance PDFs — feeding directly into finance and payroll workflows.",
        bullets: [
          "QIWA Extractor — invoice no., date, employee, Iqama/border no., amounts → JSON",
          "SheetSnap — image of Excel → structured CSV",
          "ResidencyScan — PDF → names + 10-char border numbers for HR tracking",
        ],
      },
      {
        title: "02 · Bank SOA Integration",
        body: "Opal-extracted invoice numbers matched against bank transaction narratives via VLOOKUP — a systematic linkage between bank payment and originating HR/compliance document. 50–70% reduction in manual entry.",
      },
      {
        title: "03 · Apps Script — 3-Tier Bank Categorisation",
        body: "Scope-complete Apps Script framework for bank statement categorisation using tiered logic.",
        bullets: [
          "Tier 1 — ESS Match: triple-condition (Entity + Target + Date)",
          "Tier 2 — Keyword Router: 15 REGEX paths (MOL 050, Iqama 090, GOSI 060, Traffic 093/040, SEC 002, etc.)",
          "Tier 3 — Manual Review: uncategorised transactions flagged",
        ],
      },
      {
        title: "04 · Spreadsheet Engineering & Historical Wins",
        body: "Foundational automation practice: VBA macro pack for QuickBooks bulk uploads at Mann Hospitality (25% less data entry), QuickBooks-Razorpay integration (50% faster payments), multi-aggregator reconciliation (Zomato / Swiggy / MagicPin / DotPe).",
      },
    ],
  },
];

const accentBg: Record<string, string> = {
  primary: "from-primary/25 to-primary-glow/10",
  emerald: "from-emerald/20 to-emerald/5",
  amber: "from-amber/20 to-amber/5",
  purple: "from-purple/20 to-purple/5",
};
const accentText: Record<string, string> = {
  primary: "text-primary-glow",
  emerald: "text-emerald",
  amber: "text-amber",
  purple: "text-purple",
};

function CaseCard({ c }: { c: Case }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Image */}
        <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
          <img
            src={c.image}
            alt={c.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${accentBg[c.accent]} mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
          <span className={`absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur ${accentText[c.accent]}`}>
            {c.eyebrow}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:p-10">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            {c.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{c.org}</p>

          <div className={`mt-5 text-[11px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
            Business Context
          </div>
          <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
            {toParas(c.headline).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={`mt-6 text-[11px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
            Transformation Overview
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.v} className="rounded-xl border border-border bg-surface/60 p-3 text-center">
                <div className={`font-display text-lg font-bold ${accentText[c.accent]}`}>
                  {m.k}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          {c.tagsHeading && (
            <div className={`mt-6 text-[11px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
              {c.tagsHeading}
            </div>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface/70 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface"
            aria-expanded={open}
          >
            {open ? "Hide Solution Design" : "View Solution Design"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border"
          >
            <div className="p-6 md:p-10">
              <CaseVisual id={c.id} accent={c.accent} />
            </div>

            {c.transition && (
              <div className="px-6 pb-6 md:px-10">
                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.transition}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 px-6 pb-6 md:grid-cols-2 md:px-10 md:pb-10">
              {c.sections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border bg-surface/40 p-6"
                >
                  <h4 className={`font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`}>
                    {s.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  {s.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[13px] text-muted-foreground"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentText[c.accent]}`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {c.outcome && (
              <div className="px-6 pb-6 md:px-10">
                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <h4 className={`font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`}>
                    Business Outcome
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.outcome}
                  </p>
                </div>
              </div>
            )}

            {c.takeaway && (
              <div className="px-6 pb-6 md:px-10 md:pb-10">
                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <h4 className={`font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`}>
                    Key Takeaway
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.takeaway}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

// Override ZATCA image with commercial (better fit) — small assignment before render
cases[1].image = commercialImg.url;

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Flagship Case Studies</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Four stories.{" "}
            <span className="text-gradient">One systems mindset.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every supporting initiative — COA, FAR, HRMS, ESS, bulk upload, Apps
            Script, prompt architecture — is a chapter inside one of these four
            transformations.
          </p>
        </Reveal>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
