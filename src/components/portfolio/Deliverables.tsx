import { Reveal, SectionEyebrow } from "./shared";
import {
  FileSpreadsheet,
  Network,
  Users,
  Receipt,
  GitBranch,
  Landmark,
  Sparkles,
  Code2,
  Lock,
} from "lucide-react";

type Deliverable = {
  name: string;
  type: string;
  icon: typeof FileSpreadsheet;
  tint: string;
  body: string;
  preview: "coa" | "hrms" | "customer" | "dpr" | "ess" | "far" | "opal" | "appsscript";
};

const items: Deliverable[] = [
  {
    name: "Chart of Accounts Hierarchy",
    type: "COA · 110+ Accounts · 4-Level",
    icon: Network,
    tint: "primary",
    body: "Four-level Chart of Accounts designed for multi-entity finance, project accounting, cost centres, and future ERP reporting requirements.",
    preview: "coa",
  },
  {
    name: "HRMS Employee Master Specification",
    type: "58 Fields · 10 Categories · v2.0",
    icon: FileSpreadsheet,
    tint: "emerald",
    body: "Employee Master Specification defining 58 structured fields across ten business categories, supporting dashboard reporting, bulk upload, validation rules, and future HRMS deployment.",
    preview: "hrms",
  },
  {
    name: "Customer Master · ZATCA Compliance",
    type: "11 Mandatory Fields · Phase 2",
    icon: Users,
    tint: "emerald",
    body: "Business-side Customer Master specification defining mandatory compliance attributes supporting ZATCA Phase 2 integration, invoice validation, and production deployment.",
    preview: "customer",
  },
  {
    name: "DPR Module Specification",
    type: "2-Stage Workflow · 25 Categories",
    icon: Receipt,
    tint: "primary",
    body: "Workflow specification supporting post-execution treasury payments through structured documentation, mandatory evidence, and ERP audit traceability.",
    preview: "dpr",
  },
  {
    name: "ESS Payment Workflow",
    type: "11 Stages · Draft → Closed",
    icon: GitBranch,
    tint: "primary",
    body: "Eleven-stage approval workflow introducing structured governance, treasury separation, conditional routing, and complete auditability.",
    preview: "ess",
  },
  {
    name: "Fixed Asset Register",
    type: "FAR · 9 Asset Groups · Auto-Depreciation",
    icon: Landmark,
    tint: "amber",
    body: "Structured asset register supporting automated depreciation, policy compliance, and standardised fixed asset management across multiple asset classes.",
    preview: "far",
  },
  {
    name: "Google Opal Extraction Apps",
    type: "3 Production Apps · JSON Output",
    icon: Sparkles,
    tint: "purple",
    body: "Production Google Opal applications transforming HR and compliance documents into structured JSON outputs supporting finance and payroll workflows.",
    preview: "opal",
  },
  {
    name: "Apps Script · Bank Categorisation",
    type: "3-Tier Logic · 15 REGEX Paths",
    icon: Code2,
    tint: "purple",
    body: "Three-tier categorisation framework combining ESS matching, keyword routing, and manual review logic to improve bank statement classification.",
    preview: "appsscript",
  },
];

const tintClass: Record<string, { bg: string; text: string; ring: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary-glow", ring: "ring-primary/20" },
  emerald: { bg: "bg-emerald/15", text: "text-emerald", ring: "ring-emerald/20" },
  amber: { bg: "bg-amber/15", text: "text-amber", ring: "ring-amber/20" },
  purple: { bg: "bg-purple/15", text: "text-purple", ring: "ring-purple/20" },
};

