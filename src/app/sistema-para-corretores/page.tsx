import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { SistemaParaCorretores } from "./components/sistemaParaCorretores";

export default function SistemaCorretores() {
  return (
<main className="bg-zinc-50">
<Navbar/>
      <BannerPages mobileImage="/banner-sistema-mobile.png" tabletImage="/banner-sistema.png" desktopImage="/banner-sistema.png"/>
  <SistemaParaCorretores/>
  <CardsPage hideCards={[4]} />
    <Testimonial/>
    <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
