import { ArrowRight, BadgeCheck, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const HubspotHero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <div className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <a href="/services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <ChevronRight className="size-4" />
            <span className="text-foreground">HubSpot Implementation</span>
          </div>

          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            HubSpot that actually works for your team.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
            Onboarding, implementation, marketing and sales operations, AI agents, integrations, and ongoing management — from a certified HubSpot partner.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Book a call</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact us</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:mt-20 lg:w-72">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="text-primary size-5" />
            <span>HubSpot Solutions Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};
