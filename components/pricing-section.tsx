'use client';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  const pricingPlans = [
    {
      name: language === 'id' ? 'Paket Basic' : 'Basic Package',
      description:
        language === 'id'
          ? 'Untuk pemula yang ingin memulai dengan desain'
          : 'For beginners who want to start with design',
      price: language === 'id' ? '2.999.000' : '2,999,000',
      currency: language === 'id' ? 'IDR' : 'IDR',
      period: language === 'id' ? '/proyek' : '/project',
      features: [
        language === 'id' ? 'Konsultasi awal' : 'Initial consultation',
        language === 'id' ? '2 konsep desain' : '2 design concepts',
        language === 'id' ? 'Revisi unlimited' : 'Unlimited revisions',
        language === 'id' ? 'File final 2 format' : 'Final files 2 formats',
      ],
      highlighted: false,
    },
    {
      name: language === 'id' ? 'Paket Standard' : 'Standard Package',
      description:
        language === 'id'
          ? 'Pilihan terbaik untuk bisnis yang berkembang'
          : 'Best choice for growing businesses',
      price: language === 'id' ? '5.999.000' : '5,999,000',
      currency: language === 'id' ? 'IDR' : 'IDR',
      period: language === 'id' ? '/proyek' : '/project',
      features: [
        language === 'id' ? 'Konsultasi unlimited' : 'Unlimited consultation',
        language === 'id' ? '5 konsep desain' : '5 design concepts',
        language === 'id' ? 'Revisi unlimited' : 'Unlimited revisions',
        language === 'id' ? 'File final 4 format' : 'Final files 4 formats',
        language === 'id' ? 'Presentasi desain' : 'Design presentation',
      ],
      highlighted: true,
    },
    {
      name: language === 'id' ? 'Paket Premium' : 'Premium Package',
      description:
        language === 'id'
          ? 'Solusi lengkap untuk transformasi brand Anda'
          : 'Complete solution for your brand transformation',
      price: language === 'id' ? '12.999.000' : '12,999,000',
      currency: language === 'id' ? 'IDR' : 'IDR',
      period: language === 'id' ? '/proyek' : '/project',
      features: [
        language === 'id' ? 'Konsultasi unlimited' : 'Unlimited consultation',
        language === 'id' ? 'Unlimited konsep desain' : 'Unlimited design concepts',
        language === 'id' ? 'Revisi unlimited' : 'Unlimited revisions',
        language === 'id' ? 'File final semua format' : 'Final files all formats',
        language === 'id' ? 'Presentasi eksklusif' : 'Exclusive presentation',
        language === 'id' ? 'Brand guideline lengkap' : 'Complete brand guidelines',
        language === 'id' ? 'Priority support' : 'Priority support',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
            <span className="text-sm font-medium">
              {language === 'id' ? 'Harga' : 'Pricing'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {language === 'id' ? 'Paket Harga Kami' : 'Our Pricing Plans'}
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {language === 'id'
              ? 'Pilih paket yang sesuai dengan kebutuhan dan budget Anda'
              : 'Choose the plan that fits your needs and budget'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-primary shadow-2xl scale-105'
                  : 'border border-border hover:border-primary/50'
              } ${plan.highlighted ? 'bg-card' : 'bg-card'} p-8 group hover:shadow-lg`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {language === 'id' ? 'REKOMENDASI' : 'RECOMMENDED'}
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

              <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-foreground/60 ml-2">{plan.currency}</span>
                <p className="text-foreground/60 text-sm mt-2">{plan.period}</p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:shadow-lg hover:scale-105'
                    : 'border-2 border-primary text-primary dark:text-primary hover:bg-primary/10'
                }`}
              >
                {language === 'id' ? 'Pilih Paket' : 'Choose Plan'}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary text-xl flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
          <p className="text-center text-foreground/70 mb-4">
            {language === 'id'
              ? 'Tidak menemukan paket yang tepat? Mari kita buat solusi custom untuk Anda.'
              : "Can't find the right package? Let's create a custom solution for you."}
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="px-6 py-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              {language === 'id' ? 'Hubungi Kami untuk Custom Quote' : 'Contact Us for Custom Quote'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
