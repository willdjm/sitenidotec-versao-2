'use client';

import React from 'react';

export const Parceiros = () => {
  return (
    <section className="lg:py-24 py-14 flex flex-col max-w-screen-xl mx-auto items-center justify-center">
      
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


      {/* Logo Grid */}
      <div className="grid grid-cols-1 lg:my-16 my-5 gap-8 md:grid-cols-3 lg:grid-cols-5 w-full px-4 lg:px-0">
        
        {/* Logo Item */}
        {[
          { src: "https://9f120530488000b76390390337117371.cdn.bubble.io/f1739452466381x226578497711117380/Logo-Lais-2025%202.svg", alt: "Logo 1" },
          { src: "/c2s.png", alt: "Logo 2" },
          { src: "/iconatus.png", alt: "Logo 3" },
          { src: "/rd.png", alt: "Logo 4" },
          { src: "https://s3.amazonaws.com/uploaded.prod.corretordireto/organization_logos/orulo_logos/orulo-logo.svg", alt: "Logo 5" }
        ].map((logo, index) => (
          <div key={index} className="flex items-center justify-center col-span-1">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 object-contain px-4"
            />
          </div>
        ))}

      </div>


{/* Header Section */}
<div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full px-4">
  <a
    href="#"
    className="w-full lg:w-auto text-center transform rounded-md bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-600"
  >
    Quero ser parceiro
  </a>
  <a
    href="#"
    className="w-full lg:w-auto text-center transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
  >
    Quero saber mais
  </a>
</div>

   
    </section>
  );
};
