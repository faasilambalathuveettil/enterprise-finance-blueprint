import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionEyebrow } from "./shared";

const FLOW_EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const FLOW_STAGGER = 0.13;
const FLOW_DURATION = 0.32;
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
            Every module connects to a unified finance operating model where master
            data, workflows, controls, and compliance are embedded from the start.
          </p>
        </Reveal>

        {/* End-to-end architecture flow */}
        <Reveal delay={0.05}>
          <div className="mx-auto mb-16 max-w-5xl rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md md:p-7">
            <div className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              End-to-End Finance Architecture
            </div>
            <div className="flex flex-wrap items-stretch justify-center gap-2 md:gap-1">
              {flow.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-2 md:gap-1">
                    <div className="flex min-w-[120px] flex-col items-center gap-2 rounded-xl border border-border bg-surface/60 px-3 py-3 md:min-w-[130px] md:px-4">
                      <Icon className={`h-5 w-5 ${s.tint}`} />
                      <div className="text-center font-display text-[12px] font-bold text-foreground md:text-[13px]">
                        {s.label}
                      </div>
                    </div>
                    {i < flow.length - 1 && (
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>



        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {/* Connector lines radiating from center to each module (desktop only) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="arch-line" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.78 0.16 285)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="oklch(0.78 0.16 285)" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[
              { x: "12.5%", y: "27%" },
              { x: "37.5%", y: "27%" },
              { x: "62.5%", y: "27%" },
              { x: "87.5%", y: "27%" },
              { x: "12.5%", y: "73%" },
              { x: "37.5%", y: "73%" },
              { x: "62.5%", y: "73%" },
              { x: "87.5%", y: "73%" },
            ].map((p, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={p.x}
                y2={p.y}
                stroke="url(#arch-line)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Central core */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex h-52 w-52 items-center justify-center rounded-full border border-primary/40 bg-primary/15 backdrop-blur-xl shadow-glow"
            >
              {/* Soft pulsing halo */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-14px] rounded-full bg-primary/20 blur-2xl"
              />
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary/35"
              />
              {/* Inner ring */}
              <div className="absolute inset-4 rounded-full border border-primary/25" />
              <div className="relative text-center">
                <Sparkles className="mx-auto h-7 w-7 text-primary-glow drop-shadow-[0_0_12px_oklch(0.78_0.16_285/0.7)]" />
                <div className="mt-2 font-display text-[13px] font-bold text-foreground">
                  Unified Finance
                </div>
                <div className="font-display text-[13px] font-bold text-primary-glow">
                  Operating Model
                </div>
              </div>
            </motion.div>
          </div>

          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="card-hover relative z-10 rounded-2xl border border-border bg-card p-5 backdrop-blur-md"
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
              b: "A structured master data foundation supporting consistent reporting, automation, and compliance across multiple legal entities.",
              chips: "110+ COA accounts · 58-field HRMS · 11-field Customer Master · Multi-Entity · Projects · Cost Centres",
            },
            {
              t: "Workflow & Controls",
              b: "Standardised approval workflows with embedded governance, treasury controls, conditional routing, and complete auditability.",
              chips: "11-stage ESS · DPR Workflow · Treasury Separation · Audit Trail",
            },
            {
              t: "Compliance by Design",
              b: "Compliance is designed into the operating model rather than added afterwards.",
              chips: "ZATCA Phase 2 · KSA VAT · Article 17 Depreciation · IFRS-aligned Reporting",
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
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground/70">
                {x.chips}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
