import { BriefcaseBusiness, Building2, Gauge, ShieldCheck, Users } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";

const values = [
  {
    title: "Clarity",
    description: "Transparent delivery plans, practical advice, and visible KPIs from day one.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Reliability",
    description: "Production-grade engineering standards with robust operational guardrails.",
    icon: ShieldCheck,
  },
  {
    title: "Accountability",
    description: "One accountable team across engineering, infrastructure, and strategy.",
    icon: Users,
  },
  {
    title: "Velocity",
    description: "Fast iteration loops without compromising maintainability or quality.",
    icon: Gauge,
  },
];

const timeline = [
  {
    year: "2018",
    text: "CybexSoft founded to support enterprise software and infrastructure modernization.",
  },
  {
    year: "2020",
    text: "Expanded delivery into cloud architecture, DevOps transformation, and SRE practices.",
  },
  {
    year: "2023",
    text: "Launched dedicated UI/UX and product consulting teams for digital platform clients.",
  },
  {
    year: "2026",
    text: "Serving global clients with full-lifecycle consultancy across 9 core service domains.",
  },
];

export const metadata = createMetadata({
  title: "About CybexSoft Consultancy Services",
  description: "Learn about CybexSoft's mission, values, and delivery model for enterprise technology transformation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        icon={Building2}
        title="A consultancy built for complex technology programs"
        description="We help organizations modernize legacy systems, scale digital products, and build resilient operations through a balanced mix of strategy and execution."
      />

      <section className="section-padding">
        <div className="mx-auto grid w-full max-w-none gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Who We Are"
              icon={Users}
              title="Senior consultants, engineers, and designers in one integrated team"
              description="CybexSoft operates as a strategic execution partner. We don't just advise; we build, optimize, and transfer operational knowledge back to your team."
            />
          </AnimateInView>
          <AnimateInView delay={0.12}>
            <div className="surface rounded-2xl p-6">
              <p className="text-sm text-muted-foreground">
                We specialize in platform modernization, mission-critical software delivery, and operational maturity. Our consulting model is outcome-driven, measured by velocity gains, reliability improvements, and business impact.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Enterprise Delivery",
                  "Cloud Platforms",
                  "DevOps Automation",
                  "Digital Strategy",
                ].map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Values"
              icon={ShieldCheck}
              title="How we work"
              description="Every engagement follows the same standards for governance, communication, and technical excellence."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimateInView key={value.title} delay={index * 0.06}>
                <div className="surface rounded-xl p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <value.icon className="h-4 w-4 text-primary" />
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Journey"
              icon={Building2}
              title="CybexSoft in milestones"
              description="A focused path from specialist consultancy to full-service digital partner."
            />
          </AnimateInView>
          <div className="mt-8 space-y-4">
            {timeline.map((item, index) => (
              <AnimateInView key={item.year} delay={index * 0.05}>
                <div className="surface rounded-xl p-5 sm:flex sm:items-center sm:gap-6">
                  <p className="text-sm font-semibold text-primary sm:w-20">{item.year}</p>
                  <p className="mt-2 text-sm text-muted-foreground sm:mt-0">{item.text}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
