// src/components/Hero.tsx
import { useRef, useEffect } from 'react';

const WA_NUMBER = '6281234567890';
const heroWaLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo TransBus, saya mau info sewa bus.')}`;

export const Hero = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        heroImageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="mb-12 grid lg:grid-cols-2 gap-8 items-center scroll-mt-20">
      <div>
        {/* Konten teks hero... */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Perjalanan Grup Tanpa Ribet —{' '}
          <span className="bg-gradient-to-r from-navy to-accent bg-clip-text text-transparent">
            TransBus
          </span>
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          Bus pariwisata, shuttle corporate, dan layanan charter dengan sopir berlisensi. Kami menangani itinerary, pick-up, dan operasional agar perjalanan Anda lancar.
        </p>
        <div className="mt-6 flex gap-4">
          <a href={heroWaLink} className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-navy to-blue-700 text-white font-bold" role="button">
            Booking via WA
          </a>
          <a href="#product" className="py-2.5 px-4 rounded-xl border border-navy/10 font-semibold">Lihat Armada</a>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-navy/5">
            <div
                ref={heroImageRef}
                className="bg-cover bg-center min-h-[420px]"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547886597-7e87e5288619?q=80&w=1600&auto=format&fit=crop')" }}
            ></div>
        </div>
        <div className="absolute -bottom-8 right-6">
          {/* Stat Pill... */}
        </div>
      </div>
    </section>
  );
};