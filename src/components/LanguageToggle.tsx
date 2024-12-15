'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="p-2 rounded-full bg-charcoal/10 dark:bg-pearl/10 hover:bg-charcoal/20 dark:hover:bg-pearl/20 transition-colors ml-2"
      aria-label="Toggle language"
    >
      <span className="font-bold text-sm">
        {language === 'en' ? 'عربي' : 'EN'}
      </span>
    </motion.button>
  );
}
