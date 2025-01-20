interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface CardsPageProps {
  hideCards?: number[]; // Especificando que hideCards é um array de números
}

export function CardsPage({ hideCards = [] }: CardsPageProps) {
  const cards: Card[] = [
    {
      id: 1,
      image: "/logo_imovel.png",
      title: "Gestão Imobiliária",
      description: "Gestão Imobiliária O sistema mais completo do mercado imobiliário...",
      link: "/nidoimovel"
    },
    {
      id: 2,
      image: "/logo-adm.png",
      title: "Sistema de Administração de Locações",
      description: "Sistema de Administração de Locações na palma da mão...",
      link: "/nidoadm"
    },
    {
      id: 3,
      image: "/logo_sites.png",
      title: "Sites para Imobiliárias",
      description: "Sites para Imobiliárias, os melhores sites para o mercado imobiliário...",
      link: "/sites-para-imobiliaria"
    },
    {
      id: 4,
      image: "/logo-sistema-corretor.png",
      title: "Sistema para Corretores",
      description: "Sistema para Corretores. A força do mercado imobiliário em suas mãos...",
      link: "/sistema-para-corretores"
    }
  ];

  return (
    <div className="mx-auto max-w-screen-xl mt-10 p-6 flex flex-col lg:flex-row items-center justify-center gap-5 border-t-2 border-sky-500">
      <div className="lg:w-96">
        <p className="text-base text-sky-500 uppercase">
          CONHEÇA TAMBÉM AS OUTRAS SOLUÇÕES DA NIDO TECNOLOGIA QUE PODEM ALAVANCAR SEUS NEGÓCIOS IMOBILIÁRIOS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {cards.map(
          (card) =>
            !hideCards.includes(card.id) && (  // Verifique se o card não está na lista de IDs a serem ocultados
              <div key={card.id} className="bg-white border rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
                  <picture>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
                <div className="p-4 bg-sky-500 text-center text-white">
                  <p className="text-sm mb-4">{card.description}</p>
                  <a
                    href={card.link}
                    className="text-white hover:text-blue-200 font-semibold text-sm"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
