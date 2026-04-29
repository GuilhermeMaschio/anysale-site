"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { clientLogos, testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="cases" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Prova social"
          title="Resultados percebidos por equipes comerciais reais."
          description="A prova social mostra que a IA não substitui o comercial. Ela aumenta a capacidade, melhora o timing e deixa o time humano mais preparado para vender."
          align="center"
        />

        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#071020]/82 p-6 shadow-[var(--shadow-premium)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {clientLogos.map((logo, index) => (
              <Reveal key={logo.name} delay={index * 0.06}>
                <div className="flex min-h-24 items-center justify-center rounded-[24px] border border-white/8 bg-white/5 px-6 py-5">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={170}
                    height={44}
                    className="h-auto w-auto max-w-[160px] opacity-90"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between gap-8">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <Quote className="size-6 text-primary" />
                      <div className="flex items-center gap-1 text-accent">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="size-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg leading-8 text-white/88">{item.quote}</p>
                  </div>
                  <div className="border-t border-white/8 pt-5">
                    <p className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.author}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-4 rounded-[30px] border border-primary/14 bg-[linear-gradient(180deg,rgba(108,231,255,0.08),rgba(6,11,24,0.9))] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
              Pronto para encaixar seus cases reais.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              A estrutura já suporta logos, depoimentos e números reais para mostrar
              como a AnySale fortalece equipes comerciais, não apenas automatiza
              mensagens.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80">
            Prova social premium
          </div>
        </motion.div>
      </div>
    </section>
  );
}
