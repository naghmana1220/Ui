// import { Label } from "@/components/ui/label"
// import Link from "next/link";
// import { Input } from "@/components/ui/input"
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
// import Image from "next/image";


// const Checkout = () => {
  
//   return (
//     <div className='sm:w-full sm:h-auto md:w-[1440px] md:h-auto xl:w-full  lg:w-[1940px]'>
     
//       <Image 
//       src="/images/Check1.png"
//         className=" pointer-events-none object-cover h-auto w-full"
//         alt="banner"
//         width={1440}
//         height={316}
//       />

      
//       <div className='flex md:flex-row flex-col gap-6 max-w-[1240px] mx-auto mt-[63px]'>

       
//         <div className="max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
//           <h1 className="text-4xl font-semibold">Billing Details</h1>

//           <form className="space-y-6 mt-9">
            
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <Label htmlFor="first-name">First Name</Label>
//             <Input id="first-name" type="text" placeholder="Enter your first name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//           </div>
//           <div>
//             <Label htmlFor="last-name">Last Name</Label>
//             <Input id="last-name" type="text" placeholder="Enter your last name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//           </div>
//         </div>

       
//         <div>
//           <Label htmlFor="company-name">Company Name (Optional)</Label>
//           <Input id="company-name" type="text" placeholder="Enter your company name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>

        
//         <div>
//           <Label htmlFor="country">Country / Region</Label>
//           <Select>
//             <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-5">
//               <SelectValue placeholder="Select country" className='placeholder:text-[#9F9F9F]' />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
//               <SelectItem value="pakistan">Pakistan</SelectItem>
//               <SelectItem value="india">India</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

 
//  <div>
//           <Label htmlFor="street-address">Street Address</Label>
//           <Input id="street-address" type="text" placeholder="Enter your street address" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>

       
//         <div>
//           <Label htmlFor="city">Town / City</Label>
//           <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>
        
//         <div>
//           <Label htmlFor="city">Province</Label>
//           <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>
       
//         <div>
//           <Label htmlFor="code">ZIP code</Label>
//           <Input id="code" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>
       
//         <div>
//           <Label htmlFor="phone">Phone</Label>
//           <Input id="phone" type="number" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//         </div>
       
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="text" placeholder="Enter your town  or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
//           <Input id="email" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 mt-2' />
//         </div>
//       </form>
//     </div>

//         <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg flex-1">


  
//   <div className="flex justify-between mb-4">
//   <h2 className="text-2xl font-semibold mb-4">Product</h2>
//   <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
//   </div>
//   <div className="flex justify-between mb-4">
//     <span className="font-medium text-[#9F9F9F]">Asgaard sofa * 1</span>
//     <span className="font-medium">Rs. 250,000.00</span>
//   </div>
//   <div className="flex justify-between mb-4">
//     <span className="font-medium">Subtotal</span>
//     <span className="font-medium">Rs. 250,000.00</span>
//   </div>
//   <div className="flex justify-between mb-6">
//     <span className="font-medium">Total</span>
//     <span className=" text-xl text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
//   </div>
//   <hr />

 
//   <div className="mb-6 mt-2">
//     <div className='flex gap-2 items-center'>
//         <span className='bg-black h-3 w-3 rounded-full'></span>
//     <span className="font-medium mb-2">Direct Bank Transfer</span>
//     </div>
//     <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
//     <div className='flex items-center gap-2 text-[#9F9F9F]'>
//     <Input type="radio" name="payment-method" className="w-min"/>
//       <span>Direct Bank Transfer</span>
//     </div>
//     <div className='flex items-center gap-2 text-[#9F9F9F]'>

//       <Input type="radio" name="payment-method" className="w-min"/>
//       <span> Cash On Delivery</span>
//       </div>
     
//     <p className="text-sm text-gray-500 mt-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
//   </div>

  

  
//   <div className='flex justify-center items-center'>

//   <Link href="/components/Contact">
//   <button className="w-[318px] h-[64px] bg-white text-black border border-[#000000]  font-semibold rounded-[15px] ">
//     Place order
//     </button>
//   </Link>
//      </div>
// </div>
// </div>
// </div>

//   )
// }
// export default Checkout


// // "use client";

// // import { useCart } from "@/app/components/context/CartContext";
// // import Image from "next/image";
// // import Link from "next/link";

// // const Checkout = () => {
// //   const { cart } = useCart();
// //   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

