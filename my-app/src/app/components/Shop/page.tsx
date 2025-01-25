//"use client";
       

        

// import React, { useState } from 'react';
// import Image from 'next/image';

// const products = [
//     { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: 2500000, image: "/images/Cart1.png" },
//     { id: 2, title: "Laviosa", description: "Stylish cafe chair", price: 2500000, image: "/images/Cart6.png" },
//     { id: 3, title: "Loliota", description: "Luxury big sofa", price: 7000000, image: "/images/Cart3.png" },
//     { id: 4, title: "Respira", description: "Outdoor bar table and stool", price: 500000, image: "/images/Cart4.png" },
//     { id: 5, title: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: "/images/Cart5.png" },
//     { id: 6, title: "Muggo", description: "Small mug", price: "Rp 150.000", image: "/images/Cart6.png" },
//     { id: 7, title: "Pringky", description: "Cute bed set", price: "Rp 7.000.000", image: "/images/Cart7.png" },
//     { id: 8, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart8.png" },
//     { id: 9, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart9.png" },
//     { id: 10, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart10.png" },
//     { id: 11, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart11.png" },
//     { id: 12, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart12.png" },
//     { id: 13, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart13.png" },
//     { id: 14, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart14.png" },
//     { id: 15, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart15.png" },
//     { id: 16, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart16.png" },
// ];

// const Product = () => {
//     const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
//     const [cart, setCart] = useState<any[]>([]);

//     const addToCart = (product: any) => {
//         const existingItem = cart.find((item) => item.id === product.id);
//         if (existingItem) {
//             // If product already exists, increase the quantity
//             setCart(
//                 cart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 )
//             );
//         } else {
//             // Add new product to cart
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//         alert(`${product.title} added to cart!`);
//     };

//     return (
//         <div id="Shop">
//             <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="relative border shadow-sm flex flex-col items-center group"
//                             onMouseEnter={() => setHoveredProductId(product.id)}
//                             onMouseLeave={() => setHoveredProductId(null)}
//                         >
//                             <Image
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="object-cover mb-4 w-[289px] h-[301px]"
//                                 width={285}
//                                 height={301}
//                             />
//                             <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.title}</h3>
//                             <p className="mb-2 text-[#898989] pr-4">{product.description}</p>
//                             <span className="text-xl font-bold text-[#3A3A3A]">
//                                  {product.price.toLocaleString()}
//                             </span>

//                             {hoveredProductId === product.id && (
//                                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
//                                     <button
//                                         className="bg-white text-[#B88E2E] font-semibold px-4 py-2 rounded-md"
//                                         onClick={() => addToCart(product)}
//                                     >
//                                         Add to Cart
//                                     </button>
//                                     <div className="flex gap-2">
//                                         <button className="text-white">🔗 Share</button>
//                                         <button className="text-white">↔ Compare</button>
//                                         <button className="text-white">♡ Like</button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Debugging - View Cart */}
//                 <div className="mt-10 p-4 bg-gray-100 rounded-md">
                   
//                     {cart.length > 0 ? (
//                         cart.map((item) => (
//                             <div key={item.id} className="flex justify-between items-center mb-2">
//                                 <span>{item.title}</span>
//                                 <span>Quantity: {item.quantity}</span>
//                                 <span>Rp {item.price.toLocaleString()}</span>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Your Cart is empty.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;



// import React, { useState } from "react";
// import Image from "next/image";

// const shop = [
//     { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: 2500000, image: "/images/Cart1.png" },
//     { id: 2, title: "Laviosa", description: "Stylish cafe chair", price: 2500000, image: "/images/Cart6.png" },
//     { id: 3, title: "Loliota", description: "Luxury big sofa", price: 7000000, image: "/images/Cart3.png" },
//     { id: 4, title: "Syltherine", description: "Outdoor bar table and stool", price: 500000, image: "/images/Cart4.png" },
//     { id: 5, title: "Grifo", description: "Stylish cafe chair", price: 2500000, image: "/images/Cart5.png" },
//     { id: 6, title: "Muggo", description: "Stylish cafe chair", price:  150000, image: "/images/Cart6.png" },
//     { id: 7, title: "Pringky", description: "Cute bed set", price: 7000000, image: "/images/Cart7.png" },
//     { id: 8, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart8.png" },
//     { id: 9, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart9.png" },
//     { id: 10, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart10.png" },
//     { id: 11, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart11.png" },
//     { id: 12, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart12.png" },
//     { id: 13, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart13.png" },
//     { id: 14, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart14.png" },
//     { id: 15, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart15.png" },
//     { id: 16, title: "Potty", description: "Minimalist flower pot", price:  500000, image: "/images/Cart16.png" },
// ];

// const Shop = () => {
//     const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
//     const [cart, setCart] = useState<any[]>([]);

//     const addToCart = (product: any) => {
//         const existingItem = cart.find((item) => item.id === product.id);
//         if (existingItem) {
//             setCart(
//                 cart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 )
//             );
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//         alert(`${product.title} added to cart!`);
//     };

//     return (
//         <div id="Shop">
//             {/* Main Image */}
//             <div className="relative w-full h-[400px] mb-10 lg:w-[1900px]">
//                 <Image
//                     src="/images/Shop1.png" 
//                     alt="Main Banner"
//                     layout="fill"
//                     // objectFit="cover"
//                     style={{ objectFit: "cover" }}
//                     className="rounded-md"
//                 />
            
//             </div>
//             <div className="absolute  bg-pink-400 w-[100px]">
                
