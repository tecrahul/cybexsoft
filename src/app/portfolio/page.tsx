import { BarChart3, Briefcase } from "lucide-react";

import { PortfolioCard } from "@/components/cards/portfolio-card";
import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";
import { portfolio } from "@/lib/data";

export const metadata = createMetadata({
  title: "Portfolio & Case Studies | CybexSoft",
  description: "Review CybexSoft case studies across fintech, healthcare, and logistics modernization programs.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        icon={Briefcase}
        title="Case studies from cloud, product, and operations transformation"
        description="Selected engagements demonstrating measurable impact in reliability, speed, and business outcomes."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              icon={BarChart3}
              title="Recent client outcomes"
              description="Representative programs delivered by CybexSoft cross-functional teams."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <AnimateInView key={project.slug} delay={index * 0.06}>
                <PortfolioCard {...project} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
