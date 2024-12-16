'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import BlurImage from '@/components/BlurImage';

const content = {
  en: {
    title: 'Residential Construction',
    subtitle: 'Building Your Dream Home',
    description:
      'We specialize in creating luxurious residential spaces that combine elegant design with superior craftsmanship. From custom homes to high-end residential developments, we bring your vision to life.',
    features: [
      {
        title: 'Custom Home Design',
        description:
          'Personalized architectural designs that reflect your unique style and preferences.',
        icon: '🏠',
      },
      {
        title: 'Smart Home Integration',
        description:
          'Modern home automation systems for comfort, security, and energy efficiency.',
        icon: '🔌',
      },
      {
        title: 'Luxury Finishes',
        description:
          'Premium materials and expert craftsmanship for an exceptional finish.',
        icon: '✨',
      },
      {
        title: 'Sustainable Building',
        description:
          'Eco-friendly construction methods and energy-efficient solutions.',
        icon: '🌱',
      },
    ],
    services: [
      {
        title: 'Custom Home Construction',
        description:
          'Build your dream home from the ground up with our expert team.',
        image: '/images/services/custom-home.jpg',
      },
      {
        title: 'Home Renovation',
        description:
          'Transform your existing space into the home you"ve always wanted.',
        image: '/images/services/renovation.jpg',
      },
      {
        title: 'Interior Design',
        description:
          'Create stunning interiors that reflect your personal style.',
        image: '/images/services/interior.jpg',
      },
      {
        title: 'Landscape Design',
        description:
          'Complete your dream home with beautiful outdoor living spaces.',
        image: '/images/services/landscape.jpg',
      },
    ],
    process: [
      {
        title: 'Initial Consultation',
        description:
          'We meet to discuss your vision, requirements, and budget.',
      },
      {
        title: 'Design Development',
        description:
          'Our architects create detailed plans and 3D visualizations.',
      },
      {
        title: 'Construction',
        description:
          'Expert execution with regular updates and quality checks.',
      },
      {
        title: 'Final Delivery',
        description:
          'Thorough inspection and handover of your dream home.',
      },
    ],
  },
  ar: {
    title: 'البناء السكني',
    subtitle: 'نبني منزل أحلامك',
    description:
      'نحن متخصصون في إنشاء المساحات السكنية الفاخرة التي تجمع بين التصميم الأنيق والحرفية المتفوقة. من المنازل المخصصة إلى المشاريع السكنية الراقية، نحول رؤيتك إلى واقع.',
    features: [
      {
        title: 'تصميم منزل مخصص',
        description:
          'تصاميم معمارية مخصصة تعكس أسلوبك وتفضيلاتك الفريدة.',
        icon: '🏠',
      },
      {
        title: 'دمج المنزل الذكي',
        description:
          'أنظمة منزلية آلية حديثة للراحة والأمان وكفاءة الطاقة.',
        icon: '🔌',
      },
      {
        title: 'تشطيبات فاخرة',
        description:
          'مواد متميزة وحرفية خبيرة لتشطيب استثنائي.',
        icon: '✨',
      },
      {
        title: 'بناء مستدام',
        description:
          'طرق بناء صديقة للبيئة وحلول موفرة للطاقة.',
        icon: '🌱',
      },
    ],
    services: [
      {
        title: 'بناء منزل مخصص',
        description:
          'ابنِ منزل أحلامك من الصفر مع فريقنا الخبير.',
        image: '/images/services/custom-home.jpg',
      },
      {
        title: 'تجديد المنزل',
        description:
          'حول مساحتك الحالية إلى المنزل الذي طالما حلمت به.',
        image: '/images/services/renovation.jpg',
      },
      {
        title: 'التصميم الداخلي',
        description:
          'إنشاء تصاميم داخلية مذهلة تعكس أسلوبك الشخصي.',
        image: '/images/services/interior.jpg',
      },
      {
        title: 'تصميم المناظر الطبيعية',
        description:
          'أكمل منزل أحلامك بمساحات معيشة خارجية جميلة.',
        image: '/images/services/landscape.jpg',
      },
    ],
    process: [
      {
        title: 'الاستشارة الأولية',
        description:
          'نلتقي لمناقشة رؤيتك ومتطلباتك وميزانيتك.',
      },
      {
        title: 'تطوير التصميم',
        description:
          'يقوم مهندسونا المعماريون بإنشاء مخططات تفصيلية وتصورات ثلاثية الأبعاد.',
      },
      {
        title: 'البناء',
        description:
          'تنفيذ خبير مع تحديثات منتظمة وفحوصات الجودة.',
      },
      {
        title: 'التسليم النهائي',
        description:
          'فحص شامل وتسليم منزل أحلامك.',
      },
    ],
  },
};

type ContentType = typeof content;
type SupportedLanguage = keyof ContentType;

export default function ResidentialPage() {
  const { language } = useLanguage();
  // Ensure we only use supported languages
  const currentLanguage = (Object.keys(content).includes(language) ? language : 'en') as SupportedLanguage;
  const t = content[currentLanguage];

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <BlurImage
          src="/images/services/residential-hero.jpg"
          alt="Residential Construction"
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-center text-charcoal dark:text-pearl max-w-4xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-pearl dark:bg-charcoal"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light dark:text-pearl-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[400px] rounded-xl overflow-hidden"
              >
                <BlurImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-pearl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-pearl/90">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-royal dark:text-gold text-center mb-16"
          >
            {language === 'en' ? 'Our Process' : 'عمليتنا'}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-royal dark:bg-gold text-pearl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-royal dark:text-gold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light dark:text-pearl-dark">
                    {step.description}
                  </p>
                </div>
                {index < t.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-royal/20 dark:bg-gold/20 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-royal dark:text-gold mb-8">
              {language === 'en'
                ? 'Ready to Start Your Project?'
                : 'هل أنت مستعد لبدء مشروعك؟'}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors"
            >
              {language === 'en' ? 'Contact Us Today' : 'اتصل بنا اليوم'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
