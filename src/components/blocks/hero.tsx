import {
  ArrowRight,
  Code2,
  Cpu,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Strategy First",
    description: "We diagnose bottlenecks and build a roadmap before writing code.",
    icon: Lightbulb,
  },
  {
    title: "Elite Engineering",
    description: "Senior engineers who ship production-grade systems, not prototypes.",
    icon: Code2,
  },
  {
    title: "Fractional CTO",
    description: "Part-time technical leadership for teams that need scale without overhead.",
    icon: Cpu,
  },
  {
    title: "Ship Faster",
    description: "From zero to MVP in weeks, not quarters. Iterate with confidence.",
    icon: Rocket,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Consulting + Engineering
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            We help startups and enterprises ship faster — from strategy to production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Book a Call</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/#services"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                See Our Services
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
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
