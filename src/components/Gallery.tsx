// src/components/Gallery.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const galleryImages = [
  "https://images.unsplash.com/photo-1600198741448-fc40d918673a?q=80&w=1600",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600",
];

export const Gallery = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="gallery" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Galeri Armada</h3>
      <div className="text-muted mt-1">Foto interior & exterior armada</div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {galleryImages.map((src, index) => (
          <a
            key={src}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <div className="relative pt-[56.25%]">
              <img src={src} alt={`Galeri Armada ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};