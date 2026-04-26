"use client";

import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Cpu,
  Database,
  LineChart,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { solutionItems } from "@/lib/site";

const icons = [
  MessageSquare,
  Users,
  CalendarCheck,
  CheckCircle2,
  LineChart,
  Database,
  Clock3,
  Cpu,
];

export function Solution() {
  return (
    <section id="solucao" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Solução AnySale"
          title="Uma camada comercial inteligente entre o lead e sua meta."
          description="A AnySale combina IA conversacional, lógica comercial e operação multicanal para transformar atendimento em um motor de conversão."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {solutionItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
              >
                <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col gap-5">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                        {item}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Ação automática orientada para resposta rápida, contexto completo e avanço real no funil.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
