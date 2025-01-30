
import Image from "next/image";
import Link from "next/link";


const products = [
    { id: 1, name: "Syltherine", price: "Rp 2.500.000", stock: "In Stock", image: "/images/Product1.png" },
    { id: 2, name: "Laviosa", price: "Rp 2.500.000", stock: "Out of Stock", image: "/images/Product2.png" },
    { id: 3, name: "Loliota", price: "Rp 7.000.000", stock: "In Stock", image: "/images/Product3.png" },
    { id: 4, name: "Loliota", price: "Rp 7.000.000", stock: "In Stock", image: "/images/Product4.png" },
];

const ProductListing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 lg:w-[1900px]">
            <h2 className="text-5xl font-serif text-gray-600 text-center mb-8">Highly Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                     <Link key={product.id} href={`/product/${product.id}`}>
                        <div className=" p-4  hover:shadow-lg hover:shadow-cyan-500">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                 className=" object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-600">{product.name}</h3>
                            <p className="text-lg text-gray-700">{product.price}</p>
                            <p
                                className={`text-sm ${
                                    product.stock === "In Stock"
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {product.stock}
                            </p>
                        </div>
                     </Link>
                ))}
            </div>
        </div>
        
    );
};

export default ProductListing;

