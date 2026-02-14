import Link from "next/link";
import { BriefcaseBusiness, Send, UsersRound } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers | CybexSoft Consultancy Services",
  description: "Join CybexSoft and work on enterprise software, cloud, DevOps, and digital transformation projects.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        icon={UsersRound}
        title="Build impactful systems with a high-performing consulting team"
        description="We are hiring engineers, consultants, and designers who value quality, ownership, and practical problem solving."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              icon={BriefcaseBusiness}
              title="No openings right now"
              description="We currently do not have active vacancies. Please check back later for new opportunities."
            />
          </AnimateInView>
          <AnimateInView delay={0.06}>
            <div className="surface mt-8 rounded-xl p-6">
              <p className="text-sm text-muted-foreground">
                Thank you for your interest in CybexSoft Consultancy Services.
              </p>
            </div>
          </AnimateInView>

          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-dashed border-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Don&apos;t see your role? We are always interested in exceptional talent.</p>
            <Link href="mailto:careers@cybexsoft.com">
              <Button className="rounded-full px-6">
                <Send className="h-4 w-4" />
                Send Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
