import { motion } from "framer-motion";
import { Reveal, SectionEyebrow } from "./shared";
import {
  Landmark,
  ShoppingCart,
  Users,
  Wallet,
  Building,
  Banknote,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Database,
  Workflow,
  Boxes,
  Lock,
  FileBarChart,
  Scale,
  ChevronRight,
} from "lucide-react";

const flow = [
  { icon: Database, label: "Master Data", tint: "text-primary-glow" },
  { icon: Workflow, label: "Business Processes", tint: "text-emerald" },
  { icon: Boxes, label: "ERP Modules", tint: "text-purple" },
  { icon: Lock, label: "Controls", tint: "text-amber" },
  { icon: FileBarChart, label: "Reporting", tint: "text-primary-glow" },
  { icon: Scale, label: "Compliance", tint: "text-emerald" },
];

const modules = [
  { icon: Landmark, label: "Finance / GL", tint: "text-primary-glow" },
  { icon: ShoppingCart, label: "Procurement", tint: "text-amber" },
  { icon: Users, label: "HRMS", tint: "text-emerald" },
  { icon: Wallet, label: "Payroll", tint: "text-purple" },
  { icon: Building, label: "Assets (FAR)", tint: "text-primary-glow" },
  { icon: Banknote, label: "Bank / Treasury", tint: "text-emerald" },
  { icon: ShieldCheck, label: "Compliance / ZATCA", tint: "text-amber" },
  { icon: BarChart3, label: "Reporting", tint: "text-purple" },
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative border-y border-border bg-surface/30 px-4 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>ERP Architecture</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            One <span className="text-gradient">integrated core.</span>{" "}
            Eight connected modules.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every module posts to a single controlled ledger — with master data,
            workflow approvals, and compliance validation baked in.
          </p>
        </Reveal>

        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {/* Central core */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/25"
              />
              <div className="text-center">
                <Sparkles className="mx-auto h-6 w-6 text-primary-glow" />
                <div className="mt-2 font-display text-sm font-bold text-foreground">
                  Unified
                </div>
                <div className="font-display text-sm font-bold text-primary-glow">
                  Ledger
                </div>
              </div>
            </motion.div>
          </div>

          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-border bg-card p-5 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
              >
                <Icon className={`h-6 w-6 ${m.tint}`} />
                <div className="mt-3 font-display text-sm font-bold text-foreground">
                  {m.label}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Module
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              t: "Structured Master Data",
              b: "110+ COA · 58-field HRMS · 11-field Customer Master · multi-entity, project, and cost-centre dimensions.",
            },
            {
              t: "Workflow & Controls",
              b: "11-stage ESS · DPR · treasury separation · conditional routing · full audit trail.",
            },
            {
              t: "Compliance by Design",
              b: "ZATCA Phase 2 · KSA VAT · Zakat/Income Tax Article 17 depreciation · IFRS-aligned reporting.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <div className="font-display text-sm font-bold uppercase tracking-wider text-primary-glow">
                {x.t}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {x.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
