import Image from "next/image";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu, MenuIcon } from "lucide-react";

export default function Header() {
  return (
  
    
<main className="bg-black text-white">

    {/* <!-- Navbar --> */}
    <nav className="bg-black flex  space-x-6 pt-4 md:flex justify-center items-center ">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold pt-4 pl-10" >MyPort<span className="text-teal-400">folio</span></h1>
            <ul className="hidden md:block ">
               
               <li className="space-x-5 mr-60">
                <Link href="/" className="hover:text-teal-400">Home</Link>
                <Link href="about" className="hover:text-teal-400">About</Link>
                
                <Link href="skills" className="hover:text-teal-400">Skills</Link>
                <Link href="projects" className="hover:text-teal-400">Projects</Link>

                <Link href="contact" className="hover:text-teal-400">Contact</Link>
                </li>

                 </ul>

        <Sheet>
  <SheetTrigger className="text-1xl pr-24 md:hidden"><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mr-60">Rehana Ali</SheetTitle>
      <SheetDescription>
        
       <ul className="mr-60 space-y-10">

                <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
                <li><Link href="about" className="hover:text-teal-400">About</Link></li>
                
                <li><Link href="skills" className="hover:text-teal-400">Skills</Link></li>
                <li><Link href="projects" className="hover:text-teal-400">Projects</Link></li>

                <li><Link href="contact" className="hover:text-teal-400">Contact</Link></li> 

                 </ul>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            
      
        </div>
    </nav>
    {/* </div> */}
    </main>

    )
    }
    Header