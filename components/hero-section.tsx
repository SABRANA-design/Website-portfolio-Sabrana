'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  const [displayText, setDisplayText] = useState('');
  const fullText = language === 'id' ? 'Desain Kreatif untuk Brand Anda' : 'Creative Design for Your Brand';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [fullText, language]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 pt-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative blur elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 dark:opacity-30 animate-pulse" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
          <span className="text-sm font-medium">
            {language === 'id' ? '✨ Desainer Profesional' : '✨ Professional Designer'}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {language === 'id'
            ? 'Tingkatkan identitas visual brand Anda dengan desain profesional dan inovatif. Dari UI/UX hingga branding, kami siap mewujudkan visi Anda.'
            : 'Elevate your brand identity with professional and innovative design. From UI/UX to branding, we&apos;re ready to bring your vision to life.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
          >
            {language === 'id' ? 'Lihat Portfolio' : 'View Portfolio'}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary dark:text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-block"
          >
            {language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
}
