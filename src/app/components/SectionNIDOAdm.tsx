'use client';

import Link from 'next/link';
import React from 'react';
import { FaStar, FaCaretUp } from 'react-icons/fa'; // Importando o ícone de estrela

export const SectionNIDOAdm = () => {
  return (
    <section className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        NIDOAdm
      </h1>

      <div className="flex flex-col-reverse md:flex lg:flex-row lg:gap-8">
        
        {/* Div de Vídeo */}
        <div className="flex items-center lg:col-span-6 mt-5 lg:mt-0">
          <div className="w-full h-full">
            <video className="w-full h-full rounded" controls>
              <source src="/video-nidoimovel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Div de Texto */}
        <div className="px-6 md:max-w-2xl lg:col-span-6 lg:flex">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <picture>
                  <img src="/logo-adm.png" alt="" className="w-full md:w-1/2 mb-5 md:mb-0" />
                </picture>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-sky-500">
                Administração de Locações
              </h1>
              <p className="text-xl text-sky-500">
                Gestão das locações na palma da mão. Com o NIDOAdm, imobiliárias e proprietários ganham ampla gestão e facilidade na administração de locações.
              </p>
            </div>

            <div className="grid md:flex space-x-4 text-white">
              <div className='flex items-center justify-center space-x-2 mb-5 lg:mb-0'>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex flex-shrink-0 -space-x-1">
                    <img
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/29.jpg"
                      alt="User 1"
                    />
                    <img
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/90.jpg"
                      alt="User 2"
                    />
                    <img
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="User 3"
                    />
                    <img
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                      alt="User 4"
                    />
                    <img
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/29.jpg"
                      alt="User 1"
                    />
                  </div>

                  <span className="flex-shrink-0 text-xs font-medium leading-5 text-sky-500">+715</span>
                </div>

                <div className=" h-4 border-l border-sky-500"></div>

                <div className="flex items-center">
                  {/* Substituindo os SVGs por ícones do react-icons */}
                  <FaStar className="h-4 w-4 text-yellow-500" />
                  <FaStar className="h-4 w-4 text-yellow-500" />
                  <FaStar className="h-4 w-4 text-yellow-500" />
                  <FaStar className="h-4 w-4 text-yellow-500" />
                  <FaStar className="h-4 w-4 text-yellow-500" />
                </div>
              </div>

              <div className="hidden md:blok h-4 border-l border-gray-700"></div>

              <Link href='/nidoadm'
                className="inline-flex items-center justify-center rounded-lg border border-sky-500 text-sky-500 font-semibold px-6 py-3 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out"
              >
                {/* Imagem dentro do botão */}
                <picture>
                  <img
                    src="/logo-icone-nidoadm.png"
                    alt="Logo Icone NIDOAdm"
                    className="h-full w-8"
                  />
                </picture>
                {/* Texto dentro do botão */}
                <div className='flex flex-col mx-6 md:mx-4'>
                  <span className="text-xs">Conheça mais</span>
                  <span className="text-base">NIDOAdm</span>
                </div>

                {/* Ícone no final do botão */}
                <FaCaretUp size={20} />

              </Link>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
