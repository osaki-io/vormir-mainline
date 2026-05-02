import { ArrowRight, Layout, Database, ArrowLeftRight, Brain, Settings } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Design & Development",
    description: "Custom builds around conversion. Integrations included.",
    href: "#",
    icon: Layout,
  },
  {
    title: "CMS & Dynamic Content",
    description: "Structured content management your team can publish without dev tickets.",
    href: "#",
    icon: Database,
  },
  {
    title: "Migration to Webflow",
    description: "From WordPress, Wix, Squarespace. SEO preserved.",
    href: "#",
    icon: ArrowLeftRight,
  },
  {
    title: "AI-Native Builds",
    description: "AEO, structured data, AI search, and automated workflows.",
    href: "#",
    icon: Brain,
  },
  {
    title: "Management & Support",
    description: "Ongoing updates, performance monitoring, and priority support.",
    href: "#",
    icon: Settings,
  },
];

export const ServiceCards = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            Webflow development, done properly. 100+ sites delivered.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-12 lg:mt-20 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <Card
                key={service.title}
                className={`rounded-3xl ${isLast ? "lg:col-span-2" : ""}`}
              >
                <CardContent className="flex flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 grid size-10 shrink-0 place-items-center rounded-xl">
                      <Icon className="text-primary size-5" />
                    </div>
                    <h3 className="font-display text-xl leading-tight font-bold tracking-tight md:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-snug md:text-base">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75 md:text-base"
                  >
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
