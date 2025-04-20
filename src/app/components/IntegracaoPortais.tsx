'use client';

import Link from 'next/link';
import React from 'react';

export const IntegracaoPortais = () => {
  const logosLinha1 = [
    { src: "/imovelweb.png", alt: "Logo 1" },
    { src: "/grupozap.png", alt: "Logo 2" }
  ];

  const logosLinha2 = [
    { src: "/vivareal.png", alt: "Logo 5" },
    { src: "/casamineira.png", alt: "Logo 1" },
    { src: "/dfimoveis.png", alt: "Logo 2" }
  ];

  const logosLinha4 = [
    { src: "/loft.png", alt: "Logo 3" },
    { src: "/spimovel.png", alt: "Logo 4" }
  ];

  const logosLinha5 = [
    { src: "/iconatus.png", alt: "Logo 6" }
  ];

  return (
<section
  className="w-full lg:py-24 py-14 flex flex-col items-center justify-center bg-sky-500"
>
  {/* Container Centralizado */}
  <div className="flex flex-col w-full max-w-screen-xl mx-auto px-4 relative">
    <div className="lg:flex flex flex-col gap-8 lg:flex-row w-full">
      {/* Lista à esquerda (Desktop) */}
      <div className="lg:w-1/2 w-full">
        <h1 className="text-4xl text-center lg:text-left lg:max-w-lg lg:text-5xl font-bold text-white">
          Integração com os principais portais do mercado imobiliário
        </h1>
        <p className="mt-6 text-xl max-w-lg lg:text-justify text-center leading-8 text-white">
          Ajudamos seu negócio imobiliário a se conectar com os portais de maior destaque no mercado.
          Com nossas integrações, sua visibilidade e alcance se ampliam, proporcionando novas oportunidades de negócios e crescimento
        </p>

        <p className="mt-2 text-center lg:text-left text-sm w-full max-w-lg leading-8 text-white">
          *Entre em contato para saber as condições
        </p>

        {/* Botão Fale com um especialista */}
        <div className="lg:flex justify-center lg:justify-start mt-5 hidden">
          <Link href="https://wa.me/5511953052059" target="_blank">
            <button className="px-6 py-2 text-sky-500 bg-white rounded-md hover:scale-105 transform transition-all duration-300">
              Fale com um especialista
            </button>
          </Link>
        </div>
      </div>

      {/* Imagem à direita (Desktop) */}
      <div className="lg:w-1/2 w-full flex flex-col items-center gap-4 justify-center">

        {/* Círculo superior direito */}
        <div className="absolute lg:top-[-0px] lg:right-[-20px] lg:w-[200px] lg:h-[200px] h-28 w-28 -top-10 right-2 bg-white rounded-full opacity-10 z-10"></div>

        {/* Linha 1 - 2 Logos */}
        <div className="flex flex-col lg:flex lg:flex-row gap-4 w-full items-center justify-center relative z-20">
          {logosLinha1.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-200 lg:w-52 w-64 h-20 overflow-hidden"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-cover"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Linha 2 - 3 Logos */}
        <div className="flex flex-col lg:flex lg:flex-row gap-4 w-full items-center justify-center relative z-20">
          {logosLinha2.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-200 lg:w-52 w-64 h-20 overflow-hidden"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-cover"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Linha 4 - 2 Logos */}
        <div className="hidden lg:flex gap-4 w-full justify-center relative z-20">
          {logosLinha4.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-200 lg:w-52 w-64 h-20 overflow-hidden"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-cover"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Linha 5 - 1 Logo */}
        <div className="hidden lg:flex gap-4 w-full justify-center relative z-20">
          {logosLinha5.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-200 lg:w-52 w-64 h-20 overflow-hidden"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-cover"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Botão Fale com um especialista */}
        <div className="lg:hidden justify-center lg:justify-start mt-5 flex">
          <Link href="https://wa.me/5511953052059" target="_blank">
            <button className="px-6 py-2 text-sky-500 bg-white rounded-md hover:scale-105 transform transition-all duration-300">
              Fale com um especialista
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  </div>
</section>



  );
};
