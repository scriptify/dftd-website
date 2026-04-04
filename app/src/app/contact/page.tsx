'use client';

import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL } from '@/lib/content';

export default function ContactPage() {
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
            GET IN <span className="gradient-text">TOUCH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Whether you want to sponsor, volunteer, press inquiries, or just say hello &mdash; we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="var(--accent-primary)" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                ),
                title: 'Email',
                value: FESTIVAL.social.email,
                link: `mailto:${FESTIVAL.social.email}`,
                desc: 'General inquiries, sponsorship, press',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="var(--accent-primary)" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                ),
                title: 'Instagram',
                value: '@dftd_26',
                link: FESTIVAL.social.instagram,
                desc: 'Latest updates and announcements',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="var(--accent-primary)" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                title: 'Facebook',
                value: 'Dancing For The Dogs',
                link: FESTIVAL.social.facebook,
                desc: 'Events and community',
              },
            ].map((contact, i) => (
              <ScrollSection key={contact.title} delay={i * 0.1}>
                <a
                  href={contact.link}
                  target={contact.link.startsWith('mailto') ? undefined : '_blank'}
                  rel={contact.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="block glass-card p-8 rounded-2xl text-center h-full group hover:scale-105 transition-all"
                >
                  <div className="flex justify-center mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-black mb-2">{contact.title}</h3>
                  <p className="font-bold mb-2 gradient-text">{contact.value}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{contact.desc}</p>
                </a>
              </ScrollSection>
            ))}
          </div>

          {/* Contact Categories */}
          <ScrollSection>
            <div className="glass-card p-8 sm:p-12 rounded-2xl">
              <h2 className="text-2xl font-black mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                HOW CAN WE <span className="gradient-text">HELP?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Sponsorship & Partnerships',
                    desc: 'Want to support the cause and gain visibility at our event? We offer various sponsorship packages. Reach out to discuss how we can collaborate.',
                    email: FESTIVAL.social.email,
                  },
                  {
                    title: 'Volunteering',
                    desc: 'We always need helping hands! From setup to cleanup, bar service to ticket scanning \u2014 join our volunteer team and be part of the action.',
                    email: FESTIVAL.social.email,
                  },
                  {
                    title: 'Press & Media',
                    desc: 'Journalist? Blogger? Content creator? We\u2019d love to have you cover our event. Press passes and materials available upon request.',
                    email: FESTIVAL.social.email,
                  },
                  {
                    title: 'DJ Applications',
                    desc: 'Interested in performing? Send us your mix, bio, and social media links. We especially welcome artists who share our passion for animal welfare.',
                    email: FESTIVAL.partners.danceForShelters.email,
                  },
                ].map((item, i) => (
                  <div key={item.title} className="p-6 rounded-xl" style={{ background: 'var(--gradient-card)' }}>
                    <h3 className="text-lg font-black mb-2" style={{ color: 'var(--accent-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                    <a
                      href={`mailto:${item.email}?subject=${encodeURIComponent(item.title + ' - DFTD 2026')}`}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      Contact us
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Partner Links */}
      <section className="py-20 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-2xl font-black mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              OUR PARTNER <span className="gradient-text">ORGANIZATIONS</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={FESTIVAL.partners.danceForShelters.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 glass-card"
              >
                Dance For Shelters
              </a>
              <a
                href={FESTIVAL.partners.euProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 glass-card"
              >
                {FESTIVAL.partners.euProject.name}
              </a>
            </div>
          </ScrollSection>
        </div>
      </section>
    </>
  );
}
