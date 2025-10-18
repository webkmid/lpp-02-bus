// src/components/Location.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export const Location = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="location" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Lokasi Kantor & Titik Jemput</h3>
      <div className="text-muted mt-1">Kami memiliki beberapa titik jemput utama di kota besar.</div>
      <div className="mt-6 h-64 md:h-80 rounded-lg overflow-hidden border border-navy/5">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA`}
        ></iframe>
        {/* Ganti YOUR_API_KEY dengan API Key Google Maps Anda */}
      </div>
    </section>
  );
};