//                 </div>
//             <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {shop.map((Shop) => (
//                         <div
//                             key={Shop.id}
//                             className="relative border shadow-sm flex flex-col items-center group"
//                             onMouseEnter={() => setHoveredProductId(Shop.id)}
//                             onMouseLeave={() => setHoveredProductId(null)}
//                         >
//                             <Image
//                                 src={Shop.image}
//                                 alt={Shop.title}
//                                 className="object-cover mb-4 w-[289px] h-[301px]"
//                                 width={285}
//                                 height={301}
//                             />
//                             <h3 className="text-lg font-semibold text-[#3A3A3A]">{Shop.title}</h3>
//                             <p className="mb-2 text-[#898989] pr-4">{Shop.description}</p>
//                             <span className="text-xl font-bold text-[#3A3A3A]">
//                                 {Shop.price.toLocaleString()}
//                             </span>

//                             {hoveredProductId === Shop.id && (
//                                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
//                                     <button
//                                         className="bg-white text-[#B88E2E] font-semibold px-4 py-2 rounded-md"
//                                         onClick={() => addToCart(Shop)}
//                                     >
//                                         Add to Cart
//                                     </button>
//                                     <div className="flex gap-2">
//                                         <button className="text-white">🔗 Share</button>
//                                         <button className="text-white">↔ Compare</button>
//                                         <button className="text-white">♡ Like</button>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Debugging - View Cart */}
//                  {/* <div className="mt-10 p-4 bg-gray-100 rounded-md">
//                     {cart.length > 0 ? (
//                         cart.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="flex justify-between items-center mb-2"
//                             >
//                                 <span>{item.title}</span>
//                                 <span>Quantity: {item.quantity}</span>
//                                 <span>Rp {item.price.toLocaleString()}</span>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Your Cart is empty.</p>
//                     )}
//                 </div>  */}
// {/* Debugging - View Cart */}
// <div className="mt-10 p-4 bg-[#FCF8F3] rounded-md">
//     <h2 className="text-3xl font-semibold mb-4 text-gray-700">Cart</h2>
//     {cart.length > 0 ? (
//         cart.map((item) => (
//             <div
//                 key={item.id}
//                 className="flex items-center gap-4 border-b border-gray-300 py-4"
//             >
//                 {/* Product Image */}
//                 <Image
//                     src={item.image} 
//                     alt={item.title}
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                 />
//                 {/* Product Details */}
//                 <div className="flex-1">
//                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                     <p className="text-gray-500">Quantity: {item.quantity}</p>
//                     <p className="text-gray-800 font-semibold">
//                         Rp {(item.price * item.quantity).toLocaleString()}
//                     </p>
//                 </div>
//                 {/* Remove Button */}
//                 <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-md"
//                     onClick={() =>
//                         setCart(cart.filter((cartItem) => cartItem.id !== item.id))
//                     }
//                 >
//                     Remove
//                 </button>
//             </div>
//         ))
//     ) : (
//         <p className="text-gray-700">Your Cart is empty.</p>
//     )}
// </div>

             
                   
//             </div>
//         </div>
//     );
// };

// export default Shop;
//"use client"
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const Home = async () => {
  // Fetch products
  const products = await client.fetch(`
    *[_type == "product"]{
      _id,
      title,
      description,
      productImage{
        asset->{url}
      },
      price,
      tags,
      discountPercentage,
      isNew
    }
  `);

  console.log("Fetched products:", products);

  return (
    <div id="Shop">
    <div className="overflow-hidden">
    <div className="relative  lg:w-[1240px]  sm:w-auto ">
      {/* Top Banner and Filter Bar */}
      <div className="lg:w-[1900px] ">
        <Image
          src="/images/Shop1.png"
          alt="Shop Image"
          className="w-full h-auto lg:w-[1900px]"
          width={1440}
          height={700}
        />
        <div className="max-w-full mx-auto py-6 flex flex-wrap items-center justify-between bg-[#FAF3EA] px-4 lg:px-12 ">
          <div className="flex items-center gap-4">
            <Image src="/images/Sicon6.png" alt="Icon" width={24} height={24} />
            <p className="text-black">Filter</p>
            <Image src="/images/Sicon5.png" alt="Icon" width={24} height={24} />
            <Image src="/images/Sicon4.png" alt="Icon" width={24} height={24} />
          </div>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <p className="text-black border-l pl-4 border-[#9F9F9F]">
              Showing 1-16 of 32 results
            </p>
            <div className="flex items-center gap-2">
              <p className="text-black">Sort by</p>
              <div className="bg-white px-4 py-2 rounded text-black">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-4 lg:w-[1900px]">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product: any) => (
            <Link
              key={product._id}
             href={`/components/Shopdetail/${product._id}`}
              className="block  p-4 "
            >
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                height={500}
                width={500}
                className="w-full h-60 object-cover rounded-md hover:shadow-lg hover:shadow-cyan-500"
              />
              <h2 className="text-cyan-900 text-lg font-semibold mt-4">
                {product.title}
              </h2>
              <p className="text-green-800 font-bold mt-2 text-xl">
                ${product.price}
              </p>
              {product.discountPercentage && (
                <p className="text-red-500 text-sm">
                  Discount: {product.discountPercentage}%
                </p>
              )}
              {product.isNew && (
                <span className="text-blue-500 text-xl">New Arrival</span>
              )}
              <div className="flex mt-2 gap-2">
                {product.tags?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
