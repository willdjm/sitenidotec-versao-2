"use client"




export const Banner = () => {


  return (
    <section className="lg:py-24 py-14 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl mb-12">
          <div className="text-center flex flex-col">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Notícias
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Oferecemos um processo eficiente e integrado com a simplicidade que você precisa.
            </h1>
            <p className="mb-10 text-base text-gray-500 text-center">
              Nosso blog está repleto de materiais para ajudar no seu dia a dia e proporcionar uma visão mais profunda sobre nossos produtos, aprimorando sua gestão de vendas e conhecimento do mercado
            </p>
          </div>
        </div>

        {/* Desktop Version - Lista à esquerda e Imagem à direita */}
        <div className="lg:flex lg:flex-row w-full hidden">

          {/* Lista à esquerda (Desktop) */}
          <div className="lg:w-1/2 w-full p-4 lg:pr-8 lg:pb-0">
aaaaaaaaaaaaaaaaa
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full p-4 flex justify-center">
              <img
                src='https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75'
                alt='aaa'
                className="max-w-full h-auto rounded-lg transition-all duration-500 ease-in-out opacity-100 transform"
              />
            
          </div>
        </div>


      </div>
    </section>
  );
};



















"use client"

import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-sky-500">
      <div className="mx-auto max-w-7xl px-6  lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            YOUR GATEWAY TO THE WORLD OF KNOWLEDGE
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore the depths of scientific and research work and stay informed of the latest developments in knowledge..
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Ajustando a imagem para ficar justa na página */}
        <div className="mx-auto ">
          <div className="max-w-none">
            <picture>
              <img
                src="https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75"
                alt="App screenshot"
                className="w-full h-auto object-cover" // Corrigido para preencher a largura corretamente
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
