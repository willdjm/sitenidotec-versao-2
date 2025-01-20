interface CardsProps {
  showTitle?: boolean;  // Prop que define se o título será exibido
  titleText?: string;    // Prop para o texto do título
}

export function Cards({ showTitle = true, titleText = "Conheça nossos produtos" }: CardsProps) {
  return (
    <div className="mx-auto max-w-screen-xl mt-10 flex flex-col items-center justify-center gap-5 p-6 lg:p-0">
      {showTitle && (
        <h1 className="text-2xl font-semibold text-sky-500 capitalize lg:text-2xl dark:text-white border-b-2 border-sky-500 dark:border-white/10 w-full mb-5">
          {titleText}
        </h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {/* Card 1 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
            <picture>
              <img
                src="/logo_imovel.png"
                alt="Imagem do Card"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="p-4 bg-sky-500 text-center text-white">
            <p className="text-sm mb-4">
              Gestão Imobiliária O sistema mais completo do mercado imobiliário...
            </p>
            <a
              href="#"
              className="text-white hover:text-blue-200 font-semibold text-sm"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
            <picture>
              <img
                src="/logo-adm.png"
                alt="Imagem do Card"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="p-4 bg-sky-500 text-center text-white">
            <p className="text-sm mb-4">
              Sistema de Administração de Locações na palma da mão...
            </p>
            <a
              href="#"
              className="text-white hover:text-blue-200 font-semibold text-sm"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
            <picture>
              <img
                src="/logo_sites.png"
                alt="Imagem do Card"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="p-4 bg-sky-500 text-center text-white">
            <p className="text-sm mb-4">
              Sites para Imobiliárias, os melhores sites para o mercado imobiliário...
            </p>
            <a
              href="#"
              className="text-white hover:text-blue-200 font-semibold text-sm"
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
            <picture>
              <img
                src="/logo-sistema-corretor.png"
                alt="Imagem do Card"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <div className="p-4 bg-sky-500 text-center text-white">
            <p className="text-sm mb-4">
              Sistema para Corretores. A força do mercado imobiliário em suas mãos...
            </p>
            <a
              href="#"
              className="text-white hover:text-blue-200 font-semibold text-sm"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
