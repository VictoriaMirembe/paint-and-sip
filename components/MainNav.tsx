"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "./Icons"


export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex ">
      <Link href="/" className="mr-4 flex items-center space-x-2 mt-4">
    <img src="https://paintandsipuganda.com/wp-content/uploads/2023/12/paintandsiplogo1.jpg" alt="" className="h-13 w-16 object-contain"/> 
        {/* <span className="hidden font-bold sm:inline-block">
        Tasty POS
        </span> */}
      </Link>
      <nav className="flex items-center gap-6 text-sm ">
        {/* <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/Features" ? "text-foreground" : "text-foreground/60 text-foreground"
          )}
        >
         Features
        </Link> */}

        {/* <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/Products")
              ? "text-foreground"
              : "text-foreground/60 text-foreground"
          )}
        >
      Products
        </Link> */}

        {/* <Link
          href="/contact"
          className={cn(
            "transition-colors  hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60 text-foreground "
          )}
        >
        Contact
        </Link> */}
{/* 
        <Link
          href="/view-list"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/view-list")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
      view-list
        </Link> */}
      </nav>
    </div>
  )
}