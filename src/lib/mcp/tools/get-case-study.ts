import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DETAILS: Record<string, Record<string, unknown>> = {
  erp: {
    id: "erp",
    title: "Multi-Entity ERP Finance System",
    client: "Al Imtiaz Corner Logistics · 7 Legal Entities",
    platform: "Orison ERP",
    scope: [
      "Chart of Accounts: 110+ accounts, 4-level hierarchy, multi-entity, project & cost-centre dimensions",
      "ESS Payment Workflow: 11 stages, Draft → Closed, treasury separation, full audit trail",
      "Authored 16+ functional enhancement specifications; live environment has processed 900+ payment requests to date",
      "DPR module for post-execution treasury payments",
      "Fixed Asset Register: 9 asset groups with straight-line depreciation aligned to KSA Zakat/Income Tax Article 17",
      "Bulk Upload framework: ~1,500 monthly transactions with entity-project-phase tagging, 10–20% processing-time reduction",
      "HRMS Employee Master: 58 fields across 10 business categories",
    ],
    outcome:
      "Consolidated finance operations across 7 legal entities, replacing Excel-based accounting.",
  },
  zatca: {
    id: "zatca",
    title: "ZATCA Phase 2 E-Invoicing Compliance",
    client: "Al Imtiaz Corner Logistics · 3 Entities",
    milestones: [
      { date: "Apr 24, 2026", label: "CSID Onboarding" },
      { date: "May 4, 2026", label: "EGS Unit Setup" },
      { date: "May 5 – Jun 6, 2026", label: "Sandbox / Simulation Testing (all 3 entities)" },
      { date: "Jun 11, 2026", label: "Go-Live" },
    ],
    evidence:
      "SAR 100 dummy invoice/credit note simulation across all 3 entities, then a real credit note live at go-live from Al Imtiaz Corner.",
    outcome: "Three legal entities live on ZATCA Phase 2 with PDF/A-3 + embedded XML clearance.",
  },
  ey: {
    id: "ey",
    title: "EY Regulatory Intelligence Workflow",
    client: "EY",
    workflow: [
      "Regulatory Publication (horizon scanning)",
      "Research & Review",
      "AI-assisted Classification (EYQ / OpenAI, hierarchical decision-tree prompts)",
      "Structured Summary (standardised output)",
      "Quality Review (human validation)",
      "Knowledge Distribution",
    ],
    outcome:
      "End-to-end regulatory intelligence workflow blending AI classification with human validation.",
  },
  automation: {
    id: "automation",
    title: "Finance Process Automation with Google Opal",
    pipeline: [
      "PDF Source (QIWA · Iqama · SOA)",
      "Google Opal AI extraction",
      "Structured JSON (Invoice · Employee · Amount)",
      "VLOOKUP match vs bank narrative",
      "Reconciled Bank SOA",
    ],
    outcome: "50–70% reduction in manual entry with systematic bank ↔ document linkage.",
  },
};

export default defineTool({
  name: "get_case_study",
  title: "Get case study details",
  description:
    "Return full details for a single flagship case study by id. Valid ids: 'erp', 'zatca', 'ey', 'automation' (use list_case_studies first).",
  inputSchema: {
    id: z.enum(["erp", "zatca", "ey", "automation"]).describe("Case study id."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const detail = DETAILS[id];
    if (!detail) {
      return {
        content: [{ type: "text", text: `Unknown case study: ${id}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(detail, null, 2) }],
    };
  },
});
