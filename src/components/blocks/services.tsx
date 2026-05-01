import {
  ChevronRight,
  Code2,
  Globe,
  Layout,
  Palette,
  Settings,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const serviceImages = [
  "/about/1.webp",
  "/about/2.webp",
  "/about/3.webp",
  "/about/4.webp",
  "/about/1.webp",
  "/about/2.webp",
];

const services = [
  {
    title: "Webflow\nDevelopment",
    href: "/services/webflow",
    icon: Globe,
    image: serviceImages[0],
  },
  {
    title: "HubSpot\nImplementation",
    href: "/services/hubspot",
    icon: Settings,
    image: serviceImages[1],
  },
  {
    title: "Wix Studio\nDevelopment",
    href: "/services/wix",
    icon: Palette,
    image: serviceImages[2],
  },
  {
    title: "Shopify\nDevelopment",
    href: "/services/shopify",
    icon: ShoppingBag,
    image: serviceImages[3],
  },
  {
    title: "Full-Stack\nDevelopment",
    href: "/services/development",
    icon: Code2,
    image: serviceImages[4],
  },
  {
    title: "Go-to-Market\nServices",
    href: "/services/gtm",
    icon: TrendingUp,
    image: serviceImages[5],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            WHAT WE DO
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Built for teams that ship
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            From no-code platforms to custom engineering, we help you move faster with the right stack.
          </p>
        </div>

        {/* Services Card Grid */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex flex-col p-0">
            {/* Row 1 */}
            <div className="flex max-md:flex-col">
              {services.slice(0, 3).map((service, i) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  showDivider={i < 2}
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
              {services.slice(3, 6).map((service, i) => (
                <ServiceItem
                  key={service.title}
                  service={service}
                  showDivider={i < 2}
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
      <div className="flex-1 p-4 pe-0! md:p-6">
        <div className="relative aspect-[1.28/1] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover object-left-top ps-4 pt-2"
          />
          <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
        </div>

        <a
          href={service.href}
          className="group flex items-start justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
        >
          <div className="flex items-start gap-3">
            <Icon className="text-foreground mt-1 size-5 shrink-0" />
            <h3 className="font-display min-h-[2.5em] max-w-60 text-2xl leading-tight font-bold tracking-tight whitespace-pre-line">
              {service.title}
            </h3>
          </div>
          <div className="mt-1 shrink-0 rounded-full border p-2">
            <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
          </div>
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
