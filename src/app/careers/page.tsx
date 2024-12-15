'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BlurImage from '@/components/BlurImage';

const content = {
  en: {
    title: 'Join Our Team',
    subtitle: 'Build Your Career with ZEESBO',
    description:
      'We are always looking for talented individuals who share our passion for excellence in construction. Join us in creating exceptional spaces and shaping the future of luxury construction.',
    benefits: [
      {
        title: 'Professional Growth',
        description: 'Continuous learning and development opportunities',
        icon: '📚',
      },
      {
        title: 'Work-Life Balance',
        description: 'Flexible working hours and remote work options',
        icon: '⚖️',
      },
      {
        title: 'Competitive Package',
        description: 'Excellent salary and comprehensive benefits',
        icon: '💰',
      },
      {
        title: 'Global Projects',
        description: 'Work on prestigious international projects',
        icon: '🌍',
      },
    ],
    positions: [
      {
        title: 'Senior Project Manager',
        department: 'Project Management',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description:
          'Lead and oversee large-scale construction projects from inception to completion.',
        requirements: [
          '10+ years of experience in construction project management',
          "Bachelor's degree in Civil Engineering or related field",
          'PMP certification preferred',
          'Strong leadership and communication skills',
        ],
      },
      {
        title: 'Architectural Designer',
        department: 'Design',
        location: 'Abu Dhabi, UAE',
        type: 'Full-time',
        description:
          'Create innovative architectural designs for luxury residential and commercial projects.',
        requirements: [
          "Master's degree in Architecture",
          '5+ years of experience in luxury architectural design',
          'Proficiency in AutoCAD, Revit, and 3D modeling software',
          'Strong portfolio demonstrating creative design solutions',
        ],
      },
      {
        title: 'Construction Site Engineer',
        department: 'Construction',
        location: 'Dubai, UAE',
        type: 'Full-time',
        description:
          'Supervise construction activities and ensure quality standards are met.',
        requirements: [
          "Bachelor's degree in Civil Engineering",
          '3+ years of site supervision experience',
          'Knowledge of construction methods and safety regulations',
          'Strong problem-solving abilities',
        ],
      },
    ],
  },
  ar: {
    title: 'انضم إلى فريقنا',
    subtitle: 'ابنِ مستقبلك المهني مع زيسبو',
    description:
      'نحن دائماً نبحث عن أفراد موهوبين يشاركوننا شغفنا بالتميز في البناء. انضم إلينا في إنشاء مساحات استثنائية وتشكيل مستقبل البناء الفاخر.',
    benefits: [
      {
        title: 'النمو المهني',
        description: 'فرص مستمرة للتعلم والتطوير',
        icon: '📚',
      },
      {
        title: 'التوازن بين العمل والحياة',
        description: 'ساعات عمل مرنة وخيارات العمل عن بعد',
        icon: '⚖️',
      },
      {
        title: 'حزمة تنافسية',
        description: 'راتب ممتاز ومزايا شاملة',
        icon: '💰',
      },
      {
        title: 'مشاريع عالمية',
        description: 'العمل على مشاريع دولية مرموقة',
        icon: '🌍',
      },
    ],
    positions: [
      {
        title: 'مدير مشروع أول',
        department: 'إدارة المشاريع',
        location: 'دبي، الإمارات',
        type: 'دوام كامل',
        description:
          'قيادة والإشراف على مشاريع البناء واسعة النطاق من البداية إلى النهاية.',
        requirements: [
          '10+ سنوات خبرة في إدارة مشاريع البناء',
          'بكالوريوس في الهندسة المدنية أو مجال ذي صلة',
          'يفضل شهادة PMP',
          'مهارات قيادية وتواصل قوية',
        ],
      },
      {
        title: 'مصمم معماري',
        department: 'التصميم',
        location: 'أبوظبي، الإمارات',
        type: 'دوام كامل',
        description:
          'إنشاء تصاميم معمارية مبتكرة للمشاريع السكنية والتجارية الفاخرة.',
        requirements: [
          'ماجستير في العمارة',
          '5+ سنوات خبرة في التصميم المعماري الفاخر',
          'إتقان AutoCAD وRevit وبرامج النمذجة ثلاثية الأبعاد',
          'محفظة قوية تظهر حلول التصميم الإبداعية',
        ],
      },
      {
        title: 'مهندس موقع إنشاءات',
        department: 'البناء',
        location: 'دبي، الإمارات',
        type: 'دوام كامل',
        description:
          'الإشراف على أنشطة البناء وضمان تلبية معايير الجودة.',
        requirements: [
          'بكالوريوس في الهندسة المدنية',
          '3+ سنوات خبرة في الإشراف على المواقع',
          'معرفة بأساليب البناء ولوائح السلامة',
          'قدرات قوية في حل المشكلات',
        ],
      },
    ],
  },
};

export default function CareersPage() {
  const { language } = useLanguage();
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const t = content[language];

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[500px]">
        <BlurImage
          src="/images/careers-hero.jpg"
          alt="ZEESBO Careers"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-charcoal dark:text-pearl max-w-3xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-royal dark:text-gold text-center mb-16"
          >
            {language === 'en' ? 'Why Join Us?' : 'لماذا تنضم إلينا؟'}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-light dark:text-pearl-dark">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-royal dark:text-gold text-center mb-16"
          >
            {language === 'en' ? 'Open Positions' : 'الوظائف المتاحة'}
          </motion.h2>
          <div className="space-y-6">
            {t.positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-charcoal-light rounded-xl overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setSelectedPosition(selectedPosition === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-light dark:text-pearl-dark">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <button className="text-royal dark:text-gold">
                      {selectedPosition === index ? '−' : '+'}
                    </button>
                  </div>
                  {selectedPosition === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6"
                    >
                      <p className="text-charcoal dark:text-pearl mb-4">
                        {position.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-royal dark:text-gold">
                          {language === 'en'
                            ? 'Requirements:'
                            : 'المتطلبات:'}
                        </h4>
                        <ul className="list-disc list-inside text-charcoal-light dark:text-pearl-dark">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-2 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors"
                      >
                        {language === 'en' ? 'Apply Now' : 'قدم الآن'}
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
