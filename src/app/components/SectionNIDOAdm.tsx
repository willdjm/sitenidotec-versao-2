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
              <div className="space-y-2">
                <picture>
                  <img src="/logo-adm.png" alt="" />
                </picture>
                <h1 className="text-4xl font-bold tracking-tight text-sky-500 sm:text-5xl md:text-6xl">
                  Wireless Bluetooth Earbuds
                </h1>
              </div>

              <p className="text-base text-sky-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Immerse yourself in superior audio quality with the StellarGlo Wireless
                Bluetooth Earbuds. These sleek and lightweight earbuds deliver crystal-clear
                sound and rich bass.
              </p>
            </div>
          </div>
        </div>

        {/* Div de Vídeo */}
        <div className="flex items-center lg:col-span-6 lg:order-first">
          <div className="w-full h-full">
            <video className="w-full h-full object-cover rounded-lg" controls>
              <source src="https://pagedone.io/asset/uploads/1705298724.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};
