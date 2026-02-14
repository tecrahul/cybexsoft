import Link from "next/link";
import { FileText, Scale } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { createMetadata } from "@/lib/seo";

const effectiveDate = "February 14, 2026";

export const metadata = createMetadata({
  title: "Terms of Service | CybexSoft Consultancy Services",
  description:
    "Read the terms that govern your use of CybexSoft's website, communications, and consultancy services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        icon={Scale}
        title="Terms of Service"
        description="These Terms govern your access to and use of CybexSoft Consultancy Services website and related service interactions."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <div className="surface rounded-2xl p-6 sm:p-8">
            <p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              These Terms of Service (Terms) apply to your use of <span className="font-medium text-foreground">www.cybexsoft.com</span>
              and related interactions with CybexSoft Consultancy Services (CybexSoft, we, our, us), based in
              Lucknow, Uttar Pradesh, India.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <FileText className="h-5 w-5 text-primary" />
                  1. Acceptance of Terms
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  By accessing or using our website, submitting inquiries, or engaging with our services, you agree to
                  these Terms. If you do not agree, do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">2. Scope of Services</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  CybexSoft provides consultancy and technology-related services including software development, cloud,
                  DevOps, infrastructure, and strategy services. Specific project scope, deliverables, timelines, and
                  fees are governed by separate written proposals or agreements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Provide accurate information during inquiries and engagement discussions.</li>
                  <li>Use the website lawfully and refrain from abusive, fraudulent, or harmful activity.</li>
                  <li>Not attempt unauthorized access, disruption, scraping, or misuse of our systems.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  All website content, branding, graphics, text, and materials are owned by or licensed to CybexSoft,
                  unless otherwise stated. No rights are granted except as expressly provided in writing.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">5. Confidentiality</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Both parties may exchange confidential information during pre-sales or service delivery. Confidential
                  information must be protected and used only for legitimate business purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">6. Fees, Invoicing, and Payment</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Commercial terms, invoices, due dates, taxes, and payment schedules are defined in signed agreements
                  or project statements. Delayed payments may affect service continuity.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">7. Disclaimers</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  The website and general content are provided on an as-is and as-available basis. We do not
                  warrant uninterrupted access, complete accuracy, or fitness for a specific purpose unless expressly
                  committed in a signed contract.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  To the maximum extent permitted by law, CybexSoft is not liable for indirect, incidental,
                  consequential, special, or punitive damages arising from website use or service interactions, except
                  where liability cannot be excluded by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">9. Indemnity</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  You agree to indemnify and hold CybexSoft harmless from claims, losses, and costs arising from your
                  misuse of the website, violation of law, or breach of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">10. Suspension or Termination</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We may suspend or terminate access to the website or service discussions where misuse, legal risk,
                  abuse, security concerns, or breach of these Terms is identified.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">11. Third-Party Services</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Our website may integrate or link to third-party tools and platforms. We do not control and are not
                  responsible for third-party terms, policies, or service reliability.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">12. Privacy</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Use of personal data is governed by our <Link href="/privacy-policy" className="font-medium text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">13. Updates to Terms</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We may update these Terms periodically. Continued use after updates indicates acceptance of revised
                  Terms.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <Scale className="h-5 w-5 text-primary" />
                  14. Governing Law and Exclusive Jurisdiction
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  These Terms are governed by the laws of India. Any dispute, claim, or legal action arising from or
                  related to these Terms, the website, or service interactions shall be brought exclusively before the
                  competent courts in Lucknow, Uttar Pradesh, India only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">15. Contact</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  CybexSoft Consultancy Services
                  <br />
                  Lucknow, Uttar Pradesh, India
                  <br />
                  Email: <span className="font-medium text-foreground">hello@cybexsoft.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
