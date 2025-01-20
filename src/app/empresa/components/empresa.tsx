export const About = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Empresa</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">Desenvolvendo sistemas e soluções de software, hardware e redes</h3>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-empresa-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-center p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-sky-500 text-2xl lg:text-3xl lg:max-w-xl">
          Há mais de 10 anos especializada em soluções tecnológicas para o ramo imobiliário.
          </h2>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">
          <p className="text-base text-center md:text-justify text-gray-500">
          A NIDO Tecnologia atua no mercado há mais de 2 décadas. Tem como objetivo prestar assessoria e consultoria ampla e eficaz na área de informática. Sua experiência no setor imobiliário, acumulada ao longo dos anos, possibilita que a NIDO seja considerada hoje a fornecedora de um dos mais completos softwares de gestão imobiliária, além de uma estrutura de suporte e atendimento de alto nível. TECNOLOGIA Investindo constantemente na capacitação da equipe técnica e administrativa, a NIDO trabalha com as mais modernas metodologias de gestão de projetos e engenharia de software. Conta com profissionais altamente qualificados na área de redes e hardware, além da área de software. A NIDO Tecnologia acredita que somente através desta relação pode proporcionar as melhores soluções para seus clientes.
          </p>
        </div>
      </div>





    </section>
  )
}
