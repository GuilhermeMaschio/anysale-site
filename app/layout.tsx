import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "AnySale | IA para Vendas no WhatsApp e Instagram",
  description: siteConfig.description,
  keywords: [
    "IA para vendas",
    "automação whatsapp",
    "bot vendedor",
    "lead automation",
    "IA comercial",
    "atendimento automático",
  ],
  openGraph: {
    title: "AnySale | IA para Vendas no WhatsApp e Instagram",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AnySale | IA para Vendas no WhatsApp e Instagram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnySale | IA para Vendas no WhatsApp e Instagram",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/anysale-mark.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${sora.variable} ${plexMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
