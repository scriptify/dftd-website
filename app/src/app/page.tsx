'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/ui/Hero';
import Ticker from '@/components/ui/Ticker';
import ScrollSection from '@/components/ui/ScrollSection';
import { EVENT, DOG_IMAGES } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Ticker */}
      <Ticker items={[
        'OCT 31, 2026',
        'SAFARI BEACH, ULCINJ',
        'DISCO PARTY',
        'HALLOWEEN COSTUME CONTEST',
        'CHARITY RAFFLE',
        '100% FOR THE DOGS',
      ]} />

      {/* What to expect */}
      <section id="party" className="py-24 px-4 scroll-mt-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                The Party
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                ONE NIGHT, <span className="gradient-text">ALL FOR THE DOGS</span>
              </h3>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Forget the big festival &mdash; this is a beach disco party with a heart. Dress up,
                dance, win prizes, and help Montenegro&rsquo;s street dogs along the way.
              </p>
            </div>
          </ScrollSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT.highlights.map((item, i) => {
              const rotation = i === 0 ? -1.5 : i === 1 ? 1 : -1;
              return (
                <ScrollSection key={item.title} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: 0, y: -8 }}
                    style={{ rotate: rotation }}
                    className="glass-card rounded-2xl p-8 h-full text-center cursor-default transition-shadow hover:shadow-2xl"
                  >
                    <span className="text-5xl mb-5 block">{item.emoji}</span>
                    <h4 className="text-2xl font-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </ScrollSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Cause */}
      <section id="cause" className="py-24 px-4 scroll-mt-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  The Cause
                </h2>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  EVERY EURO
                  <br />
                  <span className="gradient-text">SAVES A DOG</span>
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {EVENT.cause.description}
                </p>
                <p className="text-lg mb-8 font-bold" style={{ color: 'var(--text-primary)' }}>
                  100% of all raffle proceeds go directly to the {EVENT.cause.title}.
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {EVENT.cause.stats.map((stat) => (
                    <div key={stat.label} className="glass-card p-4 rounded-xl text-center">
                      <p className="text-2xl font-black gradient-text">{stat.value}</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {DOG_IMAGES.slice(0, 4).map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, scale: 0.85 }}
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
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl"
                >
                  <p className="text-3xl font-black gradient-text">&euro;{EVENT.cause.raisedLastTime}+</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Raised at the last party</p>
                </motion.div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Dog Gallery */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                Why We Dance
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                THE GOOD <span className="gradient-text">ENDINGS</span>
              </h3>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                These are some of the dogs who were rescued, treated, and found their forever homes
                &mdash; thanks to supporters like you.
              </p>
            </div>
          </ScrollSection>

          <ScrollSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DOG_IMAGES.map((img) => (
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
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 px-4 scroll-mt-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src="/images/event/stage-location.jpg"
                  alt="Safari Beach venue in Ulcinj"
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
                  We&rsquo;re back on the sand at Safari Beach on Velika Plaza &mdash; one of the
                  longest beaches on the Adriatic. {EVENT.dateLabel}. More details coming soon.
                </p>
                <a
                  href={EVENT.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-sticker"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Follow / More info CTA */}
      <section id="follow" className="py-24 px-4 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(var(--accent-primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              MORE INFO <span className="gradient-text">TO FOLLOW</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Save the date &mdash; {EVENT.dateLabel}{' '}at Safari Beach. Follow us so you
              don&rsquo;t miss a thing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-sticker"
              >
                Follow on Instagram
              </a>
              <a
                href={EVENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-sticker-outline"
              >
                Follow on Facebook
              </a>
            </div>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
