import Marquee from "react-fast-marquee";

import { DashedLine } from "@/components/dashed-line";

const tools = [
  { name: "Webflow", logo: "/logos/Webflow.png" },
  { name: "HubSpot", logo: "/logos/HubSpot.png" },
  { name: "Shopify", logo: "/logos/Shopify.png" },
  { name: "React", logo: "/logos/React.png" },
  { name: "Next.js", logo: "/logos/Next_js.png" },
  { name: "Node.js", logo: "/logos/Node_js.png" },
  { name: "Python", logo: "/logos/Python.png" },
  { name: "AWS", logo: "/logos/AWS.png" },
  { name: "Google Cloud", logo: "/logos/Google_Cloud.png" },
  { name: "Vercel", logo: "/logos/Vercel.png" },
  { name: "Docker", logo: "/logos/Docker.png" },
  { name: "Stripe", logo: "/logos/Stripe.png" },
];

export const TechStack = () => {
  return (
    <section className="py-28 lg:py-32">
      <div className="container">
        {/* Dashed line + label */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            TOOLS WE USE
          </span>
        </div>

        <div className="mt-10 space-y-4 lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            The right stack for every project
          </h2>
          <p className="text-muted-foreground max-w-md leading-snug">
            We work with the tools your team already knows — and the ones that get you to market faster.
          </p>
        </div>

        {/* Marquee row */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="hidden md:block">
            <Marquee speed={40} pauseOnHover gradient={false}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="mx-10 flex items-center gap-3"
                  title={tool.name}
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="h-10 object-contain transition-opacity hover:opacity-80"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="md:hidden">
            <Marquee speed={35} pauseOnHover gradient={false}>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="mx-6 flex items-center gap-2"
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
