import Link from "next/link";
import { Blocks, Settings2 } from "lucide-react";

import { ServiceCard } from "@/components/cards/service-card";
import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/data";

export const metadata = createMetadata({
  title: "IT Services | CybexSoft Consultancy Services",
  description: "Explore CybexSoft's complete IT service portfolio across software, cloud, DevOps, infrastructure, and transformation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        icon={Blocks}
        title="Nine specialized service lines, one accountable delivery partner"
        description="CybexSoft supports the full technology lifecycle from product development to infrastructure operations, automation, and digital transformation."
      >
        <Link href="/contact">
          <Button className="mt-2 rounded-full px-6">Discuss Your Requirements</Button>
        </Link>
      </PageHero>

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              icon={Settings2}
              title="Detailed Service Catalog"
              description="Each engagement is tailored to your context, security posture, and delivery objectives."
            />
          </AnimateInView>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimateInView key={service.id} delay={index * 0.05}>
                <Link href={`/services/${service.id}`} className="block h-full">
                  <ServiceCard {...service} />
                </Link>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
