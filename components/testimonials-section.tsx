'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  language: 'id' | 'en';
};

export default function TestimonialsSection({ language }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: language === 'id' ? 'CEO Startup Tech' : 'CEO Tech Startup',
      avatar: '👨‍💼',
      content:
        language === 'id'
          ? 'Sabrana benar-benar mengubah cara kami melihat brand. Desainnya tidak hanya cantik, tetapi juga efektif meningkatkan engagement kami. Highly recommended!'
          : 'Sabrana really changed how we see our brand. The design is not only beautiful but also effectively increased our engagement. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Siti Nurhaliza',
      role: language === 'id' ? 'Founder Fashion Brand' : 'Fashion Brand Founder',
      avatar: '👩‍💼',
      content:
        language === 'id'
          ? 'Bekerja dengan Sabrana adalah pengalaman yang luar biasa. Profesional, kreatif, dan selalu memahami visi kami. Terima kasih telah membuat brand kami shine!'
          : 'Working with Sabrana was an amazing experience. Professional, creative, and always understood our vision. Thank you for making our brand shine!',
      rating: 5,
    },
    {
      name: 'Ahmad Rizki',
      role: language === 'id' ? 'Marketing Manager' : 'Marketing Manager',
      avatar: '👨‍💻',
      content:
        language === 'id'
          ? 'Tim Sabrana sangat responsif dan detail-oriented. Setiap feedback kami ditangani dengan baik. ROI dari investment design ini jauh melebihi ekspektasi kami.'
          : 'Sabrana\'s team is very responsive and detail-oriented. Every feedback was handled well. The ROI from this design investment far exceeded our expectations.',
      rating: 5,
    },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide setiap 4 detik

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play setelah 10 detik
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  // Drag handlers untuk mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragStart(e.clientX);
    setIsAutoPlay(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragEnd(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Swipe handlers untuk touch
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragStart(e.touches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Process drag/swipe
  const handleDragEnd = () => {
    if (dragStart === 0 && dragEnd === 0) return;

    const difference = dragStart - dragEnd;
    const threshold = 50; // Minimum drag distance

    if (Math.abs(difference) > threshold) {
      if (difference > 0) {
        // Swipe/drag ke kiri = next
        nextTestimonial();
      } else {
        // Swipe/drag ke kanan = prev
        prevTestimonial();
      }
    }

    setDragStart(0);
    setDragEnd(0);
    setTimeout(() => setIsAutoPlay(true), 1000);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
            <span className="text-sm font-medium">
              {language === 'id' ? 'Testimoni' : 'Testimonials'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {language === 'id' ? 'Klien Kami Berbicara' : 'Our Clients Speak'}
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {language === 'id'
              ? 'Dengarkan dari klien kami yang telah merasakan transformasi melalui desain kami'
              : 'Hear from our clients who experienced transformation through our design'}
          </p>
        </div>

        <div
          ref={sliderRef}
          className="relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={(e) => {
            handleMouseUp();
            setIsAutoPlay(true);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlay(false)}
        >
          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                  }`}
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{testimonial.avatar}</div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{testimonial.name}</h3>
                        <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {Array(testimonial.rating)
                        .fill(null)
                        .map((_, i) => (
                          <span key={i} className="text-yellow-500 text-lg">
                            ★
                          </span>
                        ))}
                    </div>
                  </div>

                  <p className="text-foreground/70 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'bg-border'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
