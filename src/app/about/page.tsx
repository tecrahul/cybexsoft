import { BriefcaseBusiness, Building2, Gauge, ShieldCheck, Users } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

const whoWeAre = [
  {
    title: "Consulting + Execution",
    description:
      "We operate as a strategic execution partner, combining advisory depth with hands-on delivery.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Enterprise Delivery",
    description:
      "Specialized in platform modernization, mission-critical software engineering, and operating model maturity.",
    icon: Building2,
  },
  {
    title: "Operational Impact",
    description:
      "Our programs are measured through velocity gains, reliability improvements, and measurable business outcomes.",
    icon: Gauge,
  },
  {
    title: "Integrated Team Model",
    description:
      "Senior consultants, engineers, and designers work as one accountable team throughout the engagement lifecycle.",
    icon: Users,
  },
];

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
    date: "Nov 2024",
    title: "CybexSoft Founded",
    text: "Founded in November 2024 as an engineering-first technology consultancy.",
  },
  {
    date: "Feb 2025",
    title: "DevOps & Development Operations",
    text: "Started DevOps and development operations for active client delivery programs.",
  },
  {
    date: "Nov 2025",
    title: "Expanded to IT Consulting",
    text: "Expanded into IT consulting and strategy engagements for broader transformation support.",
  },
  {
    date: "Now",
    title: "Serving Worldwide",
    text: "Today we serve organizations worldwide across software, cloud, infrastructure, DevOps, and consulting.",
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
        <div className="mx-auto grid w-full max-w-none gap-10 px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Identity"
              icon={Users}
              title="Who We Are"
              description="CybexSoft brings together senior consultants, engineers, and designers in one integrated team. We don’t just advise — we act as your strategic execution partner: building, optimizing, and transferring deep operational knowledge directly back to your team."
            />
          </AnimateInView>
          <div className="grid gap-4 md:grid-cols-2">
            {whoWeAre.map((item, index) => (
              <AnimateInView key={item.title} delay={index * 0.06}>
              <div className="group surface rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_20px_44px_-24px_rgba(242,181,68,0.35)]">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
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
              eyebrow="Values"
              icon={ShieldCheck}
              title="How we work"
              description="Every engagement follows the same standards for governance, communication, and technical excellence."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((value, index) => (
              <AnimateInView key={value.title} delay={index * 0.06}>
                <div className="group surface rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_20px_44px_-24px_rgba(242,181,68,0.35)]">
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
              description="A horizontal timeline of our growth from launch to global delivery."
            />
          </AnimateInView>
          <div className="mt-8 overflow-x-auto pb-2">
            <div className="relative min-w-[920px]">
              <div className="pointer-events-none absolute left-8 right-8 top-3 h-px bg-border/80" />
              <div className="grid grid-cols-4 gap-4">
                {timeline.map((item, index) => (
                  <AnimateInView key={item.date} delay={index * 0.05}>
                    <div className="group relative pt-8">
                      <span className="absolute left-6 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffd27a]" />
                      </span>
                      <div className="surface h-full rounded-xl p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:bg-card group-hover:shadow-[0_20px_44px_-24px_rgba(242,181,68,0.35)]">
                        <p className="text-xs font-semibold tracking-wide text-primary">{item.date}</p>
                        <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
