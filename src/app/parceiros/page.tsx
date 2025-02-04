import { BannerPages } from "../components/bannersPages";
import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Parceiros } from "./components/parceiros";

export default function PageParceiros() {
  return (
<main className="bg-zinc-50">
<Navbar/>
      <BannerPages mobileImage="/banner-parceiros-mobile.png" tabletImage="/banner-parceiros.png" desktopImage="/banner-parceiros.png"/>
  <Parceiros/>
  <Cards titleText="Faça parte você também"/>
  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