// //       {cart.length === 0 ? (
// //         <p>Your cart is empty. <Link href="/" className="text-blue-500">Go shopping!</Link></p>
// //       ) : (
// //         <div>
// //           <div className="grid grid-cols-1 gap-6">
// //             {cart.map((item) => (
// //               <div key={item._id} className="flex items-center gap-4 p-4 border rounded shadow">
// //                 <Image
// //                   src={item.productImage.asset.url}
// //                   alt={item.title}
// //                   width={100}
// //                   height={100}
// //                   className="object-cover rounded"
// //                 />
// //                 <div className="flex-1">
// //                   <h2 className="text-lg font-semibold">{item.title}</h2>
// //                   <p className="text-green-700">${item.price}</p>
// //                   <p>Quantity: {item.quantity}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-6">
// //             <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
// //             <Link href="/components/Thankyou">
// //             <button className="bg-green-500 text-white px-6 py-2 rounded mt-4">
// //               Place Order
// //             </button>
// //             </Link>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Checkout;







"use client";

import { useCart } from "@/app/components/context/CartContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='sm:w-full sm:h-auto md:w-[1440px] md:h-auto xl:w-full  lg:w-[1940px]'>
      <Image 
        src="/images/Check1.png"
        className="pointer-events-none object-cover h-auto w-full"
        alt="banner"
        width={1440}
        height={316}
      />

      <div className='flex md:flex-row flex-col gap-6 max-w-[1240px] mx-auto mt-[63px]'>

        {/* Left Section: Billing Details */}
        <div className="max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
          <h1 className="text-4xl font-semibold">Billing Details</h1>

          <form className="space-y-6 mt-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" type="text" placeholder="Enter your first name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text" placeholder="Enter your last name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
              </div>
            </div>

            <div>
              <Label htmlFor="country">Country / Region</Label>
              <Select>
                <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-5">
                  <SelectValue placeholder="Select country" className='placeholder:text-[#9F9F9F]' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="india">Qatar</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="india">Saudia Arabia</SelectItem>
                  <SelectItem value="india">Azerbaijan</SelectItem>
                  <SelectItem value="india">United States</SelectItem>
                  <SelectItem value="india">Dubai</SelectItem>
                  <SelectItem value="india">Bangladesh</SelectItem>
                  <SelectItem value="india">Turkey</SelectItem>
                  <SelectItem value="india">Azerbaijan</SelectItem>
                  <SelectItem value="india">China</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="street-address">Street Address</Label>
              <Input id="street-address" type="text" placeholder="Enter your street address" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>

            <div>
              <Label htmlFor="street-address">Town / City</Label>
              <Input id="Town / City" type="text" placeholder="Enter your City / Town" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>

            <div>
              <Label htmlFor="street-address">Province</Label>
              <Input id="province" type="text" placeholder="Enter your Province" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>

            <div>
              <Label htmlFor="street-address">ZIP Code</Label>
              <Input id="ZIP Code" type="text" placeholder="Enter your ZIP Code" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>

            <div>
              <Label htmlFor="street-address">Phone</Label>
              <Input id="phone" type="text" placeholder="Enter your Phone Number" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg flex-1">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span className="font-medium text-[#9F9F9F]">Product</span>
            <span className="font-medium">Subtotal</span>
          </div>

          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="flex justify-between mb-4">
                <span className="font-medium text-[#9F9F9F]">
                  {item.title} x {item.quantity}
                </span>
                <span className="font-medium">Rs. {item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}

          <hr className="my-4" />

          <div className="flex justify-between mb-6">
            <span className="font-medium">Total</span>
            <span className="text-xl text-[#B88E2F] font-semibold">Rs. {totalPrice}</span>
          </div>

          <hr />

          <div className="mb-6 mt-2">
            <div className='flex gap-2 items-center'>
              <span className='bg-black h-3 w-3 rounded-full'></span>
              <span className="font-medium mb-2">Direct Bank Transfer</span>
            </div>
            <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className='flex items-center gap-2 text-[#9F9F9F]'>
              <Input type="radio" name="payment-method" className="w-min" />
              <span>Direct Bank Transfer</span>
            </div>
            <div className='flex items-center gap-2 text-[#9F9F9F]'>
              <Input type="radio" name="payment-method" className="w-min" />
              <span>Cash On Delivery</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
              <span className='font-semibold'> privacy policy</span>.
            </p>
          </div>

          <div className='flex justify-center items-center'>
            <Link href="/components/Contact">
              <button className="w-[318px] h-[64px] bg-white text-black border border-[#000000] font-semibold rounded-[15px]">
                Place order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;




















