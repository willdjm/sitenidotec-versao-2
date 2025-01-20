import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Parceiros } from "./components/parceiros";

export default function PageParceiros() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/banner-parceiros.png" tabletImage="/banner-parceiros.png" desktopImage="/banner-parceiros.png"/>
  <Parceiros/>

  <NoticesList numNotices={6} showPagination={false}  />
  <Footer/>
</main>
  );
}
