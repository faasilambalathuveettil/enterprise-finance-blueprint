import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact information",
  description:
    "Return the portfolio owner's public contact channels: email, WhatsApp, LinkedIn, and location.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            email: "faazilusman@gmail.com",
            whatsapp: "+966 570 244 154",
            linkedin: "https://linkedin.com/in/faasilav",
            location: "Riyadh, Saudi Arabia",
          },
          null,
          2,
        ),
      },
    ],
  }),
});
