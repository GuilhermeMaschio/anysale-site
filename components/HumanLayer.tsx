"use client";

import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { humanLayerData } from "@/lib/site";

export function HumanLayer() {
  return (
    <section className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-8 lg:gap-10 xl:grid-cols-[1fr_1fr] xl:items-stretch">
          <div className="grid gap-6 xl:grid-rows-2">
            <Reveal>
              <Card className="h-full overflow-hidden">
                <CardContent className="h-full p-4 sm:p-5">
                  <div className="grid h-full gap-5 md:grid-cols-[1.08fr_0.92fr] md:items-center">
                    <div className="relative min-h-[250px] overflow-hidden rounded-[26px] border border-white/8 bg-[#091126] md:h-full">
                      <Image
                        src={humanLayerData.teamImage}
                        alt={humanLayerData.teamAlt}
                        width={1790}
                        height={1007}
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>

                    <div className="space-y-4">
                      <Badge variant="accent" className="w-fit">
                        Terreno preparado
                      </Badge>
                      <h3 className="font-display text-[1.65rem] font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-[1.9rem]">
                        A IA acelera o primeiro contato.
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                        Atendimento imediato, triagem automática e mais contexto para o
                        time comercial entrar sem perder timing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="h-full overflow-hidden">
                <CardContent className="h-full p-4 sm:p-5">
                  <div className="grid h-full gap-5 md:grid-cols-[0.92fr_1.08fr] md:items-center">
                    <div className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/8 bg-[#091126] md:h-full">
                      <Image
                        src={humanLayerData.consultantImage}
                        alt={humanLayerData.consultantAlt}
                        width={1254}
                        height={1477}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-primary">
                        <Sparkles className="size-4" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                          Time no controle
                        </span>
                      </div>
                      <h3 className="font-display text-[1.5rem] font-semibold leading-[1.08] tracking-[-0.05em] text-white sm:text-[1.75rem]">
                        O comercial entra para fechar melhor.
                      </h3>
                      <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                        {humanLayerData.quote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <div className="grid gap-6 xl:grid-rows-[auto_1fr]">
            <Reveal delay={0.04}>
              <div className="space-y-5">
                <Badge variant="accent">{humanLayerData.eyebrow}</Badge>
                <div className="space-y-5">
                  <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-balance text-white sm:text-5xl lg:text-[3.35rem]">
                    {humanLayerData.title}
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-[1.32rem]">
                    {humanLayerData.description}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-6 sm:p-7">
                  <div className="grid gap-4">
                    {humanLayerData.bullets.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-white/5 px-4 py-4"
                      >
                        <div className="mt-0.5 rounded-full border border-accent/20 bg-accent/10 p-1.5">
                          <Check className="size-3.5 text-accent" />
                        </div>
                        <p className="text-base leading-7 text-white/88">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {humanLayerData.cards.map((item) => (
                      <motion.div
                        key={item.value}
                        whileHover={{ y: -2 }}
                        className="rounded-[22px] border border-white/10 bg-[#0a1328] px-4 py-4"
                      >
                        <p className="font-display text-[1.8rem] font-semibold tracking-[-0.04em] text-white">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
