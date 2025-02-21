'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonial = () => {
  // Array de dados dos relatos com 5 opções
  const testimonials = [
    {
      image: "https://readymadeui.com/team-3.webp",
      title: "Exceptional Service: Prompt Delivery and Enjoyable Dining Experience.",
      description: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
      name: "Mark Adair",
      email: "markadair23@gmail.com"
    },
    {
      image: "https://readymadeui.com/team-4.webp",
      title: "Delicious Food and Excellent Customer Support",
      description: "The food was absolutely delicious and the support team was extremely helpful. Definitely worth the visit.",
      name: "Jane Doe",
      email: "janedoe45@gmail.com"
    },
    {
      image: "https://readymadeui.com/team-5.webp",
      title: "A Truly Memorable Dining Experience",
      description: "Everything was perfect from the moment I entered. The ambiance, the food, and the service were just fantastic.",
      name: "John Smith",
      email: "johnsmith88@gmail.com"
    },
    {
      image: "https://readymadeui.com/team-6.webp",
      title: "Great Value for Money",
      description: "The portions were generous, and the food was tasty. The service was fast and friendly. Will definitely return!",
      name: "Anna Lee",
      email: "annalee@outlook.com"
    },
    {
      image: "https://readymadeui.com/team-2.webp",
      title: "Amazing Hospitality and Flavorful Dishes",
      description: "I was amazed by the hospitality and the quality of the food. Definitely an experience worth repeating.",
      name: "Carlos Gomez",
      email: "carlosgomez79@yahoo.com"
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
        Relatos dos nossos clientes
      </h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="grid md:grid-cols-2 items-center gap-12 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4">
              <div className="bg-gray-50">
                <img
                  src={testimonial.image}
                  alt={`Imagem de ${testimonial.name}`}
                  className="w-full aspect-[7/7] object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{testimonial.title}</h3>
                <p className="mt-4 text-sm text-gray-800 leading-relaxed">{testimonial.description}</p>
                <div className="mt-8 text-left">
                  <h4 className="text-base font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{testimonial.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
