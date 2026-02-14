import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PortfolioCard({
  title,
  industry,
  summary,
  impact,
  image,
}: {
  title: string;
  industry: string;
  summary: string;
  impact: string[];
  image: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70">
        <Image src={image} alt={title} fill className="object-cover" loading="lazy" />
      </div>
      <CardHeader>
        <Badge variant="outline" className="w-fit">
          {industry}
        </Badge>
        <CardTitle className="pt-2">{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {impact.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
