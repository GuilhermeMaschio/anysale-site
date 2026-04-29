"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroMetrics, proofPills, siteConfig } from "@/lib/site";

function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1], delay: 0.12 }}
      className="mx-auto w-full max-w-[660px]"
    >
      <div className="glass-card overflow-hidden p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 px-1">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Orquestração comercial
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground sm:text-[15px]">
              Conversa, qualificação e repasse comercial em uma única experiência
              visual.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/78">
            IA + time humano
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-[30px] border border-white/8 bg-[#081021]">
          <Image
            src="/visuals/anysale-demo.png"
            alt="Composição visual da AnySale com conversa por IA, handoff inteligente e time comercial pronto para agir"
            width={1536}
            height={1024}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-18 pt-14 sm:pb-24 sm:pt-18 lg:pb-28 lg:pt-22">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.2, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <Badge variant="accent" className="mb-6 min-h-9 px-4 py-0 leading-none">
              IA comercial para equipes que querem vender na velocidade certa
            </Badge>

            <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-balance text-white sm:text-6xl lg:text-7xl">
              A inteligência artificial{" "}
              <span className="text-gradient">que prepara a venda para o seu time fechar.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Atenda em segundos, qualifique leads e entregue o contexto certo para seu
              comercial vender mais no WhatsApp e Instagram.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="premium" size="lg">
                <Link href={siteConfig.demoUrl}>
                  Solicitar demonstração
                  <MoveRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {proofPills.map((pill, index) => (
                <div
                  key={pill}
                  className={`flex min-h-12 items-center rounded-[18px] border border-white/10 bg-white/6 px-4 py-2.5 text-sm font-medium text-foreground/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md ${
                    index === proofPills.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  {pill}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="hidden xl:inline-flex"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#091227]/92 p-4 shadow-[var(--shadow-premium)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/12 p-3">
                    <ArrowUpRight className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Tempo de resposta
                    </p>
                    <p className="text-xl font-semibold text-white">7 segundos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <HeroShowcase />

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="hidden justify-end xl:flex"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#091227]/92 p-4 shadow-[var(--shadow-premium)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/12 p-3">
                    <Zap className="size-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Follow-up automático
                    </p>
                    <p className="text-xl font-semibold text-white">5x mais contato</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
