'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, EVENT } from '@/lib/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/dftd_logo.png"
              alt={EVENT.shortName}
              width={120}
              height={80}
              className="transition-all duration-300"
              style={{ height: scrolled ? '36px' : '48px', width: 'auto' }}
              priority
            />
            <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: 'var(--accent-primary)', color: 'var(--bg-primary)' }}>
              &apos;{String(EVENT.year).slice(2)}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors hover:opacity-100"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Follow CTA (desktop only — wrapper controls visibility so .cta-sticker's
              own display rule doesn't override Tailwind's `hidden`) */}
          <span className="hidden md:inline-block">
            <a
              href={EVENT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-sticker !py-2 !px-4 !text-sm !rotate-0 hover:!-rotate-2"
            >
              Follow Us
            </a>
          </span>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 px-6 pb-6 flex flex-col gap-2"
            style={{ background: 'var(--bg-primary)' }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-2xl font-bold py-3 border-b"
                  style={{
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-sticker block text-center !text-lg"
              >
                Follow Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
