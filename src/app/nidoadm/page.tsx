import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Notices } from "../components/notices";
import { CardsPage } from "./components/cardsPage";
import { Administrativo } from "./components/nidoadm";

export default function NIDOAdm() {
  return (
<main>
  <Navbar/>
  <Administrativo/>
  <CardsPage/>
  <Notices numNotices={4} />
  <Footer/>
</main>
  );
}
