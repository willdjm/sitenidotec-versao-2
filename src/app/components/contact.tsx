import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="min-h-full bg-gray-200 pb-12">
      <div className="w-full bg-sky-500 pt-20 pb-24 text-center">
        <h4 className="text-4xl font-bold text-gray-100">Fale com nossa equipe comercial</h4>
        <p className="text-base font-medium text-gray-100 mt-2">Podemos ajudar você a revolucionar sua imobiliária.</p>

        {/* Botão Fale com um especialista */}
        <div className="flex justify-center mt-8">
          <Link href="https://wa.me/5511953052059" target="_blank">
            <button className="px-6 py-2 text-sky-500 bg-white rounded-md hover:scale-105 transform transition-all duration-300">
              Fale com um especialista
            </button>
          </Link>
        </div>

        <ul className="text-white text-sm flex flex-col lg:flex-row gap-5 lg:items-center justify-center mt-10">
          <li className="flex items-center">
            <FaCheckCircle className="w-4 h-4 fill-white ml-3 mr-1" />
            <span>Atendimento Humanizado</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="w-4 h-4 fill-white ml-3 mr-1" />
            <span>Treinamentos Completos</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="w-4 h-4 fill-white ml-3 mr-1" />
            <span>Excepteur sint occaecat cupidatat</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="w-4 h-4 fill-white ml-3 mr-1" />
            <span>Blocos pré-definidos conforme necessário</span>
          </li>

        </ul>
      </div>

      <div className="w-full 2xl:w-3/4 flex flex-col lg:flex-row bg-white rounded-md items-center justify-center px-4 lg:px-8 2xl:px-0 mx-auto -mt-10 relative">
        {/* Ajustando o espaço da div principal */}
        <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
          <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
            <picture>
            <img src="/img-contato.png" className="lg:m-20"/>
            </picture>
          </div>
        </div>

