export const Clientes = () => {
  // Array com os dados dos clientes
  const clientes = [
    { id: 1, nome: "Cliente 1", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 2, nome: "Cliente 2", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 3, nome: "Cliente 3", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 4, nome: "Cliente 4", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 5, nome: "Cliente 5", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 6, nome: "Cliente 6", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 7, nome: "Cliente 7", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 8, nome: "Cliente 8", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 9, nome: "Cliente 9", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 10, nome: "Cliente 10", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 11, nome: "Cliente 11", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 12, nome: "Cliente 12", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 13, nome: "Cliente 13", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 14, nome: "Cliente 14", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 15, nome: "Cliente 15", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 16, nome: "Cliente 16", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 17, nome: "Cliente 17", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
    { id: 18, nome: "Cliente 18", logo: "/logo_imovel.png", link: "https://www.google.com.br" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl lg:my-10 my-5 p-4 lg:p-0">
      <h1 className="text-xl font-semibold text-sky-500 lg:text-2xl border-b-2 border-sky-500 w-full mb-5">
        Alguns clientes que já contam com as soluções NIDOTEC
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-5">
        {clientes.map(cliente => (
          <div key={cliente.id} className="bg-white border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <a href={cliente.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-40 overflow-hidden p-8 flex items-center justify-center">
                <picture>
                  <img
                    src={cliente.logo}
                    alt={`Logo do ${cliente.nome}`}
                    className="w-full h-full object-contain"
                  />
                </picture>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
