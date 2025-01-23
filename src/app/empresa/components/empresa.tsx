export const About = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

<h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
      NIDOTEC HUB IMOBILIÁRIA
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-3">
        <h2 className="text-sky-500 text-2xl lg:text-2xl tracking-wide lg:tracking-normal">
          Há mais de 30 anos especializada em soluções tecnológicas para o ramo imobiliário.
          </h2>
        <p className="text-lg text-justify md:text-justify text-gray-500 mt-5 md:mt-2 lg:mt-5">
          A NIDOTEC HUB IMOBILIÁRIA Tecnologia atua no mercado há mais de 3 décadas. Tem como objetivo prestar assessoria e consultoria ampla e eficaz na área de informática. Sua experiência no setor imobiliário, acumulada ao longo dos anos, possibilita que a NIDO seja considerada hoje a fornecedora de um dos mais completos softwares de gestão imobiliária, além de uma estrutura de suporte e atendimento de alto nível. TECNOLOGIA Investindo constantemente na capacitação da equipe técnica e administrativa, a NIDO trabalha com as mais modernas metodologias de gestão de projetos e engenharia de software. Conta com profissionais altamente qualificados na área de redes e hardware, além da área de software. A NIDO Tecnologia acredita que somente através desta relação pode proporcionar as melhores soluções para seus clientes.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-empresa-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>

    </section>
  )
}
