import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AIAssistant } from './components/AIAssistant.tsx';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      
      <div className="fixed bottom-6 left-4 sm:left-6 z-40">
        <AIAssistant />
      </div>

      <div className="fixed bottom-6 right-4 sm:right-6 flex flex-col gap-3 z-40 items-center">
        <a 
          href="https://wa.me/5511972247142" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all group active:scale-90"
          title="Fale conosco no WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl sm:text-2xl group-hover:scale-110 transition-transform"></i>
        </a>

        <button
          onClick={scrollToTop}
          className={`p-3 sm:p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-blue-700 active:scale-90 ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
          }`}
          aria-label="Voltar ao topo"
        >
          <i className="fas fa-arrow-up text-sm sm:text-base"></i>
        </button>
      </div>
    </div>
  );
};

export default App;