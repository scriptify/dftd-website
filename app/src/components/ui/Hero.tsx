"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Countdown from "./Countdown";
import { EVENT } from "@/lib/content";

const DogScene = dynamic(() => import("../three/DogScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/event/hero_1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          zIndex: 0,
        }}
      />

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
        {/* Series label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-xs sm:text-sm font-bold uppercase tracking-[0.3em]"
          style={{ color: "var(--text-secondary)" }}
        >
          {EVENT.series} &middot; {EVENT.edition}
        </motion.p>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: 2 }}
          transition={{ delay: 0.2 }}
          className="inline-block mt-5 mb-8 px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-wider"
          style={{
            background: "var(--bg-primary)",
            border: "2px solid var(--accent-primary)",
            color: "var(--accent-primary)",
            fontFamily: "var(--font-sans)",
            borderRadius: "2px",
            boxShadow: "3px 3px 0px var(--accent-primary)",
          }}
        >
          {EVENT.dateLabel} &middot; Safari Beach, Ulcinj
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
          A Halloween disco party on the Adriatic coast. Costumes, a raffle, and one big dancefloor.
          <br />
          <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>
            Every euro for the dogs.
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
          <a href="#party" className="cta-sticker">
            What&rsquo;s On
          </a>
          <a
            href={EVENT.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-sticker-outline"
          >
            Follow Us
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
