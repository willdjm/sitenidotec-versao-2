'use client';

import React from 'react';

export const IntegracaoPortais = () => {

  const PortaisDesktop = [
    { src: "/vivareal.png", alt: "Logo 5" },
    { src: "/casamineira.png", alt: "Logo 1" },
    { src: "/dfimoveis.png", alt: "Logo 2" },
    { src: "/imovelweb.png", alt: "Logo 1" },
    { src: "/grupozap.png", alt: "Logo 2" },
    { src: "/loft.png", alt: "Logo 3" },
    { src: "/spimovel.png", alt: "Logo 4" },
    { src: "/iconatus.png", alt: "Logo 6" },
    { src: "/vivareal.png", alt: "Logo 5" },
    { src: "/casamineira.png", alt: "Logo 1" },
    { src: "/dfimoveis.png", alt: "Logo 2" },
    { src: "/imovelweb.png", alt: "Logo 1" },
    { src: "/grupozap.png", alt: "Logo 2" },
    { src: "/loft.png", alt: "Logo 3" },
    { src: "/spimovel.png", alt: "Logo 4" },
  ];




  return (
    <section id='integracoes' className="bg-gradient-to-bl from-sky-500 to-sky-600 lg:py-16 py-5 flex flex-col items-center justify-center bg-gr overflow-hidden">

      <div className="container px-2 sm:px-4 mx-auto max-w-7xl relative">

        {/* Header */}
        <div className="mx-auto w-full items-center justify-center z-10 relative">
          <div className="text-center flex flex-col">

            <picture>
              <img
                src="/logo-icone-nidoimovel.png"
                alt="App screenshot"
                className="w-10 mx-auto"
              />
            </picture>

            <p className="text-lg font-medium leading-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
              Integrações
            </p>
            <h1 className="lg:text-4xl text-3xl font-bold tracking-tight lg:max-w-3xl mx-auto text-white">
              Integração com os principais portais do mercado imobiliário
            </h1>
            <div className="my-5 mx-auto flex items-center justify-start">
              <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
            </div>

            <p className="text-base text-white text-center lg:max-w-4xl mx-auto">
              Ajudamos seu negócio imobiliário a se conectar com os portais de maior destaque no mercado.
              Com nossas integrações, sua visibilidade e alcance se ampliam, proporcionando novas oportunidades de negócios e crescimento
            </p>
          </div>
        </div>

        {/* Portais DESKTOP */}
        <div className="relative mt-10 mb-16 lg:flex lg:flex-wrap grid grid-cols-2 items-center justify-center justify-items-center lg:gap-5 gap-2 w-full z-10">

          {/* Top Right Circle */}
          <div className="absolute top-[-90px] right-[-30px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>

          {/* Bottom Left Circle */}
          <div className="absolute bottom-[-90px] left-[-30px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>

          {PortaisDesktop.map((logo, index) => (
            <div
              key={index}
              className="lg:w-52 w-40 h-20 lg:p-4 p-1 flex items-center justify-center border rounded-lg shadow-sm bg-white transition-transform duration-300 hover:scale-105 shadow-sky-500/10 hover:shadow-md z-50"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className=""
                />
              </picture>
            </div>
          ))}
        </div>


        <p className="text-sm text-white text-center my-10 lg:my-0">
          *Entre em contato para saber condições
        </p>

      </div>
    </section>
  );
};
