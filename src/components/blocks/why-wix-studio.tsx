import { Eye, Code2, Briefcase, Zap, Scaling, Server } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const benefits = [
  {
    title: "Visual editing, real flexibility",
    line: "Your team manages content without touching code.",
    icon: Eye,
  },
  {
    title: "Developer-friendly",
    line: "Custom code, CSS, dynamic pages, API access.",
    icon: Code2,
  },
  {
    title: "Built-in business tools",
    line: "E-commerce, booking, forms — no plugins needed.",
    icon: Briefcase,
  },
  {
    title: "Fast to launch",
    line: "Professional sites live fast and manageable.",
    icon: Zap,
  },
  {
    title: "Scales with you",
    line: "Start small, add pages and features as you grow.",
    icon: Scaling,
  },
  {
    title: "Hosting included",
    line: "SSL, CDN, security — no separate hosting.",
    icon: Server,
  },
];

export const WhyWixStudio = () => {
  return (
    <section className="bg-background py-16 text-foreground md:py-24 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            WHY WIX STUDIO
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A platform that keeps up with your team.
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
