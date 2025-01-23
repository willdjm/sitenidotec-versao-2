export const GestaoTI = () => {
  return (
    <section className='mx-auto max-w-screen-xl lg:p-10 p-4'>

      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
      Gestão De TI
      </h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:items-center lg:justify-between mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <h2 className="w-full text-2xl text-gray-600 my-4">Nossos profissionais de TI contam com vasta experiência em tecnologia voltada ao ramo imobiliário.</h2>
          <p className="text-lg text-justify text-gray-500 tracking-normal">
          Apoiando clientes remotamente com agilidade e segurança, a NIDOTEC auxilia seus clientes a tirarem o máximo proveito das ferramentas adquiridas. Participando ativamente no desenvolvimento e na implementação de valiosos recursos existentes em nosso software:
          </p>

          <ul className="list-disc my-4 list-inside pl-2">
            <li>Integração com portais</li>
            <li>Configurações de segurança</li>
            <li>Ferramentas voltadas à atualização do banco de dados</li>
            <li>Configuração de perfis profissionais para direcionamento de clientes, e muto mais…</li>
            <li>Encerramento com avaliação de satisfação.</li>

          </ul>
          <p className="text-lg text-gray-500">
            Sempre com o objetivo de maximizar o retorno do seu investimento em tecnologia.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-1/2">
          <picture>
            <img src="/img-gestao-ti-1.png" alt="" className="" />
          </picture>
        </div>
      </div>






    </section>
  )
}
