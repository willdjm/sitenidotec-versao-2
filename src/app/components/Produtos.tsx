"use client";

import { IoArrowForward } from "react-icons/io5";

export const Produtos = () => {
  return (
    <section className="bg-[url('/fundo-parceiros.png')] bg-center lg:bg-repeat-x lg:bg-contain lg:py-20 py-5 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
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
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          
          {/* Card 1 */}
          <div className="rounded-xl bg-sky-500 p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl  hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-11 transform items-center justify-center">
            <picture>
              <img
                src="/logo-icone-nidoimovel.png"
                alt="App screenshot"
                className=""
              />
            </picture>
            </div>
            <h3 className="text-lg font-bold mb-5 text-white">Gestão Imobiliária</h3>
            <p className="text-white text-center mb-5">

            O sistema mais completo do mercado imobiliário. O NIDOImóvel foi desenvolvido em parceria com grandes operadoras do mercado nacional. Oferece diversas funcionalidades, como integração de dados em tempo real, automação de processos e análise de mercado, otimizando a gestão de imóveis e a experiência do usuário.
            </p>

            <a href="#" className="font-medium inline-flex items-center mb-5 text-white relative group">
              Saiba mais
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-sky-500 p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl  hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-10 transform items-center justify-center">
            <picture>
              <img
                src="/logo-icone-nidoadm.png"
                alt="App screenshot"
                className=""
              />
            </picture>
            </div>
            <h3 className="text-lg font-bold mb-5 text-white">Administração de Locações</h3>
            <p className="text-white text-center mb-5">

            Gestão das locações na palma da mão. Com o NIDOAdm, imobiliárias e proprietários têm total controle e facilidade na administração de locações. O sistema oferece uma gestão eficiente, com recursos para monitorar contratos, pagamentos e manutenção, garantindo mais praticidade e organização no dia a dia.
            </p>
            <a href="#" className="font-medium inline-flex items-center mb-5 text-white relative group">
              Saiba mais
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-sky-500 p-4 text-center shadow-lg hover:shadow-gray-300 transition-all duration-500 hover:shadow-xl  hover:-translate-y-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-10 transform items-center justify-center">
            <picture>
              <img
                src="/logo_sites2.png"
                alt="App screenshot"
                className=""
              />
            </picture>
            </div>
            <h3 className="text-lg font-bold mb-5 text-white">Sites para Imobiliárias</h3>
            <p className="text-white text-center mb-5">

            Os melhores sites para o mercado imobiliário. Oferecemos opções de sites prontos para o mercado imobiliário, com recursos que permitem personalizar cores, textos, logotipo e outras funcionalidades. Esses sites são ideais para profissionais que buscam praticidade, design moderno e uma presença online eficiente.
            </p>
            <a href="#" className="font-medium inline-flex items-center mb-5 text-white relative group">
              Saiba mais
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
              <IoArrowForward className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
