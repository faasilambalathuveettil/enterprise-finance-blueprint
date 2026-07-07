// Concise, executive descriptions for the technology / methodology chips
// used across the flagship case studies. Missing keys render as a plain chip
// without a tooltip.
export const chipDescriptions: Record<string, string> = {
  // ERP
  "Orison ERP":
    "Cloud ERP platform used as the multi-entity finance backbone.",
  "COA Architecture":
    "110+ account, four-level Chart of Accounts supporting multi-entity reporting.",
  "ESS Workflow":
    "Eleven-stage approval workflow with treasury separation and full audit trail.",
  "DPR Module":
    "Direct Payment Receipt workflow for post-execution treasury payments.",
  "Fixed Asset Register":
    "Nine asset groups with automated depreciation aligned to KSA Article 17.",
  "Bulk Upload":
    "Controlled Excel framework processing ~1,500 monthly transactions.",
  "HRMS Requirements":
    "58-field Employee Master specification across ten business categories.",
  "Multi-Entity Accounting":
    "Consolidated finance operations across seven legal entities.",
  Intercompany:
    "Structured intercompany posting with controlled elimination logic.",

  // ZATCA
  "ZATCA Phase 2":
    "Saudi Arabia e-invoicing regulation requiring integrated ERP compliance.",
  "e-Invoicing":
    "Real-time invoice clearance with PDF/A-3 and embedded XML.",
  "CSID Coordination":
    "Cryptographic Stamp Identifier onboarding across three legal entities.",
  "Sandbox Simulation":
    "Structured pre-production testing for invoices and credit notes.",
  "PDF/A-3 + XML":
    "Regulatory invoice format combining human-readable PDF with embedded XML.",
  "Functional Analysis":
    "Business requirements translated into vendor-ready ERP specifications.",
  "Compliance Spec":
    "Business-side data standard defining mandatory ZATCA fields.",

  // EY
  "EY Regulatory Radar":
    "EY's regulatory intelligence platform for cross-jurisdiction tracking.",
  "EYQ / OpenAI":
    "EY's internal generative AI environment for regulatory analysis.",
  "Prompt Engineering":
    "Structured prompt design producing consistent, audit-ready outputs.",
  "Structured Output":
    "Standardised JSON / template formats supporting downstream automation.",
  "AI-Assisted Classification":
    "AI-suggested regulatory tagging validated through human review.",
  "Human-in-the-Loop":
    "Analyst validation embedded across the AI workflow.",

  // Automation
  "Google Opal":
    "AI document extraction reducing manual entry by 50–70%.",
  "Google Apps Script":
    "JavaScript automation layer for Google Workspace finance workflows.",
  "JSON Extraction":
    "Structured JSON output from unstructured PDFs and images.",
  "REGEX Routing":
    "Rule-based categorisation for bank narratives and transaction data.",
  VLOOKUP:
    "Spreadsheet matching logic linking source documents to transactions.",
  "Spreadsheet Engineering":
    "Controlled Excel/Sheets frameworks with validation and audit trail.",
  "AI Workflow Design":
    "End-to-end automation combining AI extraction and human review.",
};
