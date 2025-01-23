export const SistemaParaCorretores = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        Sistema para Corretores
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:items-center lg:justify-between mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">A força do mercado imobiliário em suas mãos</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
            Não é preciso montar uma grande estrutura empresarial para atuar no mercado imobiliário. Sabendo disso, o NIDOImóvel possui uma configuração específica para corretores independentes.
          </p>
          <h3 className="w-full text-xl text-sky-500 mt-3">São diversas funcionalidades para profissionalizar e potencializar o trabalho do corretor</h3>

          <ul className="list-disc list-inside pl-2 text-base flex flex-col gap-2 lg:gap-0">
            <li className="text-sky-500 font-semibold">Painel de controle – <span className="text-black font-normal">Completo, fácil e intuitivo.</span></li>
            <li className="text-sky-500 font-semibold">Banco de Imóveis – <span className="text-black font-normal">Filtros de pesquisa, atualização automática, apresentação dos imóveis, etc…</span></li>
            <li className="text-sky-500 font-semibold">Gerenciamento – <span className="text-black font-normal">Clientes, imóveis, atendimento, etc….</span></li>
            <li className="text-sky-500 font-semibold">Integração com portais – <span className="text-black font-normal">Suas ofertas nos principais canais.</span></li>
            <li className="text-sky-500 font-semibold">Marketing – <span className="text-black font-normal">Campanhas de e-mail marketing, layouts pré-definidos, estatísticas.</span></li>
            <li className="text-sky-500 font-semibold">Pós-venda – <span className="text-black font-normal">Comissão, recibos, etc…</span></li>
          </ul>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-sistema-corretor-1.png" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 p-4 lg:p-2 mt-4">
        <picture>
          <img src="/img-sistema-corretor-2.png" alt="Imagem direita" className="object-cover w-full"
          />
        </picture>
      </div>
    </section>
  )
}
