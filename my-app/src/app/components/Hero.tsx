//"use client"
 import Image from "next/image";

 const Hero = () => {
     return(
        <div className="max-w-[1240px]">
 <div className="relative  h-[790px] overflow-hidden sm:w-auto w-full lg:w-[1900px] ">
   
            <Image src={"/images/Hero1.png"} alt="Hero" width={1440} height={100} className="object-cover w-full h-full" />

            <div className="absolute top-4 right-4 bg-[#FFF3E3]   p-4 w-[643px] h-[443px] pl-[100px]   pt-[100px] mt-[1px]  rounded-xl max-w-xs justify-center items-center">
              
                <h4 className=" font-semibold text-[#333333] ">New Arrival</h4>
              
                <h1 className="text-[#BB8E2F] mt-2 text-2xl  font-['Poppins']  items-center justify-center pr-10  font-bold">
                Discover Our <br /> New Collection
                </h1>
                <p className=" font-medium  text-[#333333] leading-6">Lorem, ipsum dolor si elit. Explicabo mollitia recusait ipsam in porroo.</p>
                <button className="mt-3 bg-[#B88E2F] text-white  px-4 py-2  ">
                   Buy Now
                </button>
            </div>

</div>
            <div className="lg:w-[1900px]">
             <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center  mb-4">Browse The Range</h1>
            <p className="text-center mb-8 max-w-xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="overflow-hidden rounded-lg shadow-lg">
                 <Image src="/images/Hero2.png" alt="Image 1" width={300} height={480} className="w-full h-auto" /> 
                  <p className=" text-center justify-center font-serif text-gray-600">Dining</p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/Hero3.png" alt="Image 2"  width={381} height={480} className="w-full h-auto" />
                    <p className=" text-center justify-center font-serif text-gray-600">Living</p>
                </div>


 <div className="overflow-hidden rounded-lg shadow-lg items-center justify-center">
                    <Image src="/images/Hero4.png" alt="Image 3" width={381} height={480}  className="w-full h-auto" />
                    <p className=" text-center justify-center font-serif text-gray-600">Bedroom</p>
                </div>
            </div>
        </div>
            </div>

    
     
       
  
  
  </div>
        );
};
export default Hero 