import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Download, ArrowRight } from "lucide-react";
import resumeAsset from "@/assets/Faasil_Ambalathuveettil_Resume.pdf";

const nav = [
  { href: "#summary", label: "Summary" },
  { href: "#impact", label: "Impact" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#architecture", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

const sectionToNav: Record<string, string> = {
  top: "#summary",
  summary: "#summary",
  impact: "#impact",
  "case-studies": "#case-studies",
  architecture: "#architecture",
  experience: "#experience",
  approach: "#capabilities",
  capabilities: "#capabilities",
  deliverables: "#capabilities",
  certifications: "#capabilities",
  contact: "#contact",
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#summary");
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: the nav group occupying the largest share of the viewport wins.
  useEffect(() => {
    const ids = Object.keys(sectionToNav);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const NAV_OFFSET = 88;
    const intersecting = new Set<string>();
    let frame = 0;

    const compute = () => {
      frame = 0;
      if (!intersecting.size) return;
      const top = NAV_OFFSET;
      const bottom = window.innerHeight;
      const usable = Math.max(1, bottom - top);

      // Sum visible pixels per nav group so grouped sections behave as one.
      const occupancy = new Map<string, number>();
      for (const id of intersecting) {
        const el = document.getElementById(id);
        const href = sectionToNav[id];
        if (!el || !href) continue;
        const r = el.getBoundingClientRect();
        const visiblePx = Math.max(0, Math.min(r.bottom, bottom) - Math.max(r.top, top));
        if (visiblePx <= 0) continue;
        occupancy.set(href, (occupancy.get(href) ?? 0) + visiblePx);
      }
      if (!occupancy.size) return;

      let bestHref = "";
      let bestPx = 0;
      for (const [href, px] of occupancy) {
        if (px > bestPx) {
          bestPx = px;
          bestHref = href;
        }
      }
      if (!bestHref) return;

      setActive((current) => {
        if (bestHref === current) return current;
        const currentPx = occupancy.get(current) ?? 0;
        // Hysteresis: only switch once the challenger is clearly dominant.
        const clearlyDominant = bestPx >= currentPx * 1.25 && bestPx >= usable * 0.35;
        return clearlyDominant ? bestHref : current;
      });
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        schedule();
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px 0px 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    els.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const offset = 88;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
    const mapped = sectionToNav[id];
    if (mapped) setActive(mapped);
  };


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary-glow to-primary"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#top" className="font-display text-sm font-bold tracking-wide sm:text-base">
            <span className="text-foreground">FAASIL</span>
            <span className="ml-1 text-primary-glow">AMBALATHUVEETTIL</span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium text-muted-foreground lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => goTo(e, n.href)}
                aria-current={active === n.href ? "true" : undefined}
                className={`relative transition-colors duration-200 hover:text-foreground ${
                  active === n.href ? "text-foreground" : ""
                }`}
              >
                {n.label}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left bg-primary-glow transition-all duration-200 ease-out ${
                    active === n.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            ))}
            <a
              href={resumeAsset}
              download="Faasil_Ambalathuveettil_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-[12px] font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110"
            >
              <Download className="h-3.5 w-3.5" />
              Résumé
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-muted-foreground hover:text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  setOpen(false);
                  goTo(e, n.href);
                }}
                aria-current={active === n.href ? "true" : undefined}
                className={`text-xl transition-colors duration-200 hover:text-primary-glow ${
                  active === n.href ? "text-primary-glow" : "text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={resumeAsset}
              download="Faasil_Ambalathuveettil_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const MotionTag = motion(Tag as React.ElementType);
  const reduce = useReducedMotion();
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.24em] text-primary-glow">
      <span className="h-px w-8 bg-primary-glow/60" />
      {children}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all";
  if (variant === "primary") {
    return (
      <a
        href={href}
        className={`${base} bg-primary text-primary-foreground shadow-glow hover:brightness-110`}
      >
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <a
      href={href}
      className={`${base} border border-border-strong bg-surface/50 text-foreground hover:bg-surface`}
    >
      {children}
    </a>
  );
}
