


import Blog from "./components/Blog/page";
import Contact from "./components/Contact/page";
import Description from "./components/Description/page";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Setup from "./components/Setup/page";
import Shop from "./components/Shop/page"



export default function Home() {
  return(
<div>

<Hero />
<Product />
<Explore />
<Shop />
<Setup />
<Blog />
<Description />
<Contact />
</div>
  )
}