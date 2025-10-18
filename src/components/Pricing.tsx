// src/components/Pricing.tsx
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const pricingPlans = [
  { name: 'Free', price: 'Rp 0', description: 'Listing sederhana (bagus untuk mencoba)', features: ['Foto & deskripsi armada', 'Support email'], cta: 'Pilih Free', featured: false },
  { name: 'Premium', price: 'Rp 6.500.000', description: 'Paket Ziarah', features: ['5 Tempat Ziarah', '50 Penumpang', 'Termasuk Makan & Minum'], cta: 'Pilih Premium', featured: true },
  { name: 'Enterprise', price: 'Custom', description: 'Solusi skala besar & integrasi', features: ['Kustom layout', 'API & integrasi'], cta: 'Hubungi Sales', featured: false },
];

export const Pricing = () => {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  return (
    <section ref={sectionRef} id="pricing" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Paket & Harga</h3>
      <div className="text-muted mt-1">Pilih paket yang sesuai kebutuhan perjalanan Anda</div>
      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`p-6 rounded-xl bg-white shadow-sm transition-transform ${plan.featured ? 'border-2 border-amber-200 scale-105' : 'border border-navy/5'}`}>
            <div className={`text-sm font-semibold ${plan.featured ? '' : 'text-muted'}`}>{plan.name}</div>
            <div className={`mt-3 font-extrabold ${plan.featured ? 'text-3xl text-accent' : 'text-2xl'}`}>{plan.price}</div>
            <div className="text-muted mt-2 text-sm h-10">{plan.description}</div>
            <ul className="mt-3 text-muted text-sm space-y-1 h-20">
              {plan.features.map(feature => <li key={feature}>• {feature}</li>)}
            </ul>
            <div className="mt-4">
              <a href="#booking" className={`block text-center py-2.5 px-4 rounded-xl font-bold ${plan.featured ? 'bg-gradient-to-r from-navy to-blue-700 text-white' : 'border border-navy/10'}`}>{plan.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};