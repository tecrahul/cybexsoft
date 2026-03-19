"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";

const COUNTDOWN = 10;

const highlights = [
  { icon: ShieldCheck, label: "Trusted & Reliable" },
  { icon: TrendingUp, label: "Proven Results" },
  { icon: Users, label: "Expert Team" },
];

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(COUNTDOWN);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#welcome") {
      // Clean hash without triggering a scroll / reload
      history.replaceState(null, "", window.location.pathname + window.location.search);
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current!);
          setVisible(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible]);

  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setVisible(false);
  };

  const progress = (seconds / COUNTDOWN) * 100;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-label="Welcome to CybexSoft"
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#3b3426] bg-[#171717] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold top glow bar */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f2b544] to-transparent" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close welcome popup"
              >
                <X size={16} />
              </button>

              {/* Body */}
              <div className="px-8 pb-8 pt-10 text-center">
                {/* Icon badge */}
                <motion.div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#201a12]"
                  initial={{ rotate: -10, scale: 0.7 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Sparkles size={32} className="text-[#f2b544]" />
                </motion.div>

                {/* Headline */}
                <motion.h2
                  className="mb-2 font-[var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                >
                  Welcome to{" "}
                  <span className="text-[#f2b544]">CybexSoft</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  className="mb-6 text-sm leading-relaxed text-[#a6a6a6]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.4 }}
                >
                  We're thrilled to have you here. Let's build something
                  extraordinary together — where innovation meets excellence.
                </motion.p>

                {/* Highlight pills */}
                <motion.div
                  className="mb-7 flex justify-center gap-3 flex-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.4 }}
                >
                  {highlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-full border border-[#3b3426] bg-[#201a12] px-3 py-1.5 text-xs font-medium text-[#f2b544]"
                    >
                      <Icon size={12} />
                      {label}
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.a
                  href="#services"
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f2b544] px-6 py-3 text-sm font-semibold text-[#121212] transition hover:bg-[#e0a83a] active:scale-95"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Our Work
                  <ArrowRight size={14} />
                </motion.a>

                {/* Auto-close hint */}
                <p className="mt-4 text-xs text-[#a6a6a6]/60">
                  Closes automatically in{" "}
                  <span className="text-[#f2b544]">{seconds}s</span>
                </p>
              </div>

              {/* Countdown progress bar */}
              <div className="h-[3px] w-full bg-[#1b1b1b]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#f2b544] to-[#c89b3c]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
