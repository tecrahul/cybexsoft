import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/lib/data";

export function ServiceCard({
  title,
  description,
  icon: Icon,
  outcomes,
  achievement,
}: Pick<Service, "title" | "description" | "icon" | "outcomes" | "achievement">) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 p-6 font-[var(--font-space-grotesk)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_20px_45px_-28px_color-mix(in_oklab,var(--primary),black_50%)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-success/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900 text-zinc-200">
            <Icon className="h-4 w-4" />
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900/80 text-zinc-400 transition-colors group-hover:text-zinc-200">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {outcomes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="font-mono text-sm text-emerald-400">
            <span className="text-emerald-500">{"// "}</span>
            {achievement}
          </p>
        </div>
      </div>
    </article>
  );
}
