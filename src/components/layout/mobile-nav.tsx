"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-[#3b3426] bg-[#171717] text-[#f2b544] hover:bg-[#201a12] hover:text-[#f2b544]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-[#3b3426]/80 bg-[#171717]/95 p-4 shadow-[0_20px_50px_-30px_rgba(242,181,68,0.6)] backdrop-blur">
          <div className="mb-3 rounded-xl border border-[#3b3426]/80 bg-[#121212]/70 p-2">
            <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-[#a6a6a6]">Services</p>
            <div className="grid gap-1">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                  pathname === "/services"
                    ? "bg-gradient-to-r from-[#f2b544] to-[#c89b3c] text-[#121212]"
                    : "bg-gradient-to-r from-[#f2b544] to-[#c89b3c] text-[#121212] hover:opacity-90",
                )}
              >
                All Services
              </Link>
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setOpen(false)}
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
          <nav className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[#201a12] text-[#f2b544]"
                    : "text-[#b4b4b4] hover:bg-[#201a12] hover:text-[#f2b544]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
