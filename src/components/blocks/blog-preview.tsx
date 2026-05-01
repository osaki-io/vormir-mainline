import { ChevronRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const posts = [
  {
    title: "How we shipped an MVP in 6 weeks",
    image: "/about/1.webp",
    slug: "mvp-in-6-weeks",
  },
  {
    title: "Migrating from monolith to microservices",
    image: "/about/2.webp",
    slug: "monolith-to-microservices",
  },
  {
    title: "Why every startup needs a fractional CTO",
    image: "/about/3.webp",
    slug: "fractional-cto",
  },
  {
    title: "Building high-performance engineering teams",
    image: "/about/4.webp",
    slug: "high-performance-teams",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Latest Insights
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Thoughts on engineering strategy, team building, and shipping fast.
            </p>
          </div>
          <a
            href="/blog"
            className="group hidden items-center gap-1 font-medium transition-opacity hover:opacity-75 md:flex"
          >
            View all
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 pe-2">
                <h3 className="max-w-60 text-2xl leading-tight font-bold tracking-tight">
                  {post.title}
                </h3>
                <div className="mt-1 shrink-0 rounded-full border p-2">
                  <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-7" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="/blog"
            className="group inline-flex items-center gap-1 font-medium"
          >
            View all
            <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
