'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL, DOG_IMAGES } from '@/lib/content';

export default function CausePage() {
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
            THE <span className="gradient-text">CAUSE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Every beat, every ticket, every dance move &mdash; it all goes to saving lives.
          </motion.p>
        </div>
      </section>

      {/* SOS Street Dog Project */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  Our Beneficiary
                </h2>
                <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  SOS STREET DOG <span className="gradient-text">PROJECT</span>
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {FESTIVAL.cause.description}
                </p>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Montenegro&apos;s stray dog population faces enormous challenges. Without
                  intervention, these dogs suffer from disease, malnutrition, and lack of
                  shelter. SOS Street Dog Project provides the critical veterinary care that
                  saves and transforms lives.
                </p>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <p className="text-2xl font-black gradient-text">~300</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Dogs/year treated</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <p className="text-2xl font-black gradient-text">2017</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Founded</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <p className="text-2xl font-black gradient-text">2021</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Montenegro chapter</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {DOG_IMAGES.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-xl overflow-hidden aspect-square"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Dance For Shelters */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src="/images/event/dance-for-shelters.jpg"
                    alt="Dance For Shelters - Marek and Monika"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  Co-Organizer
                </h2>
                <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  DANCE FOR <span className="gradient-text">SHELTERS</span>
                </h3>
                <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {FESTIVAL.partners.danceForShelters.description}
                </p>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Operating under {FESTIVAL.partners.danceForShelters.org}, Marek and Monika
                  bring professional event organization and an international network of DJs
                  who donate their time and talent. Many artists even contribute half their
                  fee back to the cause.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={FESTIVAL.partners.danceForShelters.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                    style={{ background: 'var(--gradient-accent)', color: 'var(--bg-primary)' }}
                  >
                    Website
                  </a>
                  <a
                    href={FESTIVAL.partners.danceForShelters.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 glass-card"
                  >
                    Instagram
                  </a>
                  <a
                    href={FESTIVAL.partners.danceForShelters.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 glass-card"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* EU Project */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
              EU Partnership
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text">{FESTIVAL.partners.euProject.name.toUpperCase()}</span>
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {FESTIVAL.partners.euProject.description} This partnership with the European
              House in Podgorica brings additional resources and visibility to animal welfare
              efforts across Montenegro.
            </p>
            <a
              href={FESTIVAL.partners.euProject.website}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-sticker"
            >
              Learn More
            </a>
          </ScrollSection>
        </div>
      </section>

      {/* Success Stories Gallery */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                SUCCESS <span className="gradient-text">STORIES</span>
              </h2>
              <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                These dogs were rescued, treated, and found loving homes &mdash; thanks to supporters like you.
              </p>
            </div>
          </ScrollSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DOG_IMAGES.map((img, i) => (
              <ScrollSection key={img.src} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl overflow-hidden aspect-square"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: 'var(--bg-primary)' }}>
        <ScrollSection>
          <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            HELP US <span className="gradient-text">SAVE MORE LIVES</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Get your ticket, spread the word, or volunteer. Every action counts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/tickets"
              className="cta-sticker"
            >
              Get Tickets
            </Link>
            <Link
              href="/contact"
              className="cta-sticker-outline"
            >
              Volunteer
            </Link>
          </div>
        </ScrollSection>
      </section>
    </>
  );
}
