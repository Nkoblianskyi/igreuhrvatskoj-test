"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { casinoSites } from "@/data/casino-sites"
import { Badge } from "@/components/ui/badge"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite] = useState(casinoSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3.5">
      {" "}
      {/* Adjusted background opacity and padding */}
  <div className="relative max-w-lg w-full mx-auto bg-zinc-900 rounded-xl border border-zinc-750 shadow-2xl">
        {" "}
        {/* Adjusted max-width */}
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3.5 -right-3.5 z-30 p-2.5 rounded-full bg-red-800 text-gray-350 hover:bg-zinc-750 shadow-lg-custom border border-zinc-750" // Adjusted padding, colors, shadow, and border
          aria-label="Close modal"
        >
          <X className="h-5.5 w-5.5" />
        </button>
        {/* Text above card */}
        <div className="text-center text-white text-lg font-semibold mb-4.5 drop-shadow-lg">Naš najbolji izbor</div>
        <div className="absolute top-[55px] left-1/2 -translate-x-1/2 z-20 bg-amber-500 text-white text-xs font-bold rounded-full py-1.5 px-4.5 shadow-md flex items-center whitespace-nowrap">
          NAJBOLJI IZBOR
        </div>
        {/* Main content area */}
        <div className="p-4.5 flex justify-center bg-transparent">
          {" "}
          {/* Adjusted padding */}
          <Link
            key={topSite.name}
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden hover:shadow-xl-custom relative" // Adjusted shadow
          >
            <Card className="h-full bg-zinc-900 rounded-xl border border-zinc-750 shadow-xl">
              {" "}
              {/* Adjusted gradient colors and border */}
              <CardContent className="p-4.5 flex flex-col items-center text-center h-full pt-8.5 bg-zinc-900/92 text-white">
                {" "}
                {/* Adjusted padding, background, and opacity */}
                <div className="flex-grow flex flex-col items-center">
                  {/* Logo adjustment */}
                  <div className="p-2.5 rounded-lg shadow-sm mb-3.5 flex items-center justify-center w-70 h-24">
                    {" "}
                    {/* Adjusted padding, size, and border */}
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={350} // Adjusted width
                      height={250} // Adjusted height
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  {/* Rating adjustment */}
                  <div className="flex items-center justify-center mb-3.5">
                    {" "}
                    {/* Adjusted margin */}
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="font-bold text-base text-yellow-400 ml-1.5">{topSite.rating.toFixed(1)}</span>{" "}
                    {/* Adjusted color and margin */}
                  </div>
                  {/* Welcome offer badge */}
                  <p className=" text-white mb-2.5 text-xs">
                    {topSite.type}
                  </p>
                  {/* Bonus text adjustment */}
                  <h3 className="text-4xl font-bold text-amber-400 mb-4.5">
                    {topSite.bonus}
                    {topSite.dopbonus && ` ${topSite.dopbonus}`}
                  </h3>{" "}
                  {/* Adjusted color and margin, added conditional rendering for dopbonus */}
                </div>
                {/* Button group and disclaimers */}
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full">
                    <Button
                      className="w-full bg-emerald-700 hover:bg-emerald-800 hover:shadow-lg-custom text-sm py-4.5 text-white" // Adjusted colors, shadow, and padding
                      asChild
                    >
                      <span className="flex items-center justify-center">PREUZMI BONUS</span>
                    </Button>
                  </div>
                  <p className="text-xs text-center text-gray-450 mt-2.5">18+. Primjenjuju se uvjeti. Igrajte odgovorno.</p>
                  {/* Adjusted color and margin */}
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
