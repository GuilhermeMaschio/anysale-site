import Image from "next/image";
import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <Link href="/" className="flex w-fit items-center gap-3" aria-label="AnySale">
              <Image
                src="/anysale-mark.svg"
                alt="Logo da AnySale"
                width={40}
                height={40}
                className="size-10"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-[-0.04em] text-white">
                  AnySale
                </p>
                <p className="text-sm text-muted-foreground">
                  Inteligência artificial comercial para WhatsApp e Instagram.
                </p>
              </div>
            </Link>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Automatize atendimento, qualifique leads e transforme velocidade em receita previsível.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="text-sm text-muted-foreground">
              <Link href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </Link>
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground/80">
              © {new Date().getFullYear()} AnySale. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
