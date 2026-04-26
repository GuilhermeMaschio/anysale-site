"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  CalendarRange,
  CheckCircle2,
  Clock3,
  MessageCircle,
  MoveRight,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroMetrics, proofPills, siteConfig } from "@/lib/site";

type HeroSignalMetric = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

type HeroPlan = {
  label: string;
  description: string;
  highlight: string;
  chips: string[];
  icon: LucideIcon;
};

const heroSignalMetrics: HeroSignalMetric[] = [
  {
    label: "Tempo medio",
    value: "7s",
    detail: "primeira resposta",
    icon: Clock3,
  },
  {
    label: "Leads em fila",
    value: "182",
    detail: "com prioridade ativa",
    icon: Target,
  },
  {
    label: "Reunioes",
    value: "34",
    detail: "agendadas hoje",
    icon: CalendarRange,
  },
  {
    label: "CRM sync",
    value: "94%",
    detail: "dados sem retrabalho",
    icon: Activity,
  },
];

const channelBars = [
  { label: "WhatsApp", short: "WA", height: 56 },
  { label: "Instagram", short: "IG", height: 82 },
  { label: "Site", short: "Site", height: 72 },
  { label: "CRM", short: "CRM", height: 120 },
];

const pipelineStages = [
  { label: "Novo contato", leads: "48", fill: "74%" },
  { label: "Qualificado", leads: "31", fill: "58%" },
  { label: "Pronto p/ vendedor", leads: "19", fill: "42%" },
  { label: "Demo agendada", leads: "12", fill: "28%" },
];

const handoffSteps = [
  {
    title: "Intencao entendida",
    detail: "Canal, urgencia e interesse mapeados.",
  },
  {
    title: "Proxima acao definida",
    detail: "Qualificacao, follow-up e agenda sem atrito.",
  },
  {
    title: "Handoff para vendedor",
    detail: "Historico e prioridade prontos para fechar.",
  },
];

const sellerContext = [
  { label: "Lead score", value: "92/100" },
  { label: "Canal", value: "WhatsApp + Direct" },
  { label: "Momento", value: "Agora" },
  { label: "Proxima acao", value: "Demo 15:30" },
];

