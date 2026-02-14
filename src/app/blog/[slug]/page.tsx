import type { Metadata } from "next";
import { CalendarDays, Clock3, Tag } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found | CybexSoft",
      description: "Requested article could not be found.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: `${post.title} | CybexSoft Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-padding">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Tag className="h-3 w-3" />
            {post.category}
          </Badge>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarDays className="h-3 w-3" />
            {post.publishedAt}
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock3 className="h-3 w-3" />
            {post.readTime}
          </p>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">{post.excerpt}</p>

        <div className="mt-10 space-y-5 text-muted-foreground">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
