import { defineTool } from "@lovable.dev/mcp-js";

const CASE_STUDIES = [
  {
    id: "erp",
    title: "Multi-Entity ERP Finance System",
    client: "Al Imtiaz Corner Logistics · 7 Legal Entities",
    summary:
      "Designed the finance operating model and led finance-side functional implementation supporting the transition from Excel-based accounting to a multi-entity Orison ERP environment across seven legal entities.",
  },
  {
    id: "zatca",
    title: "ZATCA Phase 2 E-Invoicing Compliance",
    client: "Al Imtiaz Corner Logistics · 3 Entities",
    summary:
      "Led ZATCA Phase 2 integration across three legal entities — CSID onboarding, EGS setup, sandbox simulation, and production go-live in June 2026.",
  },
  {
    id: "ey",
    title: "EY Regulatory Intelligence Workflow",
    client: "EY",
    summary:
      "Built an AI-assisted regulatory intelligence workflow using EY Regulatory Radar and EYQ/OpenAI with hierarchical decision-tree prompts and human-in-the-loop validation.",
  },
  {
    id: "automation",
    title: "Finance Process Automation with Google Opal",
    client: "Al Imtiaz Corner Logistics",
    summary:
      "Automated PDF-to-ledger reconciliation using Google Opal for structured JSON extraction, cutting manual entry by 50–70%.",
  },
];

export default defineTool({
  name: "list_case_studies",
  title: "List flagship case studies",
  description:
    "Return the list of flagship case studies featured on the portfolio, each with an id, title, client context, and a short summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CASE_STUDIES, null, 2) }],
  }),
});

export { CASE_STUDIES };
