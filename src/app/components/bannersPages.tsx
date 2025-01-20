"use client";

import React from "react";

// Defina as propriedades que o componente Banner vai aceitar
interface BannerProps {
  mobileImage: string; // Caminho da imagem para mobile
  tabletImage: string; // Caminho da imagem para tablet
  desktopImage: string; // Caminho da imagem para desktop
  imageText: string; // Texto que aparece sobre a imagem
}

export const BannerPages: React.FC<BannerProps> = ({ mobileImage, tabletImage, desktopImage, imageText }) => {
  return (
    <div className="relative w-full h-96 lg:h-[30rem] overflow-hidden shadow-lg">
      {/* Imagens responsivas para diferentes tamanhos de tela */}
      <picture>
      <img
        src={mobileImage} // Imagem padrão para mobile
        alt="Imagem do banner"
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden" // visível apenas em mobile
      />
      </picture>
      <picture>
      <img
        src={tabletImage} // Imagem para tablet
        alt="Imagem do banner"
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block lg:hidden" // visível apenas em tablet
      />
      </picture>
      <picture>
      <img
        src={desktopImage} // Imagem para desktop
        alt="Imagem do banner"
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block" // visível apenas em desktop
      />
      </picture>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold">{imageText}</h2>
      </div>
    </div>
  );
};
