import { Github, Linkedin, Twitter } from "lucide-react";

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
    <footer className="container pb-10 pt-24 md:pt-32">
      {/* Link Grid — 5 columns: Brand + Services + Company + Resources + Legal */}
      <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:gap-12">
        {/* Brand column */}
        <div className="col-span-2 flex flex-col gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight">Nexora</span>
            <p className="text-muted-foreground mt-1 text-sm">
              Consulting & Engineering
            </p>
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="md:col-span-1">
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
        <div className="md:col-span-1">
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
        <div className="md:col-span-1">
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
        <div className="md:col-span-1">
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

      {/* Copyright */}
      <p className="text-muted-foreground mt-16 text-center text-xs">
        © {new Date().getFullYear()} Nexora. All rights reserved.
      </p>
    </footer>
  );
}
