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
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <Administrativo/>
  <CardsPage hideCards={[2]} />
  <NoticesList numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
