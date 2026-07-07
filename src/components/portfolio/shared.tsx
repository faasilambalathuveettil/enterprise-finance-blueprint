import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download, ArrowRight } from "lucide-react";

const nav = [
  { href: "#summary", label: "Summary" },
  { href: "#impact", label: "Impact" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#architecture", label: "Architecture" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                className="transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/Faasil_Resume.pdf"
              download
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
                onClick={() => setOpen(false)}
                className="text-xl text-foreground hover:text-primary-glow"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/Faasil_Resume.pdf"
              download
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
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-primary-glow">
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
