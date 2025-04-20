"use client"

import { useState } from 'react';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoListCircleOutline } from 'react-icons/io5';
import { LuFileBox, LuFileKey2, LuFilePenLine, LuFiles } from "react-icons/lu";
import { TbProgressHelp } from 'react-icons/tb';
import { VscMultipleWindows } from 'react-icons/vsc';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { id: 1, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 1' },
  { id: 2, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/11-imagem.png', alt: 'Imagem 2' },
  { id: 3, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 3' },
  { id: 4, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/11-imagem.png', alt: 'Imagem 4' },
  { id: 5, src: 'https://www.appfacilita.com/wp-content/themes/site-2023/dist/imgs/melhoria-home/10-imagem.png', alt: 'Imagem 5' },
];


export const Nidoadm = () => {

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(images[0]);

  const handleMouseEnter = (image: ImageData) => {
    setSelectedImage(image);
  };


  return (
    <section className="py-10 bg-white">
      <div className="flex flex-col px-4 mx-auto max-w-7xl xl:px-0">


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

            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
              Com o NIDOAdm, imobiliárias e proprietários têm total controle e facilidade na administração de locações, com um sistema e gestão eficientes

            </p>

          </div>
        </div>



        <div className="flex flex-col-reverse mb-8 animated fadeIn sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
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
            <p className="mt-5 text-lg text-gray-700 text-justify text md:text-left">Cadastro rápido e intuitivo, com inclusão de múltiplos proprietários, contas fixas e de controle. Permite anexar documentos digitalizados e gerenciar multicontas, com opções de contas de cobrança e repasse distintas.</p>
          </div>
        </div>

        <div className="flex flex-col-reverse mb-8 animated fadeIn sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
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
            <p className="mt-5 text-lg text-gray-700 text-justify text md:text-left">Emissão e envio por e-mail de boletos com um clique, com remessa para cobranças registradas e baixa automática do arquivo de retorno. O sistema se adapta à carteira de cobrança contratada com o banco.</p>
          </div>
        </div>

        <div className="flex flex-col-reverse mb-8 animated fadeIn sm:flex-row">
          <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
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
            <p className="mt-5 text-lg text-gray-700 text-justify text md:text-left">O NIDOAdm oferece atalhos e avisos para as principais operações administrativas, como aluguéis, repasses, contas e contratos a vencer, além de seguros e títulos.</p>
          </div>
        </div>


        <div className="text-center flex items-center max-w-3xl mx-auto justify-center gap-2 mb-10">
          <picture>
            <img
              src="/logo-icone-nidoadm.png"
              alt="App screenshot"
              className="w-12"
            />
          </picture>



          <p className="text-xl text-sky-500 text-center font-semibold">
            Outros Serviços:
          </p>

        </div>



        {/* Desktop Version - Lista à esquerda e Imagem à direita */}
        <div className="lg:flex lg:flex-row w-full">
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
                    Criação de ocorrências para acompanhamento dos inquilinos, proprietários e imobiliária</p>
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
                  <p className="text-base text-gray-500 group-hover:text-sky-500 mt-1">Cálculo de rescisão, Controle de contas de consumo, Lançamento automático, Comunicação por e-mail
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full p-4 flex justify-center">
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





      </div>
    </section>
  );
};
