// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Cardmain from "./components/Cardmain";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />

//         {children}
//         <Cardmain />
//         <Footer />
//         </body>
//     </html>
//   );
// }

// import "./globals.css";
// import { CartProvider } from "@/app/components/context/CartContext";

// export const metadata = {
//   title: "Shop",
//   description: "Online Shopping Store",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>{children}</CartProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { CartProvider } from "@/app/components/context/CartContext";
import Header from "./components/Header"
import Footer from "./components/Footer";

export const metadata = {
  title: "Shop",
  description: "Online Shopping Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

