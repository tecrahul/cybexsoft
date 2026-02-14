import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/it-infrastructure-management", label: "IT Infrastructure Management" },
  { href: "/services/devops-services-automation", label: "DevOps Services & Automation" },
  { href: "/services/cloud-solutions", label: "Cloud Solutions" },
  { href: "/services/server-maintenance-monitoring", label: "Server Maintenance & Monitoring" },
  { href: "/services/mobile-web-app-development", label: "Mobile & Web App Development" },
  { href: "/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/services/it-consulting-strategy", label: "IT Consulting & Strategy" },
  {
    href: "/services/project-management-digital-transformation",
    label: "Project Management & Digital Transformation",
  },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://x.com", label: "X", icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#3b3426]/80 bg-[radial-gradient(circle_at_25%_0%,rgba(242,181,68,0.14),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(200,155,60,0.12),transparent_32%),#121212]">
      <div className="mx-auto w-full max-w-none px-4 pb-8 pt-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-40 w-40 items-center justify-center overflow-hidden rounded-lg border border-[#3b3426]/80 bg-[#171717]">
                <Image
                  src="/logo.png"
                  alt="CybexSoft logo"
                  width={160}
                  height={160}
                  className="h-36 w-36 object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-white sm:text-base">CybexSoft Consultancy Services</p>
                <p className="text-[11px] text-[#a6a6a6]">Software. Cloud. Infrastructure.</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-[#a9a9a9]">
              Enterprise-grade software engineering, infrastructure management, and transformation programs for high-growth and regulated businesses.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#3b3426]/80 bg-[#1a1712] px-3 py-1 text-xs font-medium text-[#e5c37a]">
                99.98% Uptime Focus
              </span>
              <span className="rounded-full border border-[#3b3426]/80 bg-[#1a1712] px-3 py-1 text-xs font-medium text-[#e5c37a]">
                Security-First Delivery
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-white">Company</p>
            <div className="mt-4 grid gap-2 text-sm">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-[#a9a9a9] transition-colors hover:text-[#f2b544]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-white">Core Services</p>
            <div className="mt-4 grid gap-2 text-sm">
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-[#a9a9a9] transition-colors hover:text-[#f2b544]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-[#a9a9a9]">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d8a94a]" />
                hello@cybexsoft.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d8a94a]" />
                +1 (555) 204-8810
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d8a94a]" />
                San Francisco, CA
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#d8a94a]" />
                Mon-Fri, 9:00 AM-6:00 PM PT
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3b3426]/80 bg-[#171717] text-[#a9a9a9] transition-colors hover:border-[#c89b3c] hover:text-[#f2b544]"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3b3426]/80">
        <div className="mx-auto flex w-full max-w-none flex-col gap-2 px-4 py-5 text-xs text-[#9f9f9f] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} CybexSoft Consultancy Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#f2b544]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#f2b544]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
