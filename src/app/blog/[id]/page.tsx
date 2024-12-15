'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { blogPosts } from '@/data/blog';
import BlurImage from '@/components/BlurImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';
import Comments from '@/components/Comments';

export default function BlogPost({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category[language] === post.category[language])
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-pearl dark:bg-charcoal dark:text-pearl">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="text-gold dark:text-pearl hover:text-gold-light dark:hover:text-pearl-light transition-colors mb-8 inline-block"
          >
            ← {language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
          </Link>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <BlurImage
              src={post.image}
              alt={post.title[language]}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <BlurImage
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-royal dark:text-gold">
                {post.author.name}
              </p>
              <time className="text-charcoal-light dark:text-pearl-dark">
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

          <h1 className="text-4xl md:text-5xl font-bold text-royal dark:text-gold mb-4">
            {post.title[language]}
          </h1>

          <span className="inline-block px-4 py-2 rounded-full bg-royal dark:bg-gold text-pearl text-sm mb-8">
            {post.category[language]}
          </span>

          <div className="prose dark:prose-invert max-w-none">
            {post.content[language].split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph.startsWith('- ') ? (
                  <ul className="list-disc list-inside">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          <SocialShare
            url={typeof window !== 'undefined' ? window.location.href : ''}
            title={post.title[language]}
          />
        </motion.div>

        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 border-t border-charcoal/10 dark:border-pearl/10 pt-16"
          >
            <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
              {language === 'ar' ? 'مقالات ذات صلة' : 'Related Posts'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <BlurImage
                      src={relatedPost.image}
                      alt={relatedPost.title[language]}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-royal dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light transition-colors">
                    {relatedPost.title[language]}
                  </h3>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        <Comments postId={post.id} />
      </article>
    </main>
  );
}
