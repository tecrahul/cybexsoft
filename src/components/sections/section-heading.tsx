import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="space-y-4">
      {eyebrow ? <Badge variant="outline">{eyebrow}</Badge> : null}
      <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {Icon ? (
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <span>{title}</span>
      </h2>
      {description ? <p className="max-w-2xl text-muted-foreground">{description}</p> : null}
    </div>
  );
}
