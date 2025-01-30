 import Image from "next/image";
  import Link from "next/link";

const Comparison = () => {
    return(

<div className="sm:w-full sm:h-auto md:w-[1940px] md:h-auto xl:w-full lg:w-[1940px] pointer-events-none">
<Image 
src="/images/Compare1.png"
className="lg:w-[1940px]"
alt="banner"
width={1440}
height={316}
/> 


    
<div className="container mx-auto p-5 pointer-events-none">



     
      <p className="text-2xl font-semibold">Go to Product<br /> page for more <br />Products</p>
     <Link href="/components/Product" className="text-gray-600 underline">View More</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        
       
        <div className=" p-4 flex flex-col items-center ">
        

          
          <Image src="/images/Compare2.png" alt="Product" width={100} height={100}  className="h-41 pt-10 w-auto mb-2 pb-2" />
          <h4 className="text-lg font-semibold ">Asgaard Sofa</h4>
          <p className=" ">Rs. 250,000.00</p>
          <p className="text-gray-500  ">4.7 ⭐⭐⭐⭐☆ | 204 Reviews</p>
        </div>
        
       
        <div className="p-4 flex flex-col items-center ">
         
          <Image src="/images/Compare3.png" alt="Product" width={100} height={100}   className="h-41 w-auto mb-2 pb-2" />
          <h4 className="text-lg font-semibold">Outdoor Sofa Set</h4>
          <p className="">Rs. 224,000.00</p>
          <p className="text-gray-500">4.2 ⭐⭐⭐⭐☆ | 145 Review   </p>
        </div>

       
        <div className="flex flex-col items-center   p-4 ">

        <h4 className="mb-2 text-xl font-semibold pt-28 lg:pr-28">Choose a Category</h4>
          <select className="border bg-[#B88E2E] text-white rounded p-2 mb-2 lg:pr-28">
            <option className="">Choose a Category</option>
            <option>Furniture</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Decor">Decor</option>
          </select>
         
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-5 border-[2px]">
        
      <div className="p-4 rounded-lg  text-2xl font-semibold ">General</div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg ">Sales Package</div>
        <div className="  p-4 rounded-lg ">1 sectional sofa</div>
        <div className=" p-4 rounded-lg ">1 Three Seater, 2 Single seater</div>
        <div className=" p-4 rounded-lg ">Model Number</div>
        <div className=" p-4 rounded-lg ">TFCBLIGRBL6SRHS</div>
        <div className=" p-4 rounded-lg ">DTUBLIGRBL568</div>
        <div className=" p-4 rounded-lg ">Secondary Material</div>
        <div className=" p-4 rounded-lg ">Solid Wood</div>
        <div className=" p-4 rounded-lg ">Solid Wood</div>
        <div className=" p-4 rounded-lg ">Configuration</div>
        <div className=" p-4 rounded-lg ">L-shaped</div>
        <div className=" p-4 rounded-lg ">L-shaped</div>
        <div className=" p-4 rounded-lg ">Upholstery Material</div>
        <div className=" p-4 rounded-lg ">Fabric + Cotton</div>
        <div className=" p-4 rounded-lg ">Fabric + Cotton</div>
        <div className=" p-4 rounded-lg ">Upholstery Color</div>
        <div className=" p-4 rounded-lg ">Bright Grey & Lion</div>
        <div className=" p-4 rounded-lg ">Bright Grey & Lion</div>
        <div className="p-4 rounded-lg  text-2xl font-semibold ">Product</div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg ">Filling Material</div>
        <div className=" p-4 rounded-lg">Foam</div>
        <div className=" p-4 rounded-lg">Matte</div>
        <div className=" p-4 rounded-lg">Finish Type</div>
        <div className=" p-4 rounded-lg">Bright Grey & Lion</div>
        <div className=" p-4 rounded-lg">Bright Grey & Lion</div>
        <div className=" p-4 rounded-lg">Adjustable Headrest</div>
        <div className=" p-4 rounded-lg">No</div>
        <div className=" p-4 rounded-lg">yes</div>
        <div className=" p-4 rounded-lg">Maximum Load Capacity</div>
        <div className=" p-4 rounded-lg">280 KG</div>
        <div className=" p-4 rounded-lg">300 KG</div>
        <div className=" p-4 rounded-lg">Origin of Manufacture</div>
        <div className=" p-4 rounded-lg">India</div>
        <div className=" p-4 rounded-lg">India</div>
        <div className="p-4 rounded-lg  text-2xl font-semibold ">Dimensions</div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg">Width</div>
        <div className=" p-4 rounded-lg">265.32 cm</div>
        <div className=" p-4 rounded-lg">265.32 cm</div>
        <div className=" p-4 rounded-lg">Height</div>
        <div className=" p-4 rounded-lg">76 cm</div>
        <div className=" p-4 rounded-lg">76 cm</div>
        <div className=" p-4 rounded-lg">Depth</div>
        <div className=" p-4 rounded-lg">167.76 cm</div>
        <div className=" p-4 rounded-lg">167.76 cm</div>
        <div className=" p-4 rounded-lg">Seat Height</div>
        <div className=" p-4 rounded-lg">45 KG</div>
        <div className=" p-4 rounded-lg">65 KG</div>
        <div className=" p-4 rounded-lg">Leg Height</div>
        <div className=" p-4 rounded-lg">5.46 cm</div>
        <div className=" p-4 rounded-lg">5.46 cm</div>
        <div className="p-4 rounded-lg  text-2xl font-semibold ">Warranty</div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg"></div>
        <div className=" p-4 rounded-lg">Warranty Summary</div>
        <div className=" p-4 rounded-lg ">1 Year Manufacturing Warranty</div>
        <div className=" p-4 rounded-lg ">1.2 Year Manufacturing Warranty</div>
        <div className=" p-4 rounded-lg ">Warranty Service Type</div>
        <div className=" p-4 rounded-lg ">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</div>
        <div className=" p-4 rounded-lg ">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
        <div className=" p-4 rounded-lg ">Covered in Warranty</div>
        <div className=" p-4 rounded-lg ">Warranty Against Manufacturing Defect</div>
        <div className=" p-4 rounded-lg ">Warranty of the product is limited to manufacturing defects only.</div>
        <div className=" p-4 rounded-lg ">Not Covered in Warranty</div>
        <div className=" p-4 rounded-lg ">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
        <div className=" p-4 rounded-lg ">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
        <div className=" p-4 rounded-lg ">Domestic Warranty</div>
        <div className=" p-4 rounded-lg ">1 Year</div>
        <div className=" p-4 rounded-lg ">3 Months</div>
        <div className=" p-4 rounded-lg"></div>
        <Link href="/components/TotalCart">
        <button className="p-4 mt-4 bg-[#B88E2E] text-white w-[215px] h-[60px]">
       Add to Cart
        </button>
        </Link>
        <Link href="/components/TotalCart">
        <button className="p-4 mt-4 bg-[#B88E2E] text-white w-[215px] h-[60px]">Add to Cart</button>
        </Link>

      </div>
      </div>
      </div>
  );
};
     



export default Comparison

