"use client";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section id="cta" className="section-space section-line relative overflow-hidden">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.2, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] border border-primary/14 bg-[linear-gradient(135deg,rgba(8,18,40,0.96),rgba(5,10,22,0.92))] px-6 py-12 shadow-[var(--shadow-premium)] sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,231,255,0.22),transparent_24%),radial-gradient(circle_at_left_bottom,rgba(139,255,191,0.16),transparent_22%)]" />
          <div className="absolute -right-10 top-10 hidden h-40 w-40 rounded-full bg-primary/16 blur-3xl lg:block" />

          <div className="relative flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Rocket className="size-4 text-primary" />
                IA no ritmo. Time no fechamento.
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-balance text-white sm:text-5xl lg:text-6xl">
                Deixe a IA sustentar o ritmo. Seu time entra para fechar melhor.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Atendimento instantâneo, follow-up inteligente e contexto pronto para o
                seu comercial vender com mais consistência no WhatsApp e Instagram.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
              <Button asChild variant="premium" size="lg">
                <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  Quero vender com IA
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={siteConfig.demoUrl}>Agendar demonstração</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
