'use client';

import React from 'react';

export const SectionNIDOImovel = () => {

  return (
    <section className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        NIDOImóvel
      </h1>

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
      
        {/* Div de Texto */}
        <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2 mb-8">
<picture>
  <img src="/logo_imovel.png" alt="" className="w-1/2"/>
</picture>
<h1 className="text-4xl font-bold tracking-tight text-sky-500">
Gestão Imobiliária             
                </h1>
              </div>

              <p className="text-2xl text-sky-500">
                <span className='font-semibold'>O sistema mais completo do mercado imobiliário. </span>
               O NIDOImóvel foi desenvolvido em parceria com algumas das maiores operadoras do mercado imobiliário nacional. Dentre suas diversas funcionalidades, podemos destacar alguns diferenciais:
              </p>
            </div>
          </div>
        </div>

        {/* Div de Vídeo */}
        <div className="flex items-center lg:col-span-6">
        <div className="w-full h-full">
            <video className="w-full h-full rounded" controls>
              <source src="/video-nidoimovel.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};
