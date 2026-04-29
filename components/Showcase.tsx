"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const productSignals = [
  {
    label: "Entrada centralizada",
    description: "WhatsApp, Direct e CRM na mesma leitura operacional.",
  },
  {
    label: "Priorização real",
    description: "Lead quente, fila e gargalos visíveis para agir sem atraso.",
  },
  {
    label: "Repasse pronto",
    description: "Histórico, intenção e próxima ação chegam juntos para o vendedor.",
  },
];

const productCards = [
  {
    eyebrow: "Central de operação",
    title: "O comercial enxerga o que entrou, o que anda e o que precisa de ação agora.",
    description:
      "Tempo de resposta, volume, origem e prioridades aparecem no mesmo painel para o gestor decidir rápido e o time agir sem ruído.",
    image: "/visuals/dash-anysale.png",
    alt: "Painel da AnySale com indicadores comerciais, leads e desempenho operacional",
    imageWidth: 1536,
    imageHeight: 1024,
    stats: [
      { value: "182", label: "na fila" },
      { value: "+38%", label: "ganho médio" },
      { value: "7s", label: "1ª resposta" },
    ],
  },
  {
    eyebrow: "Integração WhatsApp",
    title: "WhatsApp + IA Comercial",
    description:
      "O AnySale transforma conversas em oportunidades qualificadas automaticamente.",
    image: "/visuals/whatsapp-demo.png",
    alt: "Mockup da integração do AnySale com WhatsApp mostrando conversa, análise por IA, score e handoff comercial",
    note: "Integração via WhatsApp Business API com classificação de lead e contexto pronto para o vendedor agir.",
    imageWidth: 1536,
    imageHeight: 1024,
  },
  {
    eyebrow: "Funil sincronizado",
    title: "O vendedor entra com direção, não do zero.",
    description:
      "O pipeline mostra score, etapa, prioridade e sincronização com CRM para cada oportunidade seguir com clareza.",
    image: "/visuals/anysale-pipeline.png",
    alt: "Pipeline da AnySale com etapas, prioridades e sincronização comercial",
    note: "Cada etapa existe para reduzir atraso, retrabalho e perda de lead no caminho.",
    imageWidth: 1536,
    imageHeight: 1024,
  },
];

export function Showcase() {
  const [featured, ...secondary] = productCards;

  return (
    <section id="produto" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experiência de produto"
            title="Uma demonstração que deixa claro onde a venda acelera."
            description="Em poucos segundos, o cliente entende o que a AnySale faz: centraliza entradas, conversa com contexto e entrega o próximo passo para o time comercial."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {productSignals.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-5 shadow-[var(--shadow-premium)] backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/84">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.12fr_0.88fr]">
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
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#071020]">
                  <Image
                    src={featured.image}
                    alt={featured.alt}
                    width={featured.imageWidth ?? 1200}
                    height={featured.imageHeight ?? 760}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                  <p className="px-2 text-base leading-7 text-muted-foreground">
                    {featured.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:min-w-[170px]">
                    {featured.stats?.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[20px] border border-white/10 bg-[#0a1328] px-4 py-3"
                      >
                        <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                          {item.value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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
                          width={item.imageWidth ?? 900}
                          height={item.imageHeight ?? 560}
                          className="h-auto w-full"
                        />
                      </div>

                      <div className="space-y-4">
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
                      </div>

                      <div className="rounded-[20px] border border-white/8 bg-white/5 px-4 py-3">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-accent/12 p-1.5">
                            <CheckCircle2 className="size-3.5 text-accent" />
                          </div>
                          <p className="text-sm leading-6 text-white/84">{item.note}</p>
                        </div>
                      </div>
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
