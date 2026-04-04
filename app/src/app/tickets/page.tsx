'use client';

import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import Countdown from '@/components/ui/Countdown';
import { FESTIVAL } from '@/lib/content';

export default function TicketsPage() {
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
            GET YOUR <span className="gradient-text">TICKETS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: 'var(--text-secondary)' }}
          >
            Every ticket includes entry to both stages AND a chance to win in our charity raffle!
          </motion.p>
          <Countdown />
        </div>
      </section>

      {/* Ticket Info */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollSection>
            <div className="glass-card p-8 sm:p-12 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20" style={{ background: 'var(--accent-primary)' }} />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-20" style={{ background: 'var(--accent-secondary)' }} />

              <div className="relative">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(6, 214, 160, 0.15)', color: 'var(--accent-primary)' }}>
                  Ticket Sales Opening Soon
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  FESTIVAL PASS
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Ticket details and pricing will be announced soon. Follow us on social media
                  to be the first to know when tickets go on sale!
                </p>

                {/* What's Included */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-lg mx-auto">
                  {[
                    'Access to both stages',
                    '14 hours of live music',
                    'Charity raffle entry',
                    'Beach party atmosphere',
                    'Techno, House & Disco',
                    '100% for the dogs',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 shrink-0" fill="var(--accent-primary)" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={FESTIVAL.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                    style={{ background: 'var(--gradient-accent)', color: 'var(--bg-primary)' }}
                  >
                    Get Notified
                  </a>
                  <a
                    href={`mailto:${FESTIVAL.social.email}`}
                    className="px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 glass-card"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Raffle Section */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
                  Charity Raffle
                </h2>
                <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  WIN BIG, <span className="gradient-text">GIVE BIGGER</span>
                </h3>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {FESTIVAL.raffle.description} Last year&apos;s raffle featured over 60 prizes
                  worth more than &euro;15,000. This year, every ticket automatically enters you
                  into the raffle.
                </p>
                <h4 className="text-lg font-bold mb-3">Featured Prizes:</h4>
                <ul className="space-y-2">
                  {FESTIVAL.raffle.prizes.map((prize, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-primary)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{prize}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center">
                <p className="text-6xl font-black gradient-text mb-2">&euro;15,000+</p>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>in prizes last year</p>
                <div className="w-full h-px my-6" style={{ background: 'var(--border-color)' }} />
                <p className="text-4xl font-black mb-2" style={{ color: 'var(--accent-primary)' }}>60+</p>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>prizes to be won</p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent-primary)' }}>
              Transparency
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              WHERE YOUR <span className="gradient-text">MONEY GOES</span>
            </h3>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              100% of ticket and raffle proceeds go directly to animal welfare organizations.
              We believe in complete transparency about how your contributions make a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: '🏥', label: 'Veterinary Care', desc: 'Spaying, neutering, vaccinations' },
                { icon: '🏠', label: 'Rescue & Rehoming', desc: 'Finding forever homes' },
                { icon: '🍽️', label: 'Daily Care', desc: 'Food, shelter, medicine' },
              ].map((item, i) => (
                <ScrollSection key={item.label} delay={i * 0.1}>
                  <div className="glass-card p-6 rounded-xl">
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <h4 className="text-lg font-black mb-2">{item.label}</h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
