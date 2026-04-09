'use client';

import { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'id' ? 'Terima kasih! Kami akan menghubungi Anda segera.' : 'Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

 const whatsappLink = `https://wa.me/6287891276630?text=${encodeURIComponent(
  language === 'id'
    ? 'Halo Sabrana, saya ingin membuat project desain...'
    : 'Hi Sabrana, I want to create a design project...'
)}`;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
            <span className="text-sm font-medium">
              {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {language === 'id' ? 'Siap Mulai Project Anda?' : 'Ready to Start Your Project?'}
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {language === 'id'
              ? 'Hubungi kami hari ini dan mari kita ciptakan sesuatu yang luar biasa bersama'
              : 'Contact us today and let\'s create something amazing together'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-medium mb-2">
                  {language === 'id' ? 'Nama Anda' : 'Your Name'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={language === 'id' ? 'Masukkan nama Anda' : 'Enter your name'}
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  {language === 'id' ? 'Email Anda' : 'Your Email'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder={language === 'id' ? 'Masukkan email Anda' : 'Enter your email'}
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  {language === 'id' ? 'Pesan' : 'Message'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder={
                    language === 'id'
                      ? 'Jelaskan project Anda di sini...'
                      : 'Describe your project here...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4 items-start group">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {language === 'id' ? 'WhatsApp' : 'WhatsApp'}
                    </h4>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +62 878 9127 6630
                    </a>
                    <p className="text-foreground/60 text-sm mt-1">
                      {language === 'id' ? 'Chat dengan kami untuk konsultasi cepat' : 'Chat with us for quick consultation'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {language === 'id' ? 'Email' : 'Email'}
                    </h4>
                    <a
                    href="mailto:putrabasr@gmail.com"
                   className="text-primary hover:text-primary/80 transition-colors"
                  >
                   putrabasr@gmail.com
                  </a>
                    <p className="text-foreground/60 text-sm mt-1">
                      {language === 'id' ? 'Kirim email untuk pertanyaan detail' : 'Send email for detailed questions'}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 dark:bg-primary/10">
                  <h4 className="font-bold text-foreground mb-2">
                    {language === 'id' ? 'Respons Cepat' : 'Quick Response'}
                  </h4>
                  <p className="text-foreground/60 text-sm">
                    {language === 'id'
                      ? 'Kami biasanya merespons dalam 24 jam. Untuk kebutuhan urgent, hubungi via WhatsApp.'
                      : 'We usually respond within 24 hours. For urgent needs, contact us via WhatsApp.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-8"
            >
              <MessageCircle className="w-5 h-5" />
              {language === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
