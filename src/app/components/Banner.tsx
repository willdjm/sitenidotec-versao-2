"use client"


export const Banner = () => {
  return (
    <section className="lg:my-20 my-5 flex flex-col items-center justify-center bg-white">
      <div className="container px-4 mx-auto max-w-7xl relative">
        {/* Desktop Version - Lista à esquerda e Imagem à direita */}
        <div className="lg:flex gap-8  lg:flex-row w-full hidden">
          {/* Lista à esquerda (Desktop) */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl max-w-lg lg:text-5xl font-bold text-sky-500">
              Solução inovadora para a gestão imobiliária
            </h1>
            <p className="mt-6 text-xl max-w-lg text-justify leading-8 text-gray-700">
              Um CRM exclusivo que oferece integração completa, com gerenciamento de imóveis, administração de locações, e sites para imobiliárias
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-sky-500 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Fale com um especialista
              </a>
              <a href="#" className="text-base font-semibold leading-6 text-sky-500 hover:text-sky-600">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Imagem à direita (Desktop) */}
          <div className="lg:w-1/2 w-full flex justify-center relative">
            <picture>
              <img
                src="https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75"
                alt="App screenshot"
                className="w-full -bottom-10 relative scale-[1.40] z-10"
              />
            </picture>
          </div>

        </div>

        {/* Versão para dispositivos móveis */}
        <div className="lg:hidden w-full p-4">
          <h1 className="text-5xl font-semibold tracking-tight text-sky-500 text-center">
            Solução inovadora para gestão de imóveis e imobiliárias
          </h1>


          {/* Imagem à direita (Desktop) */}
          <div className="">
            <picture>
              <img
                src="https://www.jetimob.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsistema_imobiliario.f78935cb.webp&w=1920&q=75"
                alt="App screenshot"
                className="w-full"
              />
            </picture>
          </div>

          <p className="mt-10 text-lg text-center leading-8 text-gray-700">
            Um CRM exclusivo que oferece integração completa, com gerenciamento de imóveis, administração de locações e Sites para imobiliárias
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <a
              href="#"
              className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-sky-500">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>




    </section>
  );
};
