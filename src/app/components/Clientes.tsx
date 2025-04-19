'use client';

import Link from 'next/link';
import React from 'react';

const logosLinha1 = [
  { src: "/logo-imob-1.png", alt: "Logo 1" },
  { src: "/logo-imob-2.png", alt: "Logo 2" },
  { src: "/logo-imob-3.png", alt: "Logo 3" },
  { src: "/logo-imob-4.png", alt: "Logo 4" },
  { src: "/logo-imob-5.png", alt: "Logo 5" },
  { src: "/logo-imob-6.png", alt: "Logo 6" },
  { src: "/logo-imob-1.png", alt: "Logo 7" },
  { src: "/logo-imob-2.png", alt: "Logo 8" },
  { src: "/logo-imob-3.png", alt: "Logo 9" },
  { src: "/logo-imob-4.png", alt: "Logo 10" },
];

export const Clientes = () => {
  return (
    <section className="lg:py-24 py-14 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl relative">

        {/* Header */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl z-10 relative">
          <div className="text-center flex flex-col">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Clientes
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Soluções confiáveis para imobiliárias em todo o Brasil
            </h1>
            <p className="mb-10 text-base text-gray-500 text-center">
              Atendemos imobiliárias em todas as regiões do país, com excelência e inovação. <br />
              Nossos sistemas garantem eficiência, controle e crescimento sustentável. Confira alguns de nossos clientes:
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="relative flex flex-wrap justify-center items-center space-x-2 space-y-2 w-full z-10">
          {/* Círculos decorativos */}
          <div className="hidden sm:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-sky-500 rounded-full opacity-10 z-0" />
          <div className="hidden sm:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-52 h-52 bg-sky-500 rounded-full opacity-10 z-0" />

          {logosLinha1.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-28 sm:w-40 sm:h-32 md:w-44 md:h-36 lg:w-52 lg:h-40 flex items-center justify-center border rounded-lg shadow-sm bg-white transition-transform duration-300 hover:scale-105 shadow-sky-500/10 hover:shadow-md z-50"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 sm:h-16 md:h-20 object-contain"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-12 z-10 relative">
          <Link href="https://wa.me/5511953052059" target="_blank">
            <button className="px-6 py-3 text-white bg-sky-500 rounded-lg shadow-lg hover:bg-sky-600 transform transition-all duration-300 ease-in-out">
              Ver Mais Clientes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
