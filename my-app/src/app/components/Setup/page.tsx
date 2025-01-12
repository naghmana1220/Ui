import Image from "next/image";

export default function Setup() {
  const images = [
    { src: "/images/Set1.png", styles: "w-24 h-92" },
    { src: "/images/Set2.png", styles: "w-full h-92" },
    { src: "/images/Set3.png", styles: "w-full h-80"  },
    { src: "/images/Set4.png", styles: "w-4/4 h-92" },
    { src: "/images/Set5.png", styles: "w-full h-92" },
    { src: "/images/Set6.png", styles: "w-full h-92" },
    { src: "/images/Set7.png", styles: "w-94 h-60" },
    { src: "/images/Set8.png", styles: "w-94 h-92" },
    { src: "/images/Set9.png", styles: "w-full h-78" },
  ];

  return (
    <section className="py-10  bg-gray-50">
      <div className="container lg:mx-auto lg:w-[1900px]">
        <p className="text-lg font-medium text-center text-gray-600 ">
          Share your setup with
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          #FuniroFurniture
        </h2>
        <div className="relative grid grid-cols-3 gap-2 md:gap-6 lg:gap-4 lg:grid-cols-5 sm:grid-rows-3 sm:grid-cols-1">
          {images.map((image, index) => (
              <div
              key={index}
              className={`overflow-hidden bg-white  shadow hover:shadow-md transform hover:scale-105 transition duration-300  ${image.styles}`}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={400} // 
                height={400} // 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
