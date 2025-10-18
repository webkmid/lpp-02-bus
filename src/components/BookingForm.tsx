// src/components/BookingForm.tsx
import { useState } from 'react';

const WA_NUMBER = "6281234567890";
const vehicleOptions = [
  { value: "Bus Pariwisata|Rp 1.800.000", label: "Bus Pariwisata — Rp 1.800.000/hari" },
  { value: "Bus Medium|Rp 1.200.000", label: "Bus Medium — Rp 1.200.000/hari" },
  { value: "Double Decker|Rp 3.500.000", label: "Double Decker — Rp 3.500.000/hari" },
  { value: "Mini Bus|Rp 900.000", label: "Mini Bus — Rp 900.000/hari" },
];
const initialFormState = { name: '', email: '', date: '', vehicle: vehicleOptions[0].value, days: '1', request: '' };

export const BookingForm = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSendWA = () => {
    if (!formData.name || !formData.date || !formData.vehicle) {
      alert("Isi Nama, Tanggal, dan Pilihan Armada terlebih dahulu.");
      return;
    }
    const [vehicleName, price] = formData.vehicle.split("|");
    const text = `Halo TransBus, saya ingin memesan bus.\n\nNama: ${formData.name}\nTanggal: ${formData.date}\nArmada: ${vehicleName}\nDurasi: ${formData.days} hari\nHarga: ${price}\nRequest: ${formData.request || '-'}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const [vehicleName, price] = formData.vehicle.split('|');

  return (
    <section id="booking" className="mb-12 scroll-mt-20">
      <h3 className="font-extrabold text-2xl">Form Pemesanan</h3>
      <div className="text-muted mt-1">Isi detail kemudian chat WA untuk konfirmasi</div>
      
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-4.5 rounded-2xl border border-navy/5 shadow-lg space-y-4">
          <div>
            <label className="block text-sm font-semibold text-muted">Nama</label>
            <input id="name" type="text" value={formData.name} onChange={handleChange} required className="mt-1 w-full p-3 border border-gray-200 rounded-lg" placeholder="Nama lengkap"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-muted">Tanggal</label>
            <input id="date" type="date" value={formData.date} onChange={handleChange} required className="mt-1 w-full p-3 border border-gray-200 rounded-lg"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-muted">Jenis Armada</label>
            <select id="vehicle" value={formData.vehicle} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-200 rounded-lg">
              {vehicleOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-muted">Jumlah Hari</label>
            <input id="days" type="number" min="1" value={formData.days} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-200 rounded-lg"/>
          </div>
          <div className="flex gap-3 mt-3">
            <button onClick={handleSendWA} type="button" className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-navy to-blue-700 text-white font-bold">Chat via WhatsApp</button>
            <button onClick={() => setFormData(initialFormState)} type="reset" className="py-2.5 px-4 rounded-xl border border-navy/10 font-semibold">Reset</button>
          </div>
        </form>

        <aside className="bg-white p-4.5 rounded-2xl border border-navy/5 shadow-lg">
          <h4 className="font-extrabold">Ringkasan Pesanan</h4>
          <div className="mt-3 text-sm">
            { !formData.name && !formData.date ? (<div className="text-muted">Isi form untuk melihat ringkasan otomatis</div>) : (
              <div className="space-y-2">
                <div className="font-bold">{formData.name || "—"}</div>
                {formData.date && <div className="text-muted">Tanggal: {formData.date}</div>}
                <div className="mt-2"><div className="font-bold">{vehicleName}</div><div className="text-muted">{price}</div></div>
                <div className="text-muted">Durasi: {formData.days} hari</div>
                {formData.request && <div className="text-muted mt-2">Request: {formData.request}</div>}
              </div>
            )}
          </div>
          <div className="mt-6 border-t border-navy/5 pt-4">
            <h5 className="font-bold">Kontak Cepat</h5>
            <div className="text-muted mt-2">WhatsApp: <a href={`https://wa.me/${WA_NUMBER}`} className="text-teal-600 font-semibold" target="_blank" rel="noopener noreferrer">+{WA_NUMBER}</a></div>
          </div>
        </aside>
      </div>
    </section>
  );
};