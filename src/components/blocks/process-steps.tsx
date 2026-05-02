import { DashedLine } from "@/components/dashed-line";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, your users, and your goals. Audit the current site if there is one. Identify what needs to change and why.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, visual design, and interaction design. You see the site before a single line of code is written. Feedback rounds built in.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development in Webflow. CMS architecture, animations, integrations, responsive testing. Weekly progress updates — you never wait until the end to see what you're getting.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "QA across browsers and devices. SEO audit. Analytics setup. Content migration. Go live with confidence.",
  },
  {
    number: "05",
    title: "Manage",
    description:
      "Post-launch management if you need it. Content updates, new pages, performance monitoring. Or we train your team and hand it over completely.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Top dashed line */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            OUR PROCESS
          </span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            How We Work
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-snug">
            A proven process that gets you from idea to launch — with no surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-8 md:mt-12 lg:mt-20">
          {/* Vertical line for desktop */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-border lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col gap-4 lg:flex-row lg:items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="relative flex items-center lg:w-1/2 lg:justify-end">
                  <div
                    className={`bg-background z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border font-mono text-xl font-bold lg:mx-auto ${
                      i % 2 === 0 ? "lg:-mr-8" : "lg:-ml-8"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div
                    className={`rounded-2xl border p-6 transition-colors hover:bg-muted/50 lg:max-w-md ${
                      i % 2 === 0 ? "lg:ml-8" : "lg:mr-8 lg:ml-auto"
                    }`}
                  >
                    <h3 className="font-display text-lg font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
