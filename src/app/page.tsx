
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { IntegracaoPortais } from "./components/IntegracaoPortais";
import { Negocios } from "./components/Negocios";
import { Notices } from "./components/Notices";
import { Parceiros } from "./components/Parceiros";
import { Plans } from "./components/Plans";
import { Testimonial } from "./components/testimonial";

export default function Home() {
  return (
<main className="bg-zinc-50">
<Notices/>
<Negocios/>
<Parceiros/>
<IntegracaoPortais/>
<Testimonial/>
<Plans/>

<Contact/>
  <Footer/>

</main>
  );
}
