import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];
  const posts = [
    {
      image: "/images/Blog4.png",
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: "/images/Blog6.png",
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: "/images/Blog7.png",
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: "/images/Blog8.png",
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: "/images/Blog9.png",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div id="Blog">
    <div className=" mx-auto font-Poppins  sm:w-full sm:h-auto md:w-[1440px] md:h-auto xl:w-full lg:w-full">

       
        <div className="relative mb-2 h-[330px] ">
          <Image
            src="/images/Blog5.png"
            alt="background image"
            className="object-cover lg:w-[1940px]"
            width={1440}
            height={316}
          />
          

        </div>

     
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col gap-2 lg:mt-24">
       
        <div className=" flex flex-col">
          <Blogs
            image="/images/Blog1.png"
            title="Going all-in with millennial design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[  
              { icon:"/images/Bicon1..png", label: "Admin" },
              { icon: "/images/Bicon2.png", label: "14 Oct 2022" },
              { icon: "/images/Bicon3.png", label: "Wood" },
            ]}
          />
          <Blogs
            image="/images/Blog2.png"
            title="Exploring new ways of decorating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[
              { icon: "/images/Bicon1..png", label: "Admin" },
              { icon: "/images/Bicon2.png", label: "14 Oct 2022" },
              { icon: "/images/Bicon3.png", label: "Wood" },
            ]}
          />
          <Blogs
            image="/images/Blog3.png"
            title="Handmade pieces that took time to make"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
            tags={[
              { icon: "/images/Bicon1..png", label: "Admin" },
              { icon: "/images/Bicon2.png", label: "14 Oct 2022" },
              { icon: "/images/Bicon3.png", label: "Wood" },
            ]}
          />
        </div>

       
        <div>
          <div className="p-4 flex flex-col  ">

              
              <div className="flex items-center justify-between mb-4 px-2 border-2 rounded-xl">
               <Input
                type="text"
                placeholder="Search"
                className="border-none bg-transparent"
              /> 
              <SearchIcon />
            </div>

           
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span>{category.name}</span>
                  <span className="text-gray-400">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 max-w-md">
           
             <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>

           
             <ul className="space-y-4">
            {posts.map((post, index) => (
                <li key={index} className="flex gap-4 items-center">
                  
                   <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div> 

                 
                   <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </li> 
              ))}
            </ul> 
          </div> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;


 const Blogs = ({ image, title, description, tags }: any) => {
  return ( 
    <div className="flex flex-col gap-2 mb-2 max-w-[800px]">
      
      <Image src={image} alt="Blog Image" width={817} height={500} className="rounded-md" /> 

     
       <div className="flex gap-4 mt-4">
         {tags.map((tag: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={tag.icon} alt={tag.label} width={20} height={20} className="rounded-full" />
            <span>{tag.label}</span>
           </div> 
         ))}
        </div> 

      
       <h1 className="text-2xl font-bold mt-4">{title}</h1> 

      
       <p className="text-gray-600 mt-2">{description}</p>
      <span className='border-b border-b-[#000000] w-[90px] cursor-pointer '>Read More</span>
    </div>
  ) 
} 