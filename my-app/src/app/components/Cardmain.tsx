// import Image from 'next/image';

// const Cardmain = () => {
//   const icons = [
//     { src: '/images/main1.png', title: 'High Quality', text: 'crafted from top materials' },
//     { src: '/images/main2.png', title: 'Warranty Protection', text: 'Over 2 years' },
//     { src: '/images/main3.png', title: 'Free Shipping', text: 'Order over 150 $' },
//     { src: '/images/main4.png', title: '24 / 7 Support', text: 'Dedicated support' },
//   ];

//   return (
//     <div className="flex lg:flex-col md:flex-row flex-wrap  justify-around  bg-[#FAF3EA] mt-36 lg:pt-20 lg:h-[270px] lg:w-[1900px] sm:h-[670px]">
//       {icons.map((icon, index) => (
//         <div 
//           key={index} 
//           className="flex flex-col items-center text-center p-4 sm:w-full md:w-1/2 lg:w-1/4"
//         >
//           <Image src={icon.src} alt={icon.title} width={50} height={50} />
//           <h2 className="mt-2 text-lg font-semibold text-[#000000]">{icon.title}</h2>
//           <p className="mt-1 text-sm text-[#9F9F9F]">{icon.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cardmain;

import React from 'react'
import Image from 'next/image'

const Cardmain = () => {
  return (

    <div>
        

        <div className='bg-[#FAF3EA] flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0 lg:w-[1900px]'>
        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/main1.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/main2.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>Warranty Protection</h3>
                <p className='text-sm md:text-base'>Over 2 years</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/main3.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>Free Shipping</h3>
                <p className='text-sm md:text-base'>Order over 150 $</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                <Image src="/images/main4.png" width={50} height={50} alt='High Quality' />
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>24 / 7 Support</h3>
                <p className='text-sm md:text-base'>Dedicated support</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Cardmain
