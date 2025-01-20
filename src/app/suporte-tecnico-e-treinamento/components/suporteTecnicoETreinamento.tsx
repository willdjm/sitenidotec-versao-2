export const SuporteTreinamento = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 my-8 flex flex-col items-center gap-3">

          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Suporte Técnico e Treinamento</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">Apoiando clientes remotamente com agilidade e segurança</h3>
          <p className="text-base text-center md:text-justify text-gray-500">
          Os clientes contam com nossa equipe constantemente treinada e com recursos de última geração para suporte técnico em todos os produtos NIDO.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-suporte-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-center lg:justify-between p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full md:w-2/3 mb-8">
          <picture>
            <img src="/img-suporte-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/3 flex flex-col items-start gap-3">
        <h3 className="w-full text-xl text-center md:text-start text-gray-600">Sistema de Atendimento ao Cliente exclusivo com:</h3>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Registro de ocorrências</li>
            <li>Follow-up de atendimento</li>
            <li>Encerramento com avaliação de satisfação.</li>
          </ul>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600">  Ferramentas de comunicação remota que permitem:</h3>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Visualização e controle do equipamento do cliente</li>
            <li>Treinamentos para novas equipes.</li>
          </ul>
        </div>
      </div>

    </section>
  )
}
