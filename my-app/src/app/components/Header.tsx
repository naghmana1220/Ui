// "use client"

// import { Search, Menu, ShoppingCart, Heart, User } from "lucide-react";
// import { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   const [isCartOpen, setIsCartOpen] = useState(false); 
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Asgaard Sofa",
//       price: 250000,
//       image: "/images/Shopping4.png",
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: "Casaliving Wood",
//       price: 270000,
//       image: "/images/Shopping5.png",
//       quantity: 1,
//     },
//   ]);

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">
//       <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3 lg:w-[1230px]">
//         <Image
//           src={"/images/Logo1.png"}
//           alt="Logo"
//           width={100}
//           height={100}
//           className="w-16 h-auto lg:ml-10"
//         />

//         <span className="ml-3 text-3xl font-['Montserrat'] font-bold text-[#000000]">
//           Furniro
//         </span>

//         {/* Navbar */}
//         <nav className="font-medium flex flex-1 justify-center">
//           <ul className="hidden sm:flex gap-10">
//             <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
//               <Link href="/">Home</Link>
//             </li>
//             <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
//               <Link href="#Shop">Shop</Link>
//             </li>
//             <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
//               <Link href="#Blog">Blog</Link>
//             </li>
//             <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
//               <Link href="#Contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Icons Section */}
//         <div className="flex items-center gap-3">
//           <Link href="/account">
//             <User className="p-[6px] rounded" size={37} />
//           </Link>
//           <Link href="/">
//             <Search className="p-[6px] rounded" size={37} />
//           </Link>
//           <Link href="/">
//             <Heart className="p-[6px] rounded" size={37} />
//           </Link>
//           <ShoppingCart
//             className="p-[6px] rounded cursor-pointer"
//             size={37}
//             onClick={() => setIsCartOpen(true)} // Open the shopping cart
//           />
//           <Menu className="sm:hidden cursor-pointer" size={25} />
//         </div>
//       </div>

//       {/* Shopping Cart Modal */}
//       {isCartOpen && (
//         <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
//           <SheetContent
//             className="bg-white w-[25rem] overflow-y-auto"
//             side={"right"}
//           >
//             <SheetHeader>
//               <SheetTitle>Shopping Cart</SheetTitle>
//               <SheetDescription>
//                 <div className="flex flex-col gap-4">
//                   {cartItems.length > 0 ? (
//                     cartItems.map((item) => (
//                       <div
//                         key={item.id}
//                         className="flex items-center justify-between gap-3"
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           width={60}
//                           height={60}
//                           className="rounded-md"
//                         />
//                         <div>
//                           <h3 className="font-semibold">{item.name}</h3>
//                           <p className="text-[#B88E2E]">
//                             Rs. {item.price.toLocaleString()}
//                           </p>
//                           <p className="text-gray-500">x {item.quantity}</p>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p>Your cart is empty.</p>
//                   )}
                 
//                   <div className="flex justify-between font-semibold mt-20">
//                     <span>Subtotal:</span>
                  
//                     <span>Rs. {calculateSubtotal().toLocaleString()}</span>
//                   </div>
//                   <hr />
//                   <div className="flex justify-between mt-4 gap-3">
                    
//                     <button className="w-1/2 rounded-full py-2 border border-black text-black">
//                       Cart
//                     </button>
                  
//                     <button className="w-1/2  rounded-full py-2 border border-black text-black">
//                       Checkout
//                     </button>
//                     <button className="w-1/2  rounded-full py-2 border  border-black text-black">
//                       Comparison
//                     </button>
//                   </div>
//                 </div>
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       )}
//     </header>
//   );
// };

// export default Header;


"use client";

import { Search, Menu, ShoppingCart, Heart, User } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      image: "/images/Shopping4.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      image: "/images/Shopping5.png",
      quantity: 1,
    },
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">
      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3 lg:w-[1230px]">
        <Image
          src={"/images/Logo1.png"}
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-auto lg:ml-10"
        />

        <span className="ml-3 text-3xl font-['Montserrat'] font-bold text-[#000000]">
          Furniro
        </span>

        {/* Navbar */}
        <nav className="font-medium flex flex-1 justify-center">
          <ul className={`hidden sm:flex gap-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="#Shop">Shop</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="#Blog">Blog</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="#Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-3">
          <Link href="/account">
            <User className="p-[6px] rounded" size={37} />
          </Link>
          <Link href="/">
            <Search className="p-[6px] rounded" size={37} />
          </Link>
          <Link href="/">
            <Heart className="p-[6px] rounded" size={37} />
          </Link>
          <ShoppingCart
            className="p-[6px] rounded cursor-pointer"
            size={37}
            onClick={() => setIsCartOpen(true)} // Open the shopping cart
          />
          <Menu className="sm:hidden cursor-pointer" size={25} onClick={toggleMenu} />
        </div>
      </div>


      {/* Mobile Header */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent className="bg-white w-[15rem]" side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-10">
                <li>
                  <Link href="/" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Home</Link>
                </li>
                <li>
                  <Link href="#Shop" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Shop</Link>
                </li>
                <li>
                  <Link href="#Blog" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Blog</Link>
                </li>
                <li>
                  <Link href="#Contact" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Contact</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent
            className="bg-white w-[25rem] overflow-y-auto"
            side={"right"}
          >
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-4">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-[#B88E2E]">
                            Rs. {item.price.toLocaleString()}
                          </p>
                          <p className="text-gray-500">x {item.quantity}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                 
                  <div className="flex justify-between font-semibold mt-20">
                    <span>Subtotal:</span>
                    <span>Rs. {calculateSubtotal().toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between mt-4 gap-3">
                    
                    <button className="w-1/2 rounded-full py-2 border border-black text-black">
                      Cart
                    </button>
                    <button className="w-1/2  rounded-full py-2 border border-black text-black">
                      Checkout
                    </button>
                    <button className="w-1/2  rounded-full py-2 border  border-black text-black">
                      Comparison
                    </button>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
};

export default Header;
