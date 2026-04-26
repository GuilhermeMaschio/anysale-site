"use client";

import { HeartHandshake, Radar, Sparkles } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { brandPrinciples } from "@/lib/site";

const icons = [Sparkles, Radar, HeartHandshake];

export function BrandPrinciples() {
  return (
    <section
      id="empresa"
      className="section-space section-line relative overflow-hidden"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow={brandPrinciples.eyebrow}
          title={brandPrinciples.title}
          description={brandPrinciples.description}
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {brandPrinciples.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={item.label} delay={index * 0.08}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-primary">
                        <Icon className="size-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
