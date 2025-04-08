'use client';

import React from 'react';
import { FaCopy, FaCog, FaMoon } from 'react-icons/fa'; // Importe os ícones correspondentes

export const Negocios = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto max-w-7xl">
        {/* Título e Texto */}
        <div className="w-full mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 capitalize dark:text-white">
            Discover Our Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            We offer a wide range of components that help you build beautiful and functional interfaces easily. 
            Explore our components below to get started with your project today.
          </p>
        </div>

        {/* Conteúdo com Flex para os ícones */}
        <div className="lg:flex lg:items-start lg:space-x-12">
          <div className="lg:w-1/2">
            <img className="" src="/negocios.png" alt="Negócios" />
          </div>

          <div className="w-full lg:w-1/2 space-y-2">
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-sky-500 bg-sky-100 rounded-xl md:mx-4 dark:text-white dark:bg-sky-500">
                <FaCopy className="w-6 h-6" />
              </span>

              <div className="">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-sky-500 bg-sky-100 rounded-xl md:mx-4 dark:text-white dark:bg-sky-500">
                <FaCog className="w-6 h-6" />
              </span>

              <div className="">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configurations</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-sky-500 bg-sky-100 rounded-xl md:mx-4 dark:text-white dark:bg-sky-500">
                <FaMoon className="w-6 h-6" />
              </span>

              <div className="">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Elegant Dark Mode</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-sky-500 bg-sky-100 rounded-xl md:mx-4 dark:text-white dark:bg-sky-500">
                <FaCopy className="w-6 h-6" />
              </span>

              <div className="">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-sky-500 bg-sky-100 rounded-xl md:mx-4 dark:text-white dark:bg-sky-500">
                <FaCog className="w-6 h-6" />
              </span>

              <div className="">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configurations</h1>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
