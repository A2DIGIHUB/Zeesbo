import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleTranslate from '@/components/GoogleTranslate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zeesbo Construction',
  description: 'Building Excellence - Luxury Construction Company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
              <GoogleTranslate />
              <ThemeToggle />
            </div>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
