import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="mx-auto flex w-full max-w-none flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-10">
        {eyebrow ? (
          <Badge className="w-fit">
            {Icon ? <Icon className="mr-1 h-3.5 w-3.5" /> : null}
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}
