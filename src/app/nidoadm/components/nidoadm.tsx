export const Administrativo = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <div className="mb-4 w-full flex items-start justify-center lg:justify-start">
            {/* Imagem no topo */}
            <picture className=''>
              <img src="/logo-adm.png" alt="" />
            </picture>
          </div>
          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Sistema de Administração de Locações</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">Gestão das locações na palma da mão</h3>
          <p className="text-base text-center md:text-justify text-gray-500">
            Com o NIDOAdm, imobiliárias e proprietários ganham ampla gestão e facilidade na administração de locações.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-nido_adm-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-2/3 mb-8">
          <picture>
            <img src="/img-nido_adm-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">DASHBOARD</h2>
          <p className="text-base text-center md:text-justify text-gray-500">
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


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2">CONTRATOS</h2>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Inclusão intuitiva e rápida das informações do contrato. Tudo na mesma tela de cadastro.</li>
            <li>Inclusão de mais de um proprietário.</li>
            <li>Cadastro de contas fixas e de contas de controle.</li>
            <li>Anexar documentos digitalizados.</li>
            <li>Multicontas (principal e secundárias). Conta de cobrança pode ser diferente de repasse.</li>
          </ul>

        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-nido_adm-3.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>





      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">INTEGRAÇÃO BANCÁRIA</h2>
          <p className="text-base text-center md:text-justify text-gray-500">
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
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-nido_adm-5.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-2/3 mb-8">
          <picture>
            <img src="/img-nido_adm-6.png" alt="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">ACESSO WEB INQUILINO/PROPRIETÁRIO</h2>
          <p className="text-base text-center md:text-justify text-gray-500">
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



      <div className="flex flex-col lg:flex-row items-center gap-5 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">GERENCIAMENTO DE OCORRÊNCIAS / ACOMPANHAMENTOS</h2>
          <p className="text-base text-center md:text-justify text-gray-500">
            O cliente consegue abrir uma ocorrência / chamado e o NIDOAdm gera um alerta de que há uma ocorrência pendente. Além de ficar documentada, quando respondida essa ocorrência, o cliente recebe a resposta por e-mail. Podem ser criados acompanhamentos das ocorrências, onde o sistema gera etapas a serem concluídas e, além de alertar, comunica os envolvidos por e-mail.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-nido_adm-7.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-2/3 mb-8">
          <picture>
            <img src="/img-nido_adm-8.png" alt="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-3">
          <h2 className="w-full text-xl text-center lg:text-start text-sky-500 mb-2 uppercase">OUTROS SERVIÇOS</h2>
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
