import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/shared";
import { Hero } from "@/components/portfolio/Hero";
import { ExecutiveSummary } from "@/components/portfolio/Summary";
import { Impact } from "@/components/portfolio/Impact";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Architecture } from "@/components/portfolio/Architecture";
import { Timeline } from "@/components/portfolio/Timeline";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Approach } from "@/components/portfolio/Approach";
import { Deliverables } from "@/components/portfolio/Deliverables";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ExecutiveSummary />
      <Impact />
      <CaseStudies />
      <Architecture />
      <Approach />
      <Timeline />
      <Capabilities />
      <Deliverables />
      <Contact />
      <Footer />
    </main>
  );
}
