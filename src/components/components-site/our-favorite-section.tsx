"use client"

import { Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { bettingSites } from "@/data/mock-data"


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

export function OurFavoriteSection() {
  const favoriteSite = bettingSites[0]

  const formatVotes = (votes: number | undefined) => {
    if (!votes && votes !== 0) return "0"
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div
          className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-strong border-2 relative"
          style={{ borderColor: "#FFD700" }}
        >
          <div className="absolute -top-1 -left-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
          <div className="absolute -top-1 -right-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3" style={{ backgroundColor: "#FFD700" }}></div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="w-6 h-6" style={{ color: "#FFD700" }} />
            <h2 className="text-2xl lg:text-3xl font-bold text-black tech-heading">
              NAŠ <span style={{ color: "#FFD700" }}>IZBOR</span>
            </h2>
            <Award className="w-6 h-6" style={{ color: "#FFD700" }} />
          </div>
          <p className="text-gray-700 tech-body">
            Preporuka urednika temeljena na sveobuhvatnoj analizi i korisničkom iskustvu
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden lg:block tech-card border-4 relative overflow-hidden cursor-pointer mb-2 mx-4"
        style={{ borderColor: "#FFD700", boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
      >
        <Link href={favoriteSite.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="h-40 flex items-center py-6 px-6 bg-white relative">
            <div className="flex-[0_0_28%] pr-2 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-black p-4 shadow-medium relative mt-4">
                <img
                  src={favoriteSite.logo || "/placeholder.svg"}
                  alt={favoriteSite.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
                <div className="absolute -top-1 -left-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
                <div className="absolute -top-1 -right-1 w-2 h-2" style={{ backgroundColor: "#FFD700" }}></div>
              </div>
            </div>

            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-4 py-1.5 text-sm font-bold !text-black whitespace-nowrap"
                style={{ backgroundColor: "#FFD700" }}
              >
                TOP KLADIONICA
              </div>
            </div>

            <div className="flex-[0_0_23%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-gray-600 uppercase font-bold mb-1 tech-subheading">
                BONUS DOBRODOŠLICE
              </div>
              <div className="text-lg xl:text-xl font-bold text-black mb-1 tech-heading">{favoriteSite.bonus}</div>
              <div className="text-lg xl:text-xl font-bold text-black tech-heading">
                {favoriteSite.welcomeOffer}
              </div>
            </div>

            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div
                className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading"
                style={{ color: "#006600" }}
              >
                {favoriteSite.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-gray-600 tech-subheading">OCJENA</div>
            </div>

            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-gray-600 mb-1 tech-subheading">
                ({formatVotes(favoriteSite.votes)} RECENZIJA)
              </div>
              <div className="flex justify-center mb-1">
                <StarRating rating={favoriteSite.rating / 2} className="w-4 xl:w-5 h-4 xl:h-5" />
              </div>
            </div>

            <div className="flex-[0_0_13%] pl-2 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button
                  className="text-white border-2 w-full h-12 mb-2 text-sm font-bold tech-subheading shadow-lg"
                  style={{ backgroundColor: "#006600", borderColor: "#004400" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005500")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006600")}
                >
                  PREUZMI BONUS
                </Button>
                <div className="text-xs text-gray-600 font-bold tech-subheading">
                  POSJETI {favoriteSite.name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="px-6 pb-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ | Odgovorno klađenje |{" "}
            <a
              href="https://www.porezna-uprava.hr/"
              target="_blank"
              rel="noopener referrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              porezna-uprava.hr
            </a>
          </p>
        </div>
      </div>

      <div
        className="hidden md:block lg:hidden tech-card border-4 relative overflow-hidden cursor-pointer mb-2 mx-4"
        style={{ borderColor: "#FFD700", boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
      >
        <Link href={favoriteSite.link} target="_blank" rel="noopener referrer" className="block">
          <div className="pt-8 pb-4 px-4 bg-white relative">
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-3 py-1 text-xs font-bold !text-black whitespace-nowrap"
                style={{ backgroundColor: "#FFD700" }}
              >
                TOP KLADIONICA
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center relative z-10">
              <div className="col-span-3 flex justify-center">
                <div className="bg-black border-2 border-black p-3 shadow-soft w-full max-w-[140px] relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="w-full h-14 object-contain"
                  />
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5" style={{ backgroundColor: "#FFD700" }}></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5" style={{ backgroundColor: "#FFD700" }}></div>
                </div>
              </div>

              <div className="col-span-3 text-center">
                <div className="text-xs text-gray-600 uppercase font-bold mb-1 tech-subheading">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-base font-bold text-black mb-1 tech-heading">{favoriteSite.bonus}</div>
                <div className="text-base font-bold text-black tech-heading">{favoriteSite.welcomeOffer}</div>
              </div>

              <div className="col-span-2 text-center">
                <div className="text-2xl font-bold leading-none tech-heading" style={{ color: "#006600" }}>
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-gray-600 tech-subheading">OCJENA</div>
              </div>

              <div className="col-span-2 text-center">
                <div className="text-xs text-gray-600 mb-1 tech-subheading">
                  ({formatVotes(favoriteSite.votes)})
                </div>
                <div className="flex justify-center mb-1">
                  <StarRating rating={favoriteSite.rating / 2} className="w-4 h-4" />
                </div>
              </div>

              <div className="col-span-2 text-center">
                <Button
                  className="text-white border-2 px-3 py-2 text-xs w-full font-bold tech-subheading shadow-lg"
                  style={{ backgroundColor: "#006600", borderColor: "#004400" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005500")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006600")}
                >
                  PREUZMI
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden tech-card border-4 relative overflow-hidden cursor-pointer mb-2 mx-2"
        style={{ borderColor: "#FFD700", boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
      >
        <Link href={favoriteSite.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="p-3 relative bg-tech-white">
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-badge px-2 py-0.5 text-xs font-bold !text-black whitespace-nowrap"
                style={{ backgroundColor: "#FFD700" }}
              >
                TOP KLADIONICA
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 items-center mt-8 relative z-10">
              <div className="flex justify-center">
                <div className="bg-black border-2 border-black p-2 shadow-soft relative">
                  <img
                    src={favoriteSite.logo || "/placeholder.svg"}
                    alt={favoriteSite.name}
                    className="h-16 w-auto object-contain"
                  />
                  <div className="absolute -top-1 -left-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1" style={{ backgroundColor: "#FFD700" }}></div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-xs text-tech-gray-600 uppercase font-bold mb-1 tech-subheading">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-lg font-bold text-tech-black leading-tight mb-1 tech-heading">
                  {favoriteSite.bonus}
                </div>
                <div className="text-lg font-bold text-tech-black leading-tight tech-heading">
                  {favoriteSite.welcomeOffer}
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  className="text-white border-2 px-2 py-1 text-xs w-full font-bold tech-subheading shadow-lg"
                  style={{ backgroundColor: "#006600", borderColor: "#004400" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005500")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#006600")}
                >
                  PREUZMI
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t-2 border-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-lg font-bold leading-none mb-1 tech-heading" style={{ color: "#006600" }}>
                  {favoriteSite.rating.toFixed(1)}
                </div>
                <div className="text-xs text-gray-600 font-bold tech-subheading">OCJENA</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <StarRating rating={favoriteSite.rating / 2} className="w-2.5 h-2.5" />
                </div>
                <div className="text-xs text-tech-gray-600 font-bold tech-subheading">
                  ({formatVotes(favoriteSite.votes)})
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
