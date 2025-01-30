// // app/Shop/ShopContent.tsx
// "use client";

// import Image from "next/image";
// import { useCart } from "@/app/components/context/CartContext";

// const ShopContent = ({ products }: { products: any[] }) => {
//   const { addToCart } = useCart();

//   return (
//     <div id="Shop">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="p-4 border rounded shadow-md">
//             <Image
//               src={product.productImage.asset.url}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//             <p className="text-green-700 text-xl font-bold">${product.price}</p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopContent;
// import Image from "next/image";
// import Link from "next/link";  // Import Link for navigation
// import { useCart } from "@/app/components/context/CartContext";

// const ShopContent = ({ products }: { products: any[] }) => {
//   const { addToCart } = useCart();

//   return (
//     <div id="Shop">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="p-4 border rounded shadow-md">
//             <Image
//               src={product.productImage.asset.url}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-60 object-cover"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//             <p className="text-green-700 text-xl font-bold">${product.price}</p>

//             {/* Link to the product detail page */}
//             <Link href={`/components/Shopdetail/${product._id}`} className="text-blue-500">
//               View Details
//             </Link>

//             <button
//               className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopContent;


// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/components/context/CartContext";

// const ShopContent = ({ products }: { products: any[] }) => {
//   const { addToCart } = useCart();

//   return (
//     <div id="Shop">
//       {/* Top Banner and Filter Bar */}
//       <div className="w-full">
//         <Image
//           src="/images/Shop1.png"
//           alt="Shop Image"
//           className="w-full h-auto"
//           width={1440}
//           height={700}
//         />
//         <div className="max-w-full mx-auto py-6 flex flex-wrap items-center justify-between bg-[#FAF3EA] px-4 lg:px-12">
//           <div className="flex items-center gap-4">
//             <Image src="/images/Sicon6.png" alt="Icon" width={24} height={24} />
//             <p className="text-black">Filter</p>
//             <Image src="/images/Sicon5.png" alt="Icon" width={24} height={24} />
//             <Image src="/images/Sicon4.png" alt="Icon" width={24} height={24} />
//           </div>
//           <div className="flex items-center gap-4 mt-4 lg:mt-0">
//             <p className="text-black border-l pl-4 border-[#9F9F9F]">
//               Showing 1-16 of 32 results
//             </p>
//             <div className="flex items-center gap-2">
//               <p className="text-black">Sort by</p>
//               <div className="bg-white px-4 py-2 rounded text-black">Default</div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
//         {products.map((product) => (
//           <div key={product._id} className="p-4     hover:shadow-cyan-500">
//             <Image
//               src={product.productImage.asset.url}
//               alt={product.title}
//               width={300}
//               height={300}
//               className="w-full h-60 object-cover shadow-md hover:shadow-cyan-500 rounded"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//             <p className="text-green-700 text-xl font-bold">${product.price}</p>

//             {/* Link to the product detail page */}
//             <Link href={`/components/Shopdetail/${product._id}`} className="text-blue-700 flex">
//               View Details
//             </Link>

//             <button
//               className="bg-blue-500 text-white px-4 py-2 mt-2 rounded border"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopContent;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/components/context/CartContext";

const ShopContent = ({ products }: { products: any[] }) => {
  const { addToCart } = useCart();
  
  // State for Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from products
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="Shop">
      {/* Top Banner */}
      <div className="w-full">
        <Image
          src="/images/Shop1.png"
          alt="Shop Image"
          className="w-full h-auto"
          width={1440}
          height={700}
        />
      </div>

      {/* Search & Filter Bar */}
      <div className="max-w-full mx-auto py-6 flex flex-wrap items-center justify-between bg-[#FAF3EA] px-4 lg:px-12">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-md text-black w-full sm:w-64"
        />

        {/* Category Filter Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md text-black w-full sm:w-48 mt-2 sm:mt-0"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="p-4 hover:shadow-lg">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-60 object-cover shadow-md rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-green-700 text-xl font-bold">${product.price}</p>

              {/* Link to Product Detail */}
              <Link href={`/components/Shopdetail/${product._id}`} className="text-blue-700 flex">
                View Details
              </Link>

              <button
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded border"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopContent;
