import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionEyebrow } from "./shared";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { CaseVisual } from "./CaseVisuals";
import erpImg from "@/assets/project-erp.jpg.asset.json";
import aiImg from "@/assets/project-ai.jpg.asset.json";
import eyImg from "@/assets/project-ey.jpg.asset.json";
import commercialImg from "@/assets/project-commercial.jpg.asset.json";

type Section = { title: string; body: string; bullets?: string[] };
type Case = {
  id: string;
  eyebrow: string;
  title: string;
  org: string;
  image: string;
  headline: string;
  metrics: { k: string; v: string }[];
  tags: string[];
  sections: Section[];
  accent: string;
  transition?: string;
  outcome?: string;
  takeaway?: string;
};

const cases: Case[] = [
  {
    id: "erp",
    eyebrow: "Flagship 01 — End-to-End Build",
    title: "Multi-Entity ERP Finance System",
    org: "Al Imtiaz Corner Logistics · Nov 2025 → Present",
    image: erpImg.url,
    headline:
      "The organisation operated seven legal entities using Excel-based accounting, manual approval processes, and fragmented financial controls. The implementation required designing the finance operating model before ERP configuration could begin — a structured foundation capable of supporting governance, scalability, regulatory compliance, and future automation while maintaining uninterrupted daily operations.",
    metrics: [
      { k: "7", v: "Legal Entities" },
      { k: "110+", v: "COA Accounts" },
      { k: "1,500+", v: "Txn / Month" },
      { k: "11", v: "ESS Stages" },
    ],
    tags: [
      "Orison ERP",
      "COA Architecture",
      "ESS Payment Workflow",
      "DPR Module",
      "Fixed Asset Register",
      "Bulk Upload Framework",
      "HRMS Requirements",
      "Multi-Entity Accounting",
      "Intercompany",
    ],
    accent: "primary",
    sections: [
      {
        title: "01 · Chart of Accounts Architecture",
        body: "Designed a 110+ account COA from scratch across a 4-level hierarchy (Group → Sub-Group → Account Head → Detail Account). Sole responsibility for architecture, category structure, and account segregation. Structured for multi-company, project, phase, and cost-centre reporting. Full Balance Sheet restructuring with 1:1 asset / accumulated-depreciation / expense mapping.",
      },
      {
        title: "02 · Payment Workflow (ESS) — Live Feb 2026",
        body: "Engineered the 11-stage ESS Payment Request workflow replacing WhatsApp-based informal approvals — covering the full lifecycle from draft to closed with conditional risk-based routing, treasury separation, and complete audit trail.",
        bullets: [
          "Draft → Submitted → PM Approval → Finance Review",
          "Finance Manager → Management Approval → Release Readiness",
          "Treasury → Executed → Finance Closing → Closed",
          "Defined user role and access logic across the workflow",
        ],
      },
      {
        title: "03 · Fixed Asset Register — Live April 2026",
        body: "Structured FAR in Orison ERP: each asset recorded with cost, acquisition date, useful life, depreciation rate, and accumulated depreciation across 9 asset groups. Automated recurring monthly depreciation (straight-line) with policy aligned to KSA Zakat/Income Tax Article 17. Eliminated manual calculation and posting risk.",
      },
      {
        title: "04 · DPR Module — Live May 2026",
        body: "Direct Payment Receipt — a 2-stage workflow for post-execution treasury payments bypassing the approval loop. 25 category options (14 original + 11 added June 29, 2026), mandatory proof upload, distinct DP numbering. Closes the documentation gap so 100% of payments are ERP-recorded.",
      },
      {
        title: "05 · HRMS Requirements — 58 Fields · In Active Testing",
        body: "Authored Employee Master Specification v2.0 — 58 fields across 10 categories (Basic, Passport, Visa/Iqama, Insurance, Driving, Sponsor, Employment, Deployment, Ajeer, Status). 11 calculated fields, 3-state expiry logic, employee code prefix system, 2 bulk upload templates, dashboard requirements, and UI wireframe. Submitted to Orison April 2026 — module currently in active testing.",
      },
      {
        title: "06 · Bulk Upload Infrastructure",
        body: "Custom Excel bulk upload workbook with VLOOKUP validation, 26-column layout, and multi-layer control framework (account mapping, dropdown restrictions, company-project-phase eligibility). Handles ~1,500 transactions/month across 7 entities with intercompany journal support.",
      },
      {
        title: "07 · Vendor Coordination & Requirements Engineering",
        body: "Point of contact with the ERP vendor across every module — writing formal specifications, running UAT, coordinating configuration changes, and closing gaps between finance intent and system behaviour.",
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
      "Saudi Arabia's ZATCA Phase 2 introduced mandatory real-time e-invoicing requirements that demanded coordinated changes across finance, ERP configuration, master data, and compliance processes. Success depended on translating regulatory guidance into practical ERP configuration, master data standards, testing procedures, and production-ready business workflows.",
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
    sections: [
      {
        title: "01 · Business Requirements & Customer Master Spec",
        body: "Authored the formal 11-field ZATCA Customer Master compliance specification — the single source of truth aligning finance, sales, and IT on data required for compliant invoices and credit notes.",
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
    eyebrow: "Flagship 03 — Enterprise Consulting",
    title: "EY Regulatory Intelligence & AI Workflows",
    org: "Ernst & Young GDS · 2.5 Years · Spot Award",
    image: eyImg.url,
    headline:
      "Financial institutions operating across multiple jurisdictions depend on timely regulatory intelligence to support governance and risk management. At EY, I helped redesign the regulatory intelligence workflow by combining structured research methods with AI-assisted classification, improving speed while maintaining quality and governance.",
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
      "3-Layer Taxonomy",
      "Human-in-the-Loop",
    ],
    accent: "amber",
    sections: [
      {
        title: "01 · Regulatory Intelligence Pipeline",
        body: "End-to-end regulatory intelligence across EU, UK, HK, and Singapore — horizon scanning → extraction → classification → validation → structured output. Sources included AFME, EBA, ESMA, OJEU, European Parliament, and other global authorities.",
      },
      {
        title: "02 · EYQ Prompt Architecture",
        body: "Engineered a decision-tree prompt architecture in EYQ (OpenAI-based EY internal tool) with a multi-stage classification pipeline and conditional logic for multi-sector and ambiguous publications.",
        bullets: [
          "Cluster → Category → Sector/Sub-sector → Binding/Advisory → One-liner",
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
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            {c.headline}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
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

          <div className="mt-5 flex flex-wrap gap-1.5">
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
            {open ? "Hide detail" : "Read case study"}
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
