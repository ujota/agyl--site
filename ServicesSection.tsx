
import React from 'react';
import { SERVICE_CATEGORIES, WHATSAPP_LINK } from '../constants.ts';

export const ServicesSection: React.FC = () => {
  const getWhatsAppMessage = (categoryTitle: string) => {
    const baseUrl = "https://wa.me/5511972247142";
    const message = encodeURIComponent(`Olá! Vi o site da Agyl Informática e gostaria de solicitar um orçamento para: ${categoryTitle}`);
    return `${baseUrl}?text=${message}`;
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-3 text-sm md:text-base">Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Nossos Serviços Prestados</h3>
          <p className="text-gray-600 text-base md:text-lg px-4">
            Oferecemos uma gama completa de soluções em TI com foco em agilidade e confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col h-full group"
            >
              {/* Header with Title */}
              <div className="mb-6 relative z-10">
                <h4 className="text-xl md:text-2xl font-extrabold text-blue-500 tracking-tight uppercase leading-tight group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h4>
                <div className="h-1 w-12 bg-blue-100 mt-2 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>

              {/* List of services */}
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow relative z-10">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">
                      <i className="fas fa-circle text-[8px]"></i>
                    </span>
                    <span className="font-medium text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-auto relative z-20">
                <a 
                  href={getWhatsAppMessage(category.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 px-6 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all group/btn shadow-sm active:scale-95"
                >
                  <span>Solicitar Orçamento</span>
                  <i className="fab fa-whatsapp ml-2 group-hover/btn:scale-110 transition-transform text-lg"></i>
                </a>
              </div>

              {/* Decorative Icon */}
              <div className="absolute top-4 right-4 opacity-5 text-blue-500 text-3xl md:text-4xl z-0 group-hover:scale-110 transition-transform duration-500">
                <i className={`fas ${category.icon}`}></i>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-12 md:mt-20 bg-blue-500 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="text-center lg:text-left relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Dúvida sobre outro serviço?</h4>
            <p className="text-blue-50 text-base md:text-lg">Nossa equipe está pronta para avaliar sua necessidade agora mesmo.</p>
          </div>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto bg-white text-blue-500 px-8 md:px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg relative z-10 flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-xl"></i> Falar com um Técnico
          </a>
        </div>
      </div>
    </section>
  );
};
