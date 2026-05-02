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
