"use client"

import Link from "next/link";

// Componente Banner
export const Banner = () => {
  return (
    <section className="lg:my-20 my-5 flex flex-col items-center justify-center bg-white">
      <div className="container px-4 mx-auto max-w-7xl relative">

        {/* Versão Desktop: Lista à esquerda e Imagem à direita */}
        <div className="lg:flex gap-8 lg:flex-row w-full hidden">

          {/* Lista à esquerda (Desktop) */}
          <div className="lg:w-1/2 w-full">
            {/* Título */}
            <h1 className="text-4xl max-w-lg lg:text-5xl font-bold text-sky-500">
              Solução inovadora para a gestão imobiliária
            </h1>

            {/* Descrição */}
            <p className="mt-6 text-xl max-w-lg text-justify leading-8 text-gray-700">
              Um CRM exclusivo que oferece integração completa, com gerenciamento de imóveis, administração de locações, e sites para imobiliárias
            </p>

            {/* Botão para falar com um especialista */}
            <div className="mt-6 flex items-center">
              <Link href='https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+estou+visitando+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+nido&type=phone_number&app_absent=0' target="_blank"
            className="relative border border-sky-500 text-sky-500 px-5 py-2.5 rounded-md inline cursor-pointer before:bg-sky-500 hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            Fale com um especialista
          </Link>
            </div>
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full flex justify-center relative">
            <picture>
              <img
                src="https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75"
                alt="App screenshot"
                className="w-full -bottom-10 relative scale-[1.40] z-10"
              />
            </picture>
          </div>

        </div>

        {/* Versão Mobile */}
        <div className="lg:hidden w-full p-4">

          {/* Título para Mobile */}
          <h1 className="text-3xl font-bold tracking-tight text-sky-500 text-center">
            Solução inovadora para gestão de imóveis e imobiliárias
          </h1>

          {/* Imagem no Mobile */}
          <div className="mt-5">
            <picture>
              <img
                src="https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75"
                alt="App screenshot"
                className="w-full"
              />
            </picture>
          </div>

          {/* Descrição para Mobile */}
          <p className="mt-10 text-lg text-center leading-8 text-gray-700">
            Um CRM exclusivo que oferece integração completa, com gerenciamento de imóveis, administração de locações e Sites para imobiliárias
          </p>

          {/* Botão para Mobile */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <Link href='https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+estou+visitando+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+nido&type=phone_number&app_absent=0' target="_blank"
            className="relative border border-sky-500 text-sky-500 px-5 py-2.5 rounded-md inline cursor-pointer before:bg-sky-500 hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            Fale com um especialista
          </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
