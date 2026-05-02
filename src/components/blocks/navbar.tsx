import { useState, useEffect } from "react";

import { ChevronRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const serviceItems = [
  {
    title: "Webflow Development",
    href: "/services/webflow",
    description: "Custom websites built for speed, search visibility, and conversion.",
  },
  {
    title: "HubSpot Implementation",
    href: "/services/hubspot",
    description: "CRM, sales, and marketing automation configured for your team.",
  },
  {
    title: "Wix Studio Development",
    href: "/services/wix",
    description: "Flexible, scalable builds on Wix Studio.",
  },
  {
    title: "Shopify Development",
    href: "/services/shopify",
    description: "Storefronts, custom themes, and headless builds.",
  },
  {
    title: "Full-Stack Development",
    href: "/services/fullstack",
    description: "Custom applications, APIs, and integrations.",
  },
  {
    title: "Go-to-Market Services",
    href: "/services/gtm",
    description: "Landing pages, email sequences, and lead-generation systems.",
  },
];

const plainLinks = [
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/logo.svg"
            alt="logo"
            width={94}
            height={18}
            className="dark:invert"
          />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {/* Services dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 sm:grid-cols-2">
                  {serviceItems.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                      >
                        <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                          <div className="text-sm leading-none font-medium">
                            {item.title}
                          </div>
                          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Plain links */}
            {plainLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                    pathname === link.href && "text-muted-foreground",
                  )}
                >
                  {link.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="/contact" className="max-lg:hidden">
            <Button variant="outline">
              <span className="relative z-10">Contact us</span>
            </Button>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {/* Services mobile dropdown */}
          <div className="py-4 first:pt-0 last:pb-0">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
              className="text-foreground flex w-full items-center justify-between text-base font-medium"
            >
              Services
              <ChevronRight
                className={cn(
                  "size-4 transition-transform duration-200",
                  openDropdown === "services" ? "rotate-90" : "",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                openDropdown === "services"
                  ? "mt-4 max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0",
              )}
            >
              <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                {serviceItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="hover:bg-accent group block rounded-md p-2 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    <div className="transition-transform duration-200 group-hover:translate-x-1">
                      <div className="text-primary font-medium">
                        {item.title}
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Plain links mobile */}
          {plainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-foreground hover:text-foreground/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                pathname === link.href && "text-muted-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};
