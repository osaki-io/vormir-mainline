import { ArrowUpRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";

const works = [
  {
    title: "FleetSync",
    url: "https://fleetsync.io",
    image: "/about/1.webp",
    tags: ["Webflow", "HubSpot"],
  },
  {
    title: "PayRoute",
    url: "https://payroute.com",
    image: "/about/2.webp",
    tags: ["React", "Node.js"],
  },
  {
    title: "HealthLoop",
    url: "https://healthloop.co",
    image: "/about/3.webp",
    tags: ["Next.js", "Supabase"],
  },
  {
    title: "Gridline",
    url: "https://gridline.dev",
    image: "/about/4.webp",
    tags: ["Astro", "Tailwind"],
  },
];

export const WorkPreview = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SELECTED WORK
          </span>
        </div>

        {/* Header */}
        <div className="mt-10 flex items-end justify-between lg:mt-24">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Our Work
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Websites and products we've built for ambitious teams.
            </p>
          </div>
          <a
            href="/work"
            className="group hidden items-center gap-1 font-medium transition-opacity hover:opacity-75 md:flex"
          >
            View all work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {works.map((work) => (
            <a
              key={work.url}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <img
                  src={work.image}
                  alt={work.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight">
                    {work.title}
                  </h3>
                  <span className="text-muted-foreground flex items-center gap-1 text-sm font-medium transition-colors group-hover:text-foreground">
                    View work
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="/work"
            className="group inline-flex items-center gap-1 font-medium"
          >
            View all work
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
    <DashedLine
      orientation="horizontal"
      className="mx-auto max-w-[80%]"
    />
  );
};
