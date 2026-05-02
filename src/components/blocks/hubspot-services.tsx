import { ArrowRight, Users, Mail, Workflow, BarChart3, Settings } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Onboarding & Implementation",
    description: "New to HubSpot or rebuilding? We handle full setup — CRM architecture, data import, integrations, and team training.",
    href: "#",
    icon: Users,
  },
  {
    title: "Marketing & Sales Operations",
    description: "Campaigns that run on structure. Email sequences, lead scoring, pipeline management — the backbone that makes marketing measurable and sales predictable.",
    href: "#",
    icon: Mail,
  },
  {
    title: "Workflows & AI Automation",
    description: "Lead routing, task creation, status changes — plus AI agents that handle qualification, follow-ups, and content personalization inside your HubSpot portal.",
    href: "#",
    icon: Workflow,
  },
  {
    title: "Reporting & Dashboards",
    description: "Custom dashboards, attribution reporting, funnel analysis — the reports your leadership team needs to make decisions with confidence.",
    href: "#",
    icon: BarChart3,
  },
  {
    title: "Management & Support",
    description: "Ongoing management without adding headcount. Configuration updates, new workflows, campaign support, and a partner who knows your portal inside out.",
    href: "#",
    icon: Settings,
  },
];

export const HubspotServices = () => {
  return (
    <section className="pt-12 lg:pt-16 pb-28 lg:pb-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            HubSpot implementation, done properly. From onboarding to ongoing management.
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
