import { BannerPages } from "../components/bannersPages";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "../noticias/components/noticiasLista";
import { Clientes } from "./components/clientes";

export default function PageClientes() {
  return (
<main>
  <Navbar/>
      <BannerPages mobileImage="/1.jpg" tabletImage="/2.jpg" desktopImage="/3.jpg" imageText="Texto"/>
  <Clientes/>

  <NoticesList numNotices={3} showPagination={false}  />
  <Footer/>
</main>
  );
}
