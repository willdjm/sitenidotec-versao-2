"use client"

import { FaRegCirclePlay } from "react-icons/fa6";

export const About = () => {
  return (
    <section className="lg:py-24 py-14 flex flex-col items-center justify-center bg-sky-500">
      <div className="container lg:px-0 px-4 mx-auto max-w-7xl">

        {/* Conteúdo com Flex para os ícones */}
        <div className="lg:flex lg:flex-row lg:items-center flex flex-col-reverse lg:gap-4 gap-8">
          <div className="w-full lg:w-1/2 ">
            <p className="text-lg text-center lg:text-left font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
              Sobre nós
            </p>
            <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-bold text-white">
              Há mais de 30 anos especializada em soluções tecnológicas para o ramo imobiliário
            </h1>
            <div className="my-5 flex items-center justify-center lg:justify-start">
              <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-white rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
            </div>
            <p className="text-xl text-white text-justify">
              Sua experiência no setor imobiliário, torna a{" "}
              <span className="font-semibold">NIDOTEC HUB IMOBILIÁRIA</span> uma das principais fornecedoras de software de gestão imobiliária do país. Com um suporte de alto nível, a empresa investe na capacitação de sua equipe técnica e administrativa, utilizando metodologias modernas de gestão e engenharia de software, garantindo as melhores soluções para seus clientes.
            </p>

            <div className="mt-8 lg:mt-4 flex flex-col lg:flex lg:flex-row items-center gap-8 lg:gap-4 w-full ">
              <a href="#" className="flex items-center justify-center text-sm font-medium leading-6 text-white">
                <FaRegCirclePlay className="text-4xl mr-2 font-normal" />
                Veja nossa apresentação
              </a>

              <p className="text-xl text-white text-justify hidden lg:block">|</p>

              <a
                href="#"
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Conheça mais...
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative"> {/* Classe "relative" para a posição dos círculos */}
            {/* Círculo superior direito */}
            <div className="absolute lg:top-[-50px] lg:right-[-80px] lg:w-[200px] lg:h-[200px] h-28 w-28 -top-12 -right-2 bg-white rounded-full opacity-10 z-0"></div>

            {/* Círculo inferior esquerdo */}
            <div className="absolute lg:bottom-[-95px] lg:left-[-50px] lg:w-[200px] lg:h-[200px] h-28 w-28 bottom-10 -left-4 bg-white rounded-full opacity-10 z-0"></div>

            <div className="flex items-center justify-center w-full relative z-10">
              <div className="flex flex-col items-end px-3">
                {/* Imagens com z-index maior */}
                <img
                  className="object-cover mb-6 rounded shadow-lg h-32 sm:h-48 xl:h-64 w-32 sm:w-48 xl:w-64 z-10"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                  alt=""
                />
                <img
                  className="object-cover w-28 h-28 rounded shadow-lg sm:h-32 xl:h-48 sm:w-32 xl:w-48 z-10"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt=""
                />
              </div>

              <div className="px-3">
                <img
                  className="object-cover w-48 h-48 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-96 sm:w-full xl:w-96 z-10"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
