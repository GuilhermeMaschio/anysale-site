"use client";

import { animate, motion, useInView } from "framer-motion";
import { ArrowUpRight, TimerReset } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { resultMetrics } from "@/lib/site";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function Results() {
  return (
    <section id="resultados" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Resultados"
              title="Velocidade de IA. Fechamento humano."
              description="Toda a estrutura foi desenhada para reduzir atrito comercial, aumentar a capacidade de atendimento e liberar o time humano para negociar melhor."
            />

            <div className="mt-8 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(108,231,255,0.08),rgba(9,15,34,0.9))] p-6 shadow-[var(--shadow-premium)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <TimerReset className="size-5" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    Receita responde ao tempo certo.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Quanto mais cedo a IA começa a conversa, maior a chance do vendedor humano entrar com vantagem real na negociação.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {resultMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.08}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="relative flex h-full flex-col justify-between gap-8">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
                    <div className="relative flex items-center justify-between">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                        Performance
                      </p>
                      <ArrowUpRight className="size-4 text-accent" />
                    </div>
                    <div className="relative space-y-3">
                      <p className="font-display text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </p>
                      <p className="max-w-[18rem] text-base leading-7 text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.2, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 rounded-[32px] border border-white/10 bg-[#081021]/86 p-6 shadow-[var(--shadow-premium)] sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                Mais resposta, mais contexto, mais fechamento humano.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
                A percepção do cliente melhora, o time comercial entra na hora certa e o funil deixa de depender de memória, agenda manual ou disponibilidade limitada.
              </p>
            </div>
            <div className="rounded-full border border-accent/18 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent">
              IA operando, equipe vendendo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
