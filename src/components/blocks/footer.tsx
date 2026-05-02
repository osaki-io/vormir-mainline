import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

const serviceLinks = [
  { name: "Webflow Development", href: "/services/webflow" },
  { name: "HubSpot Implementation", href: "/services/hubspot" },
  { name: "Wix Studio Development", href: "/services/wix" },
  { name: "Shopify Development", href: "/services/shopify" },
  { name: "Full-Stack Development", href: "/services/development" },
  { name: "Go-to-Market Services", href: "/services/gtm" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "FAQ", href: "/faq" },
  { name: "Tech Stack", href: "/#tech-stack" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/nexora", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/nexora", icon: Twitter },
  { name: "GitHub", href: "https://github.com/nexora", icon: Github },
];

export function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="pt-28 lg:pt-32">
        <div className="container space-y-3 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Let's build something that lasts
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Book a free discovery call. We'll audit your current setup and show you exactly where we can help you move faster.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="/contact">Book a call</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="/services" className="group inline-flex items-center gap-1.5">
                View services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Link Grid */}
      <div className="container mt-24 md:mt-32">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Services */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-mono text-sm font-medium tracking-wide uppercase">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm font-medium transition-opacity hover:opacity-75"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-sm font-medium tracking-wide uppercase">
              Company
            </h3>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-opacity hover:opacity-75"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono text-sm font-medium tracking-wide uppercase">
              Resources
            </h3>
            <ul className="mt-6 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium transition-opacity hover:opacity-75"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-sm font-medium tracking-wide uppercase">
              Legal
            </h3>
            <ul className="mt-6 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-20 pb-10">
        <div className="flex flex-col items-center justify-between gap-6 border-t pt-10 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-lg font-bold tracking-tight">Nexora</span>
            <span className="text-muted-foreground text-xs">
              Consulting & Engineering
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="text-muted-foreground mt-6 text-center text-xs md:text-left">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
