'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const Plans = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container px-6 py-16 mx-auto max-w-7xl">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Preços simples e transparentes</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sem contratos. Sem taxas surpresa.</p>
          </div>
        </div>

        <div className="grid gap-6 mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Plano Intro */}
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Intro</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">R$19 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Mês</span></h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">Para empresas que querem otimizar consultas na web.</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>

          {/* Plano Base */}
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Base</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">R$39 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Mês</span></h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">Para empresas que querem otimizar consultas na web.</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>

          {/* Plano Popular */}
          <div className="px-6 py-4 transition-colors duration-200 transform bg-sky-500 rounded-lg dark:bg-gray-600">
            <p className="text-lg font-medium text-white">Popular</p>
            <h4 className="mt-2 text-4xl font-semibold text-white">R$99 <span className="text-base font-normal text-gray-400">/ Mês</span></h4>
            <p className="mt-4 text-white">Para empresas que querem otimizar consultas na web.</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-white" />
                  <span className="mx-4 text-white">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-sky-500 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>

          {/* Plano Enterprise */}
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700 ">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Enterprise</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">R$199 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Mês</span></h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">Para empresas que querem otimizar consultas na web.</p>

            <div className="mt-8 space-y-8">
              {[
                'Todos os links limitados',
                'Plataforma própria',
                'Suporte via chat',
                'Otimização de hashtags',
                'Usuários ilimitados'
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <FaCheckCircle className="w-5 h-5 text-sky-500" />
                  <span className="mx-4 text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
              Escolher plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
