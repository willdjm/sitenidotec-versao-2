import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/Plans";
import { Testimonial } from "../components/testimonial";
import { NoticesList } from "../noticias/components/noticiasLista";
import { NoticiasDetalhes } from "./components/detalhe";


export default function NoticiaDetalhe() {
  return (
    <main className="bg-zinc-50">
      <Navbar />
      <NoticiasDetalhes />
      <NoticesList numNotices={6} showPagination={false} title="Demais notícias" />
      
      <Plans />
      <Testimonial />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
