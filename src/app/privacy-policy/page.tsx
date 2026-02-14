import Link from "next/link";
import { FileText, Lock, Scale } from "lucide-react";

import { PageHero } from "@/components/layout/page-hero";
import { createMetadata } from "@/lib/seo";

const effectiveDate = "February 14, 2026";

export const metadata = createMetadata({
  title: "Privacy Policy | CybexSoft Consultancy Services",
  description:
    "Read how CybexSoft collects, uses, discloses, and protects personal information across its website and consultancy services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        icon={Lock}
        title="Privacy Policy"
        description="This policy explains how CybexSoft Consultancy Services handles personal data for website visitors, clients, and prospective clients."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <div className="surface rounded-2xl p-6 sm:p-8">
            <p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              CybexSoft Consultancy Services (CybexSoft, we, our, us) is based in Lucknow, Uttar Pradesh,
              India. This Privacy Policy applies to data collected through <span className="font-medium text-foreground">www.cybexsoft.com</span>,
              our contact forms, and related business communications.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <FileText className="h-5 w-5 text-primary" />
                  1. Information We Collect
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Identity and contact data (name, company, email, phone, job role).</li>
                  <li>Inquiry and project details shared through forms, emails, and meetings.</li>
                  <li>Technical and usage data (IP address, browser type, device, pages visited, timestamps).</li>
                  <li>Communication records and support interactions.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">2. How We Use Information</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>To respond to inquiries and provide consulting or support services.</li>
                  <li>To evaluate and execute potential client engagements.</li>
                  <li>To improve website performance, security, and user experience.</li>
                  <li>To meet legal, regulatory, and contractual obligations.</li>
                  <li>To send relevant business communications where lawful.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">3. Legal Basis and Compliance</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We process personal data based on consent, legitimate business interests, contractual necessity, and
                  legal obligations, including applicable Indian laws such as the Information Technology Act, 2000 and
                  related data protection requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">4. Data Sharing</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We do not sell personal information. We may share limited data with trusted service providers (for
                  hosting, email, analytics, and operations), professional advisors, or authorities when legally
                  required.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">5. International Transfers</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  If data is processed outside India, we use reasonable contractual and technical safeguards to protect
                  the data consistent with applicable legal standards.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">6. Data Retention</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We retain data only as long as necessary for the purposes in this policy, contractual obligations,
                  legal requirements, and dispute resolution.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">7. Security Measures</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We use reasonable administrative, technical, and organizational safeguards to protect personal data.
                  No online system is fully risk-free, but we continuously improve security controls.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">8. Cookies and Tracking</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We may use cookies and similar technologies for core website functions, analytics, and performance
                  optimization. You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">9. Your Rights</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Subject to applicable law, you may request access, correction, deletion, withdrawal of consent, or
                  restriction of certain processing activities. To exercise rights, contact us at
                  <span className="font-medium text-foreground"> hello@cybexsoft.com</span>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">10. Children&apos;s Privacy</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Our services are intended for business and professional users, not children under 18. We do not
                  knowingly collect personal data from children.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">11. Third-Party Links</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices
                  of third-party services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">12. Policy Updates</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We may update this Privacy Policy from time to time. Material changes will be reflected by revising
                  the effective date.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-xl font-semibold">
                  <Scale className="h-5 w-5 text-primary" />
                  13. Governing Law and Jurisdiction
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  This Privacy Policy is governed by the laws of India. Any dispute, claim, or legal proceeding arising
                  out of or related to this policy shall be subject to the exclusive jurisdiction of the competent
                  courts in Lucknow, Uttar Pradesh, India only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">14. Contact and Grievance</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  For privacy questions, rights requests, or grievances, contact:
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  CybexSoft Consultancy Services, Lucknow, Uttar Pradesh, India
                  <br />
                  Email: <span className="font-medium text-foreground">hello@cybexsoft.com</span>
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Also review our <Link href="/terms-of-service" className="font-medium text-primary hover:underline">Terms of Service</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
