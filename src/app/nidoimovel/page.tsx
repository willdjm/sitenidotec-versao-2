import { BannerPages } from "../components/bannersPages";
import { CardsPage } from "../components/cardsPage";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Imovel } from "./components/nidoimovel";

export default function NIDOImovel() {
  return (
<main className="bg-zinc-50">
  <Navbar/>
    <BannerPages mobileImage="/banner-nidoimovel.png" tabletImage="/banner-nidoimovel.png" desktopImage="/banner-nidoimovel.png"/>
  <Imovel/>
  <CardsPage hideCards={[1]} />
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
