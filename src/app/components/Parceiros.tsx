'use client';

import React from 'react';

export const Parceiros = () => {
  const logosLinha1 = [
    { src: "https://9f120530488000b76390390337117371.cdn.bubble.io/f1739452466381x226578497711117380/Logo-Lais-2025%202.svg", alt: "Logo 1" },
    { src: "/c2s.png", alt: "Logo 2" },
    { src: "/iconatus.png", alt: "Logo 3" },
    { src: "/rd.png", alt: "Logo 4" }
  ];

  const logosLinha2 = [
    { src: "https://s3.amazonaws.com/uploaded.prod.corretordireto/organization_logos/orulo_logos/orulo-logo.svg", alt: "Logo 5" },
    { src: "https://app.nidoadm.com.br/apresentacao/assets_static/images/logo_zoop.svg", alt: "Logo 1" },
    { src: "/clicksign.png", alt: "Logo 2" },
    { src: "https://app.nidoadm.com.br/apresentacao/assets_static/images/logo_spedy.svg", alt: "Logo 3" },
    { src: "/pjbank.png", alt: "Logo 4" }
  ];

  return (
    <section
      className="w-full bg-[url('/fundo-parceiros.png')] bg-center lg:bg-repeat-x lg:bg-contain lg:py-24 py-14 flex flex-col items-center justify-center"
    >
      {/* Container Centralizado */}
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-4">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl">
          <div className="text-center flex flex-col mx-4 lg:mx-0">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Parceiros
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Parcerias que vão impulsionar seu negócio imobiliário
            </h1>
            <p className="text-base text-gray-500 text-center">
              Com parcerias estratégicas, conectamos tecnologia, inovação e relacionamento para impulsionar resultados e crescer juntos no mercado imobiliário.
            </p>
          </div>
        </div>

        {/* Linha 1 - 4 Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 w-full mt-10">
          {logosLinha1.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center col-span-1 border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow duration-200"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Linha 2 - 5 Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8 w-full mt-8">
          {logosLinha2.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center col-span-1 border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition-shadow shadow-sky-500/10 duration-200"
            >
              <picture>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain"
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full mt-12">
          <a
            href="#"
            className="w-full lg:w-auto text-center transform rounded-md bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-600"
          >
            Quero ser parceiro
          </a>
          <a
            href="#"
            className="w-full lg:w-auto text-center transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors bg-white hover:bg-slate-50"
          >
            Quero saber mais
          </a>
        </div>

      </div>
    </section>
  );
};
