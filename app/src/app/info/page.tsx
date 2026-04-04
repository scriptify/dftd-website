'use client';

import { motion } from 'framer-motion';
import ScrollSection from '@/components/ui/ScrollSection';
import { FESTIVAL } from '@/lib/content';

const infoSections = [
  {
    id: 'getting-there',
    title: 'Getting There',
    icon: '✈️',
    items: [
      {
        title: 'By Air',
        content: 'The nearest airports are Podgorica Airport (TGD, ~2h drive) and Tivat Airport (TIV, ~3h drive). From Albania, Tirana International Airport (TIA, ~2.5h drive) is another option.',
      },
      {
        title: 'By Car',
        content: 'Safari Beach is located on Velika Plaza, easily accessible by car. From Ulcinj center, it\'s about a 10-minute drive south along the coastal road.',
      },
      {
        title: 'By Bus',
        content: 'Regular bus connections run to Ulcinj from Podgorica, Budva, and other Montenegrin cities. From the Ulcinj bus station, taxis are available to Velika Plaza.',
      },
    ],
  },
  {
    id: 'parking',
    title: 'Parking',
    icon: '🅿️',
    items: [
      {
        title: 'On-Site Parking',
        content: 'Free parking is available near Safari Beach. Arrive early for the best spots as the area fills up quickly during peak hours.',
      },
      {
        title: 'Alternative Parking',
        content: 'Additional parking can be found along Velika Plaza. Consider carpooling to reduce your environmental footprint!',
      },
    ],
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    icon: '🏨',
    items: [
      {
        title: 'Ulcinj Town',
        content: 'The old town of Ulcinj offers a range of hotels, hostels, and apartments. It\'s about 10 minutes by car from the venue, with plenty of restaurants and nightlife options.',
      },
      {
        title: 'Velika Plaza Area',
        content: 'Several beachfront hotels and guesthouses are located along Velika Plaza, within walking distance of Safari Beach. Book early as summer is peak season!',
      },
      {
        title: 'Ada Bojana',
        content: 'The nearby island of Ada Bojana offers a unique accommodation experience with bungalows and naturist resort options, just a few minutes from the venue.',
      },
    ],
  },
  {
    id: 'what-to-bring',
    title: 'What to Bring',
    icon: '🎒',
    items: [
      {
        title: 'Essentials',
        content: 'Sunscreen, comfortable shoes/sandals, a light jacket for the evening, cash (some vendors may not accept cards), and a reusable water bottle.',
      },
      {
        title: 'Beach Vibes',
        content: 'Swimsuit, towel, and sunglasses. The festival is right on the beach, so you can take a dip between sets!',
      },
    ],
  },
];

export default function InfoPage() {
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
            PRACTICAL <span className="gradient-text">INFO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Everything you need to know for your trip to Dancing For The Dogs 2026.
          </motion.p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Date', value: 'June 13, 2026' },
              { label: 'Time', value: '16:00 – 06:00' },
              { label: 'Venue', value: 'Safari Beach' },
              { label: 'Location', value: 'Ulcinj, Montenegro' },
            ].map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>{fact.label}</p>
                <p className="text-lg font-black" style={{ color: 'var(--accent-primary)' }}>{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollSection>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d19.2856!3d41.8989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135498e1c5765c9d%3A0x6c0e47e87e2a4e8a!2sSafari%20Beach!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Safari Beach, Ulcinj location"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black">{FESTIVAL.location.venue}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {FESTIVAL.location.area}, {FESTIVAL.location.city}, {FESTIVAL.location.country}
                  </p>
                </div>
                <a
                  href={FESTIVAL.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-sticker"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Info Sections */}
      {infoSections.map((section, sIdx) => (
        <section
          key={section.id}
          className="py-20 px-4"
          style={{ background: sIdx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}
        >
          <div className="max-w-5xl mx-auto">
            <ScrollSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.title.toUpperCase()}
                </h2>
              </div>
            </ScrollSection>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <ScrollSection key={item.title} delay={i * 0.1}>
                  <div className="glass-card p-6 rounded-xl h-full">
                    <h3 className="text-lg font-black mb-3" style={{ color: 'var(--accent-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.content}
                    </p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-24 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black" style={{ fontFamily: 'var(--font-heading)' }}>
                FREQUENTLY ASKED <span className="gradient-text">QUESTIONS</span>
              </h2>
            </div>
          </ScrollSection>

          <div className="space-y-4">
            {[
              { q: 'Is the festival suitable for children?', a: 'The festival is primarily aimed at adults. Please use your own judgement regarding younger attendees.' },
              { q: 'Can I bring my dog?', a: 'While we love dogs, for safety reasons during a large music event, we recommend leaving your furry friends at home or with a sitter.' },
              { q: 'Will there be food and drinks?', a: 'Yes! Safari Beach Restaurant will be open throughout the event, serving food and drinks.' },
              { q: 'Is there an ATM nearby?', a: 'The nearest ATMs are in Ulcinj town center. We recommend bringing some cash as not all vendors may accept cards.' },
              { q: 'What currency is used?', a: 'Montenegro uses the Euro (\u20AC) as its official currency.' },
              { q: 'Is the venue accessible?', a: 'The festival takes place on a sandy beach. We do our best to accommodate all guests \u2014 please contact us in advance if you have specific accessibility needs.' },
            ].map((faq, i) => (
              <ScrollSection key={i} delay={i * 0.05}>
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
