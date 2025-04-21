
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Clientes } from "./components/Clientes";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { IntegracaoPortais } from "./components/IntegracaoPortais";
import { Navbar } from "./components/navbar";
import { Nidoadm } from "./components/Nidoadm";
import { Nidoimovel } from "./components/Nidoimovel";


import { Notices } from "./components/Notices";
import { Parceiros } from "./components/Parceiros";
import { Plans } from "./components/Plans";
import { Produtos } from "./components/Produtos";
import { SitesParaImobiliarias } from "./components/SitesParaImobiliarias";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
<main>
  <Navbar/>
  <Banner/>
  <Produtos/>
  <About/>
  <Nidoadm/>
  <Nidoimovel/>
  <IntegracaoPortais/>
  <SitesParaImobiliarias/>
<Clientes/>
<Parceiros/>
<Plans/>
<Notices/>
<Testimonial/>
<Contact/>
  <Footer/>

</main>
  );
}
