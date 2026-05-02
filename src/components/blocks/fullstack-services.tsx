import { ArrowRight, Globe, Plug, Monitor, Brain, Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Applications",
    description: "Full-stack apps built around your business logic. SaaS, internal tools, platforms.",
    href: "#",
    icon: Globe,
  },
  {
    title: "API Development & Integrations",
    description: "RESTful and GraphQL APIs that connect your systems and power products.",
    href: "#",
    icon: Plug,
  },
  {
    title: "Front-End Engineering",
    description: "Fast, accessible interfaces. React, Next.js, Vue. Clean architecture.",
    href: "#",
    icon: Monitor,
  },
  {
    title: "AI & LLM Integrations",
    description: "Custom AI agents and LLM-powered features built into your product.",
    href: "#",
    icon: Brain,
  },
  {
    title: "Maintenance & Support",
    description: "Bug fixes, features, performance updates. Scale up or down.",
    href: "#",
    icon: Wrench,
  },
];

export const FullstackServices = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            Full-stack development, done properly. From architecture to deployment.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 lg:mt-20 lg:grid-cols-2">
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
