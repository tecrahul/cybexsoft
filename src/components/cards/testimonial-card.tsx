import { ArrowUpRight, MessageSquareQuote } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <article className="group h-full rounded-2xl border border-white/10 bg-zinc-950/95 p-6 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_20px_45px_-28px_color-mix(in_oklab,var(--primary),black_50%)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900 text-zinc-300">
          <MessageSquareQuote className="h-4 w-4" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-300" />
      </div>
      <p className="text-sm leading-7 text-zinc-400">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-zinc-400">
          {role}, {company}
        </p>
      </div>
    </article>
  );
}
