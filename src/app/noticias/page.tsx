import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "./components/noticiasLista";

export default function Noticias() {
  return (
<main>
  <Navbar/>
  <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg"/>
  <NoticesList/>
  <Footer/>
</main>
  );
}
