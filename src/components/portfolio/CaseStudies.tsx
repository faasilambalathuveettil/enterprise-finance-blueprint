import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionEyebrow } from "./shared";
import { ChevronDown, CheckCircle2, Boxes, ShieldCheck, Sparkles, Bot, Layers } from "lucide-react";
import { CaseVisual } from "./CaseVisuals";
import { AnimatedCounter } from "./AnimatedCounter";
import { chipDescriptions } from "./chipDescriptions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import erpImg from "@/assets/project-erp.jpg";
import aiImg from "@/assets/project-ai.jpg";
import eyImg from "@/assets/project-ey.jpg";
import commercialImg from "@/assets/project-commercial.jpg";

type Paragraphs = string | string[];
type Priority = "primary" | "secondary" | "supporting";
type Section = {
  title: string;
  body: Paragraphs;
  bullets?: string[];
  priority?: Priority;
  timeline?: { label: string; date: string; live?: boolean }[];
};
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
    org: "Al Imtiaz Corner Logistics · 7 Legal Entities",
    image: erpImg,
    headline: [
      "The organisation operated seven legal entities using spreadsheet-based accounting, fragmented approval workflows, and inconsistent financial structures that limited visibility, governance, and scalability.",
      "The objective was to design and implement a scalable ERP finance operating model while maintaining uninterrupted day-to-day operations.",
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
      "Before ERP configuration could begin, master data, governance rules, approval workflows, reporting structures, and internal controls had to be defined as one integrated operating model.",
    ],
    outcome: [
      "The implementation established a structured finance operating model supporting seven legal entities through standardised master data, controlled workflows, improved reporting consistency, and regulatory readiness.",
      "Rather than replacing spreadsheets with ERP, the project created the operational foundation for automation, compliance, and scalable finance operations.",
    ],
    takeaway: [
      "Successful ERP implementation depends less on software configuration than on designing the operating model that connects people, processes, controls, and data.",
    ],
    sections: [
      {
        title: "01 · Chart of Accounts Architecture",
        priority: "primary",
        body: [
          "Designed a 110+ account Chart of Accounts across a four-level hierarchy (Group → Sub-Group → Account Head → Detail Account).",
          "Structured the model for multi-company, project, phase, and cost-centre reporting while redesigning the Balance Sheet with dedicated asset, accumulated depreciation, and expense mappings.",
        ],
      },
      {
        title: "02 · ESS Payment Workflow",
        priority: "primary",
        body: [
          "Replaced informal WhatsApp approvals with an 11-stage ERP workflow covering the complete payment lifecycle from Draft to Closed.",
          "Introduced role-based approvals, conditional routing, treasury separation, and a complete audit trail.",
        ],
        bullets: [
          "Draft → Submitted → PM Approval → Finance Review",
          "Finance Manager → Management Approval → Release Readiness",
          "Treasury → Executed → Finance Closing → Closed",
          "Defined user role and access logic across the workflow",
          "Authored 16+ functional enhancement specifications to refine workflow controls, approval visibility, and operational usability across a live environment that has processed 900+ payment requests to date.",
        ],
      },
      {
        title: "03 · Fixed Asset Register",
        priority: "primary",
        body: [
          "Designed the Fixed Asset Register covering nine asset groups with structured asset master data, useful life, depreciation rates, and accumulated depreciation.",
          "Specified the monthly straight-line depreciation logic aligned with KSA Zakat/Income Tax Article 17; the automation was configured in the ERP by the implementation vendor based on this functional specification.",
        ],
      },
      {
        title: "04 · DPR Module",
        priority: "supporting",
        body: [
          "Designed a dedicated Direct Payment Receipt workflow for post-execution treasury payments outside the standard approval cycle.",
          "Added 25 payment categories, mandatory supporting documentation, unique numbering, and full ERP audit traceability.",
        ],
      },
      {
        title: "05 · HRMS Requirements",
        priority: "supporting",
        body: [
          "Authored Employee Master Specification v2.0 comprising 58 fields across ten business categories.",
          "Defined calculated fields, expiry logic, dashboard requirements, bulk upload templates, and UI specifications to support future HRMS deployment.",
          "Status: Currently in active testing with the ERP vendor.",
        ],
      },
      {
        title: "06 · Bulk Upload Infrastructure",
        priority: "supporting",
        body: [
          "Developed a controlled Excel-based bulk upload framework supporting approximately 1,500 monthly transactions across seven legal entities.",
          "Embedded validation rules, account mapping, dropdown controls, and entity-project-phase eligibility—improving data quality while reducing transaction processing time by approximately 10–20%.",
        ],
      },
      {
        title: "07 · Vendor Coordination & Requirements Engineering",
        priority: "supporting",
        body: [
          "Led finance-side functional coordination with the ERP vendor, authoring specifications, coordinating UAT, validating configurations, and ensuring the implemented solution aligned with finance and business requirements.",
        ],
      },
    ],
  },
  {
    id: "zatca",
    eyebrow: "Flagship 02 — KSA Regulatory Transformation",
    title: "ZATCA Phase 2 e-Invoicing Integration",
    org: "Business-side ERP Implementation · 3 Legal Entities",
    image: eyImg,

    headline: [
      "Saudi Arabia's transition to ZATCA Phase 2 required more than connecting an ERP to a government platform.",
      "Finance master data, invoice validation, document numbering, compliance controls, and operational workflows all had to be redesigned before invoices could be issued in production.",
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
      "The challenge was not simply achieving go-live, but creating a controlled operating model capable of sustaining compliance through structured data, testing, exception handling, and production governance.",
    ],
    outcome: [
      "The implementation established a repeatable compliance framework supporting three legal entities through standardised customer master data, structured testing, controlled invoice validation, and production-ready ERP processes.",
      "Rather than completing a one-time regulatory project, the organisation gained a scalable compliance operating model capable of supporting future regulatory change.",
    ],
    takeaway: [
      "Sustainable regulatory compliance is achieved when governance is embedded into everyday finance operations rather than added as a separate control layer.",
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
        body: "Delivered in 7 weeks:",
        bullets: ["SAR 100 dummy invoice/credit note simulation across all 3 entities, then a real credit note live at go-live from Al Imtiaz Corner."],
        timeline: [
          { label: "CSID Onboarding", date: "Apr 24, 2026" },
          { label: "EGS Unit Setup", date: "May 4, 2026" },
          { label: "Sandbox / Simulation Testing (all 3 entities)", date: "May 5 – Jun 6, 2026" },
          { label: "Go-Live", date: "Jun 11, 2026", live: true },
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
    org: "Ernst & Young GDS · 3 Awards",
    image: eyImg,
    headline: [
      "Financial institutions operate in fast-changing regulatory environments where new guidance must be analysed, interpreted, and communicated quickly.",
      "The challenge was to convert large volumes of regulatory publications into structured, actionable intelligence that business teams could understand and apply with confidence.",
    ],
    metrics: [
      { k: "7", v: "Jurisdictions" },
      { k: "30–40%", v: "Efficiency Gain" },
      { k: "3", v: "AI Failure Modes" },
      { k: "3", v: "EY Recognition Awards" },
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
      "EY Regulatory Radar is a proprietary EY platform. My contribution was operating the platform, structuring prompts, and improving downstream workflows on top of it — not building the platform itself.",
      "Traditional regulatory review is time-intensive and difficult to scale.",
      "Rather than replacing human judgement, the objective was to augment regulatory analysis with AI-assisted workflows that improved speed, consistency, and knowledge quality while maintaining expert oversight.",
    ],
    outcome: [
      "Improved regulatory intelligence throughput by approximately 30–40% through workflow redesign, AI-assisted classification, and structured human validation while maintaining output quality.",
      "Created a repeatable knowledge delivery framework that improved consistency, accelerated regulatory analysis, and supported more effective decision-making.",
    ],
    takeaway: [
      "This project demonstrated that combining finance expertise with structured AI workflows can transform complex regulatory information into scalable business intelligence.",
    ],
    sections: [
      {
        title: "01 · Regulatory Intelligence",
        body: [
          "Monitored regulatory developments across seven jurisdictions — European Union, United Kingdom, Hong Kong, Singapore, Ireland, Jersey, and Australia.",
          "Analysed regulatory publications, identified business relevance, and transformed complex regulatory updates into structured intelligence for internal stakeholders.",
        ],
      },
      {
        title: "02 · AI Workflow Design",
        body: [
          "Improved the regulatory intelligence workflow using EYQ, prompt engineering, and AI-assisted classification.",
          "Engineered hierarchical decision-tree prompts across six unique prompt types, producing taxonomy-aligned structured outputs that improved consistency and accelerated regulatory analysis.",
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
        body: "Received two EY Spot Awards and one GDS User Recognition Award from the onshore team, in recognition of contributions to AI-assisted regulatory intelligence and measurable workflow improvements.",
      },
    ],
  },
  {
    id: "automation",
    eyebrow: "Flagship 04 — Practical AI at Work",
    title: "Finance Process Automation",
    org: "Google Opal · Apps Script · AI Workflow Automation",
    image: aiImg,
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
      "Practical automation reduced manual processing effort by approximately 50–70% while improving data consistency, traceability, and operational efficiency—freeing finance teams to focus more on analysis, control, and decision-making.",
    ],
    takeaway: [
      "The most valuable automation is rarely the most complex.",
      "Effective automation removes repetitive work while strengthening governance, preserving auditability, and enabling better financial decision-making.",
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
const accentBar: Record<string, string> = {
  primary: "bg-gradient-to-r from-primary via-primary-glow to-primary/40",
  emerald: "bg-gradient-to-r from-emerald via-emerald/80 to-emerald/30",
  amber: "bg-gradient-to-r from-amber via-amber/80 to-amber/30",
  purple: "bg-gradient-to-r from-purple via-purple/80 to-purple/30",
};
const accentGlow: Record<string, string> = {
  primary: "bg-primary/10",
  emerald: "bg-emerald/10",
  amber: "bg-amber/10",
  purple: "bg-purple/10",
};

const tagIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Orison ERP": Boxes,
  "ZATCA Phase 2": ShieldCheck,
  "EY Regulatory Radar": Sparkles,
  "EYQ / OpenAI": Bot,
  "AI-Assisted Classification": Bot,
  "AI Workflow Design": Bot,
  "Google Opal": Layers,
};

function MilestoneTimeline({
  items,
}: {
  items: { label: string; date: string; live?: boolean }[];
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
            }}
            className={`flex min-w-[120px] flex-col items-center rounded-lg border px-3 py-2 text-center ${
              item.live
                ? "border-emerald/40 bg-emerald/5"
                : "border-border bg-surface/40"
            }`}
          >
            <div className="flex items-center justify-center gap-1.5">
              {item.live && (
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/70 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
                </span>
              )}
              <span
                className={`text-[12px] font-semibold ${
                  item.live ? "text-emerald" : "text-foreground/80"
                }`}
              >
                {item.label}
              </span>
            </div>
            <span className="text-[12px] text-muted-foreground">{item.date}</span>
          </motion.div>
          {i < items.length - 1 && (
            <div className="hidden h-px w-4 bg-border md:block" />
          )}
        </div>
      ))}
    </div>
  );
}

