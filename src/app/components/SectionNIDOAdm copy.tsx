'use client';

import React from 'react';

export const SectionNIDOAdm = () => {

  return (
    <section className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        NIDOAdm
      </h1>

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
      
        {/* Div de Texto */}
        <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left lg:order-last">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2 mb-12">
                <picture>
                  <img src="/logo-adm.png" alt="" className="w-1/2"/>
                </picture>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-sky-500">
                Administração de Locações
              </h1>
              <p className="text-2xl text-sky-500">
                Gestão das locações na palma da mão. Com o NIDOAdm, imobiliárias e proprietários ganham ampla gestão e facilidade na administração de locações.
              </p>
              <button className="px-6 py-3 text-lg font-semibold text-white bg-sky-500 rounded-lg shadow-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50">
            Saiba Mais
          </button>
            </div>
          </div>
        </div>

        {/* Div de Vídeo */}
        <div className="flex flex-col items-center lg:col-span-6 lg:order-first">
          <div className="w-full h-full mb-4">
            <video className="w-full h-full rounded-lg shadow-lg" controls>
              <source src="/video-nidoadm.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>
    </section>
  );
};
