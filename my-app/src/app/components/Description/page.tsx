"use client"
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import ProductCard from '../ProductCard';


const Description = () => {

    const sheetTrigger = useRef<HTMLButtonElement>(null);
    const handleMenuClick = () => {
      if (sheetTrigger.current) {
        sheetTrigger.current.click();
      }
    };

    
    const productDescription = [
        { id: 1, imgPath: "/images/Single8.png" , name: "Syltherine", description:"Stylish cafe chair", price: "Rp. 25,000.00"},
        { id: 2, imgPath: "/images/Single9.png" , name: "Leviosa", description:"Stylish cafe chair", price: "Rp. 25,000.00"},
        { id: 3, imgPath: "/images/Single10.png" , name: "Lolito", description:"Luxury big sofa", price: "Rp. 25,000.00"},
        { id: 4, imgPath: "/images/Single11.png" , name: "Respira", description:"Outdoor bar table and stool", price: "Rp. 25,000.00"},
      ]

      
    const [active,setActive] = useState(0)

    const images = [
        "/images/Single1.png",
        "/images/Single2.png",
        "/images/Single3.png",
        "/images/Single4.png",
    ];

    return (
    
    <div className="max-w-[1440px] mx-auto font-Poppins lg:w-[1940px]">
   
       
        <div className="max-w-[1240px] mx-auto py-[38px] flex bg-[#FAF3EA]">
            <p className="text-[#9F9F9F]">Home</p>
            <ChevronRight className='ml-[14px] mr-[24px]' />
            <p className="text-[#9F9F9F]">Shop</p>
            <ChevronRight className='ml-[21px] mr-[25px]' />
            <div className='w-[1px] h-[1px] bg-[#9F9F9F]'></div>
            <p className='border-l border-[#9F9F9F] pl-[34px] hover:underline cursor-pointer'>Asgaard sofa</p>
        </div>

       
        <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[82px] items-center lg:items-start'>

           
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-[31px]'>
               
                <div className='w-[150px] h-[100px] flex flex-col gap-8'>
                    {images.map((key, i) => (
                        <div
                            key={i}
                            className={`w-full  flex p-3 justify-center items-center rounded ${active === i ? "border-2 border-black" : ""} `}
                            onClick={() => { setActive(i); } }>
                             <Image src={key} alt='Product Image' width={121} height={122} />  
                        </div>
                    ))}
                     </div>

<div className=' max-w-[423px] h-[500px] w-[300px] sm:w-full flex justify-center items-center'>
    <Image src={images[active]} width={450} height={315} alt='Product Image'  />
</div>
</div>


<div className='flex flex-col max-w-[424px] p-4 sm:p-0'>
<div className='flex flex-col'>
<h3 className={`text-[42px] tracking-wide`}>Asgaard sofa</h3>
<p className={`text-2xl font-medium`}>Rs. 250,000.00</p>


<div className='flex items-center flex-wrap mt-[15px]'>
    <div className='text-[#FFAD33] text-2xl mr-4'>★★★★<span className='text-black opacity-25'>★</span></div>
    <p className='opacity-50 text-[14px] text-[#9F9F9F] font-normal mr-4 border-l-[#9F9F9F] border-l pl-4'>5 Customer Review</p>

</div>
</div>


      <p className='text-[13px] mt-[18px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>


   <div className='flex flex-col gap-[12px] mt-[22px]'>
   <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Size</p>
        <div className='flex items-center gap-4 flex-wrap'>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>L</div>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>XL</div>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>XS</div>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-[18px]'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Color</p>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#816DFA] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-black w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-[#B88E2E] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                    </div>
                </div>

              
                <div className='flex flex-wrap gap-4 mt-[32px]'>
                <div className='w-[123px] rounded-[10px] border-[2px] border-[#00000080] flex justify-between overflow-hidden'>
                        <button className='w-[40px] flex items-center justify-center hover:text-black  py-5'>-</button>
                        <p className='text-xl font-medium w-[80px] flex items-center justify-center '>1</p>
                        <button className='w-[40px] flex items-center justify-center hover:text-black   py-5'>+</button>
                    </div>

                    <div className='flex justify-center '>
                        <Link href="/components/TotalCart">
                        <button className='border-[2px] border-black px-12 py-[17px] rounded-[10px] flex items-center justify-center text-black  ' onClick={handleMenuClick}>Add To Cart</button>
                        </Link>
                    </div>

                    <div className='flex justify-center'>
                        <Link href="/components/Comparison">
                        <button className='border-[2px] border-black px-12 py-[17px] rounded-[10px] flex items-center justify-centertext-black' onClick={handleMenuClick}>+ Compare</button>
                        </Link>
                    </div>
                </div>

               
                <div className='h-[1px] bg-[#D9D9D9] mt-[60px]'></div>

               
                <div className='mt-[41px] text-[#9F9F9F] space-y-3'>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>SKU</p>
                        <span className='mr-[12px]'>:</span>
                        <p>SS001</p>
                    </div>
                    <div className='flex'>
                    <p className='w-[85px] ml-[16px]'>SKU</p>
                        <span className='mr-[12px]'>:</span>
                        <p>SS001</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Category</p>
                        <span className='mr-[12px]'>:</span>
                        <p>Sofas</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Tags</p>
                        <span className='mr-[12px]'>:</span>
                        <p>Sofa, Chair, Home, Shop</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Share</p>
                        <span className='mr-[12px]'>:</span>
                        <p className='flex gap-[25px] '>
                            <Image src="/images/Sicon1.png" alt="fb"  width={25} height={25} />
                            <Image src="/images/Sicon2.png" alt="linkedin "  width={25} height={25}/>
                            <Image src="/images/Sicon3.png" alt="twitter " width={25} height={25}/>
                        </p>
                    </div>
                
                </div>
                </div>
        </div>


 <div className='mt-[54px] border-t border-[#D9D9D9] pt-12'>
            <div className='flex flex-wrap gap-3 md:gap-[53px] justify-center'>
                <p className='text-black text-2xl'>Description</p>
                <p className='text-[#9F9F9F] text-2xl'>Additional Information</p>
                <p className='text-[#9F9F9F] text-2xl'>Reviews [5]</p>
            </div>

            <div className='max-w-[1026px] mx-auto text-gray-500 space-y-[30px] py-[37px] p-4 sm:p-0 border-b border-[#D9D9D9] lg:w-[1940px]'>
                <p className='mt-[37px]'>Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='pb-[36px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>

            <div className='max-w-[1240px] mx-auto px-2 mt-[36px] flex flex-col lg:flex-row items-center gap-[29px]'>
                <div className=' rounded-[10px] max-w-[605px] h-[250px] sm:h-[348px]'>
                    <Image src={"/images/Single6.png"} alt="Sofa Image" width={400} height={400} className='object-contain w-full h-full'></Image>
                </div>
                <div className=' rounded-[10px] max-w-[605px] h-[250px] sm:h-[348px]'>
                    <Image src={"/images/Single7.png"} alt="Sofa Image" width={400} height={400} className='object-contain w-full h-full'></Image>
                </div>
            </div>

           
            <div className='w-full h-[1px] bg-[#D9D9D9] my-[60px]'></div>
        </div>



 <div className=''>
            <p className='text-4xl font-medium mt-[26px] text-center'>Related Products</p>
            <div className='flex flex-wrap justify-center gap-[30px] mt-8  '>
                {productDescription.map((item, i) => {
                    return( <ProductCard key={i} name={item.name} price={item.price} imagePath={item.imgPath}/>)
                })}
            </div>

           
            <div className="flex justify-center mt-[93px] mb-[103px]">
                <Link href="/components/Shop">
                <button className="w-[243px] h-[48px] border-[2px] border-[#B88E2E] text-[#B88E2E] shadow-lg hover:shadow-yellow-900">Show More</button>
                </Link>
            </div>
        </div> 
                            
    </div>
)}

export default Description