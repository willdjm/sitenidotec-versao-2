import Link from "next/link"

export const SitesParaImob = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        Sites para Imobiliárias
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-site-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">Os melhores sites para o mercado imobiliário</h2>
          <p className="text-lg text-justify text-gray-500">
            Opções de sites prontos que permitem personalizar cores, textos, logotipo e outras funções.
          </p>

          <p className="text-lg text-justify text-gray-500 tracking-normal">
            Qualquer inclusão, alteração ou cancelamento de imóvel é diariamente atualizado no site, inclusive com fotos e vídeos. O controle dos imóveis em destaque e dos imóveis que serão publicados no site é todo feito pelo sistema. Através de relatórios e gráficos você acompanha o desempenho do seu site por:
          </p>

          <ul className="list-disc list-inside pl-2 text-lg mt-4 lg:mt-2">
            <li>Região</li>
            <li>Faixa de valor</li>
            <li>Tipo de imóvel, entre outros…</li>
          </ul>
        </div>
      </div>


      <div className="w-full flex flex-col gap-2 mt-10 lg:mt-20">
        <Link href="https://sitepadrao.nido.com.br/" target="_blank" className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase hover:underline">Clique e conheça nossos modelos de sites RESPONSIVOS:</Link>
        <h3 className="w-full text-base text-center md:text-start text-gray-600 mb-4"></h3>
      </div>
      <Link href='https://sitepadrao.nido.com.br/' target="_blank">
        <picture>
          <img src="/img-nido_adm-3.png" alt="Imagem direita" className="object-cover w-full"
          />
        </picture>
      </Link>
    </section>
  )
}
