import {
  ArrowRight,
  Code2,
  TrendingUp,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const token = "pk_fHoTZqZxS7mZv8WW-Iw2aw";

const services = [
  {
    title: "Webflow\nDevelopment",
    description:
      "Custom websites built for speed, search visibility, and conversion. Landing pages, marketing sites, full rebuilds.",
    href: "/services/webflow",
    logo: `https://img.logo.dev/webflow.com?token=${token}&format=png`,
    items: [
      { label: "Website design & development", href: "/services/webflow/design" },
      { label: "CMS & dynamic content", href: "/services/webflow/cms" },
      { label: "SEO & performance optimization", href: "/services/webflow/seo" },
      { label: "Migration to Webflow", href: "/services/webflow/migration" },
    ],
  },
  {
    title: "HubSpot\nImplementation",
    description:
      "CRM, sales, and marketing automation configured to how your team actually works. Implementations, migrations, and ongoing management.",
    href: "/services/hubspot",
    logo: `https://img.logo.dev/hubspot.com?token=${token}&format=png`,
    items: [
      { label: "CRM setup & migration", href: "/services/hubspot/crm" },
      { label: "Marketing automation", href: "/services/hubspot/marketing" },
      { label: "Sales pipeline configuration", href: "/services/hubspot/sales" },
      { label: "Reporting & dashboards", href: "/services/hubspot/reporting" },
    ],
  },
  {
    title: "Wix Studio\nDevelopment",
    description:
      "Flexible, scalable builds on Wix Studio. Business sites, portfolios, and storefronts — fast to launch, easy to manage.",
    href: "/services/wix",
    logo: `https://img.logo.dev/wix.com?token=${token}&format=png`,
    items: [
      { label: "Website design & development", href: "/services/wix/design" },
      { label: "Business & portfolio builds", href: "/services/wix/portfolio" },
      { label: "E-commerce setup", href: "/services/wix/ecommerce" },
      { label: "Ongoing management", href: "/services/wix/management" },
    ],
  },
  {
    title: "Shopify\nDevelopment",
    description:
      "Storefronts, custom themes, headless builds, and checkout experiences on Shopify. Built to sell.",
    href: "/services/shopify",
    logo: `https://img.logo.dev/shopify.com?token=${token}&format=png`,
    items: [
      { label: "Store design & development", href: "/services/shopify/design" },
      { label: "Headless Shopify (Hydrogen)", href: "/services/shopify/headless" },
      { label: "Custom apps & integrations", href: "/services/shopify/apps" },
      { label: "Migration & management", href: "/services/shopify/migration" },
    ],
  },
  {
    title: "Full-Stack\nDevelopment",
    description:
      "Custom applications, APIs, and integrations. React, Next.js, Python, Node. When off-the-shelf isn't enough, we build what is.",
    href: "/services/development",
    icon: Code2,
    items: [
      { label: "Custom web applications", href: "/services/development/apps" },
      { label: "API development & integrations", href: "/services/development/api" },
      { label: "Front-end & back-end engineering", href: "/services/development/engineering" },
      { label: "Technical architecture", href: "/services/development/architecture" },
    ],
  },
  {
    title: "Go-to-Market\nServices",
    description:
      "Landing pages, email sequences, lead-generation systems, and the operational backbone to make revenue predictable. Built on data, not assumptions.",
    href: "/services/gtm",
    icon: TrendingUp,
    items: [
      { label: "Landing page & funnel builds", href: "/services/gtm/landing-pages" },
      { label: "Email marketing infrastructure", href: "/services/gtm/email" },
      { label: "Lead generation systems", href: "/services/gtm/lead-gen" },
      { label: "Analytics & tracking setup", href: "/services/gtm/analytics" },
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            WHAT WE DO
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-6 max-w-4xl text-center lg:mt-12">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Built for teams that ship
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            From no-code platforms to custom engineering, we help you move faster with the right stack.
          </p>
        </div>

        {/* Services Card Grid — 3 rows × 2 columns */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex flex-col p-0">
            {/* Row 1 */}
            <div className="flex max-md:flex-col">
              {services.slice(0, 2).map((service, i) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  showDivider={i < 1}
                />
              ))}
            </div>
            <div className="relative hidden md:block">
              <DashedLine orientation="horizontal" />
            </div>
            <div className="relative block md:hidden">
              <DashedLine orientation="horizontal" />
            </div>
            {/* Row 2 */}
            <div className="flex max-md:flex-col">
              {services.slice(2, 4).map((service, i) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  showDivider={i < 1}
                />
              ))}
            </div>
            <div className="relative hidden md:block">
              <DashedLine orientation="horizontal" />
            </div>
            <div className="relative block md:hidden">
              <DashedLine orientation="horizontal" />
            </div>
            {/* Row 3 */}
            <div className="flex max-md:flex-col">
              {services.slice(4, 6).map((service, i) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  showDivider={i < 1}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

function ServiceItem({
  service,
  showDivider,
}: {
  service: (typeof services)[number];
  showDivider: boolean;
}) {
  const Icon = service.icon;
  return (
    <div className="flex flex-1 max-md:flex-col">
      <div className="flex flex-1 flex-col p-6 md:p-10">
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          {service.logo ? (
            <div className="mt-1 grid size-8 shrink-0 place-items-center">
              <img
                src={service.logo}
                alt={service.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : Icon ? (
            <Icon className="text-foreground mt-1 size-7 shrink-0" />
          ) : null}
          <h3 className="font-display min-h-[2.5em] text-xl leading-tight font-bold tracking-tight whitespace-pre-line md:text-2xl">
            {service.title}
          </h3>
        </div>

        <div className="flex-1">
          {/* Description */}
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed md:text-base">
            {service.description}
          </p>

          {/* Bullet list */}
          <ul className="mt-6 space-y-3">
            {service.items.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="bg-muted-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors md:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href={service.href}
          className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75 md:text-base"
        >
          View {service.title.split("\n")[0]} services
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      {showDivider && (
        <>
          <div className="relative hidden md:block">
            <DashedLine orientation="vertical" />
          </div>
          <div className="relative block md:hidden">
            <DashedLine orientation="horizontal" />
          </div>
        </>
      )}
    </div>
  );
}
