import { ArrowUpRight, ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "FleetSync",
    url: "https://fleetsync.io",
    image: "/features/triage-card.svg",
    tags: ["Webflow", "HubSpot"],
  },
  {
    title: "PayRoute",
    url: "https://payroute.com",
    image: "/features/cycle-card.svg",
    tags: ["React", "Node.js"],
  },
  {
    title: "HealthLoop",
    url: "https://healthloop.co",
    image: "/features/overview-card.svg",
    tags: ["Next.js", "Supabase"],
  },
];

export const Features = ({ labelBg = "muted" }: { labelBg?: "muted" | "background" }) => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className={`${labelBg === "background" ? "bg-background" : "bg-muted"} text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide`}>
            STRATEGY. BUILD. SCALE.
          </span>
        </div>

        {/* Content */}
        <div className="mt-10 flex items-end justify-between lg:mt-24">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Built for companies that ship
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              We embed with your team to unblock hard problems, modernize legacy systems, and build products users love — fast.
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

        <div className="mt-8 md:hidden">
          <a
            href="/work"
            className="group inline-flex items-center gap-1 font-medium"
          >
            View all work
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 p-4 pe-0! md:p-6"
                >
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} screenshot`}
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6">
                    <div className="space-y-2">
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </div>
                </a>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
