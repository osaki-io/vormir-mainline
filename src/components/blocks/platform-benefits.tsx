import { Layout, Puzzle, Server, Gauge, Scaling, Bot } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const benefits = [
  {
    title: "Visual CMS",
    description:
      "Your marketing team publishes content without filing dev tickets. Blog posts, case studies, landing pages — all managed in a visual editor.",
    icon: Layout,
  },
  {
    title: "No plugin dependencies",
    description:
      "Everything is native. No plugin conflicts, no abandoned third-party code, no surprise updates breaking things.",
    icon: Puzzle,
  },
  {
    title: "Built-in hosting",
    description:
      "Global CDN, SSL, automatic backups. Webflow takes care of infrastructure so your team can focus on everything else.",
    icon: Server,
  },
  {
    title: "SEO & performance",
    description:
      "Clean semantic HTML. Fast page loads. Built-in SEO controls. No trade-off between design and search visibility.",
    icon: Gauge,
  },
  {
    title: "Scales with you",
    description:
      "From a 5-page startup site to a 500-page enterprise platform. Same CMS, same workflow, same team managing it.",
    icon: Scaling,
  },
  {
    title: "AI-ready",
    description:
      "AEO tools, structured data, AI-powered site search. Webflow keeps up with how search is evolving — AI answers, voice, and beyond.",
    icon: Bot,
  },
];

export const PlatformBenefits = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            WHY WEBFLOW
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            The right platform for teams that move fast.
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border p-6 transition-colors hover:bg-muted/50"
              >
                <div className="bg-primary/10 mb-4 grid size-10 place-items-center rounded-xl">
                  <Icon className="text-primary size-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
