// src/components/Footer.tsx
const socialLinks = [
  { name: 'Instagram', icon: 'fab fa-instagram', color: 'text-pink-500', url: 'https://instagram.com' },
  { name: 'Facebook', icon: 'fab fa-facebook', color: 'text-blue-600', url: 'https://facebook.com' },
  { name: 'TikTok', icon: 'fab fa-tiktok', color: 'text-black', url: 'https://tiktok.com' },
];

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 pt-10 pb-14">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-lg">TransBus</div>
          <p className="text-muted mt-2">Layanan sewa bus premium untuk acara, wisata, dan corporate transport.</p>
          <div className="text-muted mt-4">© {new Date().getFullYear()} TransBus</div>
        </div>
        <div>
          <div className="font-bold">Quick Links</div>
          <ul className="mt-3 text-muted space-y-1">
            <li><a href="#product" className="hover:text-teal-600">Armada</a></li>
            <li><a href="#booking" className="hover:text-teal-600">Pemesanan</a></li>
            <li><a href="#faq" className="hover:text-teal-600">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Ikuti Kami</div>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            {socialLinks.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="py-2 px-3 rounded-xl border border-navy/10 flex items-center gap-2">
                <i className={`${link.icon} ${link.color} text-xl`}></i> {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-muted text-sm border-t border-navy/5 pt-4">Dibuat oleh Anda • All rights reserved</div>
    </footer>
  );
};