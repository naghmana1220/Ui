// "use client"


// import { client } from "@/sanity/lib/client";
// import ShopContent from "./ShopContent";

// const Shop = async () => {
//   // Fetch products with category
//   const products = await client.fetch(`
//     *[_type == "product"]{
//       _id,
//       title,
//       price,
//       category,
//       productImage{
//         asset->{url}
//       }
//     }
//   `);

//   return <ShopContent products={products} />;
// };

//export default Shop;
import { client } from "@/sanity/lib/client";
import ShopContent from "./ShopContent";

export default async function Shop() {
  // Fetch products from Sanity
  const products = await client.fetch(`
    *[_type == "product"]{
           _id,
       title,
       price,
       productImage{
        asset->{url}
      }
    }
  `);
  console.log("Fetched products:", products);

  return <ShopContent products={products} />;
}
