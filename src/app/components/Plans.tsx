'use client';  // Indica que o código usa recursos específicos do lado do cliente (React)

import Link from 'next/link';  // Importa o componente Link do Next.js para navegação
import React from 'react';  // Importa o React para o uso de JSX
import { FaCheckCircle } from 'react-icons/fa';  // Importa o ícone de check-circle para exibir nas features

export const Plans = () => {
  // Array de objetos contendo os planos
  const plans = [
    {
      title: 'NIDOImóvel',  // Título do plano
      price: 'R$100',  // Preço do plano
      description: 'Para empresas que querem otimizar a gestão imobiliária',  // Descrição do plano
      image: '/logo-icone-nidoimovel.png',  // Caminho da imagem do plano
      features: [  // Lista de features do plano
        'Cadastro de Imóveis',
        'Cadastro de Clientes',
        'Integração com Portais',
        'Treinamentos Completos',
        'Suporte via telefone',
        'Base de Conhecimento',
      ],
      link: 'https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+estou+visitando+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+nido+imovel&type=phone_number&app_absent=0', // Link para o WhatsApp
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
      link: 'https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+gostaria+de+mais+informações+sobre+o+plano+NIDOAdm&type=phone_number&app_absent=0',  // Link para o WhatsApp
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
      link: 'https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+gostaria+de+mais+informações+sobre+o+plano+NIDOIm%C3%B3vel+%2B+NIDOAdm&type=phone_number&app_absent=0',  // Link para o WhatsApp
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
      link: 'https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+gostaria+de+mais+informações+sobre+o+plano+Todos+os+Sistemas&type=phone_number&app_absent=0',  // Link para o WhatsApp
    },
  ];

  return (
    <section id='planos' className="scroll-pt-10 relative lg:py-24 py-14 flex flex-col items-center justify-center bg-gradient-to-r from-sky-600 to-sky-500 px-4 lg:px-0 overflow-hidden">
      
      {/* Header - Título e descrição do section */}
      <div className="relative z-10 mx-auto w-full items-center justify-center lg:max-w-3xl">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
            Planos
          </p>
          <h1 className="mb-16 lg:text-4xl text-3xl font-bold tracking-tight text-white">
            Preços simples e transparentes para as necessidades do seu negócio imobiliário
          </h1>
        </div>
      </div>

      {/* Cards - Exibe os planos */}
      <div className="relative z-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl">
        
        {/* Círculos decorativos no fundo */}
        <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>
        <div className="absolute bottom-[-80px] left-[-80px] w-[200px] h-[200px] bg-white rounded-full opacity-10 z-0"></div>

        {/* Mapeia cada plano e exibe seus detalhes */}
        {plans.map(({ title, price, features, image, link }) => (
          <div
            key={title}
            className="bg-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-4"
          >
            {/* Exibe a imagem, título e preço do plano */}
            <div className="mb-7 pb-7 flex items-center border-b border-sky-500/50">
              <picture>
                <img src={image} alt={title} className="w-20" />
              </picture>
              <div className="ml-5">
                <span className="block text-2xl font-semibold text-sky-500">{title}</span>
                <span className="font-medium text-sky-500 text-xl align-top">{price}</span>
                <span className="text-sky-500 font-medium">/ Mês</span>
              </div>
            </div>

            {/* Lista de features do plano */}
            <div className="mt-8 space-y-3 lg:space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Botão para escolher o plano, redirecionando para o WhatsApp */}
            <Link href={link} target="_blank">
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
                Escolher plano
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Footer - Texto adicional e link para personalizar planos */}
      <div className="relative z-10 mx-auto w-full items-center justify-center lg:max-w-3xl pt-10">
        <div className="text-center">
          <p className="mt-3 text-lg leading-relaxed text-white">
            Personalize seu plano de acordo com as necessidades exclusivas do seu negócio imobiliário. Flexibilidade total para crescer do seu jeito.
          </p>
        </div>

        {/* Link para personalizar o plano */}
        <div className="mt-6 flex items-center mx-auto justify-center">
          <Link
            href="https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+estou+visitando+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+personalizar+o+plano&type=phone_number&app_absent=0"
            target="_blank"
            className="relative border border-white text-white px-5 py-3 rounded-md inline cursor-pointer before:bg-white hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
          >
            Personalize do seu jeito
          </Link>
        </div>
      </div>
    </section>
  );
};
