import React from 'react';
import { LOCATION_FOCUS } from '../constants';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider">
              <i className="fas fa-map-marker-alt"></i> {LOCATION_FOCUS}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Informática em Embu-Guaçu: <span className="text-blue-500">Sem enrolação.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium">
              Soluções rápidas, honestas e diretas ao ponto. Atendimento profissional para você ou sua empresa, com o respeito que seus dados merecem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5511972247142?text=Olá! Preciso de ajuda técnica para meu computador." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-xl"></i> Chamar no WhatsApp
              </a>
              <a 
                href="#servicos" 
                onClick={(e) => handleScroll(e, 'servicos')}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all text-center active:scale-95"
              >
                Ver Serviços
              </a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 text-gray-500 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span>Técnico em sua casa</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-blue-500"></i>
                <span>Preço Justo e Transparente</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-blue-50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1200" 
              alt="Manutenção de Hardware Profissional" 
              className="relative rounded-2xl shadow-2xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <p className="font-bold text-gray-900">Agilidade Local</p>
                <p className="text-sm text-gray-500">Perto de você em Embu-Guaçu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};