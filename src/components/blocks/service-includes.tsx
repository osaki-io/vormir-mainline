import { Paintbrush, Zap, Smartphone, Search, BarChart3, GraduationCap } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const includes = [
  {
    title: "Design",
    description:
      "Custom UI/UX from scratch. Wireframes through final design, built around how your users actually behave.",
    icon: Paintbrush,
  },
  {
    title: "Animation & Interactions",
    description:
      "Scroll-based animations, micro-interactions, page transitions. Motion that guides attention and adds to the experience.",
    icon: Zap,
  },
  {
    title: "Responsive Design",
    description:
      "Tested across breakpoints. Mobile-first where your traffic calls for it.",
    icon: Smartphone,
  },
  {
    title: "SEO Baseline",
    description:
      "Technical SEO baked in from day one. Meta tags, structured data, open graph, sitemap, canonical URLs, page speed.",
    icon: Search,
  },
  {
    title: "Analytics Setup",
    description:
      "GA4, PostHog, GTM — configured from day one. Event tracking, funnel visibility, dead clicks, rage clicks, conversion paths, ad attribution.",
    icon: BarChart3,
  },
  {
    title: "Handoff & Training",
    description:
      "We train your team to edit content, publish pages, and manage the site on their own. Full documentation included.",
    icon: GraduationCap,
  },
];

export const ServiceIncludes = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            WITH EVERY BUILD
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            With Every Build
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            Every site we deliver includes:
          </p>
        </div>

        {/* Items grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {includes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border p-6 transition-colors hover:bg-muted/50"
              >
                <div className="bg-primary/10 mb-4 grid size-10 place-items-center rounded-xl">
                  <Icon className="text-primary size-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
