'use client'; // Adicione esta linha para garantir que o componente seja renderizado no lado do cliente

import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4">
      {/* WhatsApp */}
      <a href="https://wa.me/551145083724" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <FaWhatsapp size={24} />
        </button>
      </a>

      {/* Botão de Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="scroll-mt-28 bg-gradient-to-r from-sky-600 to-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-colors"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

