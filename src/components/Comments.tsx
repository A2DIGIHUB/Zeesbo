'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface Comment {
  id: number;
  name: string;
  content: string;
  date: string;
  replies?: Comment[];
}

interface CommentsProps {
  postId: number;
}

export default function Comments({ postId }: CommentsProps) {
  const { language } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: 'John Doe',
      content: 'Great article! Very informative.',
      date: '2023-12-15',
      replies: [
        {
          id: 2,
          name: 'Jane Smith',
          content: 'I agree, the insights are very valuable.',
          date: '2023-12-15',
        },
      ],
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      name: 'Guest User', // In a real app, this would come from authentication
      content: newComment,
      date: new Date().toISOString().split('T')[0],
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      name: 'Guest User',
      content: replyContent,
      date: new Date().toISOString().split('T')[0],
    };

    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply],
          };
        }
        return comment;
      })
    );

    setReplyContent('');
    setReplyTo(null);
  };

  return (
    <section className="mt-16 border-t border-charcoal/10 dark:border-pearl/10 pt-16">
      <h2 className="text-3xl font-bold text-royal dark:text-gold mb-8">
        {language === 'ar' ? 'التعليقات' : 'Comments'}
      </h2>

      <form onSubmit={handleSubmitComment} className="mb-12">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={
            language === 'ar' ? 'اكتب تعليقك هنا...' : 'Write your comment here...'
          }
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-charcoal-light border border-charcoal/10 dark:border-pearl/10 focus:ring-2 focus:ring-gold dark:focus:ring-gold-light outline-none text-charcoal dark:text-pearl resize-none min-h-[100px]"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 px-6 py-2 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors"
        >
          {language === 'ar' ? 'إرسال التعليق' : 'Post Comment'}
        </motion.button>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-charcoal-light rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-royal dark:text-gold">
                  {comment.name}
                </h3>
                <time className="text-sm text-charcoal-light dark:text-pearl-dark">
                  {new Date(comment.date).toLocaleDateString(
                    language === 'ar' ? 'ar-SA' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </time>
              </div>
              <button
                onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                className="text-gold dark:text-pearl hover:text-gold-light dark:hover:text-pearl-light transition-colors"
              >
                {language === 'ar' ? 'رد' : 'Reply'}
              </button>
            </div>

            <p className="text-charcoal dark:text-pearl mb-4">{comment.content}</p>

            <AnimatePresence>
              {replyTo === comment.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder={
                      language === 'ar'
                        ? 'اكتب ردك هنا...'
                        : 'Write your reply here...'
                    }
                    className="w-full px-4 py-3 rounded-lg bg-pearl dark:bg-charcoal border border-charcoal/10 dark:border-pearl/10 focus:ring-2 focus:ring-gold dark:focus:ring-gold-light outline-none text-charcoal dark:text-pearl resize-none min-h-[80px]"
                    dir={language === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <motion.button
                    onClick={() => handleSubmitReply(comment.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 px-4 py-2 bg-royal dark:bg-gold text-pearl rounded-lg hover:bg-royal-light dark:hover:bg-gold-light transition-colors text-sm"
                  >
                    {language === 'ar' ? 'إرسال الرد' : 'Post Reply'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-4 space-y-4 pl-6 border-l-2 border-charcoal/10 dark:border-pearl/10">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-pearl/50 dark:bg-charcoal/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-royal dark:text-gold">
                          {reply.name}
                        </h4>
                        <time className="text-sm text-charcoal-light dark:text-pearl-dark">
                          {new Date(reply.date).toLocaleDateString(
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
                    <p className="text-charcoal dark:text-pearl">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
