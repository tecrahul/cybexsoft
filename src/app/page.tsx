import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Layers3,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

import { ServiceCard } from "@/components/cards/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { services, whyCybexSoft } from "@/lib/data";

export const metadata = createMetadata({
  title: "CybexSoft Consultancy Services | Home",
  description:
    "Full-service IT consultancy for software development, DevOps automation, cloud solutions, and digital transformation.",
  path: "/",
});

export default function HomePage() {
  const visibleServices = services.slice(0, 6);
  const whyIcons = [Blocks, Workflow, ShieldCheck, ChartNoAxesCombined] as const;
  const whyTags = ["Architecture", "Delivery", "Security", "Governance"] as const;
  const deliveryFlow = [
    {
      name: "Discovery & Scope",
      detail: "Architecture assessment",
      icon: Blocks,
      status: "Completed",
    },
    {
      name: "Platform Buildout",
      detail: "Cloud + automation rollout",
      icon: Workflow,
      status: "In Progress",
    },
    {
      name: "Reliability Gate",
      detail: "Security and SLO validation",
      icon: ShieldCheck,
      status: "On Track",
    },
    {
      name: "Outcome Analytics",
      detail: "Business KPI reporting",
      icon: ChartNoAxesCombined,
      status: "Ready",
    },
  ] as const;
  const engagementModels = [
    {
      title: "Staff Augmentation",
      description: "Embed senior engineers and consultants into your team with fast onboarding and clear accountability.",
      bestFor: "Scaling delivery capacity quickly",
      icon: UsersRound,
    },
    {
      title: "Project Delivery",
      description: "Cross-functional squad owns roadmap execution from discovery to production-ready release.",
      bestFor: "Time-bound initiatives with fixed outcomes",
      icon: Workflow,
    },
    {
      title: "Managed Services",
      description: "Ongoing platform operations, reliability improvements, and incident response under defined SLAs.",
      bestFor: "Business-critical systems needing stability",
      icon: Layers3,
    },
    {
      title: "Strategic Advisory",
      description: "Technology roadmap, architecture reviews, and modernization planning led by senior consultants.",
      bestFor: "Executive planning and transformation programs",
      icon: ChartNoAxesCombined,
    },
  ] as const;
  const securityPillars = [
    {
      title: "Secure Delivery Lifecycle",
      description: "Threat modeling, secure coding standards, and pipeline checks from sprint one.",
      icon: ShieldCheck,
    },
    {
      title: "Compliance-Ready Controls",
      description: "Governance patterns aligned to SOC2, GDPR, and regulated data environments.",
      icon: Blocks,
    },
    {
      title: "Reliability & Continuity",
      description: "Resilience engineering with backup, recovery, and incident playbooks built into operations.",
      icon: Activity,
    },
    {
      title: "Audit-Friendly Reporting",
      description: "Operational KPIs, change logs, and evidence capture that simplify stakeholder reporting.",
      icon: ChartNoAxesCombined,
    },
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CybexSoft Consultancy Services",
    url: "https://www.cybexsoft.com",
    description:
      "IT consultancy providing software development, cloud solutions, DevOps automation, infrastructure management, and project delivery.",
    areaServed: "Global",
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,color-mix(in_oklab,var(--primary),transparent_80%),transparent_40%),radial-gradient(circle_at_85%_0%,color-mix(in_oklab,var(--success),transparent_84%),transparent_30%)]" />
        <div className="mx-auto grid w-full max-w-none gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <AnimateInView>
            <Badge>End-to-End IT Consultancy</Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Engineering resilient digital products and operations for ambitious teams.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              CybexSoft combines software engineering, infrastructure management, cloud architecture, and strategic delivery to move your organization faster with less operational risk.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button className="rounded-full px-6">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="rounded-full px-6">
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <Link href="#services" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="#why-us" className="text-muted-foreground hover:text-foreground">
                Why Us
              </Link>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.12}>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Delivery Snapshot</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-success/20 px-2.5 py-1 text-[11px] font-medium text-success-foreground">
                  <Activity className="h-3 w-3" />
                  Live Program
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-zinc-900 p-4">
                <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                  Transformation Flow
                </p>

                <div className="relative mt-3 space-y-3">
                  <div className="absolute bottom-5 left-[0.85rem] top-5 w-px bg-gradient-to-b from-primary/80 via-success/80 to-primary/30" />
                  {deliveryFlow.map((step) => (
                    <div key={step.name} className="relative flex items-start gap-3">
                      <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-zinc-950 text-primary">
                        <step.icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-zinc-100">{step.name}</p>
                          <span className="rounded-full border border-white/10 bg-zinc-950 px-2 py-0.5 text-[10px] text-zinc-300">
                            {step.status}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900 p-4">
                <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                  Operational Health
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    { name: "Release Velocity", value: "92%" },
                    { name: "Platform Uptime", value: "99.98%" },
                    { name: "Incident Recovery", value: "89%" },
                  ].map((metric) => (
                    <div key={metric.name}>
                      <div className="mb-1 flex items-center justify-between text-[11px]">
                        <span className="text-zinc-400">{metric.name}</span>
                        <span className="font-medium text-zinc-100">{metric.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-800">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-primary to-success"
                          style={{ width: metric.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>

      </section>

      <section id="services" className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Services"
              icon={Layers3}
              title="Integrated technology services across the full delivery lifecycle"
              description="From discovery and architecture to operations and optimization, we provide one accountable partner for your digital initiatives."
            />
          </AnimateInView>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <AnimateInView key={service.id} delay={index * 0.06}>
                <Link href={`/services/${service.id}`} className="block h-full">
                  <ServiceCard {...service} />
                </Link>
              </AnimateInView>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Why CybexSoft"
              icon={ShieldCheck}
              title="Execution discipline with enterprise-level quality standards"
              description="We combine strategic advisory with practical implementation to deliver measurable business outcomes."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyCybexSoft.map((item, index) => (
              <AnimateInView key={item.title} delay={index * 0.07}>
                <div className="group surface relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_24px_60px_-32px_rgba(74,126,255,0.5)]">
                  <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-16 right-0 h-44 w-44 rounded-full bg-gradient-to-br from-primary/25 to-success/10 blur-3xl" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-primary">
                      {(() => {
                        const Icon = whyIcons[index % whyIcons.length];
                        return <Icon className="h-4 w-4" />;
                      })()}
                    </span>
                    <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 border-t border-border/70 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/90">
                      {whyTags[index % whyTags.length]}
                    </p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement-models" className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Engagement Models"
              icon={BriefcaseBusiness}
              title="Flexible collaboration models based on your delivery context"
              description="Choose the operating model that best fits your team maturity, timelines, and business objectives."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model, index) => (
              <AnimateInView key={model.title} delay={index * 0.06}>
                <div className="group surface relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card">
                  <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-14 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-success/10 blur-3xl" />
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-primary">
                    <model.icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{model.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{model.description}</p>
                  <div className="mt-5 border-t border-border/70 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/90">
                      Best For
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{model.bestFor}</p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section id="security-compliance" className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Security & Compliance"
              icon={ShieldCheck}
              title="Enterprise-grade governance built into delivery and operations"
              description="Security, compliance, and reliability controls are integrated into every engagement, not added as an afterthought."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {securityPillars.map((pillar, index) => (
                <AnimateInView key={pillar.title} delay={index * 0.05}>
                  <div className="surface h-full rounded-2xl p-5">
                    <p className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/70 text-primary">
                      <pillar.icon className="h-4 w-4" />
                    </p>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
            <AnimateInView delay={0.08}>
              <div className="surface h-full rounded-2xl p-6">
                <p className="text-sm font-semibold text-foreground">Governance Outcomes</p>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                    Clear control ownership across engineering, operations, and leadership.
                  </p>
                  <p className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                    Consistent audit evidence and reporting aligned to stakeholder expectations.
                  </p>
                  <p className="rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                    Reduced delivery risk with measurable reliability and response standards.
                  </p>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline">
                  Discuss your security requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <CtaBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
