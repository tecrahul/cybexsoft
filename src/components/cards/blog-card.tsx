import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  publishedAt,
}: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{category}</Badge>
          <span className="text-xs text-muted-foreground">{publishedAt}</span>
        </div>
        <CardTitle className="leading-snug">
          <Link href={`/blog/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{readTime}</p>
      </CardContent>
    </Card>
  );
}
