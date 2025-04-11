// components/Footer.tsx
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="bg-sky-500">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:py-20 py-10 gap-16 lg:grid-cols-3">
          <div>
            <picture>
              <img src="/logonovo.png" className="" alt="logo" />
            </picture>
            {/* Informações de contato */}
            <div className="lg:mt-6 mt-3 text-base text-white">
            <p>
              <a href="https://maps.app.goo.gl/1GkP8KeiDfqf2pX86" target="_blank" rel="noopener noreferrer">
              Rua Machado Bitencourt, 205 - Conjunto 96
                </a>
              </p>
              <p>
              <a href="https://maps.app.goo.gl/1GkP8KeiDfqf2pX86" target="_blank" rel="noopener noreferrer">
              Vila Clementino, São Paulo - SP, 04044-904
                </a>
              </p>
              <p>                <a href="mailto:info@example.com">
                  Email: contato@nido.com.br
                </a></p>
              <p>
              <a href="https://wa.me/5511953052059" target="_blank" rel="noopener noreferrer">
              Whatsapp: (11) 95305-2059
                </a>
              </p>
              <p>
              <a href="tel:1145083724">
                Telefone: (11) 4508-3724
                </a>
              </p>

                
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg text-white font-semibold">Produtos</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-white">
              <Link href="/#Inicio">Sistema NIDOImóvel</Link>
                <Link href="/#Inicio">Sistema NIDOAdm</Link>
                <Link href="/#Inicio">Site Para Imobiliárias</Link>
                <Link href="/#Inicio">Sistema para Corretores</Link>
              </nav>
            </div>
            <div>
              <p className="text-lg text-white font-semibold">Institucional</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-white">


              <Link href="/#Inicio">Início</Link>
                <Link href="/#Inicio">Sobre nós</Link>
                <Link href="/#Inicio">Contato</Link>
                <Link href="/#Inicio">Notícias</Link>


              </nav>
            </div>
            <div>
              <p className="text-lg text-white font-semibold">Descubra mais</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-white">
              <Link href="/#Inicio">Nossos Clientes</Link>
                <Link href="/#Inicio">Parceiros NIDOTec</Link>
                <Link href="/#Inicio">Nossos Planos</Link>
                <Link href="/#Inicio">Fale com um Especialista</Link>
              </nav>
            </div>

          </div>
        </div>

           {/* Seção de Copyright */}
        <hr className="border-gray-200 dark:border-gray-700 h-2" />

        <div className="sm:flex lg:py-8 py-2 sm:items-center sm:justify-between">
          {/* Ajuste de Layout Responsivo */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-white">
            <span className="text-center sm:text-left">© {new Date().getFullYear()}</span>
            <a className="font-semibold ml-1 text-center sm:text-left" href="https://www.nido.com.br/">
              NIDOTEC - Hub Imobiliária,  inc.
            </a>
            <span className="text-center sm:text-left">All rights reserved.</span>
          </div>

          {/* Ícones Responsivos */}
          <div className="flex flex-wrap justify-center gap-4 sm:justify-start mt-4 sm:mt-0">
            {/* WhatsApp */}
            <a className="hover:opacity-75" href="https://wa.me/yourphonenumber" target="_blank" rel="noreferrer">
              <button className="bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors">
                <FaWhatsapp className="text-xl sm:text-2xl" />
              </button>
            </a>

            {/* Instagram */}
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-colors">
                <FaInstagram className="text-xl sm:text-2xl" />
              </button>
            </a>

            {/* Facebook */}
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <button className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                <FaFacebookF className="text-xl sm:text-2xl" />
              </button>
            </a>

            {/* LinkedIn */}
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <button className="bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
                <FaLinkedinIn className="text-xl sm:text-2xl" />
              </button>
            </a>

            {/* Rede X (Twitter) */}
            <a className="hover:opacity-75" href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
              <button className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-black transition-colors">
                <FaXTwitter className="text-xl sm:text-2xl" />
              </button>
            </a>

            {/* YouTube */}
            <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
              <button className="bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors">
                <FaYoutube className="text-xl sm:text-2xl" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
