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

import { Badge } from "@/components/ui/badge";

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
    <footer className="mt-24 border-t border-border/70 bg-[radial-gradient(circle_at_25%_0%,color-mix(in_oklab,var(--primary),transparent_90%),transparent_40%),radial-gradient(circle_at_90%_10%,color-mix(in_oklab,var(--success),transparent_88%),transparent_32%)]">
      <div className="mx-auto w-full max-w-none px-4 pb-8 pt-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-success text-white">
                CS
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight sm:text-base">CybexSoft Consultancy Services</p>
                <p className="text-[11px] text-muted-foreground">Software. Cloud. Infrastructure.</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Enterprise-grade software engineering, infrastructure management, and transformation programs for high-growth and regulated businesses.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">99.98% Uptime Focus</Badge>
              <Badge variant="secondary">Security-First Delivery</Badge>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold">Company</p>
            <div className="mt-4 grid gap-2 text-sm">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold">Core Services</p>
            <div className="mt-4 grid gap-2 text-sm">
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                hello@cybexsoft.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +1 (555) 204-8810
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                San Francisco, CA
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-none flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} CybexSoft Consultancy Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