// Redacted / blurred preview mockups — stylised, no real client data.
function Preview({ kind, tint }: { kind: Deliverable["preview"]; tint: string }) {
  const t = tintClass[tint];
  const bar = (w: string, opacity = "opacity-70") => (
    <div className={`h-2 rounded ${t.bg} ${opacity}`} style={{ width: w }} />
  );

  if (kind === "coa") {
    const rows = [
      { indent: 0, w: "55%", code: "1000" },
      { indent: 1, w: "70%", code: "1100" },
      { indent: 2, w: "85%", code: "1110" },
      { indent: 2, w: "80%", code: "1120" },
      { indent: 1, w: "65%", code: "1200" },
      { indent: 2, w: "82%", code: "1210" },
    ];
    return (
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2" style={{ paddingLeft: r.indent * 14 }}>
            <span className={`text-[9px] font-mono ${t.text}`}>{r.code}</span>
            {bar(r.w)}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "hrms") {
    return (
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`h-4 rounded-sm ${t.bg} opacity-${i % 3 === 0 ? "90" : "60"}`} />
        ))}
      </div>
    );
  }

  if (kind === "customer") {
    return (
      <div className="space-y-1.5">
        {["Legal Name", "VAT #", "CR #", "Billing Addr", "Postal Code", "Country"].map((l, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-16 text-[9px] uppercase tracking-wider text-muted-foreground">{l}</span>
            {bar("60%")}
          </div>
        ))}
      </div>
    );
  }

  if (kind === "dpr") {
    return (
      <div className="flex items-center justify-between gap-2">
        <div className={`flex-1 rounded ${t.bg} p-2 text-center text-[9px] font-semibold ${t.text}`}>
          Submitted
        </div>
        <div className="text-muted-foreground">→</div>
        <div className={`flex-1 rounded ${t.bg} p-2 text-center text-[9px] font-semibold ${t.text}`}>
          Approved
        </div>
        <div className="text-muted-foreground">→</div>
        <div className={`flex-1 rounded border border-dashed ${t.ring} p-2 text-center text-[9px] font-semibold text-muted-foreground`}>
          Closed
        </div>
      </div>
    );
  }

  if (kind === "ess") {
    return (
      <div className="grid grid-cols-11 gap-1">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-sm ${i < 4 ? t.bg : "bg-white/5"} border ${i < 4 ? t.ring + " ring-1" : "border-border"}`}
            title={`Stage ${i + 1}`}
          />
        ))}
      </div>
    );
  }

  if (kind === "far") {
    return (
      <div className="space-y-1.5">
        {["Vehicles", "IT Equipment", "Furniture", "Buildings"].map((l, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <span className="text-[9px] text-muted-foreground">{l}</span>
            <div className="flex-1">{bar(`${45 + i * 12}%`)}</div>
            <span className={`text-[9px] font-mono ${t.text}`}>—.—</span>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "opal") {
    return (
      <div className={`rounded-md border ${t.ring} ring-1 bg-black/40 p-2 font-mono text-[9px] leading-tight ${t.text}`}>
        <div>{`{`}</div>
        <div className="pl-3">"invoice_no": <span className="opacity-60">"████████"</span>,</div>
        <div className="pl-3">"iqama": <span className="opacity-60">"██████████"</span>,</div>
        <div className="pl-3">"amount": <span className="opacity-60">"█,███.██"</span></div>
        <div>{`}`}</div>
      </div>
    );
  }

  // appsscript
  return (
    <div className="rounded-md bg-black/40 p-2 font-mono text-[9px] leading-tight text-muted-foreground">
      <div><span className={t.text}>function</span> categorise(row) {`{`}</div>
      <div className="pl-3">if (essMatch(row)) return <span className={t.text}>"ESS"</span>;</div>
      <div className="pl-3">if (regexRoute(row)) return <span className={t.text}>"Auto"</span>;</div>
      <div className="pl-3">return <span className={t.text}>"Review"</span>;</div>
      <div>{`}`}</div>
    </div>
  );
}

export function Deliverables() {
  return (
    <section id="deliverables" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Documentation</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Selected <span className="text-gradient">Deliverables</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base">
            Representative deliverables recreated from live implementations. Client-specific information has been anonymised while preserving the underlying structure, business logic, and solution design. Additional documentation can be shared where appropriate under NDA.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => {
            const Icon = d.icon;
            const t = tintClass[d.tint];
            return (
              <div
                key={d.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${t.bg} ${t.text}`}>
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <Lock className="h-2.5 w-2.5" /> Redacted
                  </span>
                </div>

                <div className="mb-3 rounded-lg border border-border bg-surface/40 p-3">
                  <Preview kind={d.preview} tint={d.tint} />
                </div>

                <h3 className="font-display text-sm font-semibold text-foreground">
                  {d.name}
                </h3>
                <div className={`mt-0.5 text-[10px] font-bold uppercase tracking-wider ${t.text}`}>
                  {d.type}
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-xs text-muted-foreground">
            Illustrations represent authentic solution structures and workflow designs. Client names, values, and confidential information have been anonymised while preserving the technical implementation approach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
