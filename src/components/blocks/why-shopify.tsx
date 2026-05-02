import { ShoppingCart, Zap, Puzzle, Scaling, Cpu, Shield } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const benefits = [
  {
    title: "Purpose-built for e-commerce",
    line: "Inventory, payments, shipping — all included.",
    icon: ShoppingCart,
  },
  {
    title: "Checkout that converts",
    line: "Fast, trusted, and endlessly customizable.",
    icon: Zap,
  },
  {
    title: "App ecosystem",
    line: "Thousands of apps. Custom apps when needed.",
    icon: Puzzle,
  },
  {
    title: "Scales with you",
    line: "100 orders or 100,000. Same platform.",
    icon: Scaling,
  },
  {
    title: "Headless-ready",
    line: "Custom front-end with Shopify's back-end.",
    icon: Cpu,
  },
  {
    title: "Secure & compliant",
    line: "PCI compliance and fraud protection built in.",
    icon: Shield,
  },
];

export const WhyShopify = () => {
  return (
    <section className="bg-background py-16 text-foreground md:py-24 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            WHY SHOPIFY
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Built for selling.
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
