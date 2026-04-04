'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FESTIVAL, NAV_LINKS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8" style={{ background: 'var(--bg-secondary)' }}>
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 h-20 -translate-y-full" style={{ background: 'var(--bg-primary)' }}>
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full h-20" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg-secondary)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              {FESTIVAL.shortName}
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              {FESTIVAL.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={FESTIVAL.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--border-color)' }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="var(--accent-primary)" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={FESTIVAL.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--border-color)' }}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="var(--accent-primary)" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`mailto:${FESTIVAL.social.email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--border-color)' }}
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="var(--accent-primary)" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--accent-primary)' }}>
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--accent-primary)' }}>
              Event Details
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>June 13, 2026</li>
              <li>{FESTIVAL.times.doors} – {FESTIVAL.times.secondStageEnd}</li>
              <li>{FESTIVAL.location.venue}</li>
              <li>{FESTIVAL.location.area}, {FESTIVAL.location.city}</li>
              <li>{FESTIVAL.location.country}</li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--accent-primary)' }}>
              Partners
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>
                <a href={FESTIVAL.partners.danceForShelters.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Dance For Shelters
                </a>
              </li>
              <li>
                <a href={FESTIVAL.cause.title} className="hover:underline">
                  SOS Street Dog Project
                </a>
              </li>
              <li>
                <a href={FESTIVAL.partners.euProject.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {FESTIVAL.partners.euProject.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            &copy; {new Date().getFullYear()} {FESTIVAL.name}. All proceeds go to animal welfare.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Made with love for the dogs of Montenegro
          </p>
        </div>
      </div>
    </footer>
  );
}
