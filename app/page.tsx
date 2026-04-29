import dynamic from "next/dynamic";

import { BrandPrinciples } from "@/components/BrandPrinciples";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HumanLayer } from "@/components/HumanLayer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Showcase } from "@/components/Showcase";
const Results = dynamic(() =>
  import("@/components/Results").then((module) => module.Results),
);
const Testimonials = dynamic(() =>
  import("@/components/Testimonials").then((module) => module.Testimonials),
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(108,231,255,0.14),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(139,255,191,0.12),transparent_18%),linear-gradient(180deg,#040816_0%,#050b1d_34%,#030611_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      <Navbar />

      <main>
        <Hero />
        <Results />
        <Showcase />
        <HumanLayer />
        <Testimonials />
        <BrandPrinciples />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
