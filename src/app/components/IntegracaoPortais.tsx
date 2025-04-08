'use client';

import React from 'react';

export const IntegracaoPortais = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="container max-w-7xl flex flex-col-reverse px-4 py-10 mx-auto lg:py-16 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              {/* Título com cor sky-500 */}
              <p className="text-3xl group relative w-max lg:max-w-md font-semibold">
                <span className="text-2xl lg:text-3xl relative z-10">Integre automaticamente</span>
                <span className="absolute left-0 bottom-0 w-full h-2 transition-all bg-sky-500 z-0 group-hover:h-4 "></span>
              </p>

              {/* Descrição principal */}
              <div className="lg:w-max lg:max-w-md font-semibold">
                <p className="text-2xl lg:text-3xl flex items-center text-gray-700 dark:text-gray-200">
                  todos os leads gerados nos canais de divulgação de imóveis com o seu CRM.
                </p>

                <p className="text-xl lg:text-2xl flex items-center text-gray-700 dark:text-gray-200 mt-5">
                  Receba os leads dos portais imobiliários, do site próprio da sua Imobiliária e dos anúncios no Meta Ads diretamente no seu CRM, distribuindo para seus corretores em tempo real para agilizar seu atendimento.
                </p>

                <p className="flex font-bold text-5xl flex-col text-sky-500 dark:text-gray-200 mt-5">
                  867.514+
                  <span className="text-base text-gray-500 font-normal">leads conectados diretamente nos CRMs.</span>
                </p>

                {/* Botão */}
                <div className="flex">
                  <button className="mt-4 font-semibold leading-none text-white py-4 px-6 bg-sky-500 rounded hover:bg-sky-600 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:outline-none">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem responsiva */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img className="w-[32rem] mx-auto rounded-md lg:max-w-2xl" src="/img-integracao-portais.webp" alt="Imagem ilustrativa" />
          </div>
        </div>
      </section>
    </>
  );
};
