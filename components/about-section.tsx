'use client';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  const skills = [
    { name: language === 'id' ? 'UI/UX Design' : 'UI/UX Design', icon: '🎨' },
    { name: language === 'id' ? 'Branding' : 'Branding', icon: '✨' },
    { name: language === 'id' ? 'Desain Media Sosial' : 'Social Media Design', icon: '📱' },
    { name: language === 'id' ? 'Web Design' : 'Web Design', icon: '🌐' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
              <span className="text-sm font-medium">
                {language === 'id' ? 'Tentang Saya' : 'About Me'}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {language === 'id'
                ? 'Desainer Berpengalaman dengan Visi Kreatif'
                : 'Experienced Designer with Creative Vision'}
            </h2>

            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              {language === 'id'
                ? 'Saya adalah seorang desainer profesional dengan pengalaman bertahun-tahun dalam menciptakan solusi desain yang tidak hanya indah, tetapi juga efektif dalam meningkatkan bisnis Anda. Saya percaya bahwa desain yang baik adalah investasi, bukan pengeluaran.'
                : "I'm a professional designer with years of experience creating design solutions that are not only beautiful but also effective in growing your business. I believe good design is an investment, not an expense."}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-semibold text-foreground text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 rounded-2xl blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl border border-border overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {language === 'id' ? '10+ Tahun Pengalaman' : '10+ Years Experience'}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {language === 'id'
                        ? 'Bekerja dengan ratusan klien dari berbagai industri'
                        : 'Worked with hundreds of clients across various industries'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {language === 'id' ? '500+ Proyek Sukses' : '500+ Successful Projects'}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {language === 'id'
                        ? 'Dari startup hingga perusahaan besar'
                        : 'From startups to large corporations'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {language === 'id' ? 'Award-Winning Designer' : 'Award-Winning Designer'}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {language === 'id'
                        ? 'Pemenang berbagai penghargaan desain internasional'
                        : 'Winner of various international design awards'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
