'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Plans = () => {
  const plans = [
    {
      title: 'NIDOImóvel',
      price: 'R$100',
      description: 'Para empresas que querem otimizar a gestão imobiliária',
      image: '/logo-icone-nidoimovel.png',
      features: [
        'Cadastro de Imóveis',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Treinamentos Completos',
        'Suporte via telefone',
        'Base de Conhecimento',
      ],
    },
    {
      title: 'NIDOAdm',
      price: 'R$139',
      description: 'Um sistema voltado à administração de locações',
      image: '/logo-icone-nidoadm.png',
      features: [
        'Administrar Locações',
        'Emissão de Contratos',
        'Integração Bancária',
        'Treinamentos Completos',
        'Suporte via telefone',
        'Base de Conhecimento',
      ],
    },
    {
      title: 'NIDOImóvel + NIDOAdm',
      price: 'R$199',
      description: 'Gestão imobiliária e administração de locações.',
      image: '/imovel+adm.png',
      features: [
        'Sistema NIDOImóvel',
        'Sistema NIDOAdm',
        'Treinamentos Completos',
        'Suporte via telefone',
        'Base de Conhecimento',
        'Usuários personalizados',
      ],
    },
    {
      title: 'Todos os Sistemas',
      price: 'R$399',
      description: 'O sistema mais completo do mercado imobiliário',
      image: '/todos.png',
      features: [
        'Sistema NIDOImóvel',
        'Sistema NIDOAdm',
        'Site Padrão',
        'Suporte via telefone',
        'Base de Conhecimento',
        'Usuários personalizados',
      ],
    },
  ];

  return (
    <section className="relative lg:py-24 py-14 flex flex-col items-center justify-center bg-sky-500 px-4 lg:px-0 overflow-hidden">


      {/* Header */}
      <div className="relative z-10 mx-auto w-full items-center justify-center lg:max-w-3xl">
        <div className="text-center">
        <p className="text-lg font-medium leading-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
  Nossos planos
</p>

          <h1 className="mb-16 lg:text-4xl text-3xl font-bold tracking-tight text-white">
            Preços simples e transparentes para as necessidades do seu negócio imobiliário
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl">

{/* Top Right Circle */}
<div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>

{/* Bottom Left Circle */}
<div className="absolute bottom-[-80px] left-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>
        
        {plans.map(({ title, price, features, image }) => (
          <div
            key={title}
            className="bg-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="mb-7 pb-7 flex items-center border-b border-sky-500/50">
            <picture>
              <img
                src={image}
                alt={title}
                className="w-20"
              />
              </picture>
              <div className="ml-5">
                <span className="block text-2xl font-semibold text-sky-500">{title}</span>
                <span className="font-medium text-sky-500 text-xl align-top">{price}</span>
                <span className="text-sky-500 font-medium">/ Mês</span>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mx-auto w-full items-center justify-center lg:max-w-3xl pt-10">
        <div className="text-center">
          <p className="mt-3 text-lg leading-relaxed text-white">
            Personalize seu plano de acordo com as necessidades exclusivas do seu negócio imobiliário. Flexibilidade total para crescer do seu jeito.
          </p>
        </div>

        <div className="mt-6 flex flex-col lg:flex lg:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="transform rounded-md bg-white px-5 py-3 font-medium text-sky-500 transition-colors hover:bg-gray-100 text-center"
          >
            Personalizar do seu jeito
          </a>

          
        </div>
      </div>
    </section>
  );
};
