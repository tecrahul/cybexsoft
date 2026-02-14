import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0f19] p-6 shadow-[0_30px_80px_-40px_rgba(57,87,255,0.6)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/22 blur-3xl" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/80">Let&apos;s talk</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to modernize your IT landscape?
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
                We help organizations modernize infrastructure, strengthen security, and scale delivery
                with practical engineering and execution-first consulting.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  Direct access to senior engineers
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  Fast assessment of IT gaps
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  Clear roadmap with practical next steps
                </li>
              </ul>

              <p className="mt-7 text-sm text-slate-300">
                Contact:{" "}
                <Link href="mailto:hello@cybexsoft.com" className="font-medium text-blue-300 hover:text-blue-200">
                  hello@cybexsoft.com
                </Link>
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#12203f] via-[#1a2c55] to-[#34205c] p-6 shadow-[0_24px_50px_-30px_rgba(42,124,255,0.85)] sm:p-7">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Book a strategy call</h3>
              <p className="mt-3 text-sm text-slate-200">
                In this call, we assess your current setup, identify high-impact gaps, and align on the
                next execution priorities.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Schedule a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Request an IT roadmap
                </Link>
              </div>

              <p className="mt-5 text-xs text-slate-300">Typical response time: within 1 business day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
