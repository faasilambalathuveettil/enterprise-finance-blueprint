import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getContact from "./tools/get-contact";
import listCaseStudies from "./tools/list-case-studies";
import getCaseStudy from "./tools/get-case-study";

export default defineMcp({
  name: "faasil-portfolio-mcp",
  title: "Faasil Ambalathuveettil — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Read-only tools for exploring Faasil Ambalathuveettil's finance systems, ERP, regulatory compliance, and AI-automation portfolio. Use get_profile for a summary, list_case_studies to enumerate flagship case studies, get_case_study for full details of one, and get_contact for public contact channels.",
  tools: [getProfile, getContact, listCaseStudies, getCaseStudy],
});
