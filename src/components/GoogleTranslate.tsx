'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Initialize Google Translate
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    // Callback function required by Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,en,es,fr,ja,ko,ru,zh-CN', // Add or remove languages as needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Add the script only if it hasn't been added yet
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addScript();
    }

    // Cleanup
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="translate-widget">
      <div
        id="google_translate_element"
        className="goog-te-gadget"
      />
      <style jsx global>{`
        /* Hide Google Translate attribution */
        .goog-te-gadget {
          color: transparent !important;
          font-size: 0 !important;
        }

        .goog-te-gadget span {
          display: none !important;
        }

        .goog-te-gadget select {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          color: #1a202c;
          cursor: pointer;
          font-size: 0.875rem;
          line-height: 1.25rem;
          padding: 0.5rem 2rem 0.5rem 0.75rem;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
        }

        /* Dark mode styles */
        .dark .goog-te-gadget select {
          background-color: #1a202c;
          border-color: #4a5568;
          color: #e2e8f0;
        }

        .goog-te-gadget select:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        /* Responsive styles */
        @media (max-width: 640px) {
          .goog-te-gadget select {
            font-size: 0.75rem;
            padding: 0.375rem 1.75rem 0.375rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
