import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { NoticiasDetalhes } from "./components/detalhe";


export default function NoticiaDetalhe() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/banner-noticias.png" tabletImage="/banner-noticias.png" desktopImage="/banner-noticias.png"/>
  <NoticiasDetalhes/>
    <NoticesList numNotices={6} showPagination={false} title="Demais notícias" />
    <Cards/>
  <Footer/>
</main>
  );
}
