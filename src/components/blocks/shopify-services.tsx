import { ArrowRight, Store, Cpu, ArrowLeftRight, Puzzle, Settings } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Store Design & Development",
    description: "Custom Shopify builds designed around your products, your buyers, and your conversion goals.",
    href: "#",
    icon: Store,
  },
  {
    title: "Headless Shopify (Hydrogen & Oxygen)",
    description: "Custom storefronts powered by Hydrogen, hosted on Oxygen. Full design freedom with Shopify's backend handling inventory, orders, and checkout.",
    href: "#",
    icon: Cpu,
  },
  {
    title: "Migration to Shopify",
    description: "From WooCommerce, Magento, Squarespace, or custom platforms. Full migration with products, collections, customer data, and SEO preserved.",
    href: "#",
    icon: ArrowLeftRight,
  },
  {
    title: "Custom Apps & Integrations",
    description: "Custom Shopify apps when existing ones don't do what you need. Plus CRM, analytics, accounting, shipping, and email integrations.",
    href: "#",
    icon: Puzzle,
  },
  {
    title: "Management & Maintenance",
    description: "Ongoing store management without adding headcount. Product updates, collections, performance monitoring, and app management.",
    href: "#",
    icon: Settings,
  },
];

export const ShopifyServices = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            Shopify development, done properly. From store design to ongoing management.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:mt-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded-3xl transition-all hover:shadow-lg"
              >
                <CardContent className="flex flex-col p-6 md:p-8">
                  <div className="bg-primary/10 mb-4 grid size-10 place-items-center rounded-xl">
                    <Icon className="text-primary size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="group/link mt-4 inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-75"
                  >
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
