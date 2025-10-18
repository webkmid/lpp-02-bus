// src/components/Testimonials.tsx
import { useDraggableScroll } from '../hooks/useDraggableScroll';

const testimonialsData = [
  { quote: 'Layanan prima, sopir ramah, bus datang on-time. Sangat membantu acara perusahaan kami.', author: 'PT Nusantara Event' },
  { quote: 'Perjalanan wisata jadi nyaman, fasilitas lengkap dan servis top.', author: 'Rina, Travel Agent' },
  { quote: 'Harga bersahabat dan admin responsif. Recommended!', author: 'Agus, Organizer' },
];

export const Testimonials = () => {
  const { ref: trackRef } = useDraggableScroll<HTMLDivElement>();

  return (
    <section id="testimonials" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Testimoni Pelanggan</h3>
      <div className="text-muted mt-1">Ulasan asli dari pelanggan</div>
      <div ref={trackRef} className="horizontal-track flex gap-6 pb-4 mt-6 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing">
        {testimonialsData.map((testi, index) => (
          <div key={index} className="relative w-[320px] md:w-[420px] flex-shrink-0 bg-white rounded-xl p-6 shadow-sm snap-start">
            <div className="absolute text-5xl text-navy/5 font-serif -top-1 left-2">“</div>
            <p className="font-semibold relative z-10">{testi.quote}</p>
            <div className="text-muted mt-4">— {testi.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
};