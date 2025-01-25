//import Image from "next/image";
//import { client } from "@/sanity/lib/client";
//import Link from "next/link";
import Contact from "./components/Contact/page";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Setup from "./components/Setup/page";
import Shop from "./components/Shop/page";
import Blog from "./components/Blog/page";
//import Description from "./components/Description/page";
import Thankyou from "./components/Thankyou/page";
//import Review from "./components/Review";
import ProductListing from "./components/ProductListing";




        const Home = () => {
          return(
      <div>

        <Hero />
    <Product />
    <Explore />
    <Setup />
    <Shop />
    <Blog />
  <Contact />
      </div>
    //</div>
    

          )

};

export default Home;

