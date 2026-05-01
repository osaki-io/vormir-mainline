import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "Nexora helped us ship our MVP in 6 weeks. What would have taken 6 months internally.",
    author: "Sarah Chen",
    role: "CEO",
    company: "FleetSync",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "They modernized our legacy stack and cut our infra costs by 40%.",
    author: "Marcus Webb",
    role: "CTO",
    company: "PayRoute",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Having a fractional CTO from Nexora changed how we think about product strategy.",
    author: "Priya Nanda",
    role: "Founder",
    company: "HealthLoop",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "The team augmentation model let us scale engineering without the hiring headache.",
    author: "David Okonkwo",
    role: "VP Engineering",
    company: "Gridline",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "Nexora helped us ship our MVP in 6 weeks. What would have taken 6 months internally.",
    author: "Sarah Chen",
    role: "CEO",
    company: "FleetSync",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "They modernized our legacy stack and cut our infra costs by 40%.",
    author: "Marcus Webb",
    role: "CTO",
    company: "PayRoute",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Having a fractional CTO from Nexora changed how we think about product strategy.",
    author: "Priya Nanda",
    role: "Founder",
    company: "HealthLoop",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "The team augmentation model let us scale engineering without the hiring headache.",
    author: "David Okonkwo",
    role: "VP Engineering",
    company: "Gridline",
    image: "/testimonials/kundo-marta.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-background text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
          TRUSTED BY
        </span>
      </div>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Trusted by founders & CTOs
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              We embed with teams to unblock hard problems, ship faster, and build products users love.
            </p>
            <Button variant="outline" className="shadow-md">
              Read Case Studies <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="size-full object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
