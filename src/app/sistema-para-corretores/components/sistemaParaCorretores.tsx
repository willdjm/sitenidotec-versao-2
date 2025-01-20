export const SistemaParaCorretores = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <div className="mb-4 w-full flex items-start justify-center lg:justify-start">
            {/* Imagem no topo */}
            <picture className=''>
              <img src="/logo-sistema-corretor.png" alt="" />
            </picture>
          </div>
          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Sistema para Corretores</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">A força do mercado imobiliário em suas mãos</h3>
          <p className="text-base text-center md:text-justify text-gray-500">
          Não é preciso montar uma grande estrutura empresarial para atuar no mercado imobiliário. Sabendo disso, o NIDOImóvel possui uma configuração específica para corretores independentes.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-sistema-corretor-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-center p-4 lg:p-2 mt-4">
  {/* Lado esquerdo */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-sky-500 text-2xl lg:text-4xl">
    São diversas funcionalidades para profissionalizar e potencializar o trabalho do corretor
    </h2>
  </div>

  {/* Lado direito */}
  <div className="w-full lg:w-1/2 flex flex-col">
    <ul className="list-disc list-inside pl-2 text-base flex flex-col gap-2">
      <li className="text-sky-500 font-bold">Painel de controle – <span className="text-black font-normal">Completo, fácil e intuitivo.</span></li>
      <li className="text-sky-500 font-bold">Banco de Imóveis – <span className="text-black font-normal">Filtros de pesquisa, atualização automática, apresentação dos imóveis, etc…</span></li>
      <li className="text-sky-500 font-bold">Gerenciamento – <span className="text-black font-normal">Clientes, imóveis, atendimento, etc….</span></li>
      <li className="text-sky-500 font-bold">Integração com portais – <span className="text-black font-normal">Suas ofertas nos principais canais.</span></li>
      <li className="text-sky-500 font-bold">Marketing – <span className="text-black font-normal">Campanhas de e-mail marketing, layouts pré-definidos, estatísticas.</span></li>
      <li className="text-sky-500 font-bold">Pós-venda – <span className="text-black font-normal">Comissão, recibos, etc…</span></li>
    </ul>
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
