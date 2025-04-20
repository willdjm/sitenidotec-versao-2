"use client";

import { FaRegCirclePlay } from "react-icons/fa6";
import { useState } from "react";

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="lg:py-16 py-14 flex flex-col items-center justify-center bg-sky-500">
      <div className="container lg:mb-20 lg:px-0 px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-8 w-full flex items-center justify-center lg:max-w-3xl">
          <picture>
            <img src='/logonovo.png' alt='' className="" />
          </picture>
        </div>

        {/* Conteúdo com Flex para os ícones */}
        <div className="lg:flex lg:flex-row lg:items-center flex flex-col-reverse lg:gap-4 gap-8">
          <div className="w-full lg:w-1/2 ">

            <h1 className="text-3xl text-left lg:text-5xl font-bold text-white">
              Há mais de 30 anos especializada em soluções tecnológicas para o ramo imobiliário
            </h1>
            <div className="my-5 flex items-center justify-start">
              <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
            </div>
            <p className="text-xl text-white text-justify">
              Sua experiência no setor imobiliário, torna a{" "}
              <span className="font-semibold text-base">NIDOTEC HUB IMOBILIÁRIA</span> uma das principais fornecedoras de software de gestão imobiliária do país. Com um suporte de alto nível, a empresa investe na capacitação de sua equipe técnica e administrativa, utilizando metodologias modernas de gestão e engenharia de software, garantindo as melhores soluções para seus clientes.
            </p>

            <div className="mt-8 flex flex-col lg:flex lg:flex-row items-center gap-8 lg:gap-4 w-full ">
              <a
                onClick={openModal}
                className="flex items-center justify-center text-sm font-medium leading-6 text-white cursor-pointer"
              >
                <FaRegCirclePlay className="text-4xl mr-2 font-normal" />
                Veja nossa apresentação
              </a>

              <p className="text-xl text-white text-justify hidden lg:block">|</p>

              <a
                href="#"
                className="rounded-md bg-white lg:px-8 px-16 py-3 text-sm font-semibold text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Conheça mais...
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Círculo superior direito */}
            <div className="absolute lg:top-[-50px] lg:right-[-80px] lg:w-[200px] lg:h-[200px] h-28 w-28 -top-0 -right-2 bg-white rounded-full opacity-10 z-0"></div>

            {/* Círculo inferior esquerdo */}
            <div className="absolute lg:bottom-[-95px] lg:left-[-50px] lg:w-[200px] lg:h-[200px] h-28 w-28 -bottom-6 -left-4 bg-white rounded-full opacity-10 z-0"></div>

            <div className="flex items-center justify-center w-full relative z-10">
              <div className="flex flex-col items-end px-3">
                <picture>
                  <img
                    className="object-cover mb-6 rounded shadow-lg h-32 sm:h-48 xl:h-64 w-32 sm:w-48 xl:w-64 z-10"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                    alt=""
                  />
                </picture>
                <picture>
                  <img
                    className="object-cover w-28 h-28 rounded shadow-lg sm:h-32 xl:h-48 sm:w-32 xl:w-48 z-10"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                    alt=""
                  />
                </picture>
              </div>

              <div className="px-3">
                <picture>
                  <img
                    className="object-cover w-48 h-48 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-96 sm:w-full xl:w-96 z-10"
                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {isModalOpen && (
  <div
    className="fixed inset-0 lg:bg-sky-500/50 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div
      className="relative lg:bg-white lg:p-5 p-1 rounded-lg w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full pt-[56.25%]">
        {isModalOpen && (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="Vídeo de apresentação"
          />
        )}
      </div>
      {/* Botão Fale Conosco */}
    </div>
  </div>
)}

    </section>
  );
};
