import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-none items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-success text-white transition group-hover:scale-105">
            CS
          </span>
          <div>
            <p className="text-sm font-bold tracking-tight sm:text-base">CybexSoft Consultancy Services</p>
            <p className="text-[11px] text-muted-foreground">Software. Cloud. Infrastructure.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                link.href === "/" ? "hidden lg:inline-flex" : "inline-flex",
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-84 -translate-x-1/2 rounded-2xl border border-border/70 bg-popover/95 p-3 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <Link
                href="/services"
                className="mb-2 inline-flex w-full rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                All Services
              </Link>
              <div className="grid gap-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button size="sm" className="rounded-full px-4">
              Book a Call
            </Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
