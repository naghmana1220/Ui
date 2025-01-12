


import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Setup from "./components/Setup/page";
import Shop from "./components/Shop/page";



export default function Home() {
  return(
<div>

<Hero />
<Product />
<Explore />
<Setup />
<Shop />
<Checkout />
<Contact />
</div>
  )
}