"use client";

import Image from "next/image";
import {
  Building2,
  CarFront,
  GraduationCap,
  HeartPulse,
  House,
  Megaphone,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { industries } from "@/lib/site";

const iconMap = [
  House,
  CarFront,
  HeartPulse,
  GraduationCap,
  Building2,
  Megaphone,
  Wrench,
  ShoppingBag,
];

export function Industries() {
  return (
    <section id="segmentos" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Para quem é"
          title="Feita para operações que não podem desperdiçar atenção de cliente."
          description="A arquitetura da AnySale se adapta ao seu ciclo comercial, canal de entrada e complexidade de atendimento."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {industries.map((industry, index) => {
            const Icon = iconMap[index];

            return (
              <motion.div
                key={industry.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
              >
                <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                  <CardContent className="space-y-5 p-4">
                    <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[#091126]">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        width={720}
                        height={420}
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-primary">
                      <Icon className="size-4" />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                        {industry.metric}
                      </span>
                    </div>
                    <div className="space-y-2 px-1 pb-2">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        {industry.name}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {industry.description}
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
