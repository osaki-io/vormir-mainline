import { Database, Zap, Brain, Scaling, Puzzle, CheckCircle } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const benefits = [
  {
    title: "Single source of truth",
    line: "Marketing, sales, and service data in one place. No more spreadsheets or conflicting numbers.",
    icon: Database,
  },
  {
    title: "Automation built in",
    line: "Workflows, sequences, and AI agents that handle the repetitive work. Your team focuses on revenue, not data entry.",
    icon: Zap,
  },
  {
    title: "AI-powered",
    line: "Lead scoring, predictive analytics, conversational agents, automated workflows — built into the platform, ready to activate.",
    icon: Brain,
  },
  {
    title: "Scales with your team",
    line: "From a 3-person startup to a 200-person company. Same platform, more power as you grow.",
    icon: Scaling,
  },
  {
    title: "Ecosystem of integrations",
    line: "Thousands of apps in the marketplace, plus custom APIs. HubSpot connects to whatever your stack requires.",
    icon: Puzzle,
  },
  {
    title: "Free to start",
    line: "Core CRM is free. Grow into paid hubs when you need them. No upfront commitment.",
    icon: CheckCircle,
  },
];

export const WhyHubspot = () => {
  return (
    <section className="bg-background py-16 text-foreground md:py-24 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            WHY HUBSPOT
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            One platform. Every team connected.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:mt-16 lg:mt-24 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="bg-primary/10 grid size-10 shrink-0 place-items-center rounded-xl">
                  <Icon className="text-primary size-5" />
                </div>
                <div className="pt-0.5">
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground md:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed md:text-base">
                    {benefit.line}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
