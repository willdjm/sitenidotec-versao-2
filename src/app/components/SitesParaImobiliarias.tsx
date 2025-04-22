"use client"

import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";


export const SitesParaImobiliarias = () => {


  return (
    <section id="sites" className="scroll-mt-28 lg:py-16 py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="px-4 mx-auto max-w-7xl">


        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl ">
          <div className="text-center flex flex-col items-center justify-center">

            <picture>
              <img
                src="/logo_sites.png"
                alt="App screenshot"
                className=" w-64 mb-5"
              />
            </picture>


            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Os melhores sites para o mercado imobiliário
            </h1>
            <p className="mb-5 text-base text-gray-500 text-center">
              Opções de sites prontos que permitem personalizar cores, textos, logotipo, além de permitir gerenciar imóveis em destaque e outras funções.
            </p>
          </div>
        </div>


        <div className="w-full mx-auto text-center">

          <picture>
            <img
              src="/site-pronto-para-imobiliaria.png"
              alt="App screenshot"
              className=""
            />
          </picture>
          
        </div>


        {/* Call to Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full lg:mt-14 mt-10 lg:mb-14 mb-5">

          <Link href='https://api.whatsapp.com/send/?phone=551145083724&text=Ol%C3%A1%2C+estou+visitando+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+nidoimovel&type=phone_number&app_absent=0' target="_blank"
            className="relative border border-sky-500 text-sky-500 px-5 py-3 rounded-md inline cursor-pointer before:bg-sky-500 hover:rounded-b-md before:absolute before:-bottom-0 before:-left-0  before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-500 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
            Fale com um especialista
          </Link>

          <Link href='https://sitepadrao.nido.com.br/' target="_blank" className="items-center font-medium inline-flex justify-center group relative w-max text-sky-500">
            <span>Ver modelos disponíveis</span>
            <IoArrowForward className="text-base ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>

        </div>

      </div>
    </section>
  );
};
