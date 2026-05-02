import { ArrowRight, Target, FileText, Megaphone, Mail, BarChart3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "GTM Strategy & Campaigns",
    description: "ICP definition, positioning, messaging, and campaign infrastructure to reach them.",
    href: "#",
    icon: Target,
  },
  {
    title: "Content, SEO & AEO",
    description: "Content strategy, production, search optimization, and Answer Engine Optimization.",
    href: "#",
    icon: FileText,
  },
  {
    title: "Ad Operations",
    description: "Campaign strategy, setup, and management across Meta, Google, and LinkedIn.",
    href: "#",
    icon: Megaphone,
  },
  {
    title: "Email & Marketing Automation",
    description: "Sequences, nurturing campaigns, and automation that move leads through the funnel.",
    href: "#",
    icon: Mail,
  },
  {
    title: "Analytics & Revenue Operations",
    description: "GA4, PostHog, funnel tracking, ad attribution, dashboards, and revenue reporting.",
    href: "#",
    icon: BarChart3,
  },
];

export const GtmServices = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            GTM services, done properly. From strategy to execution.
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
