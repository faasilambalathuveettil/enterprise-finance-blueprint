import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile summary",
  description:
    "Return the portfolio owner's professional summary: name, headline, location, and a short bio covering finance systems, ERP, regulatory compliance, and AI-assisted automation experience.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "Faasil Ambalathuveettil",
            headline:
              "Finance Systems & Transformation Professional — ERP, Regulatory Compliance, Practical AI",
            location: "Riyadh, Saudi Arabia",
            summary:
              "Finance professional bridging ERP implementation, KSA regulatory compliance (ZATCA Phase 2, SOCPA, VAT), and practical AI-assisted automation. Led multi-entity Orison ERP implementation across seven legal entities at Al Imtiaz Corner Logistics, ZATCA Phase 2 go-live for three entities, and regulatory intelligence workflows at EY.",
            credentials: [
              "ACCA — Professional Level",
              "CertIFRS",
              "SOCPA Eligible",
              "Managing Machine Learning Projects (Google Cloud)",
              "EY Applied AI — Bronze",
              "EY Finance — Bronze",
              "EY Supply Chain — Bronze",
              "3× EY Recognition Awards",
              "M.Com",
              "B.Com",
            ],
          },
          null,
          2,
        ),
      },
    ],
  }),
});
