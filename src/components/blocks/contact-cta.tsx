import { ArrowRight } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactCTA() {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            START A PROJECT
          </span>
        </div>

        <div className="mt-10 grid gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-24">
          {/* Left — pitch + CTAs */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Have a project in mind?
            </h2>
            <div className="text-muted-foreground max-w-md space-y-4 leading-snug">
              <p>
                Book a 30-minute call to talk through what you're building. Or
                send us a project brief and we'll come back with a plan.
              </p>
              <p>
                No obligation. Just an honest look at what you need and how we can help.
              </p>
              <p>
                Most proposals go out within 24 hours.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild>
                <a href="/contact">Book a call</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a
                  href="/services"
                  className="group inline-flex items-center gap-1.5"
                >
                  View services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder — wire up later
              }}
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              {/* Service + Timeline */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <select
                    id="service"
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>
                      Select a service
                    </option>
                    <option value="webflow">Webflow Development</option>
                    <option value="hubspot">HubSpot Implementation</option>
                    <option value="wix">Wix Studio Development</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="development">Full-Stack Development</option>
                    <option value="gtm">Go-to-Market Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <select
                    id="timeline"
                    required
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>
                      When do you need it?
                    </option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1 – 3 months</option>
                    <option value="3-6-months">3 – 6 months</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (USD)</Label>
                <select
                  id="budget"
                  required
                  className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled selected>
                    Select a budget range
                  </option>
                  <option value="0-2k">$0 – $2,000</option>
                  <option value="2k-5k">$2,000 – $5,000</option>
                  <option value="5k-plus">$5,000+</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
