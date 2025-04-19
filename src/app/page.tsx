
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Clientes } from "./components/Clientes";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { IntegracaoPortais } from "./components/IntegracaoPortais";
import { IntegracaoPortais2 } from "./components/IntegracaoPortais2";
import { Navbar } from "./components/navbar";
import { Negocios } from "./components/Negocios";
import { Nidoadm } from "./components/Nidoadm";
import { Nidoadm2 } from "./components/Nidoadm2";
import { Nidoimovel } from "./components/Nidoimovel";
import { Notices } from "./components/Notices";
import { Parceiros } from "./components/Parceiros";
import { Plans } from "./components/Plans";
import { Produtos } from "./components/Produtos";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
<main>
  <Navbar/>
  <Banner/>
  <Produtos/>
  <About/>
  <IntegracaoPortais2/>
  <Nidoadm/>
  <Nidoadm2/>
<Nidoimovel/>
<Negocios/>

<IntegracaoPortais/>
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
