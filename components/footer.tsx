'use client';

type Props = {
  language: 'id' | 'en';
};

export default function ContactSection({ language }: Props) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo_sabrana.png"
                alt="Logo"
                className="h-10 object-contain hover:scale-110 transition duration-300"
              />
              <span className="font-bold text-foreground text-lg">SABRANA</span>
            </div>
            <p className="text-foreground/60 text-sm">
              {language === 'id'
                ? 'Desain profesional untuk meningkatkan brand Anda'
                : 'Professional design to elevate your brand'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">
              {language === 'id' ? 'Layanan' : 'Services'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'UI/UX Design' : 'UI/UX Design'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Branding' : 'Branding'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Web Design' : 'Web Design'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Social Media Design' : 'Social Media Design'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">
              {language === 'id' ? 'Tautan' : 'Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Beranda' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Portfolio' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Harga' : 'Pricing'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  {language === 'id' ? 'Kontak' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">
              {language === 'id' ? 'Sosial Media' : 'Social Media'}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rochman_bsr/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                title="Dribbble"
              >
                🎨
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                title="Behance"
              >
                ✨
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/60 text-sm">
            <p>
              © 2026 SABRANA{' '}
              {language === 'id' ? '- Desain Profesional untuk Brand Anda' : '- Professional Design for Your Brand'}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                {language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
