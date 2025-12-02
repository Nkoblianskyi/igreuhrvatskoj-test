"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "@/data/mock-data"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const StarRating = ({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) => {
  const stars = []
  const normalizedRating = rating / 2 // Convert 10-point scale to 5-star scale

  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.max(0, Math.min(100, (normalizedRating - (i - 1)) * 100))

    stars.push(
      <div key={i} className={`relative ${size}`}>
        {/* Background star with visible stroke */}
        <Star className={`${size} star-empty`} strokeWidth={2} />
        {/* Filled star overlay - clipped by container width */}
        <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className={`${size} star-filled`} strokeWidth={2} />
        </div>
      </div>,
    )
  }

  return <div className="flex gap-1">{stars}</div>
}

export function BettingSiteCard({ site, rank }: SiteCardProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "Najbolja Kladionica"
      case 2:
        return "Ekskluzivna Ponuda"
      case 3:
        return "Preporučeno"
      case 4:
        return "Trendovi"
      default:
        return "Ocijenjeno"
    }
  }

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block tech-card ${rank === 1 ? "border-2 croatian-gold-border tech-glow" : "border tech-gray-300"} relative overflow-hidden cursor-pointer mb-2 mx-4`}
      >
        <Link href={site.link} target="_blank" rel="noopener referrer" className="block">
          {rank <= 4 && (
            <div className="absolute top-0 left-0 z-30">
              <div className="tech-badge px-4 py-1 text-xs font-bold tech-black croatian-gold-bg whitespace-nowrap">
                {getRankLabel(rank)}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="h-40 flex items-center py-6 pl-6 pr-6 tech-white relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_22%] flex justify-center items-center h-full relative z-10">
              <div className="tech-black-bg border-2 tech-black-border p-4 shadow-tech-medium relative mt-4">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
              </div>
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_35%] px-2 text-center flex flex-col justify-center h-full w-full relative z-10">
              <div className="text-xs tech-gray-600 uppercase font-bold mb-1 tech-subheading">BONUS DOBRODOŠLICE</div>
              <div className="text-base font-bold tech-black mb-1 tech-heading">{site.bonus}</div>
              <div className="text-base font-bold tech-black tech-heading">{site.welcomeOffer}</div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_10%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading croatian-green">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold tech-gray-600 tech-subheading">OCJENA</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_15%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs tech-gray-600 mb-2 tech-subheading">({formatVotes(site.votes)} RECENZIJA)</div>
              <div className="flex justify-center mb-2">
                <StarRating rating={site.rating} size="w-4 h-4 xl:w-5 xl:h-5" />
              </div>
            </div>

            {/* ACCESS - 13% */}
            <div className="flex-[0_0_12%] pl-2 pr-8 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="text-white croatian-green-bg croatian-green-border border-2 w-full h-12 mb-2 text-sm font-bold tech-subheading shadow-lg hover:croatian-green-bg">
                  PREUZMI BONUS
                </Button>
                <div className="text-xs tech-gray-600 font-bold tech-subheading">POSJETI {site.name.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden tech-card border tech-gray-300 relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={site.link} target="_blank" rel="noopener referrer" className="block">
          {rank <= 4 && (
            <div className="absolute top-0 left-0 z-30">
              <div className="tech-badge px-3 py-1 text-xs font-bold tech-black croatian-gold-bg whitespace-nowrap">
                {getRankLabel(rank)}
              </div>
            </div>
          )}

          <div className={`pt-6 pb-4 ${rank <= 4 ? "pl-8 pr-4" : "px-4"} tech-white relative`}>
            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div className="tech-black-bg border-2 tech-black-border p-2 shadow-tech-soft w-full mt-4 relative">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs tech-gray-600 uppercase font-bold mb-1 tech-subheading">BONUS</div>
                <div className="text-sm font-bold tech-black mb-1 tech-heading">{site.bonus}</div>
                <div className="text-sm font-bold tech-black tech-heading">{site.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none tech-heading croatian-green">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold tech-gray-600 tech-subheading">OCJENA</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs tech-gray-600 mb-1 tech-subheading">({formatVotes(site.votes)})</div>
                <div className="flex justify-center mb-1">
                  <StarRating rating={site.rating} size="w-3 h-3" />
                </div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center pr-4">
                <Button className="text-white croatian-green-bg croatian-green-border border-2 px-1 py-2 text-[10px] leading-tight w-full font-bold tech-subheading shadow-lg h-auto hover:croatian-green-bg">
                  PREUZMI
                  <br />
                  BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className={`px-4  border-t border-neutral-200 bg-neutral-50 ${rank <= 4 ? "pl-8 pr-4" : "px-4"}`}>
          <p className="text-xs text-neutral-500 text-center py-2">
            18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno
          </p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden tech-card relative overflow-hidden cursor-pointer mb-1 mx-2">
        <Link href={site.link} target="_blank" rel="noopener referrer" className="block">
          {rank <= 4 && (
            <div className="absolute top-0 left-0 z-30">
              <div className="tech-badge px-3 py-1 text-xs font-bold tech-black croatian-gold-bg whitespace-nowrap">
                {getRankLabel(rank)}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="p-2 relative tech-white">
            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-2 items-center justify-center relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center items-center mt-5">
                <div className="tech-black-bg border-2 tech-black-border w-full p-2 shadow-tech-soft relative">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="h-14 w-auto object-contain px-4"
                  />
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs tech-gray-600 uppercase font-bold mb-1 tech-subheading">BONUS DOBRODOŠLICE</div>
                <div className="text-sm font-bold tech-black leading-tight mb-1 tech-heading">{site.bonus}</div>
                <div className="text-sm font-bold tech-black leading-tight tech-heading">{site.welcomeOffer}</div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 tech-gray-200 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5 tech-heading croatian-green">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[8px] tech-gray-600 font-bold tech-subheading">OCJENA</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mt-2 mb-1">
                  <StarRating rating={site.rating} size="w-4 h-4" />
                </div>
                <div className="text-[10px] tech-gray-600 font-bold tech-subheading">({formatVotes(site.votes)})</div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center pr-4">
                <Button className="text-white croatian-green-bg croatian-green-border border-2 px-4 py-4 text-[11px] w-full font-bold tech-subheading shadow-lg hover:croatian-green-bg">
                  PREUZMI BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-4 border-t border-neutral-200 bg-neutral-50">
          <p className="text-[10px] text-neutral-500 text-center py-[2px]">
            18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno
          </p>
        </div>
      </div>
    </div>
  )
}
