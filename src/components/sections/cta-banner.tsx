import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#3b3426]/80 bg-[#121212] p-6 shadow-[0_30px_80px_-40px_rgba(242,181,68,0.45)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[#f2b544]/18 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#c89b3c]/16 blur-3xl" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9b76c]">Let&apos;s talk</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to modernize your IT landscape?
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-[#a6a6a6] sm:text-base">
                We help organizations modernize infrastructure, strengthen security, and scale delivery
                with practical engineering and execution-first consulting.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-[#e6e6e6] sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f2b544]" />
                  Direct access to senior engineers
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#e6e6e6] sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f2b544]" />
                  Fast assessment of IT gaps
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#e6e6e6] sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f2b544]" />
                  Clear roadmap with practical next steps
                </li>
              </ul>

              <p className="mt-7 text-sm text-[#a6a6a6]">
                Contact:{" "}
                <Link href="mailto:hello@cybexsoft.com" className="font-medium text-[#e5c37a] hover:text-[#f2b544]">
                  hello@cybexsoft.com
                </Link>
              </p>
            </div>

            <div className="rounded-3xl border border-[#3b3426]/80 bg-gradient-to-br from-[#171717] via-[#1c1914] to-[#211b12] p-6 shadow-[0_24px_50px_-30px_rgba(242,181,68,0.45)] sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Book a strategy call</h3>
              <p className="mt-3 text-sm text-[#b8b8b8]">
                In this call, we assess your current setup, identify high-impact gaps, and align on the
                next execution priorities.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f2b544] to-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#121212] transition-all hover:brightness-105"
                >
                  Schedule a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-[#c89b3c]/70 bg-[#1a1712] px-5 py-3 text-sm font-semibold text-[#e5c37a] transition-colors hover:bg-[#201a12]"
                >
                  Request an IT roadmap
                </Link>
              </div>

              <p className="mt-5 text-xs text-[#a6a6a6]">Typical response time: within 1 business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
