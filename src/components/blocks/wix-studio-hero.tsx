import { ArrowRight, BadgeCheck, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const WixStudioHero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <a href="/services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <ChevronRight className="size-4" />
            <span className="text-foreground">Wix Studio Development</span>
          </div>

          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Wix Studio sites, built to grow with you.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
            Design, development, migration, and ongoing management — flexible builds on a platform your team can manage independently.
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

        {/* Right side - Badge */}
        <div className="relative flex flex-1 flex-col justify-center max-lg:pt-10 lg:pl-10">
          <div className="flex items-center gap-3 rounded-2xl border p-6">
            <BadgeCheck className="text-primary size-8 shrink-0" />
            <div>
              <div className="font-display text-lg font-bold tracking-tight">
                Wix Studio Partner
              </div>
              <p className="text-muted-foreground text-sm">
                Certified partner since 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
