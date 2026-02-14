import { Clock3, Headset, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact CybexSoft Consultancy Services",
  description: "Talk with CybexSoft about software delivery, cloud modernization, and digital transformation consulting.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        icon={Headset}
        title="Let's discuss your next technology milestone"
        description="Share your project goals and current constraints. We'll respond with a practical execution plan tailored to your business context."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto grid w-full max-w-none gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <AnimateInView>
            <div className="surface flex h-full min-h-[560px] flex-col rounded-2xl p-6 sm:p-8 lg:min-h-[650px]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
                  <Headset className="h-3.5 w-3.5 text-primary" />
                  Reach us directly
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">Speak with our consulting team</h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  Connect with senior consultants for architecture guidance, modernization planning, and
                  delivery strategy.
                </p>
              </div>

              <div className="mt-7 space-y-3">
                <a
                  href="mailto:hello@cybexsoft.com"
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4 transition-colors hover:border-primary/40"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-sm font-semibold">Email</span>
                    <span className="text-sm text-muted-foreground">hello@cybexsoft.com</span>
                  </span>
                </a>
                <a
                  href="tel:+15552048810"
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4 transition-colors hover:border-primary/40"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-sm font-semibold">Phone</span>
                    <span className="text-sm text-muted-foreground">+1 (555) 204-8810</span>
                  </span>
                </a>
                <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <span className="block text-sm font-semibold">Office</span>
                    <span className="text-sm text-muted-foreground">548 Market Street, San Francisco, CA</span>
                  </span>
                </div>
              </div>

              <div className="mt-auto space-y-3 rounded-xl border border-border/70 bg-card/70 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Clock3 className="h-4 w-4 text-primary" />
                  Response & Availability
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Mon-Fri, 9:00 AM-6:00 PM PT</p>
                  <p>Typical first response: within 1 business day</p>
                  <p>Initial discovery call: 30 minutes with technical lead</p>
                </div>
              </div>
            </div>
          </AnimateInView>

          <AnimateInView delay={0.06}>
            <ContactForm />
          </AnimateInView>
        </div>
      </section>
    </>
  );
}
