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

function ErpVisual({ accent }: { accent: string }) {
  return (
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
