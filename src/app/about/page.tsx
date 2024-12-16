'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BlurImage from '@/components/BlurImage';

const content = {
  en: {
    title: 'About ZEESBO',
    subtitle: 'Building Dreams, Delivering Excellence',
    description: [
      'ZEESBO is a leading luxury construction company with over two decades of experience in creating exceptional spaces that blend sophistication with functionality.',
      'Our commitment to excellence, attention to detail, and innovative approach has established us as a trusted name in the construction industry.',
    ],
    values: [
      {
        title: 'Excellence',
        description: 'We pursue perfection in every detail of our work.',
        icon: '⭐',
      },
      {
        title: 'Innovation',
        description: 'We embrace cutting-edge technologies and methodologies.',
        icon: '💡',
      },
      {
        title: 'Sustainability',
        description: 'We prioritize eco-friendly practices in all our projects.',
        icon: '🌱',
      },
      {
        title: 'Integrity',
        description: 'We maintain the highest standards of professional ethics.',
        icon: '🤝',
      },
    ],
    stats: [
      { value: '20+', label: 'Years of Experience' },
      { value: '500+', label: 'Projects Completed' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '250+', label: 'Team Members' },
    ],
  },
  ar: {
    title: 'عن زيسبو',
    subtitle: 'نبني الأحلام، نقدم التميز',
    description: [
      'زيسبو هي شركة بناء فاخرة رائدة تتمتع بخبرة تزيد عن عقدين في إنشاء مساحات استثنائية تمزج بين الرقي والوظائفية.',
      'التزامنا بالتميز والاهتمام بالتفاصيل ونهجنا المبتكر جعلنا اسماً موثوقاً به في صناعة البناء.',
    ],
    values: [
      {
        title: 'التميز',
        description: 'نسعى للكمال في كل تفصيل من عملنا.',
        icon: '⭐',
      },
      {
        title: 'الابتكار',
        description: 'نتبنى أحدث التقنيات والمنهجيات.',
        icon: '💡',
      },
      {
        title: 'الاستدامة',
        description: 'نعطي الأولوية للممارسات الصديقة للبيئة في جميع مشاريعنا.',
        icon: '🌱',
      },
      {
        title: 'النزاهة',
        description: 'نحافظ على أعلى معايير الأخلاق المهنية.',
        icon: '🤝',
      },
    ],
    stats: [
      { value: '+20', label: 'سنوات من الخبرة' },
      { value: '+500', label: 'مشروع مكتمل' },
      { value: '100%', label: 'رضا العملاء' },
      { value: '+250', label: 'عضو في الفريق' },
    ],
  },
};

type ContentType = typeof content;
type SupportedLanguage = keyof ContentType;

export default function AboutPage() {
  const { language } = useLanguage();
  // Ensure we only use supported languages
  const currentLanguage = (Object.keys(content).includes(language) ? language : 'en') as SupportedLanguage;
  const t = content[currentLanguage];

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <BlurImage
          src="/images/about-hero.jpg"
          alt="ZEESBO Construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-pearl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl md:text-2xl text-pearl/90">{t.subtitle}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="prose dark:prose-invert max-w-none">
                {t.description.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <BlurImage
                src="/images/about-office.jpg"
                alt="ZEESBO Office"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-royal dark:text-gold mb-4">
              {language === 'en' ? 'Our Values' : 'قيمنا'}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pearl dark:bg-charcoal p-6 rounded-xl"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-light dark:text-pearl-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-royal dark:text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-charcoal-light dark:text-pearl-dark">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
