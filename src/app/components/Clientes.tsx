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
  { src: "/logo-imob-5.png", alt: "Logo 5" },
  { src: "/logo-imob-6.png", alt: "Logo 6" },
];

export const Clientes = () => {
  return (
    <section id='clientes' className=" bg-[url('/fundo-parceiros.png')] bg-center lg:bg-repeat-x lg:bg-contain lg:py-16 py-5 flex flex-col items-center justify-center bg-white overflow-hidden">

      <div className="container px-2 sm:px-4 mx-auto max-w-7xl relative">

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
              Atendemos imobiliárias em todas as regiões do país, com excelência e inovação.
              Nossos sistemas garantem eficiência, controle e crescimento sustentável. Confira alguns de nossos clientes:
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="relative flex flex-wrap justify-center gap-2 w-full z-10">

          {logosLinha1.map((logo, index) => (
            <div
              key={index}
              className="w-40 h-28 sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-44 lg:h-28 flex items-center justify-center border rounded-lg shadow-sm bg-white transition-transform duration-300 hover:scale-105 shadow-sky-500/10 hover:shadow-md z-50"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 sm:h-16 md:h-16 object-contain"
                />
              </picture>
            </div>
          ))}
        </div>

          {/* Botões */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            {/* Botão para falar com um especialista */}
            <Link href='#' target="_blank"
            className="relative border border-sky-500 text-sky-500 px-5 py-3 rounded-md inline cursor-pointer before:bg-sky-500 hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            Ver mais clientes
          </Link>
          </div>

      </div>
    </section>
  );
};
