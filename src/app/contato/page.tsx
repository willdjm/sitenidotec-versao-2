import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { ContactSection } from "./components/contato";
import { ContactForm } from "./components/formulario";

export default function Contato() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/banner-contact.png" tabletImage="/banner-contact.png" desktopImage="/banner-contact.png" />
  <ContactSection/>
  <ContactForm/>
  <Cards titleText="Nossos Produtos Imobiliários" />
  <NoticesList numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
