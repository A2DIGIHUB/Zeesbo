'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal dark:text-pearl flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-6xl font-bold text-royal dark:text-gold mb-4">404</h2>
          <h1 className="text-3xl font-bold text-royal dark:text-gold mb-4">
            {language === 'ar' ? 'المقال غير موجود' : 'Post Not Found'}
          </h1>
          <p className="text-charcoal-light dark:text-pearl-dark mb-8">
            {language === 'ar'
              ? 'عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.'
              : 'Sorry, we couldn't find the blog post you're looking for.'}
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors"
          >
            {language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
