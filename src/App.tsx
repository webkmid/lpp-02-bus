// src/App.tsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Fleet } from './components/Fleet';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { BookingForm } from './components/BookingForm';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 pt-8">
        <Hero />
        <About />
        <Fleet />
        <Benefits />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Faq />
        <BookingForm />
        <Location />
      </main>
      <Footer />
    </>
  );
}