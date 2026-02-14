import { Newspaper, PenSquare } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { PageHero } from "@/components/layout/page-hero";
import { AnimateInView } from "@/components/sections/animate-in-view";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/data";

export const metadata = createMetadata({
  title: "Blog | CybexSoft Consultancy Services",
  description: "Insights from CybexSoft on DevOps, cloud strategy, and enterprise digital transformation.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        icon={Newspaper}
        title="Technical insights for digital leaders"
        description="Perspectives on software delivery, cloud operations, infrastructure strategy, and transformation execution."
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10">
          <AnimateInView>
            <SectionHeading
              icon={PenSquare}
              title="Latest articles"
              description="Sample editorial content seeded for launch."
            />
          </AnimateInView>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <AnimateInView key={post.slug} delay={index * 0.06}>
                <BlogCard {...post} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
