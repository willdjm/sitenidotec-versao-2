export const Administrativo = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

<h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
NIDOAdm - Sistema de Administração de Locações
</h1>


<div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">Gestão das locações na palma da mão</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          Com o NIDOAdm, imobiliárias e proprietários ganham ampla gestão e facilidade na administração de locações.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-1.png" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">DASHBOARD</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          O Sistema NIDOAdm oferece atalhos e emite avisos das principais operações administrativas, como por exemplo:
          </p>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Aluguéis hoje, a vencer e vencidos.</li>
            <li>Repasses hoje, a vencer e vencidos.</li>
            <li>Contas hoje, a vencer e vencidas.</li>
            <li>Contratos vencendo e para reajustar.</li>
            <li>Seguro fiança, seguro incêndio e título de capitalização.</li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 mt-4">
          <h2 className="w-full text-2xl text-gray-600 my-4">CONTRATOS</h2>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Inclusão intuitiva e rápida das informações do contrato. Tudo na mesma tela de cadastro.</li>
            <li>Inclusão de mais de um proprietário.</li>
            <li>Cadastro de contas fixas e de contas de controle.</li>
            <li>Anexar documentos digitalizados.</li>
            <li>Multicontas (principal e secundárias). Conta de cobrança pode ser diferente de repasse.</li>
          </ul>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-3.png" alt="" className="" />
          </picture>
        </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-3.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 ">MODELOS DE DOCUMENTOS</h2>
          <ul className="list-disc text-base list-inside pl-2 ">
  <li>Possibilidade de criar todos os modelos de contrato (locação/administração)
  </li>
  <li>Criação de termos e recibos</li>
  
</ul>
<h2 className="w-full text-2xl text-gray-600">ANEXOS</h2>
<p className="text-base text-center md:text-justify text-gray-500">
Esqueça o seu arquivo físico. Possibilidade de anexar documentos digitalizados como:
          </p>
          <ul className="list-disc text-base list-inside pl-2 ">
  <li>Contratos</li>
  <li>Recibos</li>
  <li>Documentos</li>
  <li>Relatórios de vistoria</li>
  
</ul>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 mt-4">
          <h2 className="w-full text-2xl text-gray-600 my-4">INTEGRAÇÃO BANCÁRIA</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          O sistema NIDOAdm é integrado às carteiras de cobrança dos principais bancos, para agilizar na emissão/envio e baixa das locações.
          </p>
          <ul className="list-disc text-base list-inside pl-2 ">
            <li>Emissão de boletos em lote</li>
            <li>Envio por e-mail para todas as locações, apenas com um clique</li>
            <li>Formulação de remessa para as cobranças registradas</li>
            <li>Recepção do arquivo de retorno baixa automática</li>
            <li>O sistema adapta-se à carteira de cobrança contratada pelo cliente, junto ao banco</li>
          </ul>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-5.png" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-6.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">ACESSO WEB INQUILINO/PROPRIETÁRIO</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          O sistema gera uma senha para acesso dos inquilinos e proprietários. Com essa senha, os participantes do contrato poderão:
          </p>
          <ul className="list-disc text-base list-inside pl-2 w-full">
            <li>Emitir 2ª via de boleto*</li>
            <li>Visualizar o extrato de repasse</li>
            <li>Informe de rendimentos</li>
            <li>Acesso a documentos</li>
            <li>Abertura de Ocorrências</li>
          </ul>
          <p className="text-base text-center md:text-justify text-gray-500">
            *A emissão de 2° via de boleto depende da carteira de cobrança contratada junto ao banco.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3 mt-4">
          <h2 className="w-full text-2xl text-gray-600 my-4">GERENCIAMENTO DE OCORRÊNCIAS / ACOMPANHAMENTOS</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          O cliente consegue abrir uma ocorrência / chamado e o NIDOAdm gera um alerta de que há uma ocorrência pendente. Além de ficar documentada, quando respondida essa ocorrência, o cliente recebe a resposta por e-mail. Podem ser criados acompanhamentos das ocorrências, onde o sistema gera etapas a serem concluídas e, além de alertar, comunica os envolvidos por e-mail.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-7.png" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:items-start lg:justify-between mt-5 lg:mt-10">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-nido_adm-8.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">OUTROS SERVIÇOS</h2>
          <ul className="list-disc text-base list-inside pl-2 w-full">
            <li>Nota fiscal eletrônica</li>
            <li>DIMOB</li>
            <li>Cálculo de rescisão</li>
            <li>Controle de contas de consumo</li>
            <li>Lançamento automático de diferença no condomínio</li>
            <li>Comunicação por e-mail</li>
          </ul>
        </div>
      </div>

    </section>
  )
}
