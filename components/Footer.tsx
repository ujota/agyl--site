import React from 'react';
import { INSTAGRAM_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-12">
          <div className="flex flex-col leading-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              agyl
            </span>
            <span className="text-sm font-light text-blue-400 self-end -mt-1 ml-4">
              Informática
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-400 transition-colors font-medium">Início</a>
            <a href="#servicos" className="hover:text-blue-400 transition-colors font-medium">Serviços</a>
            <a href="#contato" className="hover:text-blue-400 transition-colors font-medium">Contato</a>
          </div>
          <div className="flex gap-4">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 transition-all duration-300 group shadow-lg"
              title="Siga-nos no Instagram"
            >
              <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <p>© {new Date().getFullYear()} Agyl Informática. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm italic">Soluções inteligentes, suporte de confiança em Embu-Guaçu.</p>
        </div>
      </div>
    </footer>
  );
};
