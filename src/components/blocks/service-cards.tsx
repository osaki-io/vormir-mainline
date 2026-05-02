import { ArrowRight, Layout, Database, ArrowLeftRight, Brain, Settings } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Design & Development",
    description:
      "Custom Webflow builds designed around conversion. Fast, search-visible, and built to turn visitors into customers. Includes integrations — CRM, analytics, payments — all connected.",
    href: "#",
    icon: Layout,
    items: [
      "Website design & development",
      "Landing pages & marketing sites",
      "Integrations (HubSpot, GA4, PostHog, Stripe)",
      "Responsive across all devices",
    ],
  },
  {
    title: "CMS & Dynamic Content",
    description:
      "Structured, scalable content management. So your team can publish without calling a developer every time.",
    href: "#",
    icon: Database,
    items: [
      "CMS architecture & collection design",
      "Dynamic pages & templates",
      "Blog, resource center, case study builds",
      "Editor training for your team",
    ],
  },
  {
    title: "Migration to Webflow",
    description:
      "From WordPress, Wix, Squarespace, or custom stacks. Full migration with SEO preserved.",
    href: "#",
    icon: ArrowLeftRight,
    items: [
      "Full site migration",
      "URL mapping & 301 redirects",
      "SEO preservation & audit",
      "Content & media transfer",
    ],
  },
  {
    title: "AI-Native Builds & Workflows",
    description:
      "Sites built for how people find businesses in 2026. AEO, structured data, AI-powered features — plus automated content pipelines and smart workflows connected to your AI stack.",
    href: "#",
    icon: Brain,
    items: [
      "AEO (Answer Engine Optimization)",
      "AI-powered site search & chat",
      "Automated content & lead workflows",
      "Structured data & schema for AI crawlers",
    ],
  },
  {
    title: "Management & Support",
    description:
      "Ongoing management that keeps your site performing. Updates, new pages, performance monitoring, priority support. Plus on-demand developer hours when you need to scale.",
    href: "#",
    icon: Settings,
    items: [
      "Regular updates & new page builds",
      "Performance monitoring & optimization",
      "On-demand developer hours",
      "Priority support & SLA",
    ],
  },
];

export const ServiceCards = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            CORE SERVICES
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            Webflow development, done properly. 100+ sites delivered — landing pages, marketing sites, enterprise builds, CMS-powered platforms, and everything in between.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-8 grid gap-6 md:mt-12 lg:mt-20 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-3xl">
                <CardContent className="flex flex-col p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 grid size-10 shrink-0 place-items-center rounded-xl">
                      <Icon className="text-primary size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl leading-tight font-bold tracking-tight md:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="bg-muted-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                        <span className="text-muted-foreground text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75 md:text-base"
                  >
                    {service.title}
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
