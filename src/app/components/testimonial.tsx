'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  // Array de dados dos relatos com 5 opções, incluindo o cargo
  const testimonials = [
    {
      image: "/foto-imob-1.png",
      logo: "/logo-imob-1.png",  // URL do logo
      title: "Imobiliária Nova Vista",
      description: "Atendimento excepcional com um portfólio de imóveis de qualidade. A equipe foi muito prestativa e ajudou a encontrar a casa dos meus sonhos.",
      name: "Carlos Pereira",
      cargo: "Consultor de Vendas" // Alterado de email para cargo
    },
    {
      image: "/foto-imob-2.png",
      logo: "/logo-imob-2.png",  // URL do logo
      title: "Imóveis Premium",
      description: "Ótimo atendimento e uma grande variedade de opções de imóveis. Fiquei muito satisfeito com a negociação e o suporte.",
      name: "Ana Souza",
      cargo: "Gerente de Vendas" // Alterado de email para cargo
    },
    {
      image: "/foto-imob-3.png",
      logo: "/logo-imob-3.png",  // URL do logo
      title: "Realty Experts",
      description: "A melhor experiência na compra de um imóvel! Profissionais qualificados e muita atenção aos detalhes. Recomendados!",
      name: "José Silva",
      cargo: "Diretor Comercial" // Alterado de email para cargo
    },
    {
      image: "/foto-imob-4.png",
      logo: "/logo-imob-4.png",  // URL do logo
      title: "Viva Imóveis",
      description: "Equipe super atenciosa e comprometida com a satisfação do cliente. O processo foi tranquilo e encontrei a casa perfeita.",
      name: "Maria Oliveira",
      cargo: "Consultora Imobiliária" // Alterado de email para cargo
    },
    {
      image: "/foto-imob-5.png",
      logo: "/logo-imob-5.png",  // URL do logo
      title: "Casa Certa Imobiliária",
      description: "Serviço ágil e eficiente. Encontrei exatamente o que eu procurava, e o atendimento foi excelente do início ao fim.",
      name: "Felipe Santos",
      cargo: "Atendente" // Alterado de email para cargo
    },
    {
      image: "/foto-imob-6.png",
      logo: "/logo-imob-6.png",  // URL do logo
      title: "Imobiliária Luxo e Luxo",
      description: "A melhor experiência na compra de um imóvel! Profissionais qualificados e muita atenção aos detalhes. Recomendados!",
      name: "Felipe Santos",
      cargo: "Atendente" // Alterado de email para cargo
    }
  ];

  // Configuração do Slider (Slick)
  const settings = {
    dots: true,  // Mostrar os pontos de navegação
    infinite: true,  // Loop infinito
    speed: 500,  // Velocidade da transição
    autoplay: true,  // Auto play
    autoplaySpeed: 5000,  // Tempo de auto play (5 segundos)
    fade: true,  // Efeito de transição "fade"
    pauseOnHover: true,  // Pausar ao passar o mouse sobre
    arrows: false  // Desativar setas de navegação (se desejar)
  };

  return (
    <section id='depoimentos' className="scroll-mt-40 lg:mx-auto mx-4 max-w-screen-xl lg:my-20 my-14">




      {/* Header Section */}
      <div className="mx-auto w-full items-center justify-center lg:max-w-3xl">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-gray-500">
            Depoimentos
          </p>
          <h1 className="mb-10 lg:text-5xl text-3xl font-bold tracking-tight text-sky-500">
          Usuários de todo o Brasil confiam na NIDOTEC diariamente
          </h1>

        </div>



      </div>


      <Slider {...settings}>

        


        {testimonials.map((testimonial, index) => (
          <div key={index}>



            <div className="grid md:grid-cols-2 items-center lg:gap-12 gap-4 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4">
              <div className="relative bg-gray-50">
                {/* Quadrado maior, atrás da imagem */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/80 -translate-x-4 -translate-y-4 z-0 rounded-lg"></div>
                <picture>
                  <img
                    src={testimonial.image}
                    alt={`Imagem de ${testimonial.name}`}
                    className="w-full aspect-[7/7] object-contain relative z-10"
                  />
                </picture>
              </div>

              <div>
                {/* Exibir o logo da imobiliária alinhado à esquerda */}
                <div className="mb-4">
                  <picture>
                    <img
                      src={testimonial.logo}
                      alt={`Logo de ${testimonial.title}`}
                      className="lg:w-56 w-full h-full object-contain ml-0"
                    />
                  </picture>
                </div>

                <p className="mt-4 text-base text-gray-500 leading-relaxed">{testimonial.description}</p>
                <div className="mt-8 text-left">
                  <h4 className="text-lg font-bold text-gray-700">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{testimonial.cargo}</p> {/* Exibir cargo aqui */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