function ChipWithTooltip({ label, desc }: { label: string; desc: string }) {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        (window.matchMedia?.("(hover: none)").matches || "ontouchstart" in window),
    );
  }, []);
  const Icon = tagIcons[label];
  return (
    <Tooltip open={isTouch ? open : undefined} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={() => isTouch && setOpen((v) => !v)}
          className="inline-flex cursor-help items-center gap-1 rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[12px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
        >
          {Icon && <Icon className="h-3 w-3 shrink-0" />}
          {label}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[320px] text-sm leading-relaxed">
        {desc}
      </TooltipContent>
    </Tooltip>
  );
}

function CaseCard({ c }: { c: Case }) {
  const [open, setOpen] = useState(false);
  const isFlagship = c.id === "erp" || c.id === "zatca";
  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className={`ambient-sheen card-hover group relative overflow-hidden rounded-3xl backdrop-blur-md ${
        isFlagship
          ? "border border-border-strong bg-gradient-to-b from-card to-card/80 shadow-elegant"
          : "border border-border bg-card"
      }`}
    >
      {/* Subtle chapter glow — creates visual memory per flagship */}
      <div className={`pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full blur-3xl ${accentGlow[c.accent]}`} />
      <div className={`pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full blur-3xl ${accentGlow[c.accent]} opacity-60`} />
      {/* Top-edge accent bar — only on primary flagship cards (ERP + ZATCA) */}
      {isFlagship && (
        <div className={`flagship-border h-[3px] w-full ${accentBar[c.accent]}`} />
      )}

      <div className="flex flex-col">
        {/* Content */}
        <div className="flex flex-col p-6 md:p-10">
          <span className={`mb-4 inline-flex w-fit items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${accentText[c.accent]}`}>
            {c.eyebrow}
          </span>
          <h3 className="font-display text-2xl font-bold leading-tight text-foreground md:text-[32px]">
            {c.title}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-muted-foreground">{c.org}</p>


          <div className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] ${accentText[c.accent]}`}>
            Business Context
          </div>
          <div className="mt-3 max-w-[65ch] space-y-3 text-[15px] leading-relaxed text-muted-foreground">
            {toParas(c.headline).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {c.transition && (
            <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
              <h4 className={`font-display text-[12px] font-semibold uppercase tracking-[0.18em] ${accentText[c.accent]}`}>
                Why It Mattered
              </h4>
              <div className="mt-3 max-w-[65ch] space-y-2 text-sm leading-relaxed text-muted-foreground">
                {toParas(c.transition).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          <div className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] ${accentText[c.accent]}`}>
            Transformation Overview
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {c.metrics.map((m) => (
              <div key={m.v} className="rounded-xl border border-border bg-surface/60 p-3 text-center transition-colors hover:border-border-strong">
                <AnimatedCounter
                  value={m.k}
                  className={`font-display text-lg font-bold ${accentText[c.accent]}`}
                />
                <div className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {m.v}
                </div>
              </div>
            ))}
          </div>

          {c.tagsHeading && (
            <div className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] ${accentText[c.accent]}`}>
              {c.tagsHeading}
            </div>
          )}
          <TooltipProvider delayDuration={150}>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.tags.map((t) => {
                const desc = chipDescriptions[t];
                const Icon = tagIcons[t];
                if (!desc) {
                  return (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[12px] text-muted-foreground"
                    >
                      {Icon && <Icon className="h-3 w-3 shrink-0" />}
                      {t}
                    </span>
                  );
                }
                return <ChipWithTooltip key={t} label={t} desc={desc} />;
              })}
            </div>
          </TooltipProvider>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border-strong bg-surface/70 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-surface hover:border-border-strong/80"
            aria-expanded={open}
            aria-label={open ? "Collapse case study" : "View full case study"}
          >
            {open ? "Collapse Case Study" : "View Full Case Study"}
            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-300 ease-out ${accentText[c.accent]} ${open ? "rotate-180" : ""}`}
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border"
          >
            <div className="p-6 md:p-10">
              <CaseVisual id={c.id} accent={c.accent} />
            </div>


            <div className="px-6 md:px-10">
              <div className={`text-[12px] font-bold uppercase tracking-widest ${accentText[c.accent]}`}>
                Solution Delivery
              </div>
            </div>

            {(() => {
              const primarySections = c.sections.filter((s) => (s.priority ?? "secondary") === "primary");
              const supportingSections = c.sections.filter((s) => (s.priority ?? "secondary") === "supporting");
              const secondarySections = c.sections.filter((s) => (s.priority ?? "secondary") === "secondary");
              const useSplit = primarySections.length > 0 && supportingSections.length > 0;

              const renderCard = (s: Section, mode: "primary" | "supporting" | "secondary") => (
                <div key={s.title} className={mode === "primary"
                  ? `rounded-2xl border border-border-strong border-l-4 bg-surface/60 p-7 shadow-elegant ${
                      { primary: "border-l-primary", emerald: "border-l-emerald", amber: "border-l-amber", purple: "border-l-purple" }[c.accent]
                    }`
                  : mode === "supporting"
                    ? "rounded-xl border border-border bg-surface/40 py-4 px-5 h-full"
                    : "rounded-2xl border border-border bg-surface/40 p-6"
                }>
                  <h4 className={mode === "primary"
                    ? `font-display text-base font-bold uppercase tracking-wider ${accentText[c.accent]}`
                    : mode === "supporting"
                      ? `font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`
                      : `font-display text-sm font-bold uppercase tracking-wider ${accentText[c.accent]}`
                  }>{s.title}</h4>
                  <div className={mode === "supporting"
                    ? "mt-3 max-w-[65ch] space-y-2 text-sm leading-relaxed text-muted-foreground"
                    : "mt-4 max-w-[65ch] space-y-3 text-sm leading-relaxed text-muted-foreground"
                  }>
                    {toParas(s.body).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {s.timeline && <MilestoneTimeline items={s.timeline} />}
                  {s.bullets && (
                    <ul className={mode === "supporting" ? "mt-3 space-y-1.5" : "mt-4 space-y-1.5"}>
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentText[c.accent]}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );

              if (useSplit) {
                return (
                  <>
                    <div className="space-y-5 px-6 pb-6 pt-4 md:px-10">
                      {primarySections.map((s) => renderCard(s, "primary"))}
                    </div>
                    <div className="mt-8 px-6 md:px-10">
                      <div className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${accentText[c.accent]}`}>
                        Supporting Solution Components
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 px-6 pb-6 pt-4 md:grid-cols-2 md:px-10">
                      {supportingSections.map((s) => renderCard(s, "supporting"))}
                    </div>
                  </>
                );
              }

              return (
                <div className="grid grid-cols-1 gap-5 px-6 pb-6 pt-4 md:grid-cols-2 md:px-10 md:pb-10">
                  {c.sections.map((s) => {
                    const p = s.priority ?? "secondary";
                    return renderCard(s, p as "primary" | "supporting" | "secondary");
                  })}
                </div>
              );
            })()}

            {c.outcome && (
              <div className="px-6 pb-6 md:px-10">
                <div className="ambient-sheen relative overflow-hidden rounded-2xl border border-border border-l-4 border-l-emerald bg-emerald/5 p-6">

                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-emerald">
                    Business Outcome
                  </h4>
                  <div className="mt-4 max-w-[65ch] space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {toParas(c.outcome).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {c.takeaway && (
              <div className="px-6 pb-6 md:px-10 md:pb-10">
                <div className="rounded-2xl border border-border border-l-[3px] border-l-primary bg-primary/[0.03] p-6">
                  <h4 className="font-display text-[12px] font-semibold uppercase tracking-wider text-primary-glow">
                    Key Takeaway
                  </h4>
                  <div className="mt-4 max-w-[65ch] space-y-3 text-sm leading-relaxed text-muted-foreground">
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
cases[1].image = commercialImg;

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
