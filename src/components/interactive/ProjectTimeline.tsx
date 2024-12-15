'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

interface ProjectTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function ProjectTimeline({ items, className = '' }: ProjectTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      {/* Timeline items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12"
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-2.5 -translate-x-1/2 w-3 h-3 rounded-full ${
                item.status === 'completed'
                  ? 'bg-green-500'
                  : item.status === 'in-progress'
                  ? 'bg-blue-500'
                  : 'bg-gray-300'
              }`}
            />

            {/* Content */}
            <div className="bg-white dark:bg-charcoal rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-royal dark:text-gold">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.duration}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>

              {/* Status badge */}
              <div className="mt-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                    item.status === 'completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                      : item.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                  }`}
                >
                  {item.status === 'completed' && (
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {item.status === 'in-progress' && (
                    <svg
                      className="w-4 h-4 mr-1.5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  )}
                  {item.status === 'upcoming' && (
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
