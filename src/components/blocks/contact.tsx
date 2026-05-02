import { Facebook, Linkedin, Twitter } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    title: "Corporate office",
    content: (
      <p className="text-muted-foreground mt-3">
        Magarpatta, Hadapsar
        <br />
        Pune, MH - India
      </p>
    ),
  },
  {
    title: "Email us",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Sales</p>
          <a
            href="mailto:sales@vormir.co"
            className="text-muted-foreground hover:text-foreground"
          >
            sales@vormir.co
          </a>
        </div>
        <div className="mt-1">
          <p className="">Careers</p>
          <a
            href="mailto:careers@vormir.co"
            className="text-muted-foreground hover:text-foreground"
          >
            careers@vormir.co
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Twitter className="size-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </a>
      </div>
    ),
  },
];

export const Contact = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Hopefully this form gets through our spam filters.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold">Inquiries</h2>
          <form className="mt-8 space-y-5">
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            {/* Service + Timeline */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-service">Service</Label>
                <select
                  id="contact-service"
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
                <Label htmlFor="contact-timeline">Timeline</Label>
                <select
                  id="contact-timeline"
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
              <Label htmlFor="contact-budget">Budget (USD)</Label>
              <select
                id="contact-budget"
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
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your project..."
                rows={4}
                required
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
