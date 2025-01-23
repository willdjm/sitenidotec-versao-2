export const SuporteTreinamento = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        Suporte Técnico e Treinamento
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-4 lg:items-start lg:justify-between mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">Apoiando clientes remotamente com agilidade, eficácia e segurança, nossa equipe está sempre disponível para garantir a melhor experiência.</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
            Nossa equipe está sempre pronta para oferecer o suporte necessário, garantindo a continuidade e a excelência no uso dos produtos. Com profissionais altamente capacitados e constantemente treinados, além de contar com recursos tecnológicos de última geração, garantimos que nossos clientes recebam soluções rápidas e eficazes para todos os produtos NIDO. A segurança e a eficiência no atendimento são prioridades para nós, proporcionando a melhor experiência em cada interação.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-suporte-1.png" alt="" className="" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:items-start lg:justify-between mt-10">
        {/* Lado esquerdo */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-suporte-2.png" alt="" className="" />
          </picture>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 mt-4">Sistema de Atendimento ao Cliente exclusivo com:</h2>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Registro de ocorrências</li>
            <li>Follow-up de atendimento</li>
            <li>Encerramento com avaliação de satisfação.</li>
          </ul>
          <h2 className="w-full text-2xl text-gray-600 mt-4">Ferramentas de comunicação remota que permitem:</h2>
          <ul className="list-disc list-inside pl-2 text-base ">
            <li>Visualização e controle do equipamento do cliente</li>
            <li>Treinamentos para novas equipes.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
