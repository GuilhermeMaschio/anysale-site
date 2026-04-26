"use client";

import { Bot, Check, Minus, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { comparison, steps } from "@/lib/site";

export function Features() {
  return (
    <section id="como-funciona" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Como funciona"
          title="Da primeira mensagem até o lead pronto para vender."
          description="A jornada é simples para o cliente e extremamente poderosa para a sua operação."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <Card className="relative h-full overflow-hidden">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
                <CardContent className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.34em] text-primary/80">
                      {item.step}
                    </span>
                    <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/70">
                      Etapa {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Card className="h-full">
              <CardContent className="space-y-5">
                <div className="inline-flex size-14 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
                  <Workflow className="size-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                    Diferencial competitivo real
                  </h3>
                  <p className="text-base leading-7 text-muted-foreground">
                    Não é um bot estático. É uma infraestrutura comercial viva, capaz de vender com linguagem natural, automação consistente e supervisão humana quando importa.
                  </p>
                </div>

                <div className="grid gap-4">
                  {[
                    "Conversa natural com contexto comercial",
                    "Roteamento inteligente para o time humano",
                    "Playbooks adaptáveis por segmento",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                    >
                      <Sparkles className="mt-0.5 size-4 text-accent" />
                      <p className="text-sm leading-6 text-white/86">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="overflow-hidden">
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                      AnySale vs. outros
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                      IA feita para vender, não apenas responder.
                    </h3>
                  </div>
                  <Bot className="hidden size-6 text-primary sm:block" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-white/8 bg-[#0a1226] p-5">
                    <p className="text-sm font-semibold text-white/70">Outros</p>
                    <div className="mt-5 space-y-3">
                      {comparison.others.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-muted-foreground"
                        >
                          <Minus className="size-4 text-danger" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-primary/18 bg-[linear-gradient(180deg,rgba(108,231,255,0.1),rgba(139,255,191,0.06))] p-5">
                    <p className="text-sm font-semibold text-white">AnySale</p>
                    <div className="mt-5 space-y-3">
                      {comparison.anysale.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-3 rounded-2xl border border-primary/14 bg-[#091326] px-4 py-3 text-sm text-white/90"
                        >
                          <Check className="size-4 text-accent" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
