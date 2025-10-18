// src/components/Fleet.tsx
import { useDraggableScroll } from '../hooks/useDraggableScroll';

const fleetData = [
  { name: 'Bus Pariwisata 45 Seat', description: 'AC, reclining seats, audio', price: 'Rp 1.800.000', tags: [{text: 'Popular', color: 'amber'}, {text: 'Sopir', color: 'teal'}], image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Bus Medium 30 Seat', description: 'Ideal untuk rombongan kecil', price: 'Rp 1.200.000', tags: [{text: 'Lepas Kunci', color: 'teal'}], image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Double Decker 70 Seat', description: 'Kapasitas besar untuk event besar', price: 'Rp 3.500.000', tags: [{text: 'VIP', color: 'amber'}], image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Mini Bus 15 Seat', description: 'Cocok shuttle & private trips', price: 'Rp 900.000', tags: [{text: 'Hemat', color: 'teal'}], image: 'https://images.unsplash.com/photo-1607512060958-423166921a75?q=80&w=1600&auto=format&fit=crop' },
];

export const Fleet = () => {
  const { ref: trackRef } = useDraggableScroll<HTMLDivElement>();
  
  return (
    <section id="product" className="mb-12 scroll-mt-20">
      <h2 className="font-extrabold text-2xl">Armada Pilihan</h2>
      <div className="text-muted">Pilihan bus untuk berbagai kebutuhan grup</div>
      
      <div ref={trackRef} className="horizontal-track flex gap-6 pb-4 mt-6 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing">
        {fleetData.map((bus) => (
          <article key={bus.name} className="flex-shrink-0 w-[280px] md:w-[360px] snap-start rounded-2xl overflow-hidden bg-white border border-navy/5 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl">
            <a href="#booking" className="block">
              <div className="relative pt-[56.25%]"><img src={bus.image} alt={bus.name} className="absolute inset-0 w-full h-full object-cover"/></div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-extrabold">{bus.name}</h3>
                    <div className="text-muted text-sm mt-1">{bus.description}</div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-navy font-extrabold">{bus.price}</div>
                    <div className="text-muted text-sm">/ hari</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  {bus.tags.map(tag => (
                    <span key={tag.text} className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color === 'amber' ? 'bg-amber-50 text-amber-700' : 'bg-teal-50 text-teal-700'}`}>{tag.text}</span>
                  ))}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};