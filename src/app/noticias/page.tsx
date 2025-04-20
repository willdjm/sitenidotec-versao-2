import { FloatingButtons } from "../components/FloatingButtons";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { NoticesList } from "./components/noticiasLista";

export default function Noticias() {
  return (
    <main className="bg-zinc-50">
      <Navbar />

      <NoticesList />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
