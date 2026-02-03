
import React from 'react';
import { CONTACT_PHONE, EMAIL } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight">Vamos conversar?</h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
              Estamos disponíveis para tirar suas dúvidas e resolver seus problemas de informática. Entre em contato pelos nossos canais oficiais.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-center sm:text-left">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">{CONTACT_PHONE}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-center sm:text-left">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="far fa-envelope text-2xl"></i>
                </div>
                <div className="overflow-hidden w-full">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">E-mail</p>
                  <p className="text-base md:text-xl font-bold text-gray-900 break-words">{EMAIL}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-center sm:text-left">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Horário</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">Seg - Sex, 09h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm mt-8 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Mande uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail ou Telefone</label>
                <input 
                  type="text" 
                  placeholder="Como podemos te retornar?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem / Problema</label>
                <textarea 
                  rows={4}
                  placeholder="Conte um pouco sobre o que você precisa..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg active:scale-95 mt-2">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
