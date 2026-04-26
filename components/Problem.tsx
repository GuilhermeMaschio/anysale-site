"use client";

import { AlertTriangle, Clock3, Flame, GitBranch, SearchX, TimerReset } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { painPoints } from "@/lib/site";

const icons = [Flame, Clock3, TimerReset, AlertTriangle, SearchX, GitBranch];

export function Problem() {
  return (
    <section id="dor" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Dor do mercado"
          title="Seu negócio perde vendas todos os dias."
          description="A maior parte das empresas não perde por falta de demanda. Perde por lentidão, desorganização e ausência de inteligência comercial contínua."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {painPoints.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.65, ease: [0.2, 1, 0.3, 1] }}
              >
                <Card className="h-full bg-[linear-gradient(180deg,rgba(20,9,17,0.7),rgba(8,10,22,0.78))] transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="space-y-4">
                    <div className="inline-flex rounded-2xl border border-danger/20 bg-danger/10 p-3">
                      <Icon className="size-5 text-danger" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.15} className="mt-10">
          <div className="glass-card flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                Demora humana custa caro.
              </p>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                A AnySale troca espera por velocidade, operação parcial por disponibilidade total e improviso por processo comercial inteligente.
              </p>
            </div>
            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Velocidade + IA = mais receita
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
