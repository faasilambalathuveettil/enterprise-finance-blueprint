import { Reveal, SectionEyebrow } from "./shared";
import { Mail, MapPin, Phone, Linkedin, Download, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "faazilusman@gmail.com",
    href: "mailto:faazilusman@gmail.com",
    tint: "text-primary-glow bg-primary/15",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+966 570 244 154",
    href: "https://wa.me/966570244154",
    tint: "text-emerald bg-emerald/15",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/faasilav",
    href: "https://linkedin.com/in/faasilav",
    tint: "text-purple bg-purple/15",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: null,
    tint: "text-amber bg-amber/15",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Open to <span className="text-gradient">Finance Systems & Transformation Opportunities</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            I am open to opportunities across ERP Finance Systems, Finance Transformation, Business Systems Analysis, and Process Improvement.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            If your organisation is modernising finance operations or implementing enterprise systems, I'd welcome the opportunity to discuss how I can contribute.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-3xl border border-border bg-card p-8 backdrop-blur-md md:p-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {channels.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <div
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.tint}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-0.5 font-medium text-foreground">
                        {c.value}
                      </div>
                    </div>
                    {c.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    )}
                  </>
                );
                const cls =
                  "group flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-5 transition-all";
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`${cls} hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:faazilusman@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:brightness-110"
              >
                <Mail className="h-4 w-4" />
                Discuss an Opportunity
              </a>
              <a
                href="/Faasil_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface"
              >
                <Download className="h-4 w-4" />
                Download Résumé (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-display text-2xl font-bold md:text-3xl">
          Stronger systems, tighter controls, and{" "}
          <span className="text-gradient">
            finance operations built to scale.
          </span>
        </p>
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Riyadh, Saudi Arabia · CertIFRS · ACCA — P Level · SOCPA Eligible
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Faasil Ambalathuveettil. Available for ERP &
          Finance Transformation opportunities in Riyadh.
        </p>
      </div>
    </footer>
  );
}
