"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
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
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-[#3b3426]/80 bg-[#121212]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-none items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="inline-flex h-18 w-18 items-center justify-center overflow-hidden rounded-lg border border-[#3b3426]/80 bg-[#171717] transition group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="CybexSoft logo"
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
              priority
            />
          </span>
          <div>
            <p className="text-sm font-bold tracking-tight text-white sm:text-base">CybexSoft Consultancy Services</p>
            <p className="text-[11px] text-[#a6a6a6]">Software. Cloud. Infrastructure.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setServicesOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(link.href) ? "text-[#f2b544]" : "text-[#a6a6a6] hover:text-[#f2b544]",
                link.href === "/" ? "hidden lg:inline-flex" : "inline-flex",
              )}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              onClick={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              className={cn(
                "inline-flex items-center text-sm font-medium transition-colors",
                isActive("/services") ? "text-[#f2b544]" : "text-[#a6a6a6] hover:text-[#f2b544]",
              )}
            >
              Services
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full z-50 mt-3 w-84 -translate-x-1/2 rounded-2xl border border-[#3b3426]/80 bg-[#171717]/95 p-3 shadow-[0_20px_50px_-30px_rgba(242,181,68,0.6)] backdrop-blur transition-all duration-200",
                servicesOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
              )}
            >
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="mb-2 inline-flex w-full rounded-lg bg-gradient-to-r from-[#f2b544] to-[#c89b3c] px-3 py-2 text-sm font-semibold text-[#121212] transition-opacity hover:opacity-90"
              >
                All Services
              </Link>
              <div className="grid gap-1">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm transition-colors",
                      pathname === service.href
                        ? "bg-[#201a12] text-[#f2b544]"
                        : "text-[#b4b4b4] hover:bg-[#201a12] hover:text-[#f2b544]",
                    )}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#f2b544] to-[#c89b3c] px-4 py-2 text-sm font-semibold text-[#121212] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a Call
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
