// "use client";

// import { useCart } from "@/app/components/context/CartContext";
// import Image from "next/image";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item._id} className="flex items-center justify-between mb-4">
//             <Image src={item.productImage.asset.url} alt={item.title} width={100} height={100} />
//             <div className="flex-1 ml-4">
//               <h2 className="text-lg font-semibold">{item.title}</h2>
//               <p>${item.price}</p>
//             </div>
//             <div className="flex items-center">
//               <button onClick={() => updateQuantity(item._id, -1)}>-</button>
//               <span className="px-2">{item.quantity}</span>
//               <button onClick={() => updateQuantity(item._id, 1)}>+</button>
//             </div>
//             <button onClick={() => removeFromCart(item._id)} className="text-red-500">
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//       <h2 className="text-xl font-bold mt-4">Subtotal: ${subtotal.toFixed(2)}</h2>
//     </div>
//   );
// };

// export default CartPage;
// app/cart/page.tsx
// "use client";

// import { useCart } from "@/app/components/context/CartContext";
// import Image from "next/image";
// import Link from "next/link";

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty. <Link href="/" className="text-blue-500">Go shopping!</Link></p>
//       ) : (
//         <div>
//           <div className="grid grid-cols-1 gap-6">
//             {cart.map((item) => (
//               <div key={item._id} className="flex items-center gap-4 p-4 border rounded shadow">
//                 <Image
//                   src={item.productImage.asset.url}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="object-cover rounded"
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold">{item.title}</h2>
//                   <p className="text-green-700">${item.price}</p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <button
//                       className="bg-gray-300 px-2 py-1 rounded"
//                       onClick={() => updateQuantity(item._id, -1)}
//                       disabled={item.quantity === 1}
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       className="bg-gray-300 px-2 py-1 rounded"
//                       onClick={() => updateQuantity(item._id, 1)}
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                   onClick={() => removeFromCart(item._id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6">
//             <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
//             <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
"use client";

import { useCart } from "@/app/components/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6    bg-[#FCF8F3]">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-500">Go shopping!</Link></p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6 ">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center gap-4 p-4   border rounded shadow bg-[#FCF8F3]">
                <Image
                  src={item.productImage.asset.url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-green-700">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => updateQuantity(item._id, -1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => updateQuantity(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-green-700">Total: ${totalPrice.toFixed(2)}</h2>
            <Link href="/components/Checkout">
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
