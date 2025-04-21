"use client";

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

// Componente Produtos
export const Produtos = () => {
  return (
    <section className="bg-[url('/fundo-parceiros.png')] bg-center lg:bg-repeat-x lg:bg-contain lg:py-16 py-5 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      <div className="container lg:px-4 lg:p-0 p-6 mx-auto max-w-7xl relative">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-md mb-12">
          <div className="text-center flex flex-col">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Produtos
            </p>
            <h1 className="mb-5 lg:text-3xl text-3xl font-bold tracking-tight text-sky-500">
              Inovação e praticidade para a gestão da sua imobiliária.
            </h1>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid gap-10 md:grid-cols-3 lg:gap-5 mb-10">

          {/* Card 1 - Gestão Imobiliária */}
          <div className="rounded-xl bg-sky-500 p-2 lg:p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 lg:-translate-y-11 -translate-y-9 transform items-center justify-center">
              <picture>
                <img
                  src="/logo-icone-nidoimovel.png"
                  alt="Gestão Imobiliária"
                  className=""
                />
              </picture>
            </div>
            <h3 className="text-lg font-bold mb-2 lg:mb-4 text-white">Gestão Imobiliária</h3>
            <p className="text-white text-center mb-2 lg:mb-4 text-sm lg:text-base">
              O sistema mais completo do mercado imobiliário. O NIDOImóvel foi desenvolvido em parceria com grandes operadoras do mercado nacional. Oferece diversas funcionalidades, como integração de dados em tempo real, automação de processos e análise de mercado, otimizando a gestão de imóveis e a experiência do usuário.
            </p>

            {/* Link para mais informações */}
            <Link href='' className="items-center mb-5 font-medium inline-flex justify-center group relative w-max text-white">
              <span>Saiba mais</span>
              <IoArrowForward className="text-base ml-2" />
              <span className="absolute -bottom-0.5 left-0 w-0 transition-all duration-500 h-0.5 bg-white group-hover:w-full"></span>
            </Link>
          </div>

          {/* Card 2 - Administração de Locações */}
          <div className="rounded-xl bg-sky-500 p-2 lg:p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 lg:-translate-y-10 -translate-y-8 transform items-center justify-center">
              <picture>
                <img
                  src="/logo-icone-nidoadm.png"
                  alt="Administração de Locações"
                  className=""
                />
              </picture>
            </div>
            <h3 className="text-lg font-bold mb-2 lg:mb-4 text-white">Administração de Locações</h3>
            <p className="text-white text-center mb-2 lg:mb-4 text-sm lg:text-base">
              Gestão das locações na palma da mão. Com o NIDOAdm, imobiliárias e proprietários têm total controle e facilidade na administração de locações. O sistema oferece uma gestão eficiente, com recursos para monitorar contratos, pagamentos e manutenção, garantindo mais praticidade e organização no dia a dia.
            </p>
            <Link href='' className="items-center mb-5 font-medium inline-flex justify-center group relative w-max text-white">
              <span>Saiba mais</span>
              <IoArrowForward className="text-base ml-2" />
              <span className="absolute -bottom-0.5 left-0 w-0 transition-all duration-500 h-0.5 bg-white group-hover:w-full"></span>
            </Link>
          </div>

          {/* Card 3 - Sites para Imobiliárias */}
          <div className="rounded-xl bg-sky-500 p-2 lg:p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 lg:-translate-y-10 -translate-y-8 transform items-center justify-center">
              <picture>
                <img
                  src="/logo_sites2.png"
                  alt="Sites para Imobiliárias"
                  className=""
                />
              </picture>
            </div>
            <h3 className="text-lg font-bold mb-2 lg:mb-4 text-white">Sites para Imobiliárias</h3>
            <p className="text-white text-center mb-2 lg:mb-4 text-sm lg:text-base">
              Os melhores sites para o mercado imobiliário. Oferecemos opções de sites prontos para o mercado imobiliário, com recursos que permitem personalizar cores, textos, logotipo e outras funcionalidades. Esses sites são ideais para profissionais que buscam praticidade, design moderno e uma presença online eficiente.
            </p>
            <Link href='' className="items-center mb-5 font-medium inline-flex justify-center group relative w-max text-white">
              <span>Saiba mais</span>
              <IoArrowForward className="text-base ml-2" />
              <span className="absolute -bottom-0.5 left-0 w-0 transition-all duration-500 h-0.5 bg-white group-hover:w-full"></span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
