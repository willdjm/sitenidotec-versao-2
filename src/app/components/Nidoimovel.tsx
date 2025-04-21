"use client"

import { AiOutlineFileDone } from "react-icons/ai";
import { FaStreetView } from "react-icons/fa6";
import { FiCheckSquare } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { LuFileBox, LuMedal, LuMonitorCog } from "react-icons/lu";
import { MdManageAccounts, MdOutlineAppShortcut, MdOutlineHomeWork, MdOutlineManageSearch, MdOutlineMarkEmailRead, MdOutlinePhotoLibrary } from "react-icons/md";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { TbMessage2Check, TbReportAnalytics } from "react-icons/tb";

export const Nidoimovel = () => {

  return (
    <section className="py-10 bg-gradient-to-bl from-gray-50 to-gray-100">
      <div className="flex flex-col px-4 mx-auto max-w-7xl xl:px-0">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center mb-12">
          <div className="text-center flex flex-col items-center max-w-3xl mx-auto justify-center gap-5">
            <picture>
              <img
                src="/logo_imovel.png"
                alt="App screenshot"
                className=""
              />
            </picture>
            <h1 className="text-3xl font-bold tracking-tight text-sky-500">
              O sistema mais completo do mercado imobiliário
            </h1>
            <p className="text-lg text-center text-gray-600 ">
              O NIDOImóvel foi desenvolvido em parceria com algumas das maiores operadoras do mercado imobiliário nacional, garantindo uma plataforma robusta e de alto desempenho.
            </p>
          </div>
        </div>

        {/* Catálogo de Imóveis Section */}
        <div className="flex flex-col-reverse gap-10 mb-12 animated fadeIn px-2 sm:flex-row">
          <div className="flex items-center lg:mb-8 lg:w-1/2 w-full">
            <picture>
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-col justify-start mt-5 lg:mb-8 md:mt-0 lg:w-1/2 w-full">
            <h3 className="text-2xl sm:text-left md:text-2xl text-sky-500 font-semibold">Catálogo de Imóveis</h3>
            <p className="mt-5 text-lg text-gray-700 text-justify text md:text-left">
              Com o NIDOImóvel, a carteira de imóveis da imobiliária se torna muito mais que um simples banco de dados, permitindo:
            </p>

            {/* List of Features */}
            <div className="flex flex-col items-baseline justify-start gap-5 mt-5">
              <div className='flex items-center justify-center gap-4'>
                <MdOutlineHomeWork className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Cadastro e Gerenciamento de Imóveis</p>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <MdOutlineManageSearch className="text-4xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Filtros de pesquisa de imóveis</p>
              </div>
              <div className='flex items-center justify-center lg:gap-5 gap-6'>
                <GrUpdate className="text-2xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Ciclo de atualização dos imóveis</p>
              </div>
              <div className='flex items-center justify-center lg:gap-4 gap-6'>
                <TbMessage2Check className="lg:text-3xl text-4xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Mensagens automáticas a corretores e proprietários</p>
              </div>
              <div className='flex items-center justify-center lg:gap-3 gap-5'>
                <MdOutlinePhotoLibrary className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Gerar folder de apresentação do imóvel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gerenciamento de Clientes Section */}
        <div className="flex flex-col-reverse gap-10 mb-5 animated fadeIn px-2 sm:flex-row">
          <div className="flex items-center lg:mb-8 lg:w-1/2 w-full">
            <picture>
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-col justify-start mt-5 lg:mb-8 md:mt-0 lg:w-1/2 w-full">
            <h3 className="text-2xl sm:text-left md:text-2xl text-sky-500 font-semibold">Gerenciamento de Clientes</h3>
            <p className="mt-5 text-lg text-gray-700 text-justify text md:text-left">
              Muito mais que prestar um serviço para proprietários de imóveis, o NIDOImóvel possibilita que as imobiliárias ofereçam uma série de valores agregados, como:
            </p>

            {/* List of Features */}
            <div className="flex flex-col items-start justify-start gap-5 mt-5">
              <div className='flex items-center justify-center gap-2'>
                <FaStreetView className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Agilidade na recepção</p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <MdManageAccounts className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Direcionamento do cliente</p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <LuFileBox className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Cesta de Imóveis</p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <FiCheckSquare className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Roteiro de visita</p>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <PiListMagnifyingGlass className="text-3xl text-sky-500" />
                <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Clientes procurados</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2 lg:mb-10">
          {/* Dashboard Card */}
          <div className="p-4 bg-white shadow border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
              <LuMonitorCog className="text-2xl text-sky-500" />
            </button>
            <p className="text-base text-sky-500 font-medium my-1">Dashboard</p>
            <p className="text-sm font-medium leading-none text-gray-500">
              Com o recurso de tornar a tela inicial personalizada, cada usuário pode escolher quais funções do painel de controle deseja apresentar, tendo assim um rápido acesso às informações mais importantes.
            </p>
          </div>

          {/* Fechamento e Pós-Venda Card */}
          <div className="p-4 bg-white shadow border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
              <AiOutlineFileDone className="text-2xl text-sky-500" />
            </button>
            <p className="text-base text-sky-500 font-medium my-1">Fechamento e Pós-Venda</p>
            <p className="text-sm font-medium leading-none text-gray-500">
              Possibilitando ampla gestão desde a captação até o pós-venda, com distribuição de comissões, gerenciamento de documentos, envio de tarefas, impressão de recibos e RPAs.
            </p>
          </div>

          {/* CRM/Marketing Card */}
          <div className="p-4 bg-white shadow border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
              <MdOutlineMarkEmailRead className="text-2xl text-sky-500" />
            </button>
            <p className="text-base text-sky-500 font-medium my-1">CRM/Marketing</p>
            <p className="text-sm font-medium leading-none text-gray-500">
              Diversidade na abordagem a clientes potenciais é mais um dos diferenciais do NIDOImóvel, que traz como recurso a possibilidade de estabelecer canais de oferta de imóveis e serviços, através de envio de e-mail.
            </p>
          </div>

          {/* Distribuição de Metas Card */}
          <div className="p-4 bg-white shadow border rounded-[10px] lg:row-span-2 hover:shadow-lg transition-shadow duration-300">
            <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
              <LuMedal className="text-2xl text-sky-500" />
            </button>
            <p className="text-base text-sky-500 font-medium my-1">Distribuição de Metas</p>
            <p className="text-sm font-medium leading-none text-gray-500">
              A distribuição de metas no NIDOImóvel permite acompanhar o desempenho da equipe de vendas, garantindo que as metas sejam cumpridas de forma eficiente e proporcionando visibilidade para ajustes estratégicos quando necessário.
            </p>
            <picture>
              <img className="hidden lg:block mt-8 rounded-lg" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="Pictures" />
            </picture>
          </div>

          {/* Relatórios Card */}
          <div className="p-4 bg-white shadow border rounded-[10px] lg:col-span-2 flex justify-between gap-5 hover:shadow-lg transition-shadow duration-300">
            <div>
              <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
                <TbReportAnalytics className="text-2xl text-sky-500" />
              </button>
              <p className="text-base text-sky-500 font-medium my-1">Relatórios</p>
              <p className="text-sm font-medium leading-none text-gray-500">
                A geração de relatórios detalhados no NIDOImóvel permite análises precisas do desempenho de campanhas, comportamento de clientes e eficácia de vendas, facilitando a tomada de decisões estratégicas.
              </p>
            </div>
            <div>
              <picture>
                <img className="hidden lg:block rounded-lg" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="Pictures" />
              </picture>
            </div>
          </div>

          {/* APP NIDOImóvel Card */}
          <div className="p-4 bg-white shadow border rounded-lg hover:shadow-lg transition-shadow duration-300">
            <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
              <MdOutlineAppShortcut className="text-2xl text-sky-500" />
            </button>
            <p className="text-base text-sky-500 font-medium my-1">APP NIDOImóvel</p>
            <p className="text-sm font-medium leading-none text-gray-500">
              O aplicativo NIDOImóvel oferece atendimento inicial ao cliente de forma ágil e eficiente, facilitando o primeiro contato e garantindo uma experiência personalizada desde o início da jornada de compra.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
