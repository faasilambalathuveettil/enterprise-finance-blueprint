import { Reveal, SectionEyebrow } from "./shared";
import { BadgeCheck, GraduationCap, Award, Medal, Sparkles, BookOpen } from "lucide-react";

type Cert = {
  name: string;
  body: string;
  icon: typeof BadgeCheck;
  tint: "primary" | "emerald" | "amber" | "purple";
};

const items: Cert[] = [
  {
    name: "CertIFRS",
    body: "IFRS Certified — ACCA",
    icon: BadgeCheck,
    tint: "primary",
  },
  {
    name: "ACCA — P Level",
    body: "Association of Chartered Certified Accountants — Professional Level pursuing",
    icon: GraduationCap,
    tint: "emerald",
  },
  {
    name: "SOCPA Eligible",
    body: "Saudi Organization for Chartered and Professional Accountants",
    icon: Award,
    tint: "amber",
  },
  {
    name: "3× EY Recognition Awards",
    body: "Two Spot Awards and one GDS User Recognition Award from the onshore team",
    icon: Medal,
    tint: "purple",
  },
  {
    name: "EY Applied AI — Bronze",
    body: "EY badge recognising applied AI competency — supports the Practical AI pillar",
    icon: Sparkles,
    tint: "purple",
  },
  {
    name: "M.Com",
    body: "Master of Commerce — Indira Gandhi National Open University (IGNOU)",
    icon: BookOpen,
    tint: "primary",
  },
  {
    name: "B.Com",
    body: "Bachelor of Commerce — University of Calicut",
    icon: BookOpen,
    tint: "emerald",
  },
];

const tintClass: Record<Cert["tint"], { bg: string; text: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary-glow" },
  emerald: { bg: "bg-emerald/15", text: "text-emerald" },
  amber: { bg: "bg-amber/15", text: "text-amber" },
  purple: { bg: "bg-purple/15", text: "text-purple" },
};

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionEyebrow>Certifications & Recognition</SectionEyebrow>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Credentials that <span className="text-gradient">back the work.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => {
            const Icon = c.icon;
            const t = tintClass[c.tint];
            return (
              <div
                key={c.name}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
              >
                <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg ${t.bg} ${t.text}`}>
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
