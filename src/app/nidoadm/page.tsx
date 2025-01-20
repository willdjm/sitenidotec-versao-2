import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Administrativo } from "./components/nidoadm";

export default function NIDOAdm() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-nidoadm.png" tabletImage="/banner-nidoadm.png" desktopImage="/banner-nidoadm.png"/>
  <Administrativo/>
  <CardsPage hideCards={[2]} />
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
