"use client"

//import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const products = [
//     { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Product1.png" },
//     { id: 2, title: "Laviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Product2.png" },
//     { id: 3, title: "Loliota", description: "Luxury big safoa", price: "Rp 7.000.000", image: "/images/Product3.png" },
//     { id: 4, title: "Respira", description: "Outdoor bar table and stool;", price: "Rp 500.000", image: "/images/Product4.png" },
//     { id: 5, title: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: "/images/Product5.png" },
//     { id: 6, title: "Muggo", description: "Small mug", price: "Rp 150.000", image: "/images/Product6.png" },
//     { id: 7, title: "Pringky", description: "Cute bed set", price: "Rp 7.000.000", image: "/images/Product7.png" },
//     { id: 8, title: "Potty", description: "MInimalist flower pot", price: "Rp 500.000", image: "/images/Product8.png" },
// ];

// const Product = () => {
//     return (
//         <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
            
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#3A3A3A]">Our Products</h2>

       
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {products.map(product => (
                <div key={product.id} className="border shadow-md  flex flex-col items-center">
                    <Image 
                        src={product.image} 
                        alt={product.title}  
                        className="object-cover mb-4 w-[289px] h-[301px]"
                        width={285}
                        height={301} 
                    />
                    <h3 className="text-lg font-semibold text-[#3A3A3A] ">{product.title}</h3>
                    <p className=" mb-2 text-[#898989] pr-4">{product.description}</p>
                    <span className="text-xl font-bold text-[#3A3A3A] ">{product.price}</span>
                </div>
            ))}
        </div>

       
        <div className="flex justify-center mt-8">
            <Link href="/components/Cart">
            <button className="border-[1px]  font-semibold w-[245px] h-[48px] border-[#B88E2E] text-[#B88E2E] px-4 py-2  ">
                Show More
            </button>
            </Link>
        </div>
    </div>
);
};
export default Product; */}


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Product1.png" },
    { id: 2, title: "Laviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/Product2.png" },
    { id: 3, title: "Loliota", description: "Luxury big sofa", price: "Rp 7.000.000", image: "/images/Product3.png" },
    { id: 4, title: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/Product4.png" },
    { id: 5, title: "Grifo", description: "Night lamp", price: "Rp 1.500.000", image: "/images/Product5.png" },
    { id: 6, title: "Muggo", description: "Small mug", price: "Rp 150.000", image: "/images/Product6.png" },
    { id: 7, title: "Pringky", description: "Cute bed set", price: "Rp 7.000.000", image: "/images/Product7.png" },
    { id: 8, title: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", image: "/images/Product8.png" },
];

const Product = () => {
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#3A3A3A]">Our Products</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative border shadow-md flex flex-col items-center group"
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

            <div className="flex justify-center mt-8">
                <Link href="/components/Shop">
                    <button className="border-[1px] font-semibold w-[245px] h-[48px] border-[#B88E2E] text-[#B88E2E] px-4 py-2">
                        Show More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Product;









