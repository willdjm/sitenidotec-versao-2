"use client"


export const Nidoadm2 = () => {


  return (
    <section className="pt-24 bg-gray-200">
        <div className="px-12 mx-auto max-w-7xl">


        {/* Header Section */}
        <div className="mx-auto w-full items-center justify-center lg:max-w-3xl mb-12">
          <div className="text-center flex flex-col">
            <p className="text-lg font-medium leading-8 text-gray-500">
              Notícias
            </p>
            <h1 className="mb-5 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
              Oferecemos um processo eficiente e integrado com a simplicidade que você precisa.
            </h1>
            <p className="mb-10 text-base text-gray-500 text-center">
              Nosso blog está repleto de materiais para ajudar no seu dia a dia e proporcionar uma visão mais profunda sobre nossos produtos, aprimorando sua gestão de vendas e conhecimento do mercado
            </p>
          </div>
        </div>


            <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                <div className="relative z-0 w-full mt-8">
                    <div className="relative overflow-hidden shadow-2xl">
                        <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"/>
                    </div>
                </div>
            </div>

                    {/* Call to Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full my-12">

          
          <a
            href="#"
            className="w-full lg:w-auto text-center transform rounded-md bg-sky-500 px-5 py-3 font-medium text-white transition-colors hover:bg-sky-600"
          >
            Quero ser parceiro
          </a>
          <a
            href="#"
            className="w-full lg:w-auto text-center transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors bg-white hover:bg-slate-50"
          >
            Quero saber mais
          </a>
        </div>

        </div>
    </section>
  );
};
