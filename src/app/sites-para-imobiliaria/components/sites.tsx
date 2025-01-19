export const SitesParaImob = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <div className="mb-4 w-full flex items-start justify-center lg:justify-start">
            {/* Imagem no topo */}
            <picture className=''>
              <img src="/logo_sites.png" alt="" />
            </picture>
          </div>
          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Sites para Imobiliárias</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">Os melhores sites para o mercado imobiliário</h3>
          <p className="text-base text-center md:text-justify text-gray-500">
          Opções de sites prontos que permitem personalizar cores, textos, logotipo e outras funções.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-site-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-2/3 mb-8">
          <picture>
            <img src="/img-site-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
          <p className="text-base text-center md:text-justify text-gray-500">
          Qualquer inclusão, alteração ou cancelamento de imóvel é diariamente atualizado no site, inclusive com fotos e vídeos. O controle dos imóveis em destaque e dos imóveis que serão publicados no site é todo feito pelo sistema. Através de relatórios e gráficos você acompanha o desempenho do seu site por:
          </p>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Região</li>
            <li>Faixa de valor</li>
            <li>Tipo de imóvel, entre outros…</li>
          </ul>
        </div>
      </div>


      <div className="w-full flex flex-col gap-2 p-4 lg:p-2 mt-4">

      <div>
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">MODELOS DE SITES RESPONSIVOS</h2>
          <h3 className="w-full text-base text-center md:text-start text-gray-600 mb-4">Conheça nossos modelos de sites</h3>
          </div>
          <picture>
            <img src="/img-nido_adm-3.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>

       
      </div>


    </section>
  )
}
