'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/preloader';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import PortfolioSection from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  const [language, setLanguage] = useState('id');
  const [theme, setTheme] = useState('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load saved preferences
    const savedLanguage = localStorage.getItem('language') || 'id';
    const savedTheme = localStorage.getItem('theme') || 'dark';

    setLanguage(savedLanguage);
    setTheme(savedTheme);

    // Apply theme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    const style = document.createElement('style');
    style.textContent = `
      [data-animate] {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease-out forwards;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-in {
        animation: fadeInUp 0.6s ease-out forwards !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Preloader />
      <main className="bg-background text-foreground overflow-hidden">
        <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        <HeroSection language={language} />
        <AboutSection language={language} />
        <PortfolioSection language={language} />
        <ServicesSection language={language} />
        <PricingSection language={language} />
        <TestimonialsSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </main>
    </>
  );
}
