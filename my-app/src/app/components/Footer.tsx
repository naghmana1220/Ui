import React from 'react'; 
const Footer = () => { 
return ( 
 <footer className="bg-gray-50 text-gray-600 p-4 w-full h-auto mt-60  border-t-2 border-gray-500"> 

<div className="container mx-auto flex flex-col md:flex-row justify-between items-start"> 
<div className="mb-4 md:mb-0"> 
<h2 className="font-bold text-xl text-[#000000]">Funiro</h2> 
<br />
<p className="text-sm"> 
400 University Drive Suite <br />200 Coral Gables,<br /> 
FL 33134 USA 
</p> 
</div> 
<div className="flex flex-col md:flex-row"> 
<div className="mr-6"> 
<h3 className="font-bold text-gray-400 pr-72">Links</h3> 
<br />
<ul className="list-none"> 
<li><a href="#" className="hover:underline text-[#000000]">Home</a></li>
<br />
<li><a href="#" className="hover:underline text-[#000000]">Shop</a></li> 
<br />
<li><a href="#" className="hover:underline text-[#000000]">About</a></li> 
<br />
<li><a href="#" className="hover:underline text-[#000000]">Contact</a></li> 
</ul> 
</div> 

<div className="mr-6"> 
<h3 className="font-bold text-gray-400 pr-36">Help</h3> 
<ul className="list-none"> 
  <br />
<li><a href="#" className="hover:underline text-[#000000] ">Payment Options</a></li> 
<br />
<li><a href="#" className="hover:underline text-[#000000]">Returns</a></li>
<br /> 
<li><a href="#" className="hover:underline text-[#000000]">Privacy Policies</a></li> 
</ul> 
</div> 
<div>
<h3 className="font-bold text-gray-400 ml-30">Newsletter</h3> 
<br />
<input 
type="email" 
placeholder="Enter Your Email Address" 
className="border  p-2    mb-2" 
/> 
<button className=" text-[#000000] p-2 underline pb-2">Subscribe</button>


    
</div>

</div>

</div>


  
 
{/* Line */}
<div className="mt-[48px]  lg:w-[1240px] h-[1px] bg-[#D9D9D9]"></div>

{/* Copyright */}
<div className="py-[35px]">
  <p className="font-normal text-black lg:pl-20">2022 furino. All rights reverved</p>
</div>





</footer>
)
}
export default Footer






















