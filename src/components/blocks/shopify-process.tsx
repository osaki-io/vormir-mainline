import { DashedLine } from "@/components/dashed-line";

const steps = [
  { number: "01", title: "Discovery", line: "We learn your products, customers, and sales flow. Audit the current store if there is one. Scope what needs to be built." },
  { number: "02", title: "Design", line: "Wireframes and visual design for key pages — homepage, product, collection, cart, checkout." },
  { number: "03", title: "Build", line: "Theme development or headless build. CMS setup, integrations, checkout customization, responsive testing." },
  { number: "04", title: "Launch", line: "QA across browsers and devices. Analytics and tracking verified. Products loaded, payment tested." },
  { number: "05", title: "Manage", line: "Post-launch management if you need it. Product updates, performance monitoring, new features." },
];

export const ShopifyProcess = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide">
            OUR PROCESS
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            From discovery to launch — with no surprises.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="font-mono text-3xl font-bold tracking-tight text-muted-foreground/40">
                {step.number}
              </div>
              <h3 className="font-display mt-3 text-base font-bold tracking-tight md:text-lg">
                {step.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm leading-snug">
                {step.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
