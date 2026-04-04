'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/ui/Hero';
import Ticker from '@/components/ui/Ticker';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL, DOG_IMAGES, FEATURED_DJS } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Ticker */}
      <Ticker items={[
        'JUNE 13, 2026',
        'SAFARI BEACH, ULCINJ',
        '2 STAGES',
        '13 DJS',
        '14 HOURS OF MUSIC',
        'TECHNO \u2022 HOUSE \u2022 DISCO',
        '100% FOR THE DOGS',
      ]} />

      {/* Lineup Preview Section */}
      <section className="py-24 px-4 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                The Lineup
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                WHO&apos;S <span className="gradient-text">PLAYING</span>
              </h3>
              <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                13 artists across 2 stages. Artists will be announced soon &mdash; follow us to stay updated!
              </p>
            </div>
          </ScrollSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_DJS.map((dj, i) => {
              const rotation = i % 3 === 0 ? -2 : i % 3 === 1 ? 1 : -1;
              return (
                <ScrollSection
                  key={`dj-${i}`}
                  delay={i * 0.08}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0, y: -8 }}
                    style={{ rotate: rotation }}
                    className="glass-card rounded-2xl p-5 flex items-center gap-4 group cursor-pointer transition-shadow hover:shadow-2xl"
                  >
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shrink-0 flex items-center justify-center text-2xl font-black"
                      style={{
                        background: dj.gradient,
                        color: 'rgba(0,0,0,0.3)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {dj.announced ? dj.name.charAt(0) : '?'}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-xl font-black truncate ${!dj.announced ? 'opacity-50' : ''}`}
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {dj.name}
                      </h4>
                      <p className="text-sm font-bold gradient-text">{dj.genre}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {dj.stage}
                        </span>
                        <span className="w-1 h-1 rounded-full" style={{ background: 'var(--text-secondary)' }} />
                        <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                          {dj.time}
                        </span>
                      </div>
                      {dj.announced && (dj.instagram || dj.soundcloud) && (
                        <div className="flex gap-2 mt-2">
                          {dj.instagram && (
                            <a href={dj.instagram} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--accent-primary)' }}>
                              Instagram
                            </a>
                          )}
                          {dj.soundcloud && (
                            <a href={dj.soundcloud} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline" style={{ color: 'var(--accent-primary)' }}>
                              SoundCloud
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    {!dj.announced && (
                      <span
                        className="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shrink-0 animate-pulse"
                        style={{ background: 'var(--gradient-card)', color: 'var(--accent-primary)' }}
                      >
                        Soon
                      </span>
                    )}
                  </motion.div>
                </ScrollSection>
              );
            })}
          </div>

          <ScrollSection>
            <div className="text-center mt-12">
              <Link
                href="/lineup"
                className="cta-sticker"
              >
                Full Lineup & Timetable
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  About the Festival
                </h2>
                <h3
                  className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  WHERE MUSIC
                  <br />
                  <span className="gradient-text">MEETS PURPOSE</span>
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Dancing For The Dogs is a charity electronic music festival held on the stunning
                  shores of Velika Plaza in Ulcinj, Montenegro. What started in June 2024 as a
                  community gathering has grown into a movement &mdash; uniting music lovers from
                  across Europe to dance for a cause.
                </p>
                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  100% of proceeds go directly to the SOS Street Dog Project, funding
                  spaying/neutering, vaccinations, and medical treatment for hundreds of stray
                  dogs in Montenegro every year.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-lg font-bold transition-all hover:gap-4"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Learn our story
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/event/beach-venue.jpg"
                    alt="Dogs on the beach at the festival venue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)' }} />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl"
                >
                  <p className="text-3xl font-black gradient-text">&euro;{FESTIVAL.cause.previousRaised}+</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Raised in 2024</p>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                Two Stages, One Mission
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                14 HOURS OF <span className="gradient-text">NON-STOP</span> BEATS
              </h3>
            </div>
          </ScrollSection>

          <div className="grid md:grid-cols-2 gap-8">
            {FESTIVAL.stages.map((stage, i) => (
              <ScrollSection key={stage.name} delay={i * 0.2} direction={i === 0 ? 'left' : 'right'}>
                <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group">
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: i === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}
                  />
                  <div className="relative">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                      style={{
                        background: i === 0 ? 'rgba(6, 214, 160, 0.15)' : 'rgba(255, 0, 110, 0.15)',
                        color: i === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                      }}
                    >
                      {stage.location}
                    </span>
                    <h4 className="text-3xl font-black mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {stage.name}
                    </h4>
                    <p className="text-xl font-bold mb-4 gradient-text">{stage.genre}</p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div>
                        <p className="text-2xl font-black" style={{ color: 'var(--accent-primary)' }}>{stage.djCount}</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Artists</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black" style={{ color: 'var(--accent-primary)' }}>{stage.setLength}</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Per Set</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black" style={{ color: 'var(--accent-primary)' }}>{stage.hours.split('–')[0]}</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Doors Open</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dog Gallery / Impact Section */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                Why We Dance
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                EVERY BEAT <span className="gradient-text">SAVES A LIFE</span>
              </h3>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Your ticket directly funds the SOS Street Dog Project in Montenegro &mdash;
                spaying, neutering, vaccinating, and treating ~300 dogs every year. These are
                some of the dogs who found their forever homes thanks to supporters like you.
              </p>
            </div>
          </ScrollSection>

          <ScrollSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {DOG_IMAGES.slice(0, 8).map((img) => (
                <motion.div
                  key={img.src}
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
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
                  >
                    <p className="text-sm text-white font-medium">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollSection>

          <ScrollSection>
            <div className="text-center mt-12">
              <Link
                href="/cause"
                className="cta-sticker"
              >
                Learn About Our Cause
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="/images/event/stage-location.jpg"
                  alt="Safari Beach venue - stage location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  The Venue
                </h2>
                <h3 className="text-4xl sm:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  SAFARI BEACH
                  <br />
                  <span className="gradient-text">ULCINJ, MONTENEGRO</span>
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Set on the stunning Velika Plaza &mdash; one of the longest sandy beaches on the
                  Adriatic &mdash; our festival takes place right on the sand, with the stage in
                  front of the iconic Safari Beach Restaurant.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={FESTIVAL.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-sticker"
                  >
                    View on Maps
                  </a>
                  <Link
                    href="/info"
                    className="cta-sticker-outline"
                  >
                    Travel Info
                  </Link>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                Our Partners
              </h2>
              <h3 className="text-4xl sm:text-5xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                TOGETHER <span className="gradient-text">FOR CHANGE</span>
              </h3>
            </div>
          </ScrollSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: FESTIVAL.partners.danceForShelters.name,
                desc: FESTIVAL.partners.danceForShelters.description,
                link: FESTIVAL.partners.danceForShelters.website,
                image: '/images/event/dance-for-shelters.jpg',
              },
              {
                name: FESTIVAL.cause.title,
                desc: FESTIVAL.cause.description,
                link: '/cause',
                image: '/images/dogs/IMG-20260325-WA0013.jpg',
              },
              {
                name: FESTIVAL.partners.euProject.name,
                desc: FESTIVAL.partners.euProject.description,
                link: FESTIVAL.partners.euProject.website,
                image: '/images/dogs/street-dogs-cat.jpg',
              },
            ].map((partner, i) => (
              <ScrollSection key={partner.name} delay={i * 0.15}>
                <a
                  href={partner.link}
                  target={partner.link.startsWith('/') ? undefined : '_blank'}
                  rel={partner.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                  className="block glass-card rounded-2xl overflow-hidden group h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)' }} />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-black mb-2">{partner.name}</h4>
                    <p className="text-sm line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                      {partner.desc}
                    </p>
                  </div>
                </a>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(var(--accent-primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              READY TO <span className="gradient-text">DANCE?</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Join us on June 13, 2026 at Safari Beach. Get your ticket now and be part of
              something bigger than music.
            </p>
            <Link
              href="/tickets"
              className="cta-sticker"
            >
              Get Your Tickets Now
            </Link>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
