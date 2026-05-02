import { DashedLine } from "@/components/dashed-line";

const steps = [
  { number: "01", title: "Strategy", line: "Audit your funnel and build a GTM plan." },
  { number: "02", title: "Build", line: "Landing pages, campaigns, automation. Weekly reviews." },
  { number: "03", title: "Launch", line: "Go live with tracking verified and baselines set." },
  { number: "04", title: "Optimize", line: "Creative iterations, audience refinements, budget shifts." },
  { number: "05", title: "Scale", line: "Expand to new channels and markets." },
];

export const GtmProcess = () => {
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
            From strategy to scale — with no surprises.
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
