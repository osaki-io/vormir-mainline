import { ShoppingCart, Zap, Puzzle, Scaling, Cpu, Shield } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const benefits = [
  {
    title: "Purpose-built for e-commerce",
    line: "Inventory, payments, shipping, returns — Shopify handles the complexity so you can focus on products and customers.",
    icon: ShoppingCart,
  },
  {
    title: "Checkout that converts",
    line: "One of the highest-converting checkouts in e-commerce. Fast, trusted, and endlessly customizable.",
    icon: Zap,
  },
  {
    title: "App ecosystem",
    line: "Thousands of apps in the marketplace, plus custom app development. Whatever your store needs, there is a way to build it.",
    icon: Puzzle,
  },
  {
    title: "Scales with you",
    line: "From your first hundred orders to your first hundred thousand. Same platform, more power as you grow.",
    icon: Scaling,
  },
  {
    title: "Headless-ready",
    line: "Hydrogen and Oxygen give you full front-end control with Shopify's back-end reliability.",
    icon: Cpu,
  },
  {
    title: "Secure & compliant",
    line: "PCI compliance, fraud protection, and automatic security updates built in from day one.",
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
