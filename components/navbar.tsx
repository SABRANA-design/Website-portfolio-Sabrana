'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';

type Props = {
  language: 'id' | 'en';
  setLanguage: (lang: 'id' | 'en') => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
};

export default function Navbar({ language, setLanguage, theme, setTheme }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'id' ? 'en' : 'id';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/30 backdrop-blur-md border-b border-border shadow-sm'
        : 'bg-background/30 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-20 h-10 flex items-center">
              <img
                src="/logo_sabrana.png"
                alt="Logo"
                className="h-10 object-contain hover:scale-110 transition duration-300"
              />
            </div>
            <span className="font-bold text-foreground text-xl hidden sm:inline group-hover:text-primary transition-colors">
              SABRANA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {language === 'id' ? 'Portfolio' : 'Portfolio'}
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {language === 'id' ? 'Layanan' : 'Services'}
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {language === 'id' ? 'Harga' : 'Pricing'}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              {language === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              title={language === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia'}
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
