import Link from "next/link";
import type { CSSProperties } from "react";
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
  const homeBrandVars = {
    "--primary": "#f2b544",
    "--primary-foreground": "#121212",
    "--success": "#c89b3c",
    "--success-foreground": "#121212",
    "--foreground": "#ffffff",
    "--background": "#121212",
    "--card": "#171717",
    "--card-foreground": "#ffffff",
    "--muted-foreground": "#a6a6a6",
    "--border": "#3b3426",
    "--accent": "#201a12",
    "--accent-foreground": "#ffffff",
  } as CSSProperties;

  return (
    <div
      style={homeBrandVars}
      className="text-white [&>section]:bg-[#121212] [&>section+section]:border-t [&>section+section]:border-[#4a402d]/90"
    >
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(242,181,68,0.18),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(200,155,60,0.14),transparent_30%)]" />
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto grid w-full max-w-none gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <AnimateInView>
            <Badge className="border-[#3b3426]/80 bg-[#1a1712] text-[#e5c37a]">End-to-End IT Consultancy</Badge>
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
              <Link href="#services" className="text-muted-foreground hover:text-[#f2b544]">
                Services
              </Link>
              <Link href="#why-us" className="text-muted-foreground hover:text-[#f2b544]">
                Why Us
              </Link>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.12}>
            <div className="rounded-2xl border border-[#3b3426]/80 bg-[#171717]/95 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Delivery Snapshot</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#2a2214] px-2.5 py-1 text-[11px] font-medium text-[#e5c37a]">
                  <Activity className="h-3 w-3 text-[#f2b544]" />
                  Live Program
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-[#3b3426]/70 bg-[#1b1b1b] p-4">
                <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                  Transformation Flow
                </p>

                <div className="relative mt-3 space-y-3">
                  <div className="absolute bottom-5 left-[0.85rem] top-5 w-px bg-gradient-to-b from-primary/80 via-success/80 to-primary/30" />
                  {deliveryFlow.map((step) => (
                    <div key={step.name} className="relative flex items-start gap-3">
                      <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#3b3426]/80 bg-[#131313] text-primary">
                        <step.icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-zinc-100">{step.name}</p>
                          <span className="rounded-full border border-[#3b3426]/80 bg-[#131313] px-2 py-0.5 text-[10px] text-zinc-300">
                            {step.status}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#3b3426]/70 bg-[#1b1b1b] p-4">
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
                <div className="group surface relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_24px_60px_-32px_rgba(242,181,68,0.35)]">
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
                  <div className="group surface relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_22px_50px_-34px_rgba(242,181,68,0.45)]">
                    <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute -top-12 right-0 h-36 w-36 rounded-full bg-gradient-to-br from-primary/20 to-success/10 blur-3xl" />
                    </div>
                    <p className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/70 text-primary transition-transform duration-300 group-hover:scale-105">
                      <pillar.icon className="h-4 w-4" />
                    </p>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
            <AnimateInView delay={0.08}>
              <div className="group surface h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_24px_56px_-34px_rgba(242,181,68,0.45)]">
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
                <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-[#f2b544] hover:underline">
                  Discuss your security requirements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#3b3426]/80 bg-[#161616] p-8 shadow-[0_30px_80px_-45px_rgba(242,181,68,0.55)] sm:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[#f2b544]/15 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#c89b3c]/14 blur-3xl" />
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9b76c]">Let&apos;s Build</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Modern IT consulting with precision delivery and measurable outcomes.
                </h2>
                <p className="mt-4 max-w-2xl text-sm text-[#a6a6a6] sm:text-base">
                  From architecture to operations, CybexSoft helps enterprises reduce risk, improve system
                  reliability, and accelerate transformation programs.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f2b544] to-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#121212] transition-opacity hover:opacity-90"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-[#c89b3c]/70 bg-transparent px-5 py-3 text-sm font-semibold text-[#e5c37a] transition-colors hover:bg-[#201a12]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
