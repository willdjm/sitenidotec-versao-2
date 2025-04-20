"use client"


export const SitesParaImobiliarias = () => {


  return (
    <section className="lg:py-16 py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">


        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl ">
          <div className="text-center flex flex-col items-center justify-center">

            <picture>
              <img
                src="/logo_sites.png"
                alt="App screenshot"
                className=" w-72 mb-5"
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



          <a
            href="https://sitepadrao.nido.com.br/"
            className="w-full lg:w-auto text-center transform rounded-md bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-600"
          >
            Ver modelos disponiveis
          </a>
          <a
            href="#"
            className="w-full lg:w-auto text-center transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors bg-white hover:bg-slate-50"
          >
            Fale com um especialista
          </a>
        </div>

      </div>
    </section>
  );
};
