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
  <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <NoticiasDetalhes/>
    <NoticesList numNotices={6} showPagination={false} title="Demais notícias" />
    <Cards/>
  <Footer/>
</main>
  );
}
