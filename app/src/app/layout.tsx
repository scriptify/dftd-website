import type { Metadata } from 'next';
import { Geist, Geist_Mono, Permanent_Marker, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const displayFont = Permanent_Marker({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
});

const headingFont = Bebas_Neue({
  variable: '--font-heading',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dancing For The Dogs 2026 | Charity Music Festival | Ulcinj, Montenegro',
  description: 'Dance for a cause at DFTD 2026 - a charity electronic music festival on Safari Beach, Ulcinj, Montenegro. June 13, 2026. All proceeds support stray dog rescue.',
  keywords: ['festival', 'charity', 'electronic music', 'techno', 'Montenegro', 'Ulcinj', 'dogs', 'animal welfare'],
  openGraph: {
    title: 'Dancing For The Dogs 2026',
    description: 'Charity electronic music festival on the beach. Every beat saves a life.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
