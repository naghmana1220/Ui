"use client";
// import { useState } from "react";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Shop = () => {
//  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

//   const items = [
//     { id: 1, imgSrc: "/images/Cart1.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 2, imgSrc: "/images/Cart6.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 3, imgSrc: "/images/Cart3.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
//     { id: 4, imgSrc: "/images/Cart4.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
//     { id: 5, imgSrc: "/images/Cart5.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 6, imgSrc: "/images/Cart6.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 7, imgSrc: "/images/Cart7.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
//     { id: 8, imgSrc: "/images/Cart8.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
//     { id: 9, imgSrc: "/images/Cart9.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 10, imgSrc: "/images/Cart10.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 11, imgSrc: "/images/Cart11.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
//     { id: 12, imgSrc: "/images/Cart12.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
//     { id: 13, imgSrc: "/images/Cart13.png", title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 14, imgSrc: "/images/Cart14.png", title: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000" },
//     { id: 15, imgSrc: "/images/Cart15.png", title: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000" },
//     { id: 16, imgSrc: "/images/Cart16.png", title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000" },
//   ];

//   return (
//     <div id="Shop">
//       {/* Single Image Section */}
//       <div>
//         <Image
//           src="/images/Shop1.png"
//           alt="shop image"
//           className="w-full h-auto object-cover"
//           width={1440}
//           height={700}
//         />
//         <div className="max-w-full mx-auto py-4 flex flex-wrap items-center justify-center gap-4 bg-[#FAF3EA]">
//           <div className="flex items-center gap-2">
//             <Image src="/images/Sicon6.png" alt="icon" width={24} height={24} />
//             <p className="text-[#000000]">Filter</p>
//           </div>
//           <Image src="/images/Sicon5.png" alt="icon" width={24} height={24} />
//           <Image src="/images/Sicon4.png" alt="icon" width={24} height={24} />
//           <div className="hidden lg:block w-px h-5 bg-[#9F9F9F]"></div>
//           <p className="text-sm lg:pl-4 border-l border-[#9F9F9F] hover:underline cursor-pointer">
//             Showing 1-16 of 32 results
//           </p>
//           <div className="flex items-center gap-2">
//             <p className="text-sm lg:text-lg">Short by</p>
//             <div className="px-4 py-2 bg-white text-center text-sm lg:text-lg">Default</div>
//           </div>
//         </div>
//       </div>

//       {/* Grid of Images Section */}
//       <div className="container mx-auto px-4 py-6">
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {items.map((item) => (
//             <div key={item.id} className="bg-white border shadow hover:shadow-cyan-400 p-4">
//               <Link href="/Description">
//                 <Image
//                   src={item.imgSrc}
//                   alt={item.title}
//                   width={285}
//                   height={301}
//                   className="w-full h-auto object-cover mb-4"
//                 />

//               </Link>
        

//               <h3 className="text-lg font-semibold text-[#3A3A3A]">{item.title}</h3>
//               <p className="text-sm text-[#898989]">{item.description}</p>
//               <p className="text-xl font-bold text-[#3A3A3A] mt-2">{item.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Section */}
//         <div className="flex flex-wrap gap-4 justify-center mt-12">
//           <button className="bg-[#B88E2E] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
//             1
//           </button>
//           <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
//             2
//           </button>
//           <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
//             3
//           </button>
//           <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
//             Next
//           </button>
//         </div>
//         </div>
//         </div>
//   );
// };

// export default Shop;

import React, { useState } from 'react';
import Image from 'next/image';


const products = [
    { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Cart1.png" },
    { id: 2, title: "Laviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Cart6.png" },
    { id: 3, title: "Loliota", description: "Luxury big sofa", price: "Rp 7.000.000", image: "/images/Cart3.png" },
    { id: 4, title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/Cart4.png" },
    { id: 5, title: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: "/images/Cart5.png" },
    { id: 6, title: "Muggo", description: "Small mug", price: "Rp 150.000", image: "/images/Cart6.png" },
    { id: 7, title: "Pringky", description: "Cute bed set", price: "Rp 7.000.000", image: "/images/Cart7.png" },
    { id: 8, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart8.png" },
    { id: 9, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart9.png" },
    { id: 10, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart10.png" },
    { id: 11, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart11.png" },
    { id: 12, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart12.png" },
    { id: 13, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart13.png" },
    { id: 14, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart14.png" },
    { id: 15, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart15.png" },
    { id: 16, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Cart16.png" },
];

const Product = () => {
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

    return (
        <div id="Shop">
       {/* Single Image Section */}
       <div>
         <Image
          src="/images/Shop1.png"
          alt="shop image"
          className="w-full h-auto object-cover pointer-events-none"
          width={1440}
          height={700}
        />
        <div className="max-w-full mx-auto py-4 flex flex-wrap items-center justify-center gap-4 bg-[#FAF3EA]">
          <div className="flex items-center gap-2">
            <Image src="/images/Sicon6.png" alt="icon" width={24} height={24} />
            <p className="text-[#000000]">Filter</p>
          </div>
          <Image src="/images/Sicon5.png" alt="icon" width={24} height={24} />
          <Image src="/images/Sicon4.png" alt="icon" width={24} height={24} />
          <div className="hidden lg:block w-px h-5 bg-[#9F9F9F]"></div>
          <p className="text-sm lg:pl-4 border-l border-[#9F9F9F] hover:underline cursor-pointer">
            Showing 1-16 of 32 results
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm lg:text-lg">Short by</p>
            <div className="px-4 py-2 bg-white text-center text-sm lg:text-lg">Default</div>
          </div>
        </div>
      </div>
     {/* original work */}
        <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
          

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative border shadow-sm flex flex-col items-center group"
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                    >
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="object-cover mb-4 w-[289px] h-[301px]"
                            width={285}
                            height={301}
                        />
                        <h3 className="text-lg font-semibold text-[#3A3A3A]">{product.title}</h3>
                        <p className="mb-2 text-[#898989] pr-4">{product.description}</p>
                        <span className="text-xl font-bold text-[#3A3A3A]">{product.price}</span>

                        {hoveredProductId === product.id && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4">
                                <button className="bg-white text-[#B88E2E] font-semibold px-4 py-2 rounded-md">
                                    Add to Cart
                                </button>
                                <div className="flex gap-2">
                                    <button className="text-white">🔗Share</button>
                                    <button className="text-white">↔Compare</button>
                                    <button className="text-white">♡Like</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>



 {/* Pagination Section */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
           <button className="bg-[#B88E2E] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
             1
           </button>
           <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
             2
           </button>
           <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
             3
           </button>     
      <button className="bg-[#F9F1E7] text-lg px-6 py-2 rounded-lg transition-colors duration-300">
             Next
           </button>
         </div>
           </div>
        </div>
    );
};

export default Product;









