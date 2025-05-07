'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi'; // Ícone de acesso
import React from 'react';

// Array de dados para os cards
const cardData = [
  {
    id: 1,
    title: "Você sabia que a NIDO faz parte do Grupo Porto Seguro?",
    description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    imgSrc: "https://s3.amazonaws.com/static.nidoimovel.com.br/7143d7fbadfa4693b9eec507d9d37443/imovel/GB/GB38533/GB38533008.jpg?1737546401", 
    link: "https://www.nido.com.br"
  },
  {
    id: 2,
    title: "A NIDO está fazendo aniversário, mas quem ganha o presente é você!",
    description: "UI/UX design is all about making the experience seamless.",
    imgSrc: "https://s3.amazonaws.com/static.nidoimovel.com.br/5c572eca050594c7bc3c36e7e8ab9550/imovel/MI/MI80147/dbedd6c2930ecced598441745afdc97e.jpg?1624136125",
    link: "https://www.nido.com.br"
  },
  {
    id: 3,
    title: "Você conhe o Aluguel Garantido Porto?",
    description: "Mastering the creative process is key to producing designs that stand out and perform well.",
    imgSrc: "https://s3.amazonaws.com/static.nidoimovel.com.br/7143d7fbadfa4693b9eec507d9d37443/imovel/GB/GB27846/4d01ce681731739a15e9890fb1ff5986.jpg?1575994941", 
    link: "https://www.nido.com.br"
  }
];

export const Notices = () => {
  return (
    <section id='blog' className="scroll-mt-20 lg:py-24 py-14 flex flex-col items-center justify-center bg-gradient-to-bl from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl">
          <div className="text-center flex flex-col ">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Notícias
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
            Impulsione sua imobiliária com conteúdos que fazem a diferença
            </h1>
            <p className="mb-10 text-base text-gray-500 text-center">
            Nosso blog está repleto de materiais para ajudar no seu dia a dia e proporcionar uma visão mais profunda sobre nossos produtos, aprimorando sua gestão de vendas e conhecimento do mercado
            </p>
          </div>
        </div>

        {/* Geração dos cards a partir do array */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <Link key={card.id} href={card.link} target="_blank" passHref>
              <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-sky-500/10 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <picture>
                  <img src={card.imgSrc} alt={card.title} className="object-cover w-full h-48" />
                  </picture>
                </div>
                <div className="p-6">
                  <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-sky-500">
                    {card.title}
                  </h4>
                  <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-500">
                    {card.description}
                  </p>
                  {/* Link de "Acessar conteúdo" com ícone */}
                  <div className="mt-4">
                    <button className="relative group py-1.5 px-2.5 text-sky-500">
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full group-hover:transition-all group-hover:duration-500"></span>
                      Acessar conteúdo
                      <FiArrowRight className="ml-2 inline-block text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-12">
        <Link href='#' target="_blank"
            className="relative border border-sky-500 text-sky-500 px-6 py-2 rounded-md inline cursor-pointer before:bg-sky-500 hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            Ver notícias
          </Link>
        </div>
      </div>
    </section>
  );
};
