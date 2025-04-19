"use client"



export const About = () => {


  return (


    <section className="lg:py-20 py-14 flex flex-col items-center justify-center bg-sky-500">
      <div className="container px-4 mx-auto max-w-7xl">


                {/* Header Section */}
      <div className="relative z-10 mx-auto w-full items-center justify-center lg:max-w-3xl">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500">
            Sobre nós
          </p>

          <h1 className="mb-16 lg:text-4xl text-3xl font-bold tracking-tight text-white">
          Há mais de 30 anos especializada em soluções tecnológicas para o ramo imobiliário.
          </h1>
        </div>
      </div>


        {/* Conteúdo com Flex para os ícones */}
        <div className="lg:flex lg:items-start lg:space-x-12">
          

        <div className="w-full lg:w-1/2 space-y-2">

            <p className="mt-5 text-lg text-white ">
              A NIDOTEC HUB IMOBILIÁRIA Tecnologia atua no mercado há mais de 3 décadas. Tem como objetivo prestar assessoria e consultoria ampla e eficaz na área de informática. Sua experiência no setor imobiliário, acumulada ao longo dos anos, possibilita que a NIDO seja considerada hoje a fornecedora de um dos mais completos softwares de gestão imobiliária, além de uma estrutura de suporte e atendimento de alto nível. TECNOLOGIA Investindo constantemente na capacitação da equipe técnica e administrativa, a NIDO trabalha com as mais modernas metodologias de gestão de projetos e engenharia de software. Conta com profissionais altamente qualificados na área de redes e hardware, além da área de software. A NIDO Tecnologia acredita que somente através desta relação pode proporcionar as melhores soluções para seus clientes.
            </p>
          </div>


          <div className="lg:w-1/2 ">
            <div className="flex items-center justify-center w-full">
              
              <div className="flex flex-col items-end px-3">
                <img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-64 w-28 sm:w-48 xl:w-64"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                  alt="" />
                <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-48 sm:w-32 xl:w-48"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="" />
              </div>
              
              <div className="px-3">
                <img className="object-cover w-40 h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-96 sm:w-full xl:w-96"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg"
                  alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>




  );
};



