import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

export const GtmCTA = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            LET'S TALK
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Have a GTM project in mind?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-snug">
            Book a 30-minute call to talk through your current setup and goals. Or send us a project brief and we'll come back with a plan and a quote.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <a href="/contact" className="group inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="/work"
                className="group inline-flex items-center gap-2"
              >
                Explore our work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
