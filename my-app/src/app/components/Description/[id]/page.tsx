
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductListing from "../../ProductListing"
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Shopdetail = async ({ params }: { params: { id: string } }) => {
  
  const product = await client.fetch(
    `*[_type == "product" && _id == $id ][0]{
      title,
      description,
      productImage{
        asset->{url}
      },
      price,
      tags,
      discountPercentage,
      isNew
    }`,
    { id: params.id }
  );
  console.log(product);


  if (!product) {
    return <div className="p-4 text-red-500">Product not found!</div>;
  }

  

  return (
    <div className="max-w-[1440px] mx-auto font-Poppins">
      {/* Breadcrumbs */}
      <div className="max-w-[1240px] mx-auto py-[38px] flex bg-[#FAF3EA]">
        <p className="text-[#9F9F9F]">Home</p>
        <ChevronRight className="ml-[14px] mr-[24px]" />
        <p className="text-[#9F9F9F]">Shop</p>
        <ChevronRight className="ml-[21px] mr-[25px]" />
        <div className="w-[1px] h-[1px] bg-[#9F9F9F]" />
        <p className="border-l border-[#9F9F9F] pl-[34px] hover:underline cursor-pointer">
          {product.title}
        </p>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[82px] items-center lg:items-start">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-[31px]">
          <div className="w-[150px] h-[100px] flex flex-col gap-8">
            <div className="w-full  flex p-3 justify-center items-center rounded border-2 border-black">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                width={121}
                height={122}
              />
            </div>
          </div>

          <div className="max-w-[423px] h-[500px] w-[300px] sm:w-full flex justify-center items-center">
            <Image
              src={product.productImage.asset.url}
              width={450}
              height={315}
              alt="Product Image"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col max-w-[424px] p-4 sm:p-0">
          <div className="flex flex-col">
            <h3 className="text-[42px] tracking-wide">{product.title}</h3>
            <p className="text-2xl font-medium">Rs. {product.price}</p>

            {/* Product Rating */}
            <div className="flex items-center flex-wrap mt-[15px]">
              <div className="text-[#FFAD33] text-2xl mr-4">★★★★</div>
              <p className="opacity-50 text-[14px] text-[#9F9F9F] font-normal mr-4 border-l-[#9F9F9F] border-l pl-4">
                5 Customer Review
              </p>
            </div>
          </div>

          <p className="text-[13px] mt-[18px]">{product.description}</p>

          <div className="flex flex-col gap-[12px] mt-[22px]">
            <p className="text-[14px] text-[#9F9F9F] tracking-wide">Size</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer">
                L
              </div>
              <div className="py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer">
                XL
              </div>
              <div className="py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer">
                XS
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-[18px]">
            <p className="text-[14px] text-[#9F9F9F] tracking-wide">Color</p>
            <div className="flex items-center gap-4">
              <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black"></div>
              <div className="bg-black w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black"></div>
              <div className="bg-[#B88E2E] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black"></div>
            </div>
          </div>

          {/* Add to Cart & Compare Buttons */}
          <div className="flex flex-wrap gap-4 mt-[32px]">
            <div className="w-[123px] rounded-[10px] border-[2px] border-[#00000080] flex justify-between overflow-hidden">
              <button className="w-[40px] flex items-center justify-center py-5">-</button>
              <p className="text-xl font-medium w-[80px] flex items-center justify-center">1</p>
              <button className="w-[40px] flex items-center justify-center py-5">+</button>
            </div>

            <div className="flex justify-center">
              <Link href="/components/TotalCart">
                <button className="border-[2px] border-black px-12 py-[17px] rounded-[10px] flex items-center justify-center text-black">
                  Add To Cart
                </button>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link href="/components/Comparison">
                <button className="border-[2px] border-black px-12 py-[17px] rounded-[10px] flex items-center justify-center text-black">
                  + Compare
                </button>
              </Link>
            </div>
          </div>

          <div className="h-[1px] bg-[#D9D9D9] mt-[60px]"></div>

          {/* Additional Product Information */}
          <div className="mt-[41px] text-[#9F9F9F] space-y-3">
            <div className="flex">
              <p className="w-[85px] ml-[16px]">SKU</p>
              <span className="mr-[12px]">:</span>
              <p>SS001</p>
            </div>
            <div className="flex">
              <p className="w-[85px] ml-[16px]">Category</p>
              <span className="mr-[12px]">:</span>
              <p>Sofas</p>
            </div>
            <div className="flex">
              <p className="w-[85px] ml-[16px]">Tags</p>
              <span className="mr-[12px]">:</span>
              <p>Sofa, Chair, Home, Shop</p>
            </div>
            <div className="flex">
              <p className="w-[85px] ml-[16px]">Share</p>
              <span className="mr-[12px]">:</span>
              <p className="flex gap-[25px]">
                <Image src="/images/Sicon1.png" alt="fb" width={25} height={25} />
                <Image src="/images/Sicon2.png" alt="linkedin" width={25} height={25} />
                <Image src="/images/Sicon3.png" alt="twitter" width={25} height={25} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-[54px] border-t border-[#D9D9D9] pt-12">
        <div className="flex flex-wrap gap-3 md:gap-[53px] justify-center">
          <p className="text-black text-2xl">Description</p>
          <p className="text-[#9F9F9F] text-2xl">Additional Information</p>
          <p className="text-[#9F9F9F] text-2xl">Reviews [5]</p>
        </div>

        <div className="max-w-[1026px] mx-auto text-gray-500 space-y-[30px] py-[37px] p-4 sm:p-0 border-b border-[#D9D9D9] lg:w-[1940px]">
          <p className="mt-[37px]">{product.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-[30px] mt-8">
          {/* Product cards */}
          <ProductListing />
        </div>

        <div className="flex justify-center mt-[93px] mb-[103px]">
          <Link href="/components/Shop">
            <button className="w-[243px] h-[48px] border-[2px] border-[#B88E2E] text-[#B88E2E] shadow-lg hover:shadow-yellow-900">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shopdetail;
