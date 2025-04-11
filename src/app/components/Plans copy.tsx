'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Plans = () => {
  return (
    <section className="bg-sky-500/5">
      <div className="container px-6 py-16 mx-auto max-w-7xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-sky-500">Planos NIDOTEC</h2>
            <p className="mt-4 text-sky-500">Planos adequados ao seu negócio imobiliário</p>
          </div>
        </div>

        <div className="grid gap-6 mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Plano Intro */}
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border bg-white hover:bg-sky-500/5">
            <p className="text-lg font-medium text-sky-500">NIDOImóvel</p>
            <h4 className="mt-2 text-4xl font-semibold text-sky-500">R$100 <span className="text-base font-normal text-sky-500">/ Mês</span></h4>
            <p className="mt-4 text-gray-500">Para empresas que querem otimizar a gestão imobiliária</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-500">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>

{/* Plano NIDOImóvel */}
<div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border hover:bg-gray-100">
  <p className="text-lg font-medium text-sky-500">NIDOAdm</p>
  <h4 className="mt-2 text-4xl font-semibold text-sky-500">R$139 <span className="text-base font-normal text-sky-500">/ Mês</span></h4>
  <p className="mt-4 text-gray-500">Um sistema voltado a administração de locações</p>

  <div className="mt-8 space-y-8">
    {[
      'Todos os links limitados',
      'Plataforma própria',
      'Suporte via chat',
      'Otimização de hashtags',
      'Usuários ilimitados'
    ].map((feature) => (
      <div key={feature} className="flex items-center">
        <FaCheckCircle className="w-5 h-5 text-sky-500" />
        <span className="mx-4 text-gray-500">{feature}</span>
      </div>
    ))}
  </div>

  <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
    Escolher plano
  </button>
</div>


          {/* Plano NIDOAdm */}
          <div className="px-6 py-4 transition-colors duration-200 transform bg-sky-500 rounded-lg">
            <p className="text-lg font-medium text-white">NIDOImóvel + NIDOAdm</p>
            <h4 className="mt-2 text-4xl font-semibold text-white">R$199 <span className="text-base font-normal text-white">/ Mês</span></h4>
            <p className="mt-4 text-white">Gestão imobiliária e administração de locações.</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-white" />
                  <span className="mx-4 text-white">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-sky-500 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>

{/* Plano Enterprise */}
<div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border hover:bg-gray-100">
  <p className="text-lg font-medium text-sky-500">Todos os Sistemas</p>
  <h4 className="mt-2 text-4xl font-semibold text-sky-500">R$399 <span className="text-base font-normal text-sky-500">/ Mês</span></h4>
  <p className="mt-4 text-gray-500">O sistema mais completo do mercado imobiliário</p>

  <div className="mt-8 space-y-8">
    {[
      'Todos os links limitados',
      'Plataforma própria',
      'Suporte via chat',
      'Otimização de hashtags',
      'Usuários ilimitados'
    ].map((feature) => (
      <div key={feature} className="flex items-center">
        <FaCheckCircle className="w-5 h-5 text-sky-500" />
        <span className="mx-4 text-gray-500">{feature}</span>
      </div>
    ))}
  </div>

  <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
    Escolher plano
  </button>
</div>

        </div>
      </div>
    </section>
  );
};
