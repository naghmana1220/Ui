import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import Link from "next/link";
 import Image from "next/image";



 const TotalCart = () => {
     return (
      
      <div className="sm:w-full sm:h-auto md:w-[1940px] md:h-auto xl:w-full lg:w-[1900px] ">
      <Image   
      src="/images/bgCart1.png"
      className="lg:w-[1900px] pointer-events-none object-cover h-auto"
      alt="banner"
      width={1440}
      height={316}
      />

     
        <div className=" mx-auto p-6 font-Poppins lg:w-[1240px]">
          <div className="flex gap-2 lg:flex-row flex-col">
          
            <div className="flex flex-wrap">
              <table className="w-full border border-[#F5F5DC] text-left">              
                 <thead className="bg-[#F9F1E7] text-[#000000] font-medium">
                <tr className="flex flex-wrap sm:flex-nowrap">
                   <th className="py-4 px-14">Product</th>
                   <th className="py-4 px-14">Price</th>
                   <th className="py-4 px-14">Quantity</th>
                   <th className="py-4 px-5">Subtotal</th>
                 </tr>
               </thead>
               <tbody>
                
                 <tr className="border-t border-[#F5F5DC] flex flex-wrap">
                   <td className="py-6 px-6">
                     <div className="flex items-center gap-4">
                         <Image
                         src="/images/Single12.png"
                         alt="Asgaard Sofa"
                         width={100}
                         height={100}
                         className="w-[70px] h-[70px] rounded-lg  bg-[#F5F5DC]" />
                       <span>Asgaard Sofa</span> 
                      </div> 
                      </td>
                 <td className="py-11 px-6">Rs. 250,000.00</td>
                 <td className="py-11 px-6">
                 <div className="flex items-center border border-[#00000080] rounded-md">
                    
                    <Input
                      type="number"
                      value="1"
                      readOnly
                      className="w-12 text-center pl-2  text-[#000000] border-none focus:ring-0"
                    />
                 </div>
                </td>
                <td className="py-11 px-6">Rs. 250,000.00</td>
               
              </tr> 
             
         </tbody>
          </table>
      </div>
       

        
        <div className="p-6 bg-[#F9F1E7]  w-[393px] h-[300px]">
          <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
          <div className="flex justify-between text-xl">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-xl mt-4">
            <span>Total</span>
            <span className="font-bold text-[#F29100]">Rs. 250,000.00</span>
          </div>
           <Link href="/components/Checkout">
           <Button className="w-[222px] h-[58px] mt-6 py-3 bg-slate-200 text-[#000000] border-[1px] border-[#000000] hover:text-white rounded-md ">
            Check Out
           </Button>
           </Link> 
          </div>


</div>
</div>


</div>





   
       
  );
};

export default TotalCart;
                

