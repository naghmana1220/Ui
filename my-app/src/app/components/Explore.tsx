// import Image from 'next/image';

//  const Explore = () => {
//    return (
//      <div className="flex flex-col items-center p-6 bg-[#FCF8F3] lg:w-[1900px]">
//        <div className="flex flex-col md:flex-row items-center justify-between bg-[#FCF8F3]  shadow-lg rounded-lg p-6 w-full max-w-4xl">
    
         
//           <div className="ml-4 mt-4 md:mt-0 h-[300px] ">
//            <h2 className="text-4xl font-bold text-[#3A3A3A] mr-10 font-['Poppins] ">50+ Beautiful rooms 
//            inspiration</h2>
//            <p className="text-[#616161] mt-2">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
//            <button className="mt-4 bg-[#B88E2E] w-[176px] text-white py-2 px-4   ">
//              Explore More
//            </button>
//            </div>




//            <div className="flex flex-col md:flex-row items-start sm:h-[400px] sm:w-[500px]">
//            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-4 md:mb-0 ">
//              <Image
//                src="/images/Explore1.png" 
//                objectFit="cover"
//                width={290}
//                height={382}
//                alt="Large Image"
               
//              />
//            </div>

//            <div className="relative w-48 h-48 md:w-64 md:h-64 ml-4 ">
//              <Image
//                src="/images/Explore2.png"
//               objectFit="cover"
//                 width={372}
//                 height={486}
//                alt="Small Image"
//              />
//              <div className="absolute left-0 top-[35%] flex items-center">
//                <button className=" text-gray-700 pl-56 pt-10  ">
//                    →
//                </button>
//              </div>

          
//            </div>
//          </div>
        
// </div>         
//         </div>

//    )
// }
// export default Explore     
import Image from 'next/image';

const Explore = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-[#FCF8F3]  ">
       <div className="flex flex-col md:flex-row items-center justify-between bg-[#FCF8F3] shadow-lg rounded-lg p-6 w-full max-w-4xl"> 
        <div className="ml-4 mt-4 md:mt-0 h-[300px]">
          <h2 className="text-4xl font-bold text-[#3A3A3A] mr-10 font-['Poppins]">50+ Beautiful rooms inspiration</h2>
          <p className="text-[#616161] mt-2">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
          <button className="mt-4 bg-[#B88E2E] w-[176px] text-white py-2 px-4">
            Explore More
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start sm:h-[400px] sm:w-[500px]">
          <div className="relative w-64 sm:w-36 h-64 md:w-80 md:h-80 mb-4 md:mb-0">
            <Image
              src="/images/Explore1.png"
              objectFit="cover"
              width={290}
              height={382}
              alt="Large Image"
            />
          </div>

          <div className="w-40 h-48 md:w-64 md:h-64 ml-4 ">
            <Image
              src="/images/Explore2.png"
              objectFit="cover"
              width={370}
              height={486}
              alt="Small Image"
            />
            <div className="absolute left-0 top-[35%] flex items-center">
              <button className="text-gray-700 pl-56 pt-10">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;





    
     












