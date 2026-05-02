import { ArrowRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "12", label: "Countries served" },
  { value: "2021", label: "Founded" },
  { value: "HubSpot & Webflow", label: "Certified partner" },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            We build the systems that move your business forward.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
            Websites, platforms, revenue operations, and go-to-market infrastructure — from strategy to shipped.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Book a call</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/contact"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Send a project brief
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold tracking-tight md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
