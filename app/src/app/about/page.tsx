'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL } from '@/lib/content';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--gradient-hero)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            OUR <span className="gradient-text">STORY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            How a love for music and animals created a movement on the Montenegrin coast.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  How It Started
                </h2>
                <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  FROM A BEACH PARTY TO A <span className="gradient-text">MOVEMENT</span>
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                  It all started in June 2024, when a group of music lovers and animal welfare
                  advocates came together on Safari Beach in Ulcinj, Montenegro, for the very
                  first Dancing For The Dogs event.
                </p>
                <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                  The idea was simple: combine the power of electronic music with the urgency
                  of helping Montenegro&apos;s stray dog population. The first event raised over
                  &euro;5,500 through raffle ticket sales alone &mdash; every cent going directly
                  to the SOS Street Dog Project.
                </p>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                  Now in its second year, DFTD has grown into a full-scale charity festival with
                  two stages, 13 DJs, and 14 hours of music. But the mission remains the same:
                  dance for a cause.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/branding/dftd-poster.jpg"
                  alt="Original DFTD event poster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                The People Behind DFTD
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                A TEAM DRIVEN BY <span className="gradient-text">PASSION</span>
              </h3>
            </div>
          </ScrollSection>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollSection delay={0.1} direction="left">
              <div className="glass-card p-8 rounded-2xl h-full">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/event/dance-for-shelters.jpg"
                    alt="Dance For Shelters founders Marek and Monika"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h4 className="text-2xl font-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  MAREK & MONIKA
                </h4>
                <p className="text-sm font-bold mb-3 gradient-text">
                  Dance For Shelters &middot; Co-Organizers
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Belgium-based DJs and founders of {FESTIVAL.partners.danceForShelters.org}.
                  Marek and Monika created Dance For Shelters to use the power of music for
                  animal welfare across Europe. They handle logistics and coordination for DFTD,
                  focusing entirely on making the event happen rather than performing.
                </p>
              </div>
            </ScrollSection>

            <ScrollSection delay={0.2} direction="right">
              <div className="glass-card p-8 rounded-2xl h-full">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/event/beach-venue.jpg"
                    alt="Barbara and Andrew Katz - SOS Street Dog Project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h4 className="text-2xl font-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  BARBARA & ANDREW KATZ
                </h4>
                <p className="text-sm font-bold mb-3 gradient-text">
                  SOS Street Dog Project &middot; Founders
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Founded in the USA in 2017, Barbara and Andrew (Andy) Katz brought their passion
                  for animal welfare to Montenegro in 2021. Their organization provides essential
                  veterinary care &mdash; spaying, neutering, and vaccinating approximately 300
                  dogs per year in the region.
                </p>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                THE <span className="gradient-text">JOURNEY</span>
              </h2>
            </div>
          </ScrollSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'var(--section-divider)' }} />

            {[
              { year: '2017', title: 'SOS Street Dog Project Founded', desc: 'Barbara and Andrew Katz establish the organization in the USA.' },
              { year: '2021', title: 'Montenegro Chapter', desc: 'SOS Street Dog Project expands to Montenegro, beginning on-the-ground rescue operations.' },
              { year: '2024', title: 'First DFTD Event', desc: 'The inaugural Dancing For The Dogs party at Safari Beach raises over \u20AC5,500 for the cause.' },
              { year: '2025', title: 'Dance For Shelters Partnership', desc: 'Marek and Monika join forces to scale up the festival with international support.' },
              { year: '2026', title: 'DFTD Festival', desc: '2 stages, 13 DJs, 14 hours of music. The biggest edition yet. June 13, Safari Beach, Ulcinj.' },
            ].map((item, i) => (
              <ScrollSection key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-2" style={{ background: 'var(--accent-primary)' }} />
                  <div className="ml-12 md:ml-0 md:w-1/2 glass-card p-6 rounded-xl">
                    <span className="text-sm font-bold" style={{ color: 'var(--accent-primary)' }}>{item.year}</span>
                    <h4 className="text-lg font-black mt-1">{item.title}</h4>
                    <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: 'var(--bg-secondary)' }}>
        <ScrollSection>
          <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            BE PART OF THE <span className="gradient-text">STORY</span>
          </h2>
          <Link
            href="/tickets"
            className="inline-block px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
            style={{ background: 'var(--gradient-accent)', color: 'var(--bg-primary)' }}
          >
            Get Your Tickets
          </Link>
        </ScrollSection>
      </section>
    </>
  );
}
