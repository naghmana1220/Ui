//acurate dynamic working
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Review from "../../Review";
import ProductListing from "../../ProductListing";


const Shopdetail = async ({ params }: { params: { id: string } }) => {


  // Fetch product details by ID
  const product = await client.fetch(
     `
    *[_type == "product" && _id == $id][0]{
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
  `,
    { id: params.id }
  );

  if (!product) {
    return <div className="p-4 text-red-500">Product not found!</div>;
  }

  return (
    <div className="p-4 bg-white text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-cyan-500 mb-4">
          {product.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-6 lg:flex-col">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <Image
              src={product.productImage.asset.url}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg items-center justify-center"
            />
          </div>

          {/* Product Details */}
          <div className="flex-grow">
            <p className="text-gray-900 text-lg mb-4">{product.description}</p>
            <p className="text-green-500 font-bold text-2xl">
              Price: ${product.price}
            </p>
            {product.discountPercentage && (
              <p className="text-red-500">
                Discount: {product.discountPercentage}%
              </p>
            )}
            {product.isNew && (
              <span className="text-blue-500 text-sm">New Arrival</span>
            )}

            {/* Product Tags */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Tags:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-900 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Review />
          <ProductListing />
        </div>
      </div>
    </div>
  );
};

export default Shopdetail;


