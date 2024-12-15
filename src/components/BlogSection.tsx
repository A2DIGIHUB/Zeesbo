'use client';

import { motion } from 'framer-motion';
import BlurImage from './BlurImage';
import { useLanguage } from '@/context/LanguageContext';

const blogPosts = [
  {
    id: 1,
    title: {
      en: 'The Future of Sustainable Construction',
      ar: 'مستقبل البناء المستدام'
    },
    excerpt: {
      en: 'Exploring innovative eco-friendly building practices and materials',
      ar: 'استكشاف ممارسات ومواد البناء الصديقة للبيئة المبتكرة'
    },
    image: '/images/blog/sustainable.jpg',
    date: '2023-12-15'
  },
  {
    id: 2,
    title: {
      en: 'Smart Buildings: The New Standard',
      ar: 'المباني الذكية: المعيار الجديد'
    },
    excerpt: {
      en: 'How IoT and automation are revolutionizing construction',
      ar: 'كيف تغير إنترنت الأشياء والأتمتة صناعة البناء'
    },
    image: '/images/blog/smart-building.jpg',
    date: '2023-12-10'
  },
  {
    id: 3,
    title: {
      en: 'Luxury Design Trends 2024',
      ar: 'اتجاهات التصميم الفاخر 2024'
    },
    excerpt: {
      en: 'The latest trends in high-end residential construction',
      ar: 'أحدث اتجاهات البناء السكني الفاخر'
    },
    image: '/images/blog/luxury-trends.jpg',
    date: '2023-12-05'
  }
];

export default function BlogSection() {
  const { language } = useLanguage();
  const dateLocale = language === 'ar' ? 'ar-SA' : 'en-US';
  const readMoreText = language === 'ar' ? 'اقرأ المزيد ←' : 'Read More →';

  return (
    <section id="blog" className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-royal mb-4 font-bold">
            Latest <span className="text-gold">Insights</span>
          </h2>
          <p className="text-charcoal-light max-w-3xl mx-auto">
            Stay updated with the latest trends and innovations in construction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-48">
                <BlurImage
                  src={post.image}
                  alt={post.title[language] || post.title.en}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-charcoal-light">
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h3 className="text-xl font-bold text-royal mt-2 mb-3">
                  {post.title[language] || post.title.en}
                </h3>
                <p className="text-charcoal-light mb-4">
                  {post.excerpt[language] || post.excerpt.en}
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-gold hover:text-gold-light transition-colors font-semibold"
                >
                  {readMoreText}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
