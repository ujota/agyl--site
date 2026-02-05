
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex flex-col leading-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl md:text-3xl font-extrabold text-blue-500 tracking-tight">
              agyl
            </span>
            <span className="text-[10px] md:text-sm font-light text-blue-400 self-end -mt-1 ml-4">
              Informática
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Início</a>
            <a href="#servicos" onClick={(e) => handleScroll(e, 'servicos')} className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Serviços</a>
            <a href="#contato" onClick={(e) => handleScroll(e, 'contato')} className="text-gray-600 hover:text-blue-500 font-medium transition-colors">Contato</a>
            <a 
              href="https://wa.me/5511972247142" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i> Suporte Imediato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-blue-500 transition-colors p-2"
              aria-label="Menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-lg text-gray-700 font-medium py-2 border-b border-gray-50">Início</a>
          <a href="#servicos" onClick={(e) => handleScroll(e, 'servicos')} className="block text-lg text-gray-700 font-medium py-2 border-b border-gray-50">Serviços</a>
          <a href="#contato" onClick={(e) => handleScroll(e, 'contato')} className="block text-lg text-gray-700 font-medium py-2 border-b border-gray-50">Contato</a>
          <a 
            href="https://wa.me/5511972247142" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white text-center px-6 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
          >
            <i className="fab fa-whatsapp"></i> Suporte WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
