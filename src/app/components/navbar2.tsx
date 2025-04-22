"use client"

import Link from 'next/link';
import { useState } from 'react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaApple, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoCaretDown } from 'react-icons/io5';

export const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenuAndNavigate = () => {
    setIsMobileMenuOpen(false); // Fecha o menu
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-0">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo à esquerda */}
          <div className="flex text-sky-500 font-bold text-lg items-center flex-shrink-0">
            <Link href="/">
              <picture>
                <img
                  src='/logo-novo2.png'
                  alt='Logo'
                  className="h-14 lg:h-20 object-cover"
                />
              </picture>
            </Link>
          </div>

          {/* Menu centralizado */}
          <div className="flex-1 lg:flex justify-center space-x-2 hidden">
            <Link href="#" onClick={closeMobileMenuAndNavigate}>
              <p className="text-sky-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Início</p>
            </Link>

            {/* Dropdown para Produtos */}
            <div className="relative group">
              <button className="text-sky-500 justify-center hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center">
                Produtos
                <IoCaretDown className='text-xs ml-0.5' />
              </button>
              {/* Mega Menu */}
              <div className="absolute left-0 mt-2 w-screen max-w-xl bg-white border border-sky-500/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-sky-500 mb-4">Serviços NIDOTec</h3>
                    <ul className="space-y-3">
                      <li className='flex items-center'>
                        <picture className='relative z-10'>
                          <img
                            src="/logo-icone-nidoimovel.png"
                            alt="App screenshot"
                            className="w-6 mr-1.5"
                          />
                        </picture>
                        <Link href="#nidoimovel" className="text-gray-500 hover:text-sky-500" onClick={closeMobileMenuAndNavigate}>Sistema NIDOImóvel</Link>
                      </li>
                      <li className='flex items-center'>
                        <picture className='relative z-10'>
                          <img
                            src="/logo-icone-nidoadm.png"
                            alt="App screenshot"
                            className="w-6 mr-1.5"
                          />
                        </picture>
                        <Link href="#nidoadm" className="text-gray-500 hover:text-sky-500" onClick={closeMobileMenuAndNavigate}>Sistema NIDOAdm</Link>
                      </li>
                      <li className='flex items-center'>
                        <picture className='relative z-10'>
                          <img
                            src="/logo_sites2.png"
                            alt="App screenshot"
                            className="w-6 mr-1.5"
                          />
                        </picture>
                        <Link href="#sites" className="text-gray-500 hover:text-sky-500" onClick={closeMobileMenuAndNavigate}>Sites para Imobiliárias</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-500 mb-4">APP NIDOImóvel</h3>
                    <p className='mb-2 text-gray-500'>É corretor? Baixe o APP:</p>

                    <div className="flex flex-col gap-4 justify-center">
                      <Link href='https://play.google.com/store/apps/details?id=br.com.nido.nidoimovel&pcampaignid=web_share' target='_blank' className="bg-sky-500 hover:bg-sky-600 text-white inline-flex py-3 px-4 w-52 rounded-lg items-center focus:outline-none">
                        <BiLogoPlayStore className='text-4xl' />
                        <span className="ml-4 flex items-start flex-col leading-none">
                          <span className="text-xs text-white">Download na loja</span>
                          <span className="title-font font-medium text-white text-base">Google Play</span>
                        </span>
                      </Link>

                      <Link href='https://apps.apple.com/br/app/nidoimovel/id1490021868' target='_blank' className="bg-sky-500 hover:bg-sky-600 text-white inline-flex py-3 px-4 w-52 rounded-lg items-center focus:outline-none">
                        <FaApple className='text-4xl' />
                        <span className="ml-4 flex items-start flex-col leading-none">
                          <span className="text-xs text-white">Download na loja</span>
                          <span className="title-font font-medium text-white text-base">App Store</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/#planos" onClick={closeMobileMenuAndNavigate}>
              <p className="text-sky-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Planos</p>
            </Link>

            <div className="relative group">
              <button className="text-sky-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center">
                Sobre Nós
                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Mega Menu */}
              <div className="absolute left-0 mt-2 w-screen max-w-xl bg-white border border-sky-500/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-sky-500 mb-4">NIDOTEC HUB Imobiliária</h3>
                    <ul className="space-y-3">
                      <li className='flex items-center gap-1'>
                        <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
                          <HiOutlineOfficeBuilding className="text-xl text-sky-500" />
                        </button>
                        <a href="#" className="text-gray-500 hover:text-sky-500">Sobre nós</a>
                      </li>
                      <li className='flex items-center gap-1'>
                        <button className="p-2 bg-sky-500/10 rounded-lg cursor-default">
                          <HiOutlineOfficeBuilding className="text-xl text-sky-500" />
                        </button>
                        <a href="#" className="text-gray-500 hover:text-sky-500">Integrações</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-sky-500 mb-4">Notícias</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <picture>
                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Product" className="rounded-lg mb-3" />
                      </picture>
                      <h4 className="font-medium text-sky-500">Conhece a NIDOTec?</h4>
                      <p className="text-sm text-gray-500 mb-2">Check out our latest product offering with advanced features.</p>
                      <a href="#" className="text-sky-500 hover:text-sky-600 text-sm font-medium">Saiba mais →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Login à direita */}
          <div className="lg:flex items-center space-x-4 hidden">
            <Link href="https://wa.me/551145083724" target="_blank" className="flex items-center text-sky-500 hover:text-sky-700 transition duration-300">
              <FaWhatsapp className="w-5 h-5 mr-1" />
              (11) 4508-3724
            </Link>

            <Link href="https://portal.nido.com.br" target="_blank" className="bg-gradient-to-r from-sky-600 to-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition duration-300">
              Portal do Cliente
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/home" onClick={closeMobileMenuAndNavigate}>
              <p className="flex items-center bg-gray-100 text-sky-500 px-3 py-2 rounded-md text-base font-medium">
                <HiOutlineOfficeBuilding className="text-xl text-sky-500 mr-2" />
                Início
              </p>
            </Link>

            <Link href="#" onClick={closeMobileMenuAndNavigate}>
              <p className="flex items-center hover:bg-gray-100 text-sky-500 px-3 py-2 rounded-md text-base font-medium">
                <HiOutlineOfficeBuilding className="text-xl text-sky-500 mr-2" />
                Sobre nós
              </p>
            </Link>

            <Link href="/#nidoimovel" onClick={closeMobileMenuAndNavigate}>
              <p className="text-sky-500 hover:bg-gray-100 flex items-center px-3 py-2 rounded-md text-base font-medium">
                <picture className='relative z-10'>
                  <img
                    src="/logo-icone-nidoimovel.png"
                    alt="App screenshot"
                    className="w-6 mr-2"
                  />
                </picture>
                Sistema NIDOImóvel
              </p>
            </Link>

            <Link href="/#nidoadm" onClick={closeMobileMenuAndNavigate}>
              <p className="text-sky-500 hover:bg-gray-100 flex items-center px-3 py-2 rounded-md text-base font-medium">
                <picture className='relative z-10'>
                  <img
                    src="/logo-icone-nidoadm.png"
                    alt="App screenshot"
                    className="w-6 mr-2"
                  />
                </picture>
                Sistema NIDOAdm
              </p>
            </Link>

            <Link href="/#sites" onClick={closeMobileMenuAndNavigate}>
              <p className="text-sky-500 hover:bg-gray-100 flex items-center px-3 py-2 rounded-md text-base font-medium">
                <picture className='relative z-10'>
                  <img
                    src="/logo_sites2.png"
                    alt="App screenshot"
                    className="w-6 mr-2"
                  />
                </picture>
                Sites para Imobiliárias
              </p>
            </Link>

            <Link href="/#planos" onClick={closeMobileMenuAndNavigate}>
              <p className="flex items-center hover:bg-gray-100 text-sky-500 px-3 py-2 rounded-md text-base font-medium">
                <HiOutlineOfficeBuilding className="text-xl text-sky-500 mr-2" />
                Nossos Planos
              </p>
            </Link>
            
            {/* Add other menu links here */}
            
            <div className="pt-4 pb-4 border-t border-sky-500/20">
              <div className="flex gap-4 items-center px-3 space-y-2 flex-col">
                <Link href="https://wa.me/551145083724" target="_blank" className="flex items-center text-sky-500 hover:text-sky-700 transition duration-300">
                  <FaWhatsapp className="w-5 h-5 mr-1" />
                  (11) 4508-3724
                </Link>

                <Link href="https://portal.nido.com.br" target="_blank" className="bg-gradient-to-r from-sky-600 to-sky-500 text-white py-3 px-6 rounded-md hover:bg-sky-600 transition duration-300">
                  Portal do Cliente
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
