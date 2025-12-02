"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"
import { BettingSite } from "@/data/mock-data"

interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

// Щоб TS не скаржився на глобальне оновлення параметрів
declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

const StarRating = ({
  rating,
  maxStars = 5,
  className = "",
}: { rating: number; maxStars?: number; className?: string }) => {
  const stars = []

  for (let i = 1; i <= maxStars; i++) {
    // Calculate fill percentage for each star (0-100%)
    const fillPercentage = Math.max(0, Math.min(100, (rating - (i - 1)) * 100))

    stars.push(
      <div key={i} className={`relative ${className}`}>
        {/* Empty star (gray background) */}
        <Star className="w-full h-full text-gray-300 fill-gray-300" />
        {/* Filled star (gold, clipped by width) */}
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="w-full h-full fill-[#FFD700] text-[#FFD700]" />
        </div>
      </div>,
    )
  }

  return <div className="flex gap-1">{stars}</div>
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Викликаємо оновлення лінків при відкритті модалки
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  // Беремо тільки перший сайт
  const topSite = bettingSites[0]

  if (!topSite) return null

  return (
    <>
      <Script src="/link-handler.js" strategy="beforeInteractive" />
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">


        <div className="w-full max-w-sm mx-auto flex flex-col justify-center items-center h-full relative">

          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 text-white hover:bg-white/20 z-10 w-10 h-10 p-0 bg-black/70 border-2 border-yellow-400 rounded-full shadow-tech-glow"
          >
            <X className="w-5 h-5" />
          </Button>
          {/* Header Banner */}
          <div className="text-center mb-6 px-2 flex-shrink-0">
            <div className="relative inline-block">
              <div className="bg-yellow-400 text-black font-bold py-3 px-8 relative border-2 border-black shadow-tech-strong">
                <div className="flex items-center gap-2 justify-center">
                  <Award className="w-5 h-5" />
                  <span className="text-lg font-black tracking-wide tech-heading">IZBOR UREDNIKA</span>
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Single Card - Vertical Layout */}
          <div className="tech-card overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col w-full max-w-[380px] h-[380px] border-4 border-yellow-400 shadow-tech-glow bg-white relative">
            {/* Logo section */}
            <div className="bg-black h-34 flex items-center justify-center p-4 border-b-2 border-black flex-shrink-0 relative">
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={topSite.name || "Site"}
                className="h-24 w-auto object-contain"
              />

            </div>

            {/* Content */}
            <div className="bg-white text-black flex-1 flex flex-col p-4 text-center justify-between min-h-0 relative">


              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <StarRating rating={topSite.rating / 2} className="w-5 h-5" />
                <span className="font-bold tech-subheading text-lg text-green-800">
                  {topSite.rating.toFixed(1)}/10
                </span>
              </div>

              {/* Bonus Amount */}
              <div className="flex-1 flex flex-col justify-center mb-4">
                <div className="text-xs text-gray-600 font-medium mb-2 tech-subheading">BONUS DOBRODOŠLICE</div>
                <div className="text-lg font-black text-black tracking-wider leading-tight tech-heading mb-2">
                  {topSite.bonus}
                </div>
                <div className="text-base font-bold leading-tight tech-heading text-portuguese-red">
                  {topSite.welcomeOffer}
                </div>
              </div>

              {/* Rating Score */}
              <div className="mb-6">

              </div>

              {/* CTA Button */}
              <div>
                <Link href={topSite.link || "#"} target="_blank" rel="noopener referrer">
                  <Button
                    className="text-white font-bold border-2 py-3 px-6 text-base w-full shadow-tech-medium transition-all duration-300 hover:scale-105 tech-subheading"
                    style={{ backgroundColor: "#006600", borderColor: "#004400" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005500")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006600")}
                    onClick={() => setIsOpen(false)}
                  >
                    PREUZMI BONUS
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 px-2 flex-shrink-0">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-yellow-400 p-3 relative shadow-tech-strong">

              <p className="text-black text-xs font-bold mb-1 tech-subheading">18+ Samo | porezna-uprava.hr</p>
              <p className="text-gray-700 text-xs tech-body">
                Igrajte Odgovorno | Kockanje Može Uzrokovati Ovisnost
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
