"use client"

import Link from 'next/link';  // Importando Link do Next.js para navegação
import { useState } from 'react';  // Hook useState do React para controlar o estado
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';  // Ícones utilizados
import { IoListCircleOutline } from 'react-icons/io5';
import { LuFileBox, LuFileKey2, LuFilePenLine, LuFiles } from "react-icons/lu";
import { TbProgressHelp } from 'react-icons/tb';
import { VscMultipleWindows } from 'react-icons/vsc';

// Definição do tipo para os dados da imagem
interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// Dados das imagens
const images: ImageData[] = [
  { id: 1, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 1' },
  { id: 2, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/11-imagem.png', alt: 'Imagem 2' },
  { id: 3, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/9-imagem.png', alt: 'Imagem 3' },
  { id: 4, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/2-imagem.png', alt: 'Imagem 4' },
  { id: 5, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/12-imagem.webp', alt: 'Imagem 5' },
];

export const Nidoadm = () => {

  // Estado para controlar a imagem selecionada
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(images[0]);

  // Função para alterar a imagem ao passar o mouse
  const handleMouseEnter = (image: ImageData) => {
    setSelectedImage(image);
  };

  return (
    <section id='nidoadm' className="py-10 bg-white">
      <div className="flex flex-col px-5 mx-auto max-w-7xl xl:px-0">

        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center mb-12">
          <div className="text-center flex flex-col items-center max-w-3xl mx-auto justify-center gap-5">
            <picture>
              <img
                src="/logo-adm.png"
                alt="App screenshot"
                className=""
              />
            </picture>

            <h1 className="text-3xl font-bold tracking-tight text-sky-500">
              Sistema de Administração de Locações
            </h1>

            <p className="text-lg text-center text-gray-600">
              Com o NIDOAdm, imobiliárias e proprietários têm total controle e facilidade na administração de locações, com um sistema e gestão eficientes
            </p>
          </div>
        </div>

        {/* Seção 1 - Contratos */}
        <div className="flex flex-col-reverse mb-8 animated fadeIn px-2 sm:flex-row">
          <div className="flex items-center mb-8 lg:w-1/2 sm:order-last">
            <picture>
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <div className="flex items-center justify-start gap-2">
              <LuFilePenLine className="text-3xl text-gray-500" />
              <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Contratos</p>
            </div>
            <h3 className="mt-4 text-2xl sm:text-left md:text-3xl text-sky-500">Emissão de Contratos Completos</h3>
            <p className="mt-5 text-lg text-gray-700 text-justify md:text-left">
              Cadastro rápido e intuitivo, com inclusão de múltiplos proprietários, contas fixas e de controle. Permite anexar documentos digitalizados e gerenciar multicontas, com opções de contas de cobrança e repasse distintas.
            </p>
          </div>
        </div>

        {/* Seção 2 - Integração bancária */}
        <div className="flex flex-col-reverse mb-8 animated fadeIn px-2 sm:flex-row">
          <div className="flex items-center mb-8 lg:w-1/2">
            <picture>
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
            <div className="flex items-center justify-start gap-2">
              <LuFiles className="text-3xl text-gray-500" />
              <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Integração bancária</p>
            </div>
            <h3 className="mt-4 text-2xl sm:text-left md:text-3xl text-sky-500">Integrado aos principais bancos</h3>
            <p className="mt-5 text-lg text-gray-700 text-justify md:text-left">
              Emissão e envio por e-mail de boletos com um clique, com remessa para cobranças registradas e baixa automática do arquivo de retorno. O sistema se adapta à carteira de cobrança contratada com o banco.
            </p>
          </div>
        </div>

        {/* Seção 3 - Dashboard */}
        <div className="flex flex-col-reverse mb-0 animated fadeIn px-2 sm:flex-row">
          <div className="flex items-center mb-8 lg:w-1/2 sm:order-last">
            <picture>
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="" />
            </picture>
          </div>
          <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <div className="flex items-center justify-start gap-2">
              <LuFileBox className="text-3xl text-gray-500" />
              <p className="text-sm font-semibold leading-none text-left text-gray-500 uppercase">Dashboard</p>
            </div>
            <h3 className="mt-4 text-2xl sm:text-left md:text-3xl text-sky-500">Principais operações administrativas</h3>
            <p className="mt-5 text-lg text-gray-700 text-justify md:text-left">
              O NIDOAdm oferece atalhos e avisos para as principais operações administrativas, como aluguéis, repasses, contas e contratos a vencer, além de seguros e títulos.
            </p>
          </div>
        </div>

        {/* Seção de outros serviços */}
        <div className="text-center flex items-center max-w-3xl mx-auto justify-center gap-2 mb-6 lg:mb-10">
          <picture>
            <img
              src="/logo-icone-nidoadm.png"
              alt="App screenshot"
              className="w-12"
            />
          </picture>
          <p className="text-xl text-sky-500 text-center font-semibold">Outros Serviços:</p>
        </div>

        {/* Versão Desktop - Lista à esquerda e Imagem à direita */}
        <div className="lg:flex lg:flex-row w-full hidden">
          {/* Lista à esquerda (Desktop) */}
          <div className="lg:w-1/2 w-full">
            <ul className="space-y-3">
              {/* Item 1 */}
              <li
                className="flex group items-center cursor-pointer p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition"
                onMouseEnter={() => handleMouseEnter(images[0])}
              >
                <LuFileKey2 className="text-5xl font-normal text-sky-500 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-500">Acesso Web Inquilino/Proprietário</h3>
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">O sistema gera uma senha para acesso dos inquilinos e proprietários</p>
                </div>
              </li>

              {/* Item 2 */}
              <li
                className="flex group items-center cursor-pointer p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition"
                onMouseEnter={() => handleMouseEnter(images[1])}
              >
                <TbProgressHelp className="text-6xl font-normal text-sky-500 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-500">Gerenciamento de Ocorrências</h3>
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">
                    Criação de ocorrências para acompanhamento dos inquilinos, proprietários e imobiliária
                  </p>
                </div>
              </li>

              {/* Item 3 */}
              <li
                className="flex group items-center cursor-pointer p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition"
                onMouseEnter={() => handleMouseEnter(images[2])}
              >
                <HiOutlineClipboardDocumentList className="text-7xl font-normal text-sky-500 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-500">Nota fiscal eletrônica</h3>
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">Geração de Nota Fiscal Eletrônica utilizado para registrar e formalizar as transações imobiliárias</p>
                </div>
              </li>

              {/* Item 4 */}
              <li
                className="flex group items-center cursor-pointer p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition"
                onMouseEnter={() => handleMouseEnter(images[3])}
              >
                <IoListCircleOutline className="text-8xl text-sky-500 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-500">DIMOB</h3>
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">Declaração obrigatória imobiliárias que detalha suas atividades de venda e locação de imóveis à Receita Federal</p>
                </div>
              </li>

              {/* Item 5 */}
              <li
                className="flex group items-center cursor-pointer p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition"
                onMouseEnter={() => handleMouseEnter(images[4])}
              >
                <VscMultipleWindows className="text-8xl font-normal text-sky-500 mr-6" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-500">E mais...</h3>
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">Cálculo de rescisão, Controle de contas de consumo, Lançamento automático, Comunicação por e-mail</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            {selectedImage && (
              <picture>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full h-auto rounded-lg transition-all duration-500 ease-in-out opacity-100 transform"
                />
              </picture>
            )}
          </div>
        </div>

        {/* Versão Mobile */}
        <div className="lg:hidden w-full">
          <ul className="space-y-3">
            {/* Item 1 */}
            <li className="flex items-center p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition">
              <LuFileKey2 className="text-5xl font-normal text-sky-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-sky-500">Acesso Web Inquilino/Proprietário</h3>
                <p className="text-base text-gray-500">O sistema gera uma senha para acesso dos inquilinos e proprietários</p>
              </div>
            </li>

            {/* Item 2 */}
            <li className="flex items-center p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition">
              <TbProgressHelp className="text-6xl font-normal text-sky-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-sky-500">Gerenciamento de Ocorrências</h3>
                <p className="text-base text-gray-500">Criação de ocorrências para acompanhamento dos inquilinos, proprietários e imobiliária</p>
              </div>
            </li>

            {/* Item 3 */}
            <li className="flex items-center p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition">
              <HiOutlineClipboardDocumentList className="text-7xl font-normal text-sky-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-sky-500">Nota fiscal eletrônica</h3>
                <p className="text-base text-gray-500">Geração de Nota Fiscal Eletrônica utilizado para registrar e formalizar as transações imobiliárias</p>
              </div>
            </li>

            {/* Item 4 */}
            <li className="flex items-center p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition">
              <IoListCircleOutline className="text-8xl text-sky-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-sky-500">DIMOB</h3>
                <p className="text-base text-gray-500">Declaração obrigatória imobiliárias que detalha suas atividades de venda e locação de imóveis à Receita Federal</p>
              </div>
            </li>

            {/* Item 5 */}
            <li className="flex items-center p-4 max-w-xl border border-sky-500/20 rounded-xl hover:shadow-md transition">
              <VscMultipleWindows className="text-8xl font-normal text-sky-500 mr-6" />
              <div>
                <h3 className="text-lg font-semibold text-sky-500">E mais...</h3>
                <p className="text-base text-gray-500">Cálculo de rescisão, Controle de contas de consumo, Lançamento automático, Comunicação por e-mail</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Botão */}
        <Link href='https://wa.me/551145083724?text=Olá%2C%20estou%20visitando%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20nidoadm' target='_blank'
          className='relative flex justify-center lg:my-16 my-10'>
          <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white border border-sky-500 rounded hover:bg-white group py-2 px-4">
            {/* A imagem deve ter um z-index maior para ficar visível */}
            <picture className='relative z-10'>
              <img
                src="/logo-icone-nidoadm.png"
                alt="App screenshot"
                className="w-8 relative"
              />
            </picture>

            {/* Efeito de fundo animado */}
            <span className="w-56 h-48 rounded bg-sky-500 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 z-0"></span>

            {/* Texto que aparece sobre o botão */}
            <span className="relative w-full ml-2 text-left text-sky-500 transition-colors duration-300 ease-in-out group-hover:text-white z-10">Mais informações</span>
          </button>
        </Link>   

      </div>
    </section>
  );
};