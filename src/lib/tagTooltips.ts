/**
 * Short explanatory tooltips for case-study tag chips.
 * Only tags with confident, unambiguous meanings are listed;
 * everything else falls back to `undefined` (no tooltip).
 */
const map: Record<string, string> = {
  "Orison ERP": "Primary ERP platform deployed across the seven legal entities",
  "COA Architecture": "110+ accounts across a four-level hierarchy",
  "ESS Workflow": "11-stage payment approval — Draft → Closed",
  "DPR Module": "Direct Payment Receipt — post-execution treasury workflow",
  "Fixed Asset Register": "Nine asset groups with automated monthly depreciation",
  "Bulk Upload": "Controlled Excel framework for ~1,500 transactions / month",
  "HRMS Requirements": "58 fields · 10 categories · Employee Master v2.0",
  "Multi-Entity Accounting": "Consolidated accounting across 7 legal entities",
  Intercompany: "Structured intercompany posting and reconciliation logic",

  "ZATCA Phase 2": "Saudi e-invoicing — integrated invoicing phase",
  "e-Invoicing": "PDF/A-3 invoices with embedded XML and QR",
  "CSID Coordination": "Cryptographic Stamp ID onboarding with ZATCA",
  "Sandbox Simulation": "Pre-production ZATCA testing environment",
  "PDF/A-3 + XML": "Archival PDF with embedded structured invoice XML",
  "Functional Analysis": "Business requirement → ERP specification translation",
  "Compliance Spec": "Business-side compliance data standard",

  "EY Regulatory Radar": "EY's regulatory intelligence platform",
  "EYQ / OpenAI": "EY's internal LLM built on OpenAI",
  "Prompt Engineering": "Structured prompt design for consistent outputs",
  "Structured Output": "Standardised JSON / schema-driven results",
  "AI-Assisted Classification": "AI-suggested tagging with human review",
  "Human-in-the-Loop": "Analyst validation embedded in the workflow",

  "Google Opal": "Google's no-code AI app builder",
  "Google Apps Script": "JavaScript automation across Google Workspace",
  "JSON Extraction": "PDF / image → structured JSON output",
  "REGEX Routing": "Pattern-based rules for transaction categorisation",
  VLOOKUP: "Spreadsheet lookup used for data matching",
  "Spreadsheet Engineering": "Controlled, validated spreadsheet frameworks",
  "AI Workflow Design": "End-to-end AI-assisted process architecture",
};

export function tagTooltip(tag: string): string | undefined {
  return map[tag];
}
