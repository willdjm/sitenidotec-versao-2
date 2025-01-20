export const GestaoTI = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>

      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-between p-8">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/3 mb-8 flex flex-col items-center gap-3">
          <h2 className="w-full text-2xl text-center lg:text-start text-sky-500 mb-2">Gestão De TI</h2>
          <h3 className="w-full text-xl text-center md:text-start text-gray-600 mb-4">Apoiando clientes remotamente com agilidade e segurança</h3>
          <p className="text-base text-center md:text-justify text-gray-500">
            A NIDO Tecnologia auxilia seus clientes a tirarem o máximo proveito das ferramentas adquiridas.
          </p>
        </div>

        {/* Lado direito */}
        <div className="w-full md:w-2/3">
          <picture>
            <img src="/img-gestao-ti-1.png" alt="Imagem direita" className="object-cover w-full"
            />
          </picture>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-2 lg:items-start lg:justify-center p-4 lg:p-2 mt-4">
        {/* Lado esquerdo */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-sky-500 text-2xl lg:text-3xl lg:max-w-xl">
            Nossos profissionais de TI contam com vasta experiência em tecnologia voltada ao ramo imobiliário.
          </h2>
        </div>

        {/* Lado direito */}
        <div className="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">
          <p className="text-base text-center md:text-justify text-gray-500">
            Participam ativamente no desenvolvimento e na implementação de valiosos recursos existentes em nosso software:
          </p>

          <ul className="list-disc my-4 list-inside pl-2">
            <li>Integração com portais</li>
            <li>Configurações de segurança</li>
            <li>Ferramentas voltadas à atualização do banco de dados</li>
            <li>Configuração de perfis profissionais para direcionamento de clientes, e muto mais…</li>
            <li>Encerramento com avaliação de satisfação.</li>

          </ul>
          <p className="text-base text-center md:text-justify text-gray-500">
            Sempre com o objetivo de maximizar o retorno do seu investimento em tecnologia.
          </p>
        </div>
      </div>





    </section>
  )
}
