import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
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
      <section className="section-padding">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
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
                  <Button className="rounded-full px-6">
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
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/70 bg-muted/40">
                  <Image src={detail.heroImage} alt={service.title} fill className="object-cover" priority />
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
                <div className="surface relative h-full rounded-2xl p-5">
                  <p className="text-xs font-semibold tracking-wider text-primary">PHASE {step.phase}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
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
