import { motion } from "framer-motion";
import {
  Wallet,
  Scale,
  PiggyBank,
  TrendingUp,
  Receipt,
  FileText,
  Cpu,
  Braces,
  Search,
  Database,
  CheckCircle2,
  FileSpreadsheet,
  Mail,
  Keyboard,
  ClipboardCheck,
  UploadCloud,
  ShieldCheck,
  Workflow,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const accentText: Record<string, string> = {
  primary: "text-primary-glow",
  emerald: "text-emerald",
  amber: "text-amber",
  purple: "text-purple",
};
const accentBorder: Record<string, string> = {
  primary: "border-primary/30",
  emerald: "border-emerald/30",
  amber: "border-amber/30",
  purple: "border-purple/30",
};

function VisualFrame({
  label,
  accent,
  children,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6">
      <div
        className={`mb-5 font-display text-[11px] font-bold uppercase tracking-widest ${accentText[accent]}`}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

/* -------- ERP: COA (5 categories) + ESS (11 stages) -------- */
const coa = [
  { label: "Assets", icon: Wallet },
  { label: "Liabilities", icon: Scale },
  { label: "Equity", icon: PiggyBank },
  { label: "Revenue", icon: TrendingUp },
  { label: "Expenses", icon: Receipt },
];
const ess = [
  "Draft",
  "Submitted",
  "PM Approval",
  "Finance Review",
  "Finance Manager",
  "Management",
  "Release Ready",
  "Treasury",
  "Executed",
  "Finance Closing",
  "Closed",
];

const bulkBefore = [
  { label: "Manual Excel entry", icon: FileSpreadsheet },
  { label: "Email approval chain", icon: Mail },
  { label: "Manual ERP re-entry", icon: Keyboard },
  { label: "Reconciliation by hand", icon: ClipboardCheck },
];
const bulkAfter = [
  { label: "Bulk template upload", icon: UploadCloud },
  { label: "Automated validation", icon: ShieldCheck },
  { label: "System-routed approval", icon: Workflow },
  { label: "Auto-posted to ERP", icon: CheckCircle2 },
];

function BulkUploadBeforeAfter({ accent }: { accent: string }) {
  return (
    <VisualFrame label="Bulk Voucher Upload · Before → After" accent={accent}>
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        {/* BEFORE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-md"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-display text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Before
            </span>
            <span className="rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              Manual · Excel
            </span>
          </div>
          <ul className="space-y-2">
            {bulkBefore.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-md border border-border/70 bg-surface/40 px-2.5 py-1.5"
                >
                  <span className="font-mono text-[10px] font-bold text-muted-foreground/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-[12px] text-foreground/85">{s.label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.32, delay: 0.18 }}
          className="flex items-center justify-center"
          aria-hidden
        >
          <ArrowRight className="hidden h-5 w-5 text-emerald md:block" />
          <ArrowDown className="h-5 w-5 text-emerald md:hidden" />
        </motion.div>

        {/* AFTER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.13 }}
          className="rounded-xl border border-emerald/40 bg-emerald/[0.04] p-4 backdrop-blur-md"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-display text-[11px] font-bold uppercase tracking-widest text-emerald">
              After
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 bg-emerald/10 px-2 py-0.5 text-[10px] font-medium text-emerald">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/70 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
              </span>
              Automated · ERP
            </span>
          </div>
          <ul className="space-y-2">
            {bulkAfter.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-md border border-emerald/30 bg-emerald/[0.06] px-2.5 py-1.5"
                >
                  <span className="font-mono text-[10px] font-bold text-emerald">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-3.5 w-3.5 text-emerald" />
                  <span className="text-[12px] text-foreground/90">{s.label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground">
        ~1,500 monthly transactions · 7 legal entities · validation, mapping & entity-project-phase controls · ~10–20% faster processing
      </div>
    </VisualFrame>
  );
}

function ErpVisual({ accent }: { accent: string }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <VisualFrame label="Chart of Accounts · 5 Categories" accent={accent}>
          <div className="grid grid-cols-5 gap-2">
            {coa.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`flex flex-col items-center gap-2 rounded-xl border ${accentBorder[accent]} bg-card p-3 text-center`}
                >
                  <Icon className={`h-4 w-4 ${accentText[accent]}`} />
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground">
                    {c.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground">
            110+ accounts · 4-level hierarchy · multi-entity, project & cost-centre
            dimensions
          </div>
        </VisualFrame>

        <VisualFrame label="ESS Payment Workflow · 11 Stages" accent={accent}>
          <div className="flex flex-wrap gap-1.5">
            {ess.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-1.5"
              >
                <div
                  className={`rounded-md border ${accentBorder[accent]} bg-card px-2 py-1 text-[10px] font-medium text-foreground`}
                >
                  <span
                    className={`mr-1 font-bold ${accentText[accent]}`}
                  >{`${String(i + 1).padStart(2, "0")}`}</span>
                  {s}
                </div>
                {i < ess.length - 1 && (
                  <span className="text-muted-foreground/60">›</span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-muted-foreground">
            Draft → Closed · risk-based routing · treasury separation · full audit
            trail
          </div>
        </VisualFrame>
      </div>

      <BulkUploadBeforeAfter accent={accent} />
    </div>
  );
}

/* -------- ZATCA: timeline -------- */
const zatcaSteps = [
  { d: "Apr 24 – May 4, 2026", t: "CSID Onboarding & ERP Configuration" },
  { d: "May 5 – Jun 6, 2026", t: "Sandbox Simulation · Invoices + Credit Notes" },
  { d: "Jun 11, 2026", t: "LIVE · 3 Entities on ZATCA Phase 2" },
  { d: "Post Go-Live", t: "4-Step Monitoring · Clearance · Reconciliation" },
];
function ZatcaVisual({ accent }: { accent: string }) {
  return (
    <VisualFrame label="Implementation Journey" accent={accent}>
      <div className="relative">
        <div className="absolute left-2 top-1 h-full w-px bg-border md:left-1/2" />
        <ol className="space-y-4">
          {zatcaSteps.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-8 md:grid md:grid-cols-2 md:gap-6 md:pl-0"
            >
              <div
                className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${accentBorder[accent]} bg-background md:left-1/2 md:-translate-x-1/2`}
              >
                <div
                  className={`m-auto mt-[3px] h-2 w-2 rounded-full ${
                    i === 2
                      ? "bg-emerald animate-pulse"
                      : accent === "emerald"
                      ? "bg-emerald/60"
                      : "bg-primary/60"
                  }`}
                />
              </div>
              <div
                className={`md:text-right md:pr-8 ${
                  i % 2 === 0 ? "" : "md:order-2 md:text-left md:pl-8 md:pr-0"
                }`}
              >
                <div
                  className={`text-[11px] font-bold uppercase tracking-widest ${accentText[accent]}`}
                >
                  {s.d}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">
                  {s.t}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </VisualFrame>
  );
}

/* -------- EY: regulatory intelligence workflow -------- */
const eyWorkflow = [
  { t: "Regulatory Publication", s: "Horizon Scanning", icon: FileText },
  { t: "Research & Review", s: "Review & Analysis", icon: Search },
  { t: "AI-assisted Classification", s: "EYQ / Prompt Engineering", icon: Cpu },
  { t: "Structured Summary", s: "Standardised Output", icon: Braces },
  { t: "Quality Review", s: "Human Validation", icon: CheckCircle2 },
  { t: "Knowledge Distribution", s: "Team Distribution", icon: Database },
];
function EyVisual({ accent }: { accent: string }) {
  return (
    <VisualFrame label="Regulatory Intelligence Workflow" accent={accent}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
        {eyWorkflow.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <div
                className={`flex flex-col items-center rounded-xl border ${accentBorder[accent]} bg-card p-3 text-center`}
              >
                <Icon className={`h-5 w-5 ${accentText[accent]}`} />
                <div className="mt-2 text-[11px] font-semibold text-foreground">
                  {f.t}
                </div>
                <div className="mt-0.5 text-[10px] text-muted-foreground">
                  {f.s}
                </div>
              </div>
              {i < eyWorkflow.length - 1 && (
                <div
                  className={`absolute right-[-10px] top-1/2 hidden -translate-y-1/2 md:block ${accentText[accent]}`}
                >
                  ›
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground">
        End-to-end regulatory intelligence · structured research · AI-assisted classification · human validation · standardised output
      </div>
    </VisualFrame>
  );
}

/* -------- Automation: Opal workflow -------- */
const flow = [
  { t: "PDF Source", s: "QIWA · Iqama · SOA", icon: FileText },
  { t: "Google Opal", s: "AI Extraction", icon: Cpu },
  { t: "Structured JSON", s: "Invoice · Employee · Amount", icon: Braces },
  { t: "VLOOKUP Match", s: "vs Bank Narrative", icon: Search },
  { t: "Bank SOA", s: "Reconciled Ledger", icon: Database },
];
function AutomationVisual({ accent }: { accent: string }) {
  return (
    <VisualFrame label="Automation Workflow" accent={accent}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {flow.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <div
                className={`flex flex-col items-center rounded-xl border ${accentBorder[accent]} bg-card p-3 text-center`}
              >
                <Icon className={`h-5 w-5 ${accentText[accent]}`} />
                <div className="mt-2 text-[11px] font-semibold text-foreground">
                  {f.t}
                </div>
                <div className="mt-0.5 text-[10px] text-muted-foreground">
                  {f.s}
                </div>
              </div>
              {i < flow.length - 1 && (
                <div
                  className={`absolute right-[-10px] top-1/2 hidden -translate-y-1/2 md:block ${accentText[accent]}`}
                >
                  ›
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-3 text-[11px] text-muted-foreground">
        50–70% reduction in manual entry · systematic bank ↔ document linkage
      </div>
    </VisualFrame>
  );
}

export function CaseVisual({ id, accent }: { id: string; accent: string }) {
  switch (id) {
    case "erp":
      return <ErpVisual accent={accent} />;
    case "zatca":
      return <ZatcaVisual accent={accent} />;
    case "ey":
      return <EyVisual accent={accent} />;
    case "automation":
      return <AutomationVisual accent={accent} />;
    default:
      return null;
  }
}
