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
    image: eyImg.url,

    headline: [
      "Saudi Arabia's transition to ZATCA Phase 2 required organisations to redesign how invoices were created, validated, transmitted, and monitored.",
      "Success depended on more than ERP integration. It required finance processes, master data, compliance controls, and operational workflows to work together within a single, production-ready framework.",
    ],
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
    transition: [
      "The implementation was not treated as a standalone compliance exercise.",
      "Instead, regulatory requirements were embedded directly into finance operations through structured master data, ERP configuration, controlled testing, and production governance.",
    ],
    outcome: [
      "The implementation established a repeatable compliance framework supporting three legal entities through standardised customer master data, structured testing, controlled invoice validation, and production-ready ERP processes.",
      "Rather than completing a one-time regulatory project, the organisation gained a scalable compliance operating model capable of supporting future regulatory change.",
    ],
    takeaway: [
      "Sustainable regulatory compliance is achieved when governance is embedded into everyday finance operations rather than added as a separate control layer.",
      "This project demonstrates my approach to translating regulatory requirements into practical finance systems that improve both operational efficiency and long-term compliance.",
    ],
    sections: [
      {
        title: "01 · Compliance Data Standards",
        body: [
          "Designed the business-side Customer Master specification defining the mandatory compliance attributes required for ERP integration, invoice validation, and production deployment.",
          "This established a consistent data foundation across all participating entities.",
        ],
      },
      {
        title: "02 · ERP Functional Specification",
        body: [
          "Translated ZATCA Phase 2 requirements into functional ERP specifications covering invoice numbering, buyer and seller information, VAT treatment, PDF/A-3 generation, embedded XML, and validation requirements.",
          "Coordinated implementation with the ERP vendor to ensure business requirements were accurately reflected in system behaviour.",
        ],
      },
      {
        title: "03 · Sandbox Testing",
        body: [
          "Planned and executed structured sandbox testing for invoice and credit-note scenarios across all three legal entities.",
          "Verified XML generation, QR codes, document hashes, and regulatory compliance before production deployment.",
        ],
      },
      {
        title: "04 · Production Go-Live",
        body: [
          "Coordinated CSID onboarding, ERP configuration, simulation testing, and production cutover across all three entities.",
          "Successfully completed the transition from sandbox validation to live e-invoicing without disrupting business operations.",
        ],
        bullets: [
          "CSID onboarding & ERP config: April 24 – May 4, 2026",
          "Simulation testing (invoices + credit notes): May 5 – June 6, 2026",
          "All 3 entities LIVE: June 11, 2026",
          "Real credit note issued from Al Imtiaz Corner on live connection",
        ],
      },
      {
        title: "05 · Post-Go-Live Governance",
        body: [
          "Designed a structured post-go-live monitoring process covering submission status, clearance, exception handling, and reconciliation.",
          "The framework ensured sustained compliance while supporting uninterrupted day-to-day invoicing.",
        ],
      },
    ],
  },
  {
    id: "ey",
    eyebrow: "Flagship 03 — Regulatory Intelligence & AI Workflows",
    title: "EY Regulatory Intelligence & AI Workflows",
    org: "Ernst & Young GDS · 2.5 Years · Spot Award",
    image: eyImg.url,
    headline: [
      "Financial institutions operate in fast-changing regulatory environments where new guidance must be analysed, interpreted, and communicated quickly.",
      "The challenge was to convert large volumes of regulatory publications into structured, actionable intelligence that business teams could understand and apply with confidence.",
    ],
    metrics: [
      { k: "4", v: "Jurisdictions" },
      { k: "30–40%", v: "Efficiency Gain" },
      { k: "3", v: "AI Failure Modes" },
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
    transition: [
      "Traditional regulatory review is time-intensive and difficult to scale.",
      "Rather than replacing human judgement, the objective was to augment regulatory analysis with AI-assisted workflows that improved speed, consistency, and knowledge quality while maintaining expert oversight.",
    ],
    outcome: [
      "The redesigned workflow improved processing efficiency by approximately 30–40% while maintaining review quality through structured validation and human oversight.",
      "Standardised outputs improved consistency, strengthened knowledge sharing, and enabled regulatory teams to process complex information more efficiently.",
    ],
    takeaway: [
      "Effective regulatory intelligence is not about processing more documents—it is about transforming complex regulatory information into structured, consistent, and actionable knowledge.",
      "This experience strengthened my ability to combine finance expertise, regulatory analysis, and AI-assisted workflows to improve both operational efficiency and decision-making.",
    ],
    sections: [
      {
        title: "01 · Regulatory Intelligence",
        body: [
          "Monitored regulatory developments across the European Union, United Kingdom, Hong Kong, and Singapore.",
          "Analysed regulatory publications, identified business relevance, and transformed complex regulatory updates into structured intelligence for internal stakeholders.",
        ],
      },
      {
        title: "02 · AI Workflow Design",
        body: [
          "Improved the regulatory intelligence workflow using EYQ, prompt engineering, and AI-assisted classification.",
          "Designed structured prompts and standardised outputs that improved consistency while accelerating document analysis.",
        ],
      },
      {
        title: "03 · Structured Knowledge Design",
        body: [
          "Developed standardised output formats covering regulatory themes, executive summaries, impact statements, and relevance tagging.",
          "The structured approach improved information quality while making regulatory insights easier to consume and compare across jurisdictions.",
        ],
      },
      {
        title: "04 · Human Validation",
        body: [
          "Embedded human review throughout the workflow to address common AI limitations including over-generalisation, misclassification, and incomplete extraction.",
          "This ensured AI supported regulatory analysts without replacing professional judgement.",
        ],
      },
      {
        title: "05 · Process Improvement",
        body: [
          "Redesigned document ingestion from sequential processing to parallel review, improving end-to-end throughput by approximately 30–40%.",
          "The revised workflow increased efficiency while maintaining consistency and quality across regulatory outputs.",
        ],
      },
      {
        title: "06 · Recognition",
        body: "Received the EY Spot Award in recognition of contributions to AI-assisted regulatory intelligence and measurable workflow improvements.",
      },
    ],
  },
  {
    id: "automation",
    eyebrow: "Flagship 04 — Practical AI at Work",
    title: "Finance Process Automation",
    org: "Google Opal · Apps Script · Spreadsheet Engineering",
    image: aiImg.url,
    headline: [
      "Many finance teams continue to rely on repetitive document handling, spreadsheet manipulation, and manual data extraction for routine processes.",
      "My objective has been to apply practical automation that reduces manual effort while preserving finance-grade accuracy, traceability, and operational control.",
    ],
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
    transition: [
      "Automation should improve finance operations—not remove financial judgement.",
      "Every solution was designed to eliminate repetitive work while ensuring finance teams retained visibility, auditability, and control over critical business processes.",
    ],
    outcome: [
      "Practical automation reduced manual processing effort by approximately 50–70% while improving data consistency, traceability, and operational efficiency.",
      "Rather than replacing finance professionals, these solutions enabled teams to focus more time on analysis, control, and decision-making.",
    ],
    takeaway: [
      "The most valuable automation is rarely the most complex.",
      "It is the automation that removes repetitive work while strengthening governance, preserving auditability, and enabling finance teams to make better decisions.",
    ],
    sections: [
      {
        title: "01 · AI Document Extraction",
        body: [
          "Developed three production Google Opal applications that transformed HR and compliance documents into structured JSON outputs ready for finance and payroll processing.",
          "The solutions significantly reduced manual data entry while improving consistency across downstream workflows.",
        ],
        bullets: [
          "QIWA Extractor — invoice no., date, employee, Iqama/border no., amounts → JSON",
          "SheetSnap — image of Excel → structured CSV",
          "ResidencyScan — PDF → names + 10-char border numbers for HR tracking",
        ],
      },
      {
        title: "02 · Finance Document Matching",
        body: [
          "Linked AI-extracted invoice information with bank transaction narratives through structured spreadsheet validation.",
          "This created a reliable connection between source documentation and payment records while reducing manual reconciliation effort.",
        ],
      },
      {
        title: "03 · Intelligent Bank Categorisation",
        body: [
          "Designed a three-tier Google Apps Script framework combining ESS matching, keyword routing, and manual review logic to categorise bank transactions systematically.",
          "The approach automated routine classification while ensuring exceptional transactions received appropriate finance review.",
        ],
        bullets: [
          "Tier 1 — ESS Match: triple-condition (Entity + Target + Date)",
          "Tier 2 — Keyword Router: 15 REGEX paths (MOL 050, Iqama 090, GOSI 060, Traffic 093/040, SEC 002, etc.)",
          "Tier 3 — Manual Review: uncategorised transactions flagged",
        ],
      },
      {
        title: "04 · Spreadsheet Engineering",
        body: [
          "Applied spreadsheet engineering techniques to improve finance workflows, including VBA automation, QuickBooks integrations, structured reconciliation processes, and historical workflow optimisation.",
          "These initiatives established the foundation for a broader automation-first approach to finance operations.",
        ],
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

          {c.transition && (
            <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
              <h4 className={`font-display text-[11px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
                Why It Mattered
              </h4>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {toParas(c.transition).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

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
              <div className="sr-only" aria-hidden="true" />
            )}

            <div className="px-6 md:px-10">
              <div className={`text-[11px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
                Solution Delivery
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6 pb-6 pt-4 md:grid-cols-2 md:px-10 md:pb-10">
              {c.sections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border bg-surface/40 p-6"
                >
                  <h4 className={`font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`}>
                    {s.title}
                  </h4>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {toParas(s.body).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
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
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {toParas(c.outcome).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {c.takeaway && (
              <div className="px-6 pb-6 md:px-10 md:pb-10">
                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <h4 className={`font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`}>
                    Key Takeaway
                  </h4>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {toParas(c.takeaway).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
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