{/* Ajustando o formulário */}
<div className="w-full relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
  <div className="flex flex-col items-center justify-center py-8 lg:bg-white lg:shadow-2xl rounded-xl relative z-10">
    <p className="w-full text-sky-500 px-4 lg:px-10 max-w-sm text-2xl font-medium text-center leading-snug font-serif">
      Ou preencha o formulário, que entraremos em contato
    </p>

    <form action="" method="post" className="w-full px-4 overflow-auto lg:px-10">
      <div className="lg:flex lg:flex-row gap-4 w-full">
        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Nome"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-sky-500 mt-4 bg-sky-500/5 border rounded border-zinc-200"
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Telefone"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-sky-500 mt-4 bg-sky-500/5 border rounded border-zinc-200"
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-row gap-4 w-full">
        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Nome"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-sky-500 mt-4 bg-sky-500/5 border rounded border-zinc-200"
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Telefone"
            className="leading-none text-gray-900 p-3 focus:outline-none focus:border-sky-500 mt-4 bg-sky-500/5 border rounded border-zinc-200"
          />
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col">
          <textarea
            placeholder="Mensagem"
            className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-sky-500 mt-4 bg-sky-500/5 border rounded border-zinc-200"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="mt-4 font-semibold leading-none text-white py-4 px-10 bg-sky-500 rounded hover:bg-sky-400 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:outline-none">
          Enviar mensagem
        </button>
      </div>
    </form>
  </div>


          {/* SVG decorativo */}
          <svg viewBox="0 0 91 91" className="lg:absolute lg:block hidden top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-sky-500
            fill-current"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><g><g><circle
            cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445"
            r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441"
            cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g><g
            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525"
            r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle
            cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525"
            r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g><g transform="translate(0 24)"><circle cx="3.261"
            cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle
            cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605"
            r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g><g
            transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686"
            r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle
            cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686"
            r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g><g transform="translate(0 49)"><circle cx="3.261"
            cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle
            cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767"
            r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g><g
            transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846"
            r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle
            cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846"
            r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g><g transform="translate(0 73)"><circle cx="3.261"
            cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle
            cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926"
            r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g><g
            transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006"
            r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle
            cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006"
            r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g></g></g></g></svg>
        <svg viewBox="0 0 91 91" className="lg:absolute lg:block hidden bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-sky-500
            fill-current"><g stroke="none" strokeWidth="1" fillRule="evenodd"><g fillRule="nonzero"><g><g><circle
            cx="3.261" cy="3.445" r="2.72"/><circle cx="15.296" cy="3.445" r="2.719"/><circle cx="27.333" cy="3.445"
            r="2.72"/><circle cx="39.369" cy="3.445" r="2.72"/><circle cx="51.405" cy="3.445" r="2.72"/><circle cx="63.441"
            cy="3.445" r="2.72"/><circle cx="75.479" cy="3.445" r="2.72"/><circle cx="87.514" cy="3.445" r="2.719"/></g><g
            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72"/><circle cx="15.296" cy="3.525"
            r="2.719"/><circle cx="27.333" cy="3.525" r="2.72"/><circle cx="39.369" cy="3.525" r="2.72"/><circle
            cx="51.405" cy="3.525" r="2.72"/><circle cx="63.441" cy="3.525" r="2.72"/><circle cx="75.479" cy="3.525"
            r="2.72"/><circle cx="87.514" cy="3.525" r="2.719"/></g><g transform="translate(0 24)"><circle cx="3.261"
            cy="3.605" r="2.72"/><circle cx="15.296" cy="3.605" r="2.719"/><circle cx="27.333" cy="3.605" r="2.72"/><circle
            cx="39.369" cy="3.605" r="2.72"/><circle cx="51.405" cy="3.605" r="2.72"/><circle cx="63.441" cy="3.605"
            r="2.72"/><circle cx="75.479" cy="3.605" r="2.72"/><circle cx="87.514" cy="3.605" r="2.719"/></g><g
            transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72"/><circle cx="15.296" cy="3.686"
            r="2.719"/><circle cx="27.333" cy="3.686" r="2.72"/><circle cx="39.369" cy="3.686" r="2.72"/><circle
            cx="51.405" cy="3.686" r="2.72"/><circle cx="63.441" cy="3.686" r="2.72"/><circle cx="75.479" cy="3.686"
            r="2.72"/><circle cx="87.514" cy="3.686" r="2.719"/></g><g transform="translate(0 49)"><circle cx="3.261"
            cy="2.767" r="2.72"/><circle cx="15.296" cy="2.767" r="2.719"/><circle cx="27.333" cy="2.767" r="2.72"/><circle
            cx="39.369" cy="2.767" r="2.72"/><circle cx="51.405" cy="2.767" r="2.72"/><circle cx="63.441" cy="2.767"
            r="2.72"/><circle cx="75.479" cy="2.767" r="2.72"/><circle cx="87.514" cy="2.767" r="2.719"/></g><g
            transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72"/><circle cx="15.296" cy="2.846"
            r="2.719"/><circle cx="27.333" cy="2.846" r="2.72"/><circle cx="39.369" cy="2.846" r="2.72"/><circle
            cx="51.405" cy="2.846" r="2.72"/><circle cx="63.441" cy="2.846" r="2.72"/><circle cx="75.479" cy="2.846"
            r="2.72"/><circle cx="87.514" cy="2.846" r="2.719"/></g><g transform="translate(0 73)"><circle cx="3.261"
            cy="2.926" r="2.72"/><circle cx="15.296" cy="2.926" r="2.719"/><circle cx="27.333" cy="2.926" r="2.72"/><circle
            cx="39.369" cy="2.926" r="2.72"/><circle cx="51.405" cy="2.926" r="2.72"/><circle cx="63.441" cy="2.926"
            r="2.72"/><circle cx="75.479" cy="2.926" r="2.72"/><circle cx="87.514" cy="2.926" r="2.719"/></g><g
            transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72"/><circle cx="15.296" cy="3.006"
            r="2.719"/><circle cx="27.333" cy="3.006" r="2.72"/><circle cx="39.369" cy="3.006" r="2.72"/><circle
            cx="51.405" cy="3.006" r="2.72"/><circle cx="63.441" cy="3.006" r="2.72"/><circle cx="75.479" cy="3.006"
            r="2.72"/><circle cx="87.514" cy="3.006" r="2.719"/></g></g></g></g></svg>
        </div>
      </div>
    </div>
  );
};
