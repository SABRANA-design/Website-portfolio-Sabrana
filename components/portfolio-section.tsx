'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

type Props = {
  language: 'id' | 'en';
};

export default function PortfolioSection({ language }: Props) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: language === 'id' ? 'foto orang ganteng' : 'foto handsome man',
      category: language === 'id' ? 'UI/UX Design' : 'UI/UX Design',
      image: '/gwe.jpg',
      description:
        language === 'id'
          ? 'Platform e-commerce modern dengan desain responsif dan user experience yang optimal'
          : 'Modern e-commerce platform with responsive design and optimal user experience',
    },
    {
      id: 2,
      title: language === 'id' ? 'kursi 3d' : '3d chair',
      category: language === 'id' ? 'Branding' : 'Branding',
      image: '/kursi3d.jpg',
      description:
        language === 'id'
          ? 'Desain logo, palet warna, dan panduan brand lengkap untuk brand fashion premium'
          : 'Logo design, color palette, and complete brand guidelines for premium fashion brand',
    },
    {
      id: 3,
      title: language === 'id' ? 'pantai midodaren' : 'midodaren beach',
      category: language === 'id' ? 'Desain Media Sosial' : 'Social Media Design',
      image: '/pantai1.jpeg',
      description:
        language === 'id'
          ? 'Serangkaian konten visual untuk kampanye media sosial yang viral dan engaging'
          : 'Series of visual content for viral and engaging social media campaign',
    },
    {
      id: 4,
      title: language === 'id' ? 'ni orang kenapa yak?' : 'ni orang kenapa yak?',
      category: language === 'id' ? 'Web Design' : 'Web Design',
      image: '/radit.jpeg',
      description:
        language === 'id'
          ? 'Website profesional dengan animasi smooth dan performa tinggi'
          : 'Professional website with smooth animations and high performance',
    },
    {
      id: 5,
      title: language === 'id' ? 'pantai ngetun' : 'ngetun beach',
      category: language === 'id' ? 'UI/UX Design' : 'UI/UX Design',
      image: '/pantai3.jpeg',
      description:
        language === 'id'
          ? 'Desain aplikasi mobile untuk startup teknologi dengan interface yang intuitif'
          : 'Mobile app design for tech startup with intuitive interface',
    },
    {
      id: 6,
      title: language === 'id' ? 'basr ganteng banget' : 'basr good',
      category: language === 'id' ? 'Branding' : 'Branding',
      image: '/pantai4.jpeg',
      description:
        language === 'id'
          ? 'Koleksi aset branding lengkap termasuk stationery dan merchandise design'
          : 'Complete branding asset collection including stationery and merchandise design',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 mb-6">
            <span className="text-sm font-medium">
              {language === 'id' ? 'Portfolio' : 'Portfolio'}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {language === 'id' ? 'Karya Terbaru Kami' : 'Our Latest Works'}
          </h2>

          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {language === 'id'
              ? 'Koleksi proyek desain terbaik yang telah menghasilkan dampak nyata untuk klien kami'
              : 'Collection of best design projects that have created real impact for our clients'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <img
                  src={project.image || '/gwe.jpg'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                    🔍
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-primary text-sm font-medium mb-2">{project.category}</p>

              <p className="text-foreground/60 text-sm line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-card">
              <h3 className="text-2xl font-bold text-foreground">
                {projects.find((p) => p.id === selectedProject)?.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <img
                src={projects.find((p) => p.id === selectedProject)?.image}
                alt="preview"
                className="w-full aspect-video object-cover rounded-xl"
              />

              <div>
                <p className="text-primary text-sm font-medium mb-2">
                  {projects.find((p) => p.id === selectedProject)?.category}
                </p>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {projects.find((p) => p.id === selectedProject)?.description}
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                {language === 'id' ? 'Ingin Proyek Seperti Ini?' : 'Want a Project Like This?'}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
