'use client';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  const services = [
    {
      icon: '🎨',
      title: language === 'id' ? 'Desain Logo' : 'Logo Design',
      description:
        language === 'id'
          ? 'Ciptakan identitas visual brand Anda dengan logo yang memorable dan professional'
          : 'Create your brand visual identity with memorable and professional logo',
      features: [
        language === 'id' ? 'Konsultasi unlimited' : 'Unlimited consultation',
        language === 'id' ? '3 konsep berbeda' : '3 different concepts',
        language === 'id' ? 'File vector berkualitas tinggi' : 'High quality vector files',
      ],
    },
    {
      icon: '✨',
      title: language === 'id' ? 'UI/UX Design' : 'UI/UX Design',
      description:
        language === 'id'
          ? 'Desain interface dan user experience yang intuitif untuk aplikasi atau website Anda'
          : 'Design intuitive interface and user experience for your app or website',
      features: [
        language === 'id' ? 'User research' : 'User research',
        language === 'id' ? 'Wireframe & mockup' : 'Wireframe & mockup',
        language === 'id' ? 'Prototype interaktif' : 'Interactive prototype',
      ],
    },
    {
      icon: '📱',
      title: language === 'id' ? 'Desain Media Sosial' : 'Social Media Design',
      description:
        language === 'id'
          ? 'Buat konten visual yang engaging untuk meningkatkan presence media sosial Anda'
          : 'Create engaging visual content to boost your social media presence',
      features: [
        language === 'id' ? 'Feed design' : 'Feed design',
        language === 'id' ? 'Story templates' : 'Story templates',
        language === 'id' ? 'Konten kalender' : 'Content calendar',
      ],
    },
    {
      icon: '🌐',
      title: language === 'id' ? 'Web Design' : 'Web Design',
      description:
        language === 'id'
          ? 'Website modern dan responsif yang dioptimalkan untuk konversi dan SEO'
          : 'Modern and responsive website optimized for conversion and SEO',
      features: [
        language === 'id' ? 'Responsive design' : 'Responsive design',
        language === 'id' ? 'Modern aesthetics' : 'Modern aesthetics',
        language === 'id' ? 'SEO optimized' : 'SEO optimized',
      ],
    },
    {
      icon: '🎯',
      title: language === 'id' ? 'Branding' : 'Branding',
      description:
        language === 'id'
          ? 'Panduan brand lengkap yang mencakup visual identity, tone of voice, dan positioning'
          : 'Complete brand guidelines covering visual identity, tone of voice, and positioning',
      features: [
        language === 'id' ? 'Brand strategy' : 'Brand strategy',
        language === 'id' ? 'Visual guidelines' : 'Visual guidelines',
        language === 'id' ? 'Brand book' : 'Brand book',
      ],
    },
    {
      icon: '🖼️',
      title: language === 'id' ? 'Desain Poster & Banner' : 'Poster & Banner Design',
      description:
        language === 'id'
          ? 'Desain eye-catching untuk poster, banner, dan materi promosi lainnya'
          : 'Eye-catching design for posters, banners, and other promotional materials',
      features: [
        language === 'id' ? 'Print ready' : 'Print ready',
        language === 'id' ? 'Custom sizing' : 'Custom sizing',
        language === 'id' ? 'Unlimited revisions' : 'Unlimited revisions',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
            <span className="text-sm font-medium">
              {language === 'id' ? 'Layanan' : 'Services'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {language === 'id' ? 'Layanan Desain Kami' : 'Our Design Services'}
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {language === 'id'
              ? 'Berbagai jenis layanan desain profesional untuk memenuhi kebutuhan brand Anda'
              : 'Various professional design services to meet your brand needs'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                    <span className="text-primary mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-block px-4 py-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
              >
                {language === 'id' ? 'Pelajari Lebih Lanjut →' : 'Learn More →'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
