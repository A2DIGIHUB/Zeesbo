'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const placeholder = language === 'ar' ? 'ابحث في المدونة...' : 'Search blog posts...';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto mb-12"
    >
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 bg-white dark:bg-charcoal-light rounded-full shadow-lg focus:ring-2 focus:ring-gold dark:focus:ring-gold-light outline-none text-charcoal dark:text-pearl placeholder-charcoal-light dark:placeholder-pearl-dark"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-6 flex items-center text-charcoal-light dark:text-pearl-dark hover:text-gold dark:hover:text-gold-light transition-colors"
          style={{ left: language === 'ar' ? '0' : 'auto', right: language === 'ar' ? 'auto' : '0' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </motion.div>
  );
}