const heroPlans: HeroPlan[] = [
  {
    label: "Essencial",
    description: "WhatsApp com IA para responder, triar e iniciar follow-up com velocidade.",
    highlight: "Entrada rápida",
    chips: ["1 canal", "implantação ágil"],
    icon: MessageCircle,
  },
  {
    label: "Growth",
    description: "WhatsApp, Instagram e CRM sincronizados para qualificação e repasse sem atrito.",
    highlight: "Escala com contexto",
    chips: ["2 canais", "CRM sync"],
    icon: Activity,
  },
  {
    label: "Scale",
    description: "Orquestração comercial completa com handoff inteligente, prioridades e visão executiva.",
    highlight: "Operação de ponta",
    chips: ["multicanal", "time híbrido"],
    icon: BarChart3,
  },
];

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.2, 1, 0.3, 1], delay: 0.15 }}
      className="mx-auto w-full min-w-0 max-w-[640px] pb-20 lg:self-start lg:pb-24"
    >
      <div className="relative">
      <div className="absolute -left-10 top-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-3xl md:block" />
      <div className="absolute -right-8 bottom-14 hidden h-28 w-28 rounded-full bg-accent/20 blur-3xl md:block" />

      <div className="glass-card relative overflow-hidden p-3 sm:p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,231,255,0.18),transparent_24%),radial-gradient(circle_at_left_bottom,rgba(139,255,191,0.12),transparent_22%),linear-gradient(180deg,rgba(8,15,31,0.24),transparent_40%)]" />
        <div className="relative rounded-[24px] border border-white/8 bg-[#091126]/92 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                Orquestra comercial
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                AnySale Revenue OS
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_16px_rgba(139,255,191,0.9)]" />
              Em operacao
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
            <div className="grid h-full gap-4 xl:grid-rows-[auto_auto_1fr]">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroSignalMetrics.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,18,39,0.96),rgba(7,13,27,0.92))] p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                          {item.label}
                        </p>
                        <div className="rounded-xl border border-white/8 bg-white/6 p-2">
                          <Icon className="size-3.5 text-primary" />
                        </div>
                      </div>
                      <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-white/8 bg-[#081027] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Leads por canal</p>
                      <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        +38% conversao
                      </p>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                      ritmo em alta
                    </div>
                  </div>

                  <div className="mt-6 grid h-36 grid-cols-4 items-end gap-3">
                    {channelBars.map((item, index) => (
                      <div key={item.label} className="flex h-full flex-col justify-end gap-2">
                        <motion.div
                          initial={{ height: 18, opacity: 0.35 }}
                          animate={{ height: item.height, opacity: 1 }}
                          transition={{
                            duration: 0.75,
                            delay: 0.22 + index * 0.06,
                            ease: [0.2, 1, 0.3, 1],
                          }}
                          className="w-full rounded-t-[18px] bg-[linear-gradient(180deg,rgba(108,231,255,0.96),rgba(108,231,255,0.18))]"
                        />
                        <span className="text-center text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          {item.short}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {channelBars.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/8 bg-[#081027] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Pipeline vivo</p>
                      <p className="mt-1 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                        Prontos para fechar
                      </p>
                    </div>
                    <BarChart3 className="mt-1 size-5 text-primary" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {pipelineStages.map((stage) => (
                      <div
                        key={stage.label}
                        className="rounded-[18px] border border-white/8 bg-white/5 p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="size-2 rounded-full bg-primary" />
                            <span className="text-sm text-white/92">{stage.label}</span>
                          </div>
                          <span className="text-sm font-semibold text-white">{stage.leads}</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-white/8">
                          <div
                            className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(108,231,255,1),rgba(139,255,191,0.92))]"
                            style={{ width: stage.fill }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,19,38,0.94),rgba(8,13,27,0.92))] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                      Handoff inteligente
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                      A IA segura a velocidade. O vendedor entra no momento certo.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/6 p-2 text-accent sm:block">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {handoffSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="grid gap-3 rounded-[18px] border border-white/8 bg-white/5 p-3 sm:grid-cols-[auto_1fr]"
                    >
                      <div className="flex items-start">
                        <div className="inline-flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/12 text-sm font-semibold text-primary">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{step.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto grid gap-3 pt-4 sm:grid-cols-3">
                  {[
                    { label: "Handoff", value: "com contexto" },
                    { label: "Agenda", value: "ja sugerida" },
                    { label: "CRM", value: "sincronizado" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[18px] border border-white/8 bg-white/5 px-3 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid h-full gap-4 xl:grid-rows-[auto_1fr]">
              <div className="relative rounded-[22px] border border-white/8 bg-[#071022] p-3">
                <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-white/10 px-10 py-1 text-[10px] tracking-[0.3em] text-white/40">
                  9:41
                </div>
                <div className="mx-auto w-full max-w-[286px] rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,#0b1530_0%,#081022_100%)] p-4 pt-9 shadow-[0_26px_90px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 p-3">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Bot className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">AnySale IA</p>
                        <p className="text-xs text-primary/80">Qualificando agora</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-accent/15 bg-accent/10 px-2.5 py-1 text-[11px] text-accent">
                      ativa
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="max-w-[88%] rounded-[20px] rounded-bl-sm border border-white/6 bg-white/6 px-4 py-3 text-sm text-white/90">
                      Tenho operacao no WhatsApp e no Instagram Direct. Como isso entra no meu comercial?
                    </div>
                    <div className="ml-auto max-w-[94%] rounded-[20px] rounded-br-sm bg-[linear-gradient(135deg,rgba(108,231,255,0.88),rgba(139,255,191,0.92))] px-4 py-3 text-sm font-medium text-slate-950">
                      A AnySale atende os dois canais, qualifica interesse e entrega o lead pronto para o vendedor entrar na hora certa.
                    </div>
                    <div className="max-w-[86%] rounded-[20px] rounded-bl-sm border border-white/6 bg-white/6 px-4 py-3 text-sm text-white/90">
                      Quero entender volume, timing e repasse para a equipe.
                    </div>
                    <div className="ml-auto max-w-[94%] rounded-[20px] rounded-br-sm bg-white/8 px-4 py-3 text-sm text-white/90">
                      Perfeito. Ja deixei score, prioridade e proxima acao prontos para a demonstracao.
                    </div>
                  </div>

                  <div className="mt-4 rounded-[20px] border border-accent/18 bg-[linear-gradient(180deg,rgba(139,255,191,0.14),rgba(108,231,255,0.06))] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-accent/90">
                          Lead pronto para vendedor
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          Operacao multicanal com prioridade alta
                        </p>
                      </div>
                      <CheckCircle2 className="size-5 text-accent" />
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {sellerContext.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/8 bg-[#0a1429]/92 px-3 py-2"
                        >
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-full rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,36,0.96),rgba(8,12,25,0.94))] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                      Contexto entregue
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                      O vendedor nao comeca do zero.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/6 p-2 text-primary">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    "Historico completo da conversa e da intencao comercial.",
                    "Prioridade automatica para quem esta mais perto de comprar.",
                    "Proxima acao definida para acelerar o fechamento.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/5 px-4 py-3"
                    >
                      <div className="mt-0.5 rounded-full bg-primary/14 p-1.5">
                        <CheckCircle2 className="size-3.5 text-primary" />
                      </div>
                      <p className="text-sm leading-6 text-white/90">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-[18px] border border-white/8 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Proxima melhor acao
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Entrar na conversa com demo e proposta alinhadas
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute left-6 top-0 hidden -translate-y-1/2 rounded-[24px] border border-white/10 bg-[#091227]/92 p-4 shadow-[var(--shadow-premium)] backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/12 p-3">
            <MessageCircle className="size-5 text-primary" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Tempo de resposta
            </p>
            <p className="text-xl font-semibold text-white">7 segundos</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.82 }}
        className="absolute -bottom-10 right-6 hidden rounded-[24px] border border-white/10 bg-[#091227]/92 p-4 shadow-[var(--shadow-premium)] backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-accent/12 p-3">
            <Zap className="size-5 text-accent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Follow-up automatico
            </p>
            <p className="text-xl font-semibold text-white">5x mais contato</p>
          </div>
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-18 pt-14 sm:pb-24 sm:pt-18 lg:pb-28 lg:pt-22">
      <div className="container-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(560px,1.02fr)] lg:items-stretch lg:gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(640px,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl lg:flex lg:min-h-[760px] lg:w-full lg:max-w-none lg:flex-col lg:justify-between lg:self-stretch"
          >
            <div className="lg:flex lg:flex-1 lg:flex-col">
              <Badge variant="accent" className="mb-6 min-h-9 px-4 py-0 leading-none">
                IA comercial para equipes que querem vender na velocidade certa
              </Badge>
              <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-balance text-white sm:text-6xl lg:text-7xl">
                A inteligencia artificial{" "}
                <span className="text-gradient">que prepara a venda para o seu time fechar.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                A IA atende em segundos, qualifica oportunidades e faz follow-up automatico para sua equipe entrar no momento certo e fechar mais no WhatsApp e Instagram.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="premium" size="lg">
                  <Link href={siteConfig.demoUrl}>
                    Solicitar demonstracao
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
                    className={`flex min-h-14 items-center rounded-[20px] border border-white/10 bg-white/6 px-5 py-3 text-[15px] font-medium text-foreground/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md ${
                      index === proofPills.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    {pill}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex max-w-xl flex-1">
                <div className="flex w-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,20,39,0.96),rgba(7,12,25,0.98))] p-5 shadow-[var(--shadow-premium)] lg:min-h-[340px] lg:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                        Planos AnySale
                      </p>
                      <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                        Modelos pensados para o estágio da sua operação.
                      </h2>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                      Consultivo
                    </div>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                    A AnySale pode entrar no primeiro canal, crescer com CRM e escalar para uma
                    operação comercial orquestrada. O desenho final depende do volume de leads,
                    canais e nível de automação desejado.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {heroPlans.map((plan) => {
                      const Icon = plan.icon;

                      return (
                        <div
                          key={plan.label}
                          className="grid gap-4 rounded-[24px] border border-white/8 bg-white/5 p-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"
                        >
                          <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-primary">
                            <Icon className="size-5" />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="text-lg font-semibold text-white">{plan.label}</p>
                              <span className="rounded-full border border-accent/15 bg-accent/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-accent">
                                {plan.highlight}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {plan.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 sm:max-w-[170px] sm:justify-end">
                            {plan.chips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-white/10 bg-[#0a1429]/92 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="rounded-[22px] border border-white/8 bg-[linear-gradient(90deg,rgba(108,231,255,0.1),rgba(139,255,191,0.08))] px-4 py-3">
                      <p className="text-sm font-medium text-white">
                        Escopo e investimento definidos por canal, volume, equipe e complexidade
                        da operação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-1 2xl:grid-cols-3">
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

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
