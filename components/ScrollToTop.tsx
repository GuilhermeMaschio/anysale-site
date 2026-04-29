"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 560);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.24, ease: [0.2, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Voltar ao topo"
          className="glow-ring fixed bottom-5 right-5 z-[70] inline-flex items-center gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(9,18,39,0.96),rgba(10,22,45,0.92))] px-3.5 py-3 text-left text-white backdrop-blur-2xl sm:bottom-7 sm:right-7"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(108,231,255,0.18),rgba(139,255,191,0.18))] text-primary shadow-[inset_0_0_0_1px_rgba(108,231,255,0.16)]">
            <ArrowUp className="size-5" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-[11px] uppercase tracking-[0.24em] text-primary/80">
              Navegação
            </span>
            <span className="mt-0.5 block text-sm font-semibold tracking-[-0.02em] text-white">
              Voltar ao topo
            </span>
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
