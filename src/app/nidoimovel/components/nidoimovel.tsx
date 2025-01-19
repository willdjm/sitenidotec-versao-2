export const Imovel = () => {
  return (
<section className='mx-auto max-w-screen-xl'>

<div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
        <div className="mb-4 w-full flex items-start justify-center lg:justify-start">
          {/* Imagem no topo */}
          <picture className=''>
            <img src="/logo_imovel.png" alt=""  />
          </picture>
        </div>
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Gestão Imobiliária</h2>
        <h3 className="text-xl text-center md:text-start text-gray-600 mb-4">O sistema mais completo do mercado imobiliário</h3>
        <p className="text-base text-center md:text-justify text-gray-500">
        O NIDOImóvel foi desenvolvido em parceria com algumas das maiores operadoras do mercado imobiliário nacional. Dentre suas diversas funcionalidades, podemos destacar alguns diferenciais:</p>
      </div>

      {/* Lado direito */}
      <div className="w-full md:w-2/3">
      <picture>
        <img src="/img_nido_imovel-1.png" alt="Imagem direita" className="object-cover w-full"
 />
      </picture>
      </div>
    </div>


    <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full md:w-2/3 mb-8">
      <picture>
        <img src="/img_nido_imovel-2.png" alt="" />
      </picture>
      </div>

      {/* Lado direito */}
      <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2 uppercase">DASHBOARD</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        Com o recurso de tornar a tela inicial personalizada, cada usuário pode escolher quais funções do painel de controle deseja apresentar, tendo assim um rápido acesso às informações mais importantes. Esta possibilidade, faz o NIDOImóvel ser para o gestor um verdadeiro raio-x da imobiliária, e para o corretor, significa maior organização e agilidade para gerar mais negócios.
        </p>
      </div>
    </div>


    <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">CATÁLOGO DE IMÓVEIS</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        Com o NIDOImóvel, a carteira de imóveis da imobiliária se torna muito mais que um simples banco de dados, permitindo:  
        </p>
        <ul className="list-disc list-inside pl-2 text-base ">
  <li>Flexibilidade na gestão dos dados, proprietário aberto ou protegido</li>
  <li>Filtros de pesquisa de imóveis mais específicos</li>
  <li>Ciclo de atualização dos imóveis</li>
  <li>Mensagens automáticas a corretores e proprietários</li>
  <li>Fácil manuseio e escolha das fotos</li>
  <li>Gerar folder de apresentação do imóvel</li>
</ul>

      </div>

      {/* Lado direito */}
      <div className="w-full md:w-2/3">
      <picture>
        <img src="/img_nido_imovel-3.png" alt="Imagem direita" className="object-cover w-full"
 />
      </picture>
      </div>
    </div>


    <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full md:w-2/3 mb-8">
      <picture>
        <img src="/img_nido_imovel-4.png" alt="" />
      </picture>
      </div>

      {/* Lado direito */}
      <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2 uppercase">GERENCIAMENTO DE CLIENTES</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        Muito mais que prestar um serviços para proprietários de imóveis, o NIDOImóvel possibilita que as imobiliárias ofereçam uma série de valores agregados, como:  
        </p>
        <ul className="list-disc text-base list-inside pl-2 ">
  <li>Agilidade na recepção</li>
  <li>Direcionamento do cliente ( corretor ideal para atender o perfil do cliente )</li>
  <li>Cesta de Imóveis ( selecionados de acordo com o perfil do cliente )</li>
  <li>Envio personalizado com informações dos imóveis selecionados</li>
  <li>Histórico de atendimento</li>
  <li>Roteiro de visitas ( imóveis visitados e apresentados para o cliente )</li>
  <li>Clientes procurados ( busca automaticamente imóveis no perfil do cliente )</li>
</ul>
      </div>
    </div>

    <div className="flex flex-col bg-zinc-300 lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full md:w-2/3 mb-8">
      <picture>
        <img src="/img_nido_imovel-5.png" alt="" />
      </picture>
      </div>

      {/* Lado direito */}
      <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2 uppercase">CRM/MARKETING</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        Diversidade na abordagem a clientes potenciais é mais um dos diferenciais do NIDOImóvel, que traz como recurso a possibilidade de estabelecer canais de oferta periódica de imóveis e serviços, através de :  
        </p>
        <ul className="list-disc text-base list-inside pl-2 ">
  <li>Envio de e-mail marketing direto do sistema</li>
  <li>Seleção de público por interesse ( faixas de investimento, regiões, características, etc )</li>
  <li>Campanhas pontuais ou periódicas para abordar clientes</li>
  <li>Layouts pré-configurados de fácil utilização</li>
  <li>Possibilidade de utilizar campanhas criadas por terceiros</li>
  <li>Estatísticas ( controle de recebimento, cliques, etc… )</li>
</ul>

<h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2 uppercase mt-5">INTEGRAÇÃO COM PORTAIS</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        Divulgar o imóvel no veículo e momento certo é estratégia fundamental para o bom desempenho nos negócios imobiliários. Por isso, o NIDOImóvel é totalmente integrado aos sistemas de anúncio dos principais portais, como: 123i, ZAP Imóveis, WebImóvel, Moving, entre outros…  
        </p>
        <ul className="list-disc text-base list-inside pl-2 ">
  <li>Integração automática</li>
  <li>Envio automático ( nos dias de semana pré-determinados )</li>
  <li>Considerado pelos principais portais do país, um dos melhores integradores.</li>
</ul>

      </div>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
      {/* Lado esquerdo */}
      <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
        <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">FECHAMENTO E PÓS-VENDA</h2>
        <p className="text-base text-center md:text-justify text-gray-500">
        O NIDOImóvel é completo porque abrange as necessidades das imobiliárias de ponta a ponta, possibilitando ampla gestão desde a captação até o pós-venda, permitindo:  
        </p>
        <ul className="list-disc list-inside pl-2 text-base ">
  <li>Distribuição de comissões</li>
  <li>Gerenciamento de documentos</li>
  <li>Envio de tarefas via e-mail / SMS para cliente ( comprador e proprietário )</li>
  <li>Impressão de recibos e RPA´s</li>
</ul>

<p className="text-base text-center md:text-justify text-sky-500 uppercase mt-4">
MAIS DETALHES SOBRE O SOFTWARE DE GESTÃO IMOBILIARIA NIDOIMÓVEL? FAÇA UM CONTATO AGORA E UM REPRESENTANTE ENTRARÁ EM CONTATO COM VOCÊ!
</p>

      </div>

      {/* Lado direito */}
      <div className="w-full md:w-2/3">
      <picture>
        <img src="/img_nido_imovel-6.png" alt="Imagem direita" className="object-cover w-full"
 />
      </picture>
      </div>
    </div>

</section>
  )
}
