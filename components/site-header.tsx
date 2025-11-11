"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // Adjusted scroll threshold
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-350 ${
        // Adjusted transition
        scrolled
          ? "bg-zinc-950/92 backdrop-blur-md shadow-xl-custom border-b border-zinc-700" // Adjusted opacity, blur, and shadow
          : "bg-zinc-900/92 backdrop-blur-md shadow-lg-custom border-b border-zinc-800" // Adjusted opacity, blur, and shadow
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 relative">
        {" "}
        {/* Adjusted height and padding */}
        {/* Centered Logo and Name */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {" "}
          {/* Adjusted spacing */}
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none text-white uppercase">Igre u Hrvatskoj</span>
          
          </div>
        </Link>
      </div>
    </header>
  )
}
