'use client';

import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL } from '@/lib/content';

export default function LineupPage() {
  const mainStage = FESTIVAL.lineup.filter(dj => dj.stage === 'Main Stage');
  const secondStage = FESTIVAL.lineup.filter(dj => dj.stage === 'Second Stage');

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            THE <span className="gradient-text">LINEUP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            13 artists across 2 stages. 14 hours of non-stop electronic music.
            <br />Artists will be announced gradually &mdash; follow us to stay updated!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href={FESTIVAL.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ background: 'var(--gradient-accent)', color: 'var(--bg-primary)' }}
            >
              Follow on Instagram
            </a>
            <a
              href={FESTIVAL.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 glass-card"
            >
              Follow on Facebook
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Stage */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: 'rgba(6, 214, 160, 0.15)', color: 'var(--accent-primary)' }}>
                Beach
              </span>
              <h2 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                MAIN STAGE
              </h2>
              <p className="text-lg mt-2 gradient-text font-bold">Techno &middot; 16:00 &ndash; 04:00</p>
            </div>
          </ScrollSection>

          <div className="grid gap-4">
            {mainStage.map((dj, i) => (
              <ScrollSection key={`main-${i}`} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 rounded-xl flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {dj.time}
                    </span>
                    <div className="w-px h-8" style={{ background: 'var(--border-color)' }} />
                    <h3 className={`text-2xl sm:text-3xl font-black ${dj.announced ? '' : 'opacity-40'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                      {dj.name}
                    </h3>
                  </div>
                  {!dj.announced && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full animate-pulse" style={{ background: 'var(--gradient-card)', color: 'var(--accent-primary)' }}>
                      Coming Soon
                    </span>
                  )}
                </motion.div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Second Stage */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4" style={{ background: 'rgba(255, 0, 110, 0.15)', color: 'var(--accent-secondary)' }}>
                Club Area
              </span>
              <h2 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                SECOND STAGE
              </h2>
              <p className="text-lg mt-2 gradient-text font-bold">Disco &rarr; House / Tech-House / Melodic &middot; 16:00 &ndash; 06:00</p>
            </div>
          </ScrollSection>

          <div className="grid gap-4">
            {secondStage.map((dj, i) => (
              <ScrollSection key={`second-${i}`} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-card p-6 rounded-xl flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {dj.time}
                    </span>
                    <div className="w-px h-8" style={{ background: 'var(--border-color)' }} />
                    <h3 className={`text-2xl sm:text-3xl font-black ${dj.announced ? '' : 'opacity-40'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                      {dj.name}
                    </h3>
                  </div>
                  {!dj.announced && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full animate-pulse" style={{ background: 'var(--gradient-card)', color: 'var(--accent-secondary)' }}>
                      Coming Soon
                    </span>
                  )}
                </motion.div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="py-20 px-4 text-center" style={{ background: 'var(--bg-primary)' }}>
        <ScrollSection>
          <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            DON&apos;T MISS AN <span className="gradient-text">ANNOUNCEMENT</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Artists will be revealed one by one. Follow us on social media to be the first to know.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={FESTIVAL.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
              style={{ background: 'var(--gradient-accent)', color: 'var(--bg-primary)' }}
            >
              Follow @dftd_26
            </a>
          </div>
        </ScrollSection>
      </section>
    </>
  );
}
