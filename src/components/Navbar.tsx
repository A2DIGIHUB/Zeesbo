'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const menuItems = {
  services: {
    en: {
      title: 'Services',
      items: [
        {
          title: 'Residential Construction',
          description: 'Luxury homes and residential developments',
          href: '/services/residential',
          icon: '🏠',
        },
        {
          title: 'Commercial Projects',
          description: 'Office buildings and retail spaces',
          href: '/services/commercial',
          icon: '🏢',
        },
        {
          title: 'Industrial Solutions',
          description: 'Manufacturing and warehouse facilities',
          href: '/services/industrial',
          icon: '🏭',
        },
        {
          title: 'Renovation',
          description: 'Modernization and restoration projects',
          href: '/services/renovation',
          icon: '🔨',
        },
      ],
    },
    ar: {
      title: 'خدماتنا',
      items: [
        {
          title: 'البناء السكني',
          description: 'منازل فاخرة ومشاريع سكنية',
          href: '/services/residential',
          icon: '🏠',
        },
        {
          title: 'المشاريع التجارية',
          description: 'مباني المكاتب والمساحات التجارية',
          href: '/services/commercial',
          icon: '🏢',
        },
        {
          title: 'الحلول الصناعية',
          description: 'مرافق التصنيع والمستودعات',
          href: '/services/industrial',
          icon: '🏭',
        },
        {
          title: 'التجديد',
          description: 'مشاريع التحديث والترميم',
          href: '/services/renovation',
          icon: '🔨',
        },
      ],
    },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: language === 'en' ? 'Home' : 'الرئيسية' },
    { href: '/about', label: language === 'en' ? 'About' : 'عن الشركة' },
    { href: '/projects', label: language === 'en' ? 'Projects' : 'المشاريع' },
    { href: '/blog', label: language === 'en' ? 'Blog' : 'المدونة' },
    { href: '/careers', label: language === 'en' ? 'Careers' : 'الوظائف' },
    { href: '/contact', label: language === 'en' ? 'Contact' : 'اتصل بنا' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-charcoal/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-royal dark:text-gold"
            >
              ZEESBO
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.href === '/services' ? (
                  <button
                    onMouseEnter={() => setOpenDropdown('services')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="text-charcoal dark:text-pearl hover:text-royal dark:hover:text-gold transition-colors"
                  >
                    {menuItems.services[language].title}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-charcoal dark:text-pearl hover:text-royal dark:hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Mega Menu for Services */}
                {link.href === '/services' && openDropdown === 'services' && (
                  <div
                    onMouseEnter={() => setOpenDropdown('services')}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 w-[600px] bg-white dark:bg-charcoal-light shadow-xl rounded-lg mt-2 p-6 grid grid-cols-2 gap-6"
                  >
                    {menuItems.services[language].items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start p-3 rounded-lg hover:bg-pearl/50 dark:hover:bg-charcoal/50 transition-colors"
                      >
                        <span className="text-2xl mr-4">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-royal dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light">
                            {item.title}
                          </h3>
                          <p className="text-sm text-charcoal-light dark:text-pearl-dark">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <ThemeToggle />
              <LanguageToggle />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors"
              >
                {language === 'en' ? 'Get a Quote' : 'احصل على عرض'}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-pearl dark:hover:bg-charcoal-light transition-colors"
          >
            <svg
              className="w-6 h-6 text-charcoal dark:text-pearl"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-charcoal border-t border-charcoal/10 dark:border-pearl/10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-charcoal dark:text-pearl hover:text-royal dark:hover:text-gold transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 rtl:space-x-reverse pt-4 border-t border-charcoal/10 dark:border-pearl/10">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors text-center"
                >
                  {language === 'en' ? 'Get a Quote' : 'احصل على عرض'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
