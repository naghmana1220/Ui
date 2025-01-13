import Image from 'next/image';

const Cardmain = () => {
  const icons = [
    { src: '/images/main1.png', title: 'High Quality', text: 'crafted from top materials' },
    { src: '/images/main2.png', title: 'Warranty Protection', text: 'Over 2 years' },
    { src: '/images/main3.png', title: 'Free Shipping', text: 'Order over 150 $' },
    { src: '/images/main4.png', title: '24 / 7 Support', text: 'Dedicated support' },
  ];

  return (
    <div className="flex lg:flex-col md:flex-row flex-wrap  justify-around  bg-[#FAF3EA] mt-36 lg:pt-20 lg:h-[270px] lg:w-[1900px] sm:h-[670px]">
      {icons.map((icon, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-4 sm:w-full md:w-1/2 lg:w-1/4"
        >
          <Image src={icon.src} alt={icon.title} width={50} height={50} />
          <h2 className="mt-2 text-lg font-semibold text-[#000000]">{icon.title}</h2>
          <p className="mt-1 text-sm text-[#9F9F9F]">{icon.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cardmain;
