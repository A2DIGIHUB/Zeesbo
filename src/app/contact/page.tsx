'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  en: {
    title: 'Contact Us',
    subtitle: "Let's Build Something Amazing Together",
    description:
      "Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.",
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      button: 'Send Message',
    },
    office: {
      title: 'Our Office',
      address: 'Enugu State, Nigeria',
      email: 'info@zeesbo.com',
      phone: '+234 XXX XXX XXXX',
    },
    map: {
      title: 'Find Us',
    },
  },
  ar: {
    title: 'اتصل بنا',
    subtitle: 'لنبني معاً مشروعاً استثنائياً',
    description:
      'هل لديك مشروع في ذهنك؟ نحن نتطلع للاستماع إلى أفكارك. راسلنا وسنرد عليك في أقرب وقت ممكن.',
    form: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      message: 'الرسالة',
      button: 'إرسال الرسالة',
    },
    office: {
      title: 'مكتبنا',
      address: 'ولاية إينوغو، نيجيريا',
      email: 'info@zeesbo.com',
      phone: '+234 XXX XXX XXXX',
    },
    map: {
      title: 'موقعنا',
    },
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success message or handle errors
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`min-h-screen bg-pearl dark:bg-charcoal ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-royal to-royal-dark dark:from-charcoal-dark dark:to-charcoal">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t.title}
            </h1>
            <p className={`text-xl md:text-2xl text-pearl-dark max-w-2xl ${isRTL ? 'font-arabic' : ''}`}>
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className={`text-lg text-gray-600 dark:text-gray-300 mb-8 ${isRTL ? 'font-arabic' : ''}`}>
              {t.description}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light ${isRTL ? 'font-arabic text-right' : ''}`}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light ${isRTL ? 'font-arabic text-right' : ''}`}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light ${isRTL ? 'font-arabic text-right' : ''}`}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                    className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light ${isRTL ? 'font-arabic text-right' : ''}`}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${isRTL ? 'font-arabic' : ''}`}
                >
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  dir={isRTL ? 'rtl' : 'ltr'}
                  className={`block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light ${isRTL ? 'font-arabic text-right' : ''}`}
                  onChange={handleInputChange}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3 bg-royal dark:bg-gold text-white rounded-md shadow-md hover:bg-royal-dark dark:hover:bg-gold-dark transition-colors ${isRTL ? 'font-arabic' : ''}`}
              >
                {t.form.button}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information and Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-charcoal-light rounded-lg shadow-md p-6">
              <h3 className={`text-xl font-semibold text-royal dark:text-gold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {t.office.title}
              </h3>
              <div className={`space-y-4 text-gray-600 dark:text-gray-300 ${isRTL ? 'font-arabic' : ''}`}>
                <p className="flex items-center">
                  <svg
                    className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'} text-royal dark:text-gold`}
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
                  {t.office.address}
                </p>
                <p className="flex items-center">
                  <svg
                    className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'} text-royal dark:text-gold`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${t.office.email}`}
                    className="hover:text-royal dark:hover:text-gold transition-colors"
                  >
                    {t.office.email}
                  </a>
                </p>
                <p className="flex items-center">
                  <svg
                    className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'} text-royal dark:text-gold`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${t.office.phone}`}
                    className="hover:text-royal dark:hover:text-gold transition-colors"
                  >
                    {t.office.phone}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-semibold text-royal dark:text-gold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                {t.map.title}
              </h3>
              <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126832.56949429858!2d7.433769582265108!3d6.452165844179066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3c5df385827%3A0xc6e2416c731c6346!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2s!4v1702669594974!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
