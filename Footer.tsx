
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-12">
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              agyl
            </span>
            <span className="text-sm font-light text-blue-400 self-end -mt-1 ml-4">
              Informática
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <p>© {new Date().getFullYear()} Agyl Informática. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm italic">Soluções inteligentes, suporte de confiança.</p>
        </div>
      </div>
    </footer>
  );
};
