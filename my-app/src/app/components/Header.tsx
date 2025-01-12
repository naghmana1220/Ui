"use client"
import { Search, Menu, ShoppingCart, Heart,User } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";



const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
   
  return (
    <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">
        

      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3">
      
          <Image src={"/images/Logo1.png"} alt="Logo" width={100} height={100} className="w-16 h-auto lg:ml-10" />


            <span className="ml-3 text-3xl font-['Montserrat'] font-bold  text-[#000000]  ">Furniro</span>
        {/* Navbar */}
        <nav className="font-medium flex flex-1 justify-center">
    
        <ul className="hidden sm:flex gap-10">
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/Shop">Shop</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/blog">Blog</Link>
            
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3">
        <Link href={"/account"}><User className=" p-[6px] rounded" size={37}/></Link>
          <Link href={"/"}><Search className=" p-[6px] rounded" size={37} /></Link>
          <Link href={"/"}><Heart className=" p-[6px] rounded" size={37}/></Link>
          <Link href={"/"}><ShoppingCart className=" p-[6px] rounded" size={37} /></Link>
          <Menu className="sm:hidden cursor-pointer" onClick={()=> setIsNavbarOpen(true)} size={25}/>
        </div>

      </div>

      {/* Mobile Header */}
      <Sheet open={isNavbarOpen} onOpenChange={setIsNavbarOpen}>
        <SheetContent className="bg-white w-[15rem]" side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-10">
                <li>
                  <Link href="/" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Home</Link>
                </li>
                <li>
                  <Link href="/Shop" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Shop</Link>
                </li>
                <li>
                  <Link href="/blog" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Blog</Link>

                </li>
                <li>
                  <Link href="/contact" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Contact</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>      

     
                
    </header>
  )
}

export default Header