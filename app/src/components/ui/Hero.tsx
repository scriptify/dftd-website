"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Countdown from "./Countdown";
import { FESTIVAL } from "@/lib/content";

const DogScene = dynamic(() => import("../three/DogScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* 3D Background */}
      <DogScene />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, var(--bg-primary) 90%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-4 max-w-5xl mx-auto">
        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs sm:text-sm font-medium"
          style={{
            background: "var(--gradient-card)",
            border: "1px solid var(--border-color)",
            color: "var(--accent-primary)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--accent-primary)" }}
          />
          June 13, 2026 &middot; Safari Beach, Ulcinj, Montenegro
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>DANCING</span>
          <br />
          <span className="gradient-text">FOR THE</span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>DOGS</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          A Techno &amp; House charity festival on the Adriatic coast.
          <br />
          <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>
            Every beat saves a life.
          </span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-10"
        >
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/tickets"
            className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 animate-pulse-glow"
            style={{
              background: "var(--gradient-accent)",
              color: "var(--bg-primary)",
            }}
          >
            Get Tickets
          </a>
          <a
            href="/lineup"
            className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 glass-card"
            style={{ color: "var(--text-primary)" }}
          >
            View Lineup
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="var(--text-secondary)"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
