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
  title: 'Dancing For The Dogs | Halloween Charity Disco Party | Ulcinj, Montenegro',
  description: 'A Halloween charity disco party on Safari Beach, Ulcinj, Montenegro. Saturday, October 31, 2026. Costume contest, raffle, and 100% of proceeds for the SOS Street Dog Project.',
  keywords: ['party', 'charity', 'Halloween', 'disco', 'Montenegro', 'Ulcinj', 'dogs', 'animal welfare', 'raffle'],
  openGraph: {
    title: 'Dancing For The Dogs',
    description: 'A Halloween charity disco party on the beach. Every euro for the dogs.',
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
