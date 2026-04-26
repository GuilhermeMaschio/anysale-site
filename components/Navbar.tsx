"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="container-shell">
        <div className="glass-card relative flex min-h-18 items-center justify-between gap-4 px-5 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="AnySale">
            <Image
              src="/anysale-mark.svg"
              alt="Logo da AnySale"
              width={40}
              height={40}
              priority
              className="size-10"
            />
            <div className="space-y-0.5">
              <span className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
                AnySale
              </span>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-primary/80">
                AI Sales Engine
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline">
              <Link href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </Link>
            </Button>
            <Button asChild variant="premium">
              <Link href={siteConfig.demoUrl}>
                Solicitar demonstração
                <MoveRight className="size-4" />
              </Link>
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((state) => !state)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>

          <motion.div
            initial={false}
            animate={{
              opacity: open ? 1 : 0,
              y: open ? 0 : -8,
              pointerEvents: open ? "auto" : "none",
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute left-3 right-3 top-[calc(100%+12px)] rounded-[28px] border border-white/10 bg-[#08112a]/94 p-4 shadow-[var(--shadow-premium)] backdrop-blur-2xl lg:hidden",
            )}
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <Button asChild variant="premium" className="w-full">
                <Link href={siteConfig.demoUrl} onClick={() => setOpen(false)}>
                  Solicitar demonstração
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Falar no WhatsApp
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
