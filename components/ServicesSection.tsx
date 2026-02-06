import React from 'react';
import { SERVICE_CATEGORIES, LOCATION_FOCUS } from '../constants';

export const ServicesSection: React.FC = () => {
  const getWhatsAppMessage = (categoryTitle: string) => {
    const baseUrl = "https://wa.me/5511972247142";
    const message = encodeURIComponent(`Olá! Vi o site da Agyl Informática e gostaria de um orçamento sem compromisso para: ${categoryTitle}. Sou de Embu-Guaçu/região.`);
    return `${baseUrl}?text=${message}`;
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-3 text-sm md:text-base">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Suporte direto em {LOCATION_FOCUS}</h3>
          <p className="text-gray-600 text-base md:text-lg px-4 font-medium">
            Trabalhamos com transparência. Você sabe exatamente o que está sendo feito no seu equipamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full group">
              <div className="mb-6 relative z-10">
                <h4 className="text-xl md:text-2xl font-extrabold text-blue-500 tracking-tight uppercase leading-tight group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h4>
                <div className="h-1 w-12 bg-blue-100 mt-2 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow relative z-10">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 mt-1.5 flex-shrink-0"><i className="fas fa-check text-xs"></i></span>
                    <span className="font-medium text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto relative z-20">
                <a 
                  href={getWhatsAppMessage(category.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all group/btn shadow-md active:scale-95"
                >
                  <span>Orçamento pelo WhatsApp</span>
                  <i className="fab fa-whatsapp ml-2 group-hover/btn:scale-110 transition-transform text-lg"></i>
                </a>
              </div>
              <div className="absolute top-4 right-4 opacity-5 text-blue-500 text-3xl md:text-4xl z-0 group-hover:scale-110 transition-transform duration-500">
                <i className={`fas ${category.icon}`}></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            * Atendimento presencial sujeito a agendamento para Embu-Guaçu e cidades vizinhas.
          </p>
        </div>
      </div>
    </section>
  );
};