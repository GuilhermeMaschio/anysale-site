"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { showcaseCards } from "@/lib/site";

export function Showcase() {
  const [featured, ...secondary] = showcaseCards;
  const featuredStats = featured.stats ?? [];

  return (
    <section className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start xl:gap-10">
          <Reveal>
            <div className="max-w-2xl space-y-5">
              <Badge variant="accent">Experiência de produto</Badge>
              <div className="space-y-4">
                <h2 className="max-w-[11ch] font-display text-3xl font-semibold tracking-[-0.04em] text-balance text-white sm:text-4xl lg:text-[3.35rem]">
                  Tecnologia premium se percebe no primeiro olhar.
                </h2>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Antes do visitante entender o motor comercial da AnySale, ele precisa sentir maturidade de produto, controle operacional e prontidão para escalar.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                    Sinais de maturidade
                  </p>
                  <p className="max-w-2xl font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                    A AnySale transmite solidez, velocidade e prontidão para escalar operações reais.
                  </p>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/6 p-3 text-primary sm:block">
                  <Sparkles className="size-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {featuredStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-[#0a1328] px-5 py-4"
                  >
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.14fr_0.86fr] xl:items-start">
          <Reveal>
            <Card className="group overflow-hidden">
              <CardContent className="space-y-6 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-4 px-2 pt-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                      {featured.eyebrow}
                    </p>
                    <h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      {featured.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/6 p-3 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#071020]">
                  <Image
                    src={featured.image}
                    alt={featured.alt}
                    width={1200}
                    height={760}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                <p className="px-2 text-base leading-7 text-muted-foreground">
                  {featured.description}
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5">
            {secondary.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.div whileHover={{ y: -2 }}>
                  <Card className="overflow-hidden">
                    <CardContent className="space-y-5 p-4 sm:p-5">
                      <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#091126]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={900}
                          height={560}
                          className="h-auto w-full"
                        />
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                            {item.eyebrow}
                          </p>
                          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                            {item.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="mt-1 size-5 text-accent" />
                      </div>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
