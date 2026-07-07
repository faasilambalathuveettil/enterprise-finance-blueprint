import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg.asset.json";

const badges = [
  { label: "ZATCA Phase 2 LIVE", tone: "emerald" },
  { label: "Ex-EY GDS", tone: "primary" },
  { label: "EY Spot Award", tone: "amber" },
  { label: "ACCA — Professional Level", tone: "muted" },
  { label: "CertIFRS", tone: "muted" },
  { label: "SOCPA Eligible", tone: "muted" },
];

const toneClass: Record<string, string> = {
  primary: "text-primary-glow bg-primary/10 border-primary/25",
  emerald: "text-emerald bg-emerald/10 border-emerald/25",
  amber: "text-amber bg-amber/10 border-amber/25",
  muted: "text-muted-foreground bg-white/5 border-border-strong",
};

const kpis = [
  { v: "7", l: "Legal Entities" },
  { v: "110+", l: "COA Accounts" },
  { v: "1,500+", l: "Txn / Month" },
  { v: "3", l: "ZATCA Live" },
  { v: "50–70%", l: "AI Reduction" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-24 pt-32 md:px-8">
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg.url}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Ambient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-10 h-[500px] w-[500px] rounded-full bg-purple/10 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${toneClass[b.tone]}`}
            >
              {b.label}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Most finance teams learn to use systems.
          <br className="hidden md:block" />
          <span className="text-gradient">I build them.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            I design finance systems that transform fragmented finance operations
            into scalable, compliant ERP operating models.
          </p>
          <p>
            By translating finance, operational, and regulatory requirements into
            practical business systems, I help organisations strengthen governance,
            improve decision-making, and build finance functions that scale with growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110"
          >
            View Case Studies
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/Faasil_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-surface"
          >
            <Download className="h-4 w-4" />
            Résumé
          </a>
          <a
            href="mailto:faazilusman@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/30 px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            href="https://linkedin.com/in/faasilav"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/30 px-6 py-3 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-14 inline-flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-border bg-surface/40 px-6 py-4 backdrop-blur-md"
        >
          {kpis.map((k, i) => (
            <div key={k.l} className="flex items-center gap-3">
              <div>
                <div className="font-display text-lg font-bold text-primary-glow">{k.v}</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {k.l}
                </div>
              </div>
              {i < kpis.length - 1 && <div className="hidden h-8 w-px bg-border sm:block" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
