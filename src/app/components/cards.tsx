interface CardsProps {
  showTitle?: boolean;  // Prop que define se o título será exibido
  titleText?: string;    // Prop para o texto do título
}

export function Cards({ showTitle = true, titleText = "Conheça nossos produtos" }: CardsProps) {
  return (
    <div className="mx-auto max-w-screen-xl lg:p-10 p-4 flex flex-col items-center justify-center gap-5">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
              href="/nidoimovel"
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
              href="/nidoadm"
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
              href="/sites-para-imobiliaria"
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
