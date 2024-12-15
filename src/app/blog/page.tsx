'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/data/blog';
import BlurImage from '@/components/BlurImage';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import { useState, useMemo } from 'react';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category[language]))
  );

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by category
    if (selectedCategory) {
      posts = posts.filter(
        (post) => post.category[language] === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title[language].toLowerCase().includes(query) ||
          post.excerpt[language].toLowerCase().includes(query) ||
          post.content[language].toLowerCase().includes(query)
      );
    }

    return posts;
  }, [searchQuery, selectedCategory, language]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal dark:text-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-royal dark:text-gold mb-4">
            {language === 'en' ? 'Our Blog' : 'مدونتنا'}
          </h1>
          <p className="text-charcoal-light dark:text-pearl-dark max-w-3xl mx-auto">
            {language === 'en'
              ? 'Stay updated with the latest insights in construction and design'
              : 'ابق على اطلاع بأحدث رؤى البناء والتصميم'}
          </p>
        </motion.div>

        <SearchBar onSearch={handleSearch} />

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-royal dark:bg-gold text-pearl'
                : 'bg-charcoal/10 dark:bg-pearl/10 hover:bg-charcoal/20 dark:hover:bg-pearl/20'
            }`}
          >
            {language === 'en' ? 'All' : 'الكل'}
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-royal dark:bg-gold text-pearl'
                  : 'bg-charcoal/10 dark:bg-pearl/10 hover:bg-charcoal/20 dark:hover:bg-pearl/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {currentPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-charcoal-light dark:text-pearl-dark">
              {language === 'en'
                ? 'No posts found matching your criteria.'
                : 'لم يتم العثور على مقالات تطابق معايير البحث.'}
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-charcoal-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48">
                    <BlurImage
                      src={post.image}
                      alt={post.title[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <BlurImage
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-royal dark:text-gold">
                          {post.author.name}
                        </p>
                        <time className="text-sm text-charcoal-light dark:text-pearl-dark">
                          {new Date(post.date).toLocaleDateString(
                            language === 'ar' ? 'ar-SA' : 'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </time>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-royal dark:text-gold mb-2">
                      {post.title[language]}
                    </h2>
                    <p className="text-charcoal-light dark:text-pearl-dark mb-4">
                      {post.excerpt[language]}
                    </p>
                    <span className="text-gold dark:text-pearl hover:text-gold-light dark:hover:text-pearl-light transition-colors font-semibold">
                      {language === 'ar' ? 'اقرأ المزيد ←' : 'Read More →'}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </main>
  );
}
