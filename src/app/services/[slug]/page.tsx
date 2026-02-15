import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cog,
  Laptop,
  Layers3,
  LayoutTemplate,
  LoaderCircle,
  Server,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/sections/cta-banner";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getServiceBySlug,
  getServiceDetailBySlug,
  services,
  techLogos,
} from "@/lib/data";
import { createMetadata } from "@/lib/seo";

function HeroVisualShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.12),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(242,181,68,0.12),transparent_45%)]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function StepStatus({ done }: { done: boolean }) {
  return (
    <span
      className={
        done
          ? "rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300"
          : "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary"
      }
    >
      {done ? "Completed" : "In Progress"}
    </span>
  );
}

function ServiceHeroVisual({
  slug,
  title,
  heroImage,
}: {
  slug: string;
  title: string;
  heroImage: string;
}) {
  if (slug === "software-development") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Product Build Sprint</p>
            <Laptop className="h-4 w-4 text-primary" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            {[
              { phase: "Plan", done: true },
              { phase: "Develop", done: true },
              { phase: "Release", done: false },
            ].map((item) => (
              <div key={item.phase} className="rounded-lg border border-border/70 bg-card/75 p-2">
                <p className="text-[10px] text-muted-foreground">{item.phase}</p>
                <div className="mt-2 flex items-center justify-between">
                  {item.done ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <LoaderCircle className="h-4 w-4 animate-spin text-primary" />
                  )}
                  <StepStatus done={item.done} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "it-infrastructure-management") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Infrastructure Mesh</p>
            <Server className="h-4 w-4 text-primary" />
          </div>
          <div className="relative grid flex-1 grid-cols-3 gap-2">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-border/80" />
            {["Edge", "Core", "DB"].map((node) => (
              <div key={node} className="relative rounded-lg border border-border/70 bg-card/75 p-3 text-center">
                <Server className="mx-auto h-4 w-4 text-emerald-400" />
                <p className="mt-1 text-[11px] text-foreground">{node}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border/70 bg-card/75 p-2">
              <p className="text-[10px] text-muted-foreground">Availability</p>
              <p className="text-sm font-semibold text-foreground">99.98%</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/75 p-2">
              <p className="text-[10px] text-muted-foreground">Incidents</p>
              <p className="text-sm font-semibold text-foreground">-41%</p>
            </div>
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "devops-services-automation") {
    const pipelineSteps = ["Fetch", "Build", "Test", "Deploy"];
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Pipeline Run #142</p>
            <span className="rounded-full border border-border/70 bg-card/80 px-2 py-1 text-[10px] font-medium text-muted-foreground">
              main branch
            </span>
          </div>
          <div className="space-y-3">
            {pipelineSteps.map((step, index) => {
              const isDone = index < pipelineSteps.length - 1;
              return (
                <div
                  key={step}
                  className="relative flex items-center justify-between rounded-lg border border-border/70 bg-card/75 px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    {isDone ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <LoaderCircle className="h-4 w-4 animate-spin text-primary" />
                    )}
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                  <StepStatus done={isDone} />
                </div>
              );
            })}
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "cloud-solutions") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Cloud Operations Grid</p>
            <Cloud className="h-4 w-4 text-primary" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            {["AWS", "Azure", "GCP"].map((provider) => (
              <div key={provider} className="rounded-lg border border-border/70 bg-card/75 p-2 text-center">
                <Cloud className="mx-auto h-4 w-4 text-emerald-400" />
                <p className="mt-1 text-[11px] text-foreground">{provider}</p>
                <p className="text-[10px] text-emerald-300">Healthy</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-border/70 bg-card/75 p-2">
            <p className="text-[10px] text-muted-foreground">Cost Optimization</p>
            <p className="text-sm font-semibold text-foreground">31% savings active</p>
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "server-maintenance-monitoring") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Live Server Monitoring</p>
            <Shield className="h-4 w-4 text-primary" />
          </div>
          <div className="relative grid flex-1 grid-cols-3 gap-2">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-border/80" />
            {["srv-web-01", "srv-app-02", "srv-db-03"].map((serverName) => (
              <div key={serverName} className="relative rounded-lg border border-border/70 bg-card/75 p-2 text-center">
                <Server className="mx-auto h-4 w-4 text-emerald-400" />
                <p className="mt-1 text-[10px] text-foreground">{serverName}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border/70 bg-card/75 p-2 text-center">
              <p className="text-[10px] text-muted-foreground">Uptime</p>
              <p className="text-sm font-semibold text-emerald-300">99.98%</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/75 p-2 text-center">
              <p className="text-[10px] text-muted-foreground">Latency</p>
              <p className="text-sm font-semibold text-foreground">24ms</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/75 p-2 text-center">
              <p className="text-[10px] text-muted-foreground">Alerts</p>
              <p className="text-sm font-semibold text-foreground">0 Critical</p>
            </div>
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "mobile-web-app-development") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Cross-Platform Delivery</p>
            <Smartphone className="h-4 w-4 text-primary" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            <div className="rounded-lg border border-border/70 bg-card/75 p-3">
              <Laptop className="h-4 w-4 text-emerald-400" />
              <p className="mt-2 text-[11px] text-foreground">Web App</p>
              <p className="text-[10px] text-muted-foreground">Build completed</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/75 p-3">
              <Smartphone className="h-4 w-4 text-primary" />
              <p className="mt-2 text-[11px] text-foreground">Mobile App</p>
              <p className="text-[10px] text-muted-foreground">Store deploy in progress</p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-border/70 bg-card/75 p-2">
            <p className="text-[10px] text-muted-foreground">Shared API Contract</p>
            <p className="text-sm font-semibold text-foreground">Synced across platforms</p>
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "ui-ux-design") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Design System Flow</p>
            <LayoutTemplate className="h-4 w-4 text-primary" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            <div className="rounded-lg border border-border/70 bg-card/75 p-2">
              <p className="text-[10px] text-muted-foreground">Wireframes</p>
              <div className="mt-2 space-y-1">
                <div className="h-2 rounded bg-border/60" />
                <div className="h-2 w-4/5 rounded bg-border/60" />
                <div className="h-2 w-3/5 rounded bg-border/60" />
              </div>
            </div>
            <div className="rounded-lg border border-border/70 bg-card/75 p-2">
              <p className="text-[10px] text-muted-foreground">Prototype</p>
              <div className="mt-2 h-10 rounded border border-primary/40 bg-primary/10" />
              <p className="mt-1 text-[10px] text-primary">Validation running</p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-border/70 bg-card/75 p-2">
            <p className="text-[10px] text-muted-foreground">Usability Score</p>
            <p className="text-sm font-semibold text-foreground">+33% improvement</p>
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "it-consulting-strategy") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Technology Roadmap</p>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-2">
            {["Assess", "Prioritize", "Govern", "Execute"].map((phase, index) => {
              const isDone = index < 3;
              return (
                <div key={phase} className="flex items-center justify-between rounded-lg border border-border/70 bg-card/75 px-3 py-2">
                  <p className="text-sm text-foreground">{phase}</p>
                  <StepStatus done={isDone} />
                </div>
              );
            })}
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  if (slug === "project-management-digital-transformation") {
    return (
      <HeroVisualShell>
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-foreground/80">Transformation Program Board</p>
            <Cog className="h-4 w-4 text-primary" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            {[
              { label: "Workstream A", status: "On Track" },
              { label: "Workstream B", status: "On Track" },
              { label: "Workstream C", status: "At Risk" },
              { label: "Steering", status: "Scheduled" },
            ].map((item, index) => (
              <div key={item.label} className="rounded-lg border border-border/70 bg-card/75 p-2">
                <p className="text-[10px] text-muted-foreground">{item.label}</p>
                <p className={index === 2 ? "mt-1 text-xs font-semibold text-primary" : "mt-1 text-xs font-semibold text-emerald-300"}>
                  {item.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </HeroVisualShell>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border/70 bg-muted/40">
      <Image src={heroImage} alt={title} fill className="object-cover" priority />
    </div>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "Service Not Found | CybexSoft",
      description: "Requested service page could not be found.",
      path: "/services",
    });
  }

  return createMetadata({
    title: `${service.title} | CybexSoft Consultancy Services`,
    description: service.description,
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const detail = getServiceDetailBySlug(slug);

  if (!service || !detail) {
    notFound();
  }

  const logos = detail.logoIds.map((id) => techLogos[id]).filter(Boolean);

  return (
    <>
      <section className="section-padding relative overflow-hidden">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to services
          </Link>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimateInView>
              <Badge className="w-fit">{service.title}</Badge>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{detail.headline}</h1>
              <p className="mt-4 max-w-3xl text-muted-foreground">{detail.overview}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.outcomes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button className="rounded-full px-6 text-primary-foreground">
                    Talk to a Specialist
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="rounded-full px-6">
                    View Related Case Studies
                  </Button>
                </Link>
              </div>
            </AnimateInView>

            <AnimateInView delay={0.1}>
              <div className="surface overflow-hidden rounded-2xl p-3">
                <div className="aspect-[16/10]">
                  <ServiceHeroVisual slug={service.id} title={service.title} heroImage={detail.heroImage} />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {detail.kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-lg border border-border/70 bg-card/70 p-3">
                      <p className="text-lg font-semibold text-foreground">{kpi.value}</p>
                      <p className="text-[11px] text-muted-foreground">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Technology"
              icon={Layers3}
              title="Platforms and tooling used in this service"
              description="Representative technologies used by CybexSoft teams based on project context and client architecture."
            />
          </AnimateInView>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {logos.map((logo, index) => (
              <AnimateInView key={logo.name} delay={index * 0.04}>
                <div className="group relative flex min-h-24 items-center gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_20px_44px_-24px_rgba(59,130,246,0.35)]">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 rounded-md bg-background/80 p-1.5 transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                  <p className="text-sm font-semibold text-foreground/85 transition-colors group-hover:text-foreground">
                    {logo.name}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Delivery Diagram"
              title="Execution blueprint"
              description="A practical phased model that turns strategy into reliable delivery outcomes."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {detail.diagram.map((step, index) => (
              <AnimateInView key={step.phase} delay={index * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_20px_44px_-24px_rgba(242,181,68,0.35)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(242,181,68,0.1),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-success to-primary/30" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary">
                        PHASE {step.phase}
                      </p>
                      <span className="rounded-full border border-border/70 bg-background/70 px-2 py-1 text-[10px] text-muted-foreground">
                        {index < detail.diagram.length - 1 ? "In Sequence" : "Outcome Ready"}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    <p className="mt-4 inline-flex items-center text-xs font-medium text-primary/90">
                      Stage {index + 1} of {detail.diagram.length}
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              eyebrow="Deliverables"
              title="What you receive"
              description="Professional outputs and implementation artifacts provided throughout the engagement."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detail.deliverables.map((item, index) => (
              <AnimateInView key={item} delay={index * 0.04}>
                <div className="surface rounded-xl p-4">
                  <p className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" />
                    {item}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>

          <div className="surface mt-8 rounded-2xl p-6">
            <p className="text-sm font-semibold text-foreground">Common engagement types</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detail.engagements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
