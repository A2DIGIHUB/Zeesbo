'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BlurImage from '@/components/BlurImage';

const projects = {
  en: {
    categories: [
      'All',
      'Residential',
      'Commercial',
      'Industrial',
      'Renovation',
    ],
    items: [
      {
        id: 1,
        title: 'Luxury Villa Complex',
        category: 'Residential',
        location: 'Palm Jumeirah, Dubai',
        description: 'A collection of 12 luxury villas featuring modern architecture and smart home technology.',
        image: '/images/projects/villa-complex.jpg',
      },
      {
        id: 2,
        title: 'Corporate Headquarters',
        category: 'Commercial',
        location: 'Business Bay, Dubai',
        description: 'A 40-story office tower with sustainable design and state-of-the-art facilities.',
        image: '/images/projects/corporate-hq.jpg',
      },
      {
        id: 3,
        title: 'Manufacturing Facility',
        category: 'Industrial',
        location: 'Industrial City, Abu Dhabi',
        description: 'Modern manufacturing plant with automated systems and eco-friendly features.',
        image: '/images/projects/manufacturing.jpg',
      },
      {
        id: 4,
        title: 'Heritage Hotel Renovation',
        category: 'Renovation',
        location: 'Old Dubai',
        description: 'Complete renovation of a historic hotel preserving traditional architecture.',
        image: '/images/projects/heritage-hotel.jpg',
      },
      // Add more projects as needed
    ],
  },
  ar: {
    categories: [
      'الكل',
      'سكني',
      'تجاري',
      'صناعي',
      'تجديد',
    ],
    items: [
      {
        id: 1,
        title: 'مجمع فلل فاخرة',
        category: 'سكني',
        location: 'نخلة جميرا، دبي',
        description: 'مجموعة من 12 فيلا فاخرة تتميز بالهندسة المعمارية الحديثة وتكنولوجيا المنزل الذكي.',
        image: '/images/projects/villa-complex.jpg',
      },
      {
        id: 2,
        title: 'المقر الرئيسي للشركة',
        category: 'تجاري',
        location: 'الخليج التجاري، دبي',
        description: 'برج مكاتب من 40 طابقاً بتصميم مستدام ومرافق حديثة.',
        image: '/images/projects/corporate-hq.jpg',
      },
      {
        id: 3,
        title: 'منشأة تصنيع',
        category: 'صناعي',
        location: 'المدينة الصناعية، أبوظبي',
        description: 'مصنع حديث مع أنظمة آلية وميزات صديقة للبيئة.',
        image: '/images/projects/manufacturing.jpg',
      },
      {
        id: 4,
        title: 'تجديد فندق تراثي',
        category: 'تجديد',
        location: 'دبي القديمة',
        description: 'تجديد كامل لفندق تاريخي مع الحفاظ على العمارة التقليدية.',
        image: '/images/projects/heritage-hotel.jpg',
      },
      // Add more projects as needed
    ],
  },
};

export default function ProjectsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const t = projects[language];

  const filteredProjects = t.items.filter(
    (project) =>
      selectedCategory === (language === 'en' ? 'All' : 'الكل') ||
      project.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <BlurImage
          src="/images/projects-hero.jpg"
          alt="ZEESBO Projects"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {language === 'en' ? 'Our Projects' : 'مشاريعنا'}
              </h1>
              <p className="text-xl md:text-2xl text-pearl/90">
                {language === 'en'
                  ? 'Discover our portfolio of exceptional projects'
                  : 'اكتشف محفظتنا من المشاريع الاستثنائية'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {t.categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-royal dark:bg-gold text-pearl'
                    : 'bg-pearl dark:bg-charcoal text-charcoal dark:text-pearl hover:bg-royal/10 dark:hover:bg-gold/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-charcoal-light rounded-xl overflow-hidden"
                >
                  <div className="relative h-64">
                    <BlurImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-royal/10 dark:bg-gold/10 text-royal dark:text-gold mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-light dark:text-pearl-dark mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-charcoal-light dark:text-pearl-dark">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
