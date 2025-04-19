"use client";

import { FaBeer, FaRegLifeRing, FaQuestionCircle } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export const Produtos = () => {
  return (
    <section className="lg:py-24 py-14 flex flex-col items-center justify-center bg-sky-500 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl mb-12">
          <div className="text-center flex flex-col">
            <h1 className="lg:text-2xl text-xl font-semibold tracking-tight text-white">
            Inovação e praticidade para a gestão da sua imobiliária.
                        </h1>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          <div className="p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4  text-white">
              <FaBeer className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Gestão Imobiliária            </h3>
            <p className="text-white text-center mb-4">O sistema mais completo do mercado imobiliário. O NIDOImóvel foi desenvolvido em parceria com algumas das maiores operadoras do mercado imobiliário nacional.</p>
            <a href="#" className="font-medium inline-flex items-center text-white">
              Saiba mais
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4  text-white">
              <FaRegLifeRing className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">NIDOAdm</h3>
            <p className="text-white text-center mb-4">Transforme sua imobiliária em uma referência digital! Traga mais praticidade para seus processos de locação e vendas, tornando-os 100% digitais. Ganhe agilidade, segurança e encante seus clientes com uma experiência totalmente inovadora. A revolução digital começa agora!</p>
            <a href="#" className="font-medium inline-flex items-center text-white">
              Saiba Mais
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4  text-white">
              <FaQuestionCircle className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Sites para Imobiliárias</h3>
            <p className="text-white text-center mb-4">Nossa equipe é especializada em proporcionar a melhor experiência de suporte para você. Nosso compromisso é superar suas expectativas em todos os momentos, com um suporte humanizado e dedicado, onde sua satisfação é nossa prioridade. Estamos aqui para ajudá-lo em cada passo do caminho.</p>
            <a href="#" className="font-medium inline-flex items-center text-white">
              Saiba Mais
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
