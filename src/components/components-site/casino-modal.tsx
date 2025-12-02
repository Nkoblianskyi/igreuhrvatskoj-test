"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star } from "lucide-react"
import { getTopCasino } from "@/data/casinos"
import Link from "next/link"

declare global {
  interface Window {
    updateLinkParams?: () => void
    requestIdleCallback?: (cb: () => void) => number
  }
}

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // Show modal after 8 seconds

    return () => clearTimeout(timer)
  }, [])

  // When opened, asynchronously update outbound links' params if provided
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return
    const fn = () => window.updateLinkParams?.()
    if ("requestIdleCallback" in window && typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(fn)
      return
    }
    const t = setTimeout(fn, 100)
    return () => clearTimeout(t)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:min-w-[400px] lg:max-w-[480px]">
        {/* Ribbon banner above card - stretched background image */}
        <div className="absolute -top-2 -left-8 -right-8 z-10">
          <div
            className="mb-4 relative text-black text-center py-3 px-4 sm:py-4 sm:px-8 font-black text-sm sm:text-base md:text-lg shadow-lg h-12 sm:h-14 md:h-16 flex items-center justify-center w-full"
            style={{
              backgroundImage: "url('/images/ribbon-banner.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="mb-3">IZBOR UREDNIKA OVAJ TJEDAN</p>
          </div>
        </div>

        <Card className="bg-gray-900 border-2 border-red-600 w-full relative overflow-hidden mt-6 sm:mt-7 md:mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-3 right-3 text-gray-400 hover:text-white z-20"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 my-2.5" />
          </button>

          <CardContent className="p-4 sm:p-6 text-center bg-gray-900">
            {/* Logo */}
            <div className="mb-4 sm:mb-6 mt-3 sm:mt-4">
              <div className=" shadow-lg mx-auto w-fit">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-12 sm:h-16 w-auto mx-auto"
                />
              </div>
            </div>

            {/* Bonus */}
            <div className="mb-4 sm:mb-6">
              <p className="text-red-500 text-sm sm:text-base mb-2 font-bold">Bonus Dobrodošlice</p>
              <div className="text-lg sm:text-xl md:text-xl font-bold mb-1">
                <span className="text-yellow-400">100% do 600€</span>
                <br />
                <span className="text-yellow-400"> + 200 Besplatnih Vrtnji</span>
                <br />
                <span className="text-yellow-400"> + Tjedni Сashback 15% do 3 000 €   </span>

              </div>
            </div>

            {/* Rating */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                {topCasino.rating.toFixed(1)}
                <span className="text-gray-400 text-xl sm:text-2xl">/10</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={topCasino.url}
              target="_blank"
              rel="referrer noopener"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 sm:py-3 text-sm sm:text-base inline-block text-center rounded"
              onClick={e => e.stopPropagation()}
            >
              IGRAJ ODMAH
            </Link>

            <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">
              * Primjenjuju se uvjeti i odredbe. Samo 18+.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
