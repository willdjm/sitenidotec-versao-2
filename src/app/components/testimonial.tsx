'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  // Array de dados dos relatos com 5 opções, incluindo o cargo
  const testimonials = [
    {
      image: "https://readymadeui.com/team-3.webp",
      logo: "/logo-imob-1.png",  // URL do logo
      title: "Imobiliária Nova Vista",
      description: "Atendimento excepcional com um portfólio de imóveis de qualidade. A equipe foi muito prestativa e ajudou a encontrar a casa dos meus sonhos.",
      name: "Carlos Pereira",
      cargo: "Consultor de Vendas" // Alterado de email para cargo
    },
    {
      image: "https://readymadeui.com/team-4.webp",
      logo: "/logo-imob-2.jpg",  // URL do logo
      title: "Imóveis Premium",
      description: "Ótimo atendimento e uma grande variedade de opções de imóveis. Fiquei muito satisfeito com a negociação e o suporte.",
      name: "Ana Souza",
      cargo: "Gerente de Vendas" // Alterado de email para cargo
    },
    {
      image: "https://readymadeui.com/team-5.webp",
      logo: "/logo-imob-3.jpg",  // URL do logo
      title: "Realty Experts",
      description: "A melhor experiência na compra de um imóvel! Profissionais qualificados e muita atenção aos detalhes. Recomendados!",
      name: "José Silva",
      cargo: "Diretor Comercial" // Alterado de email para cargo
    },
    {
      image: "https://readymadeui.com/team-6.webp",
      logo: "/logo-imob-4.png",  // URL do logo
      title: "Viva Imóveis",
      description: "Equipe super atenciosa e comprometida com a satisfação do cliente. O processo foi tranquilo e encontrei a casa perfeita.",
      name: "Maria Oliveira",
      cargo: "Consultora Imobiliária" // Alterado de email para cargo
    },
    {
      image: "https://readymadeui.com/team-2.webp",
      logo: "/logo-imob-5.png",  // URL do logo
      title: "Casa Certa Imobiliária",
      description: "Serviço ágil e eficiente. Encontrei exatamente o que eu procurava, e o atendimento foi excelente do início ao fim.",
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
    <section className="mx-auto max-w-screen-xl lg:p-10 p-4">
      <h1 className="text-2xl font-semibold text-sky-500 mb-5 lg:mb-10 lg:text-2xl border-b-2 border-sky-500 w-full">
        Relatos das nossas imobiliárias parceiras
      </h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="grid md:grid-cols-2 items-center lg:gap-12 gap-4 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4">
              <div className="relative bg-gray-50">
                {/* Quadrado maior, atrás da imagem */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/80 -translate-x-4 -translate-y-4 z-0 rounded-lg"></div>
                
                <img
                  src={testimonial.image}
                  alt={`Imagem de ${testimonial.name}`}
                  className="w-full aspect-[7/7] object-contain relative z-10"
                />
              </div>

              <div>
                {/* Exibir o logo da imobiliária alinhado à esquerda */}
                <div className="mb-4">
                  <img
                    src={testimonial.logo}
                    alt={`Logo de ${testimonial.title}`}
                    className="lg:w-56 w-full h-full object-contain ml-0"
                  />
                </div>

                <p className="mt-4 text-base text-sky-500 leading-relaxed">{testimonial.description}</p>
                <div className="mt-8 text-left">
                  <h4 className="text-lg font-bold text-sky-500">{testimonial.name}</h4>
                  <p className="text-sm text-sky-500 mt-0.5">{testimonial.cargo}</p> {/* Exibir cargo aqui */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
