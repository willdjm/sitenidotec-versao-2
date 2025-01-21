import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "./components/noticiasLista";

export default function Noticias() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/banner-noticias.png" tabletImage="/banner-noticias.png" desktopImage="/banner-noticias.png"/>
  <NoticesList/>
  <Footer/>
</main>
  );
}
