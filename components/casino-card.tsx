"use client"
import { Star, StarHalf } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CasinoSite } from "@/data/casino-sites"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import React from "react"

interface CasinoCardProps {
  site: CasinoSite
  rank: number
}

export function CasinoCard({ site, rank }: CasinoCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "NAJBOLJI IZBOR"
      case 2:
        return "VRHUNSKI IZBOR"
      case 3:
        return "POPULARNO"
      case 4:
        return "TREND"
      default:
        return "OCJENJENO"
    }
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating / 2) // Convert 10-point scale to 5-star scale
    const hasHalfStar = (rating / 2) % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 xl:w-5 h-4 xl:h-5 fill-current text-amber-500" />)
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 xl:w-5 h-4 xl:h-5 fill-current text-amber-500" />)
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 xl:w-5 h-4 xl:h-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="block animate-fade-in ">
      {/* Desktop Layout */}
      <div
        className={cn(
          "hidden lg:block rounded-xl shadow-xl-custom hover:shadow-2xl-custom relative overflow-hidden cursor-pointer mb-2 mx-4",
          rank === 1 ? "border-2 border-amber-500 animate-glow-strong" : "border border-zinc-750",
        )}
      >
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 bg-zinc-900/70 relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-4 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-zinc-950 p-4 shadow-md-custom relative mt-4">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={170}
                  height={70}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
              </div>
            </div>
            {/* Rank and Status Badges - positioned absolutely */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div className="px-3 py-1 text-xs font-bold text-black bg-yellow-400">#{rank}</div>
              {rank <= 4 && (
                <div className="px-2 sm:px-3 md:px-4 py-1 text-xs font-bold text-black whitespace-nowrap bg-yellow-400">
                  {getRankLabel(rank)}
                </div>
              )}
            </div>
            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_29%] px-4 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-emerald-500 uppercase font-bold mb-1">{site.type}</div>
              <div className="text-xl xl:text-2xl font-bold text-amber-500 mb-1">{site.bonus}</div>
              {site.dopbonus && <div className="text-lg xl:text-xl font-bold text-amber-500">{site.dopbonus}</div>}
            </div>
            {/* USER SCORE & RATING - 32% (combined from 20% + 12%) */}
            <div className="flex-[0_0_25%] px-4 text-center flex flex-col justify-center h-full relative z-10 gap-1">
                <div className="text-xl font-bold leading-none text-emerald-500">{site.rating.toFixed(1)} OCJENA</div>
              <div className="text-xs text-white">({formatReviews(site.votes)} recenzija)</div>
              <div className="flex justify-center gap-1">{renderStars(site.rating)}</div>
              {/* Rating moved under reviews */}
            

            </div>
            {/* ACCESS - 13% */}
            <div className="flex-[0_0_17%] pl-4 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-white border-2 border-emerald-800 w-full h-12 mb-2 text-sm font-bold shadow-lg">
                  PREUZMI BONUS
                </Button>
                <div className="text-xs text-white font-bold">POSJETI {site.name.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </Link>
        {/* Footer Disclaimer */}
        <div className="px-6 pb-4 border-t border-zinc-700 bg-zinc-900/50">
          <p className="text-xs text-white text-center py-2 text-gray-150">
            18+ • Odgovorno klađenje • Licencirano • Primjenjuju se uvjeti
          </p>
        </div>
      </div>
      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden rounded-xl border border-zinc-750 relative overflow-hidden cursor-pointer mb-2 mx-4">
        <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          <div className={cn("pt-6 pb-4 bg-zinc-900/50 relative", rank <= 4 ? "pl-8 pr-4" : "px-4")}>
            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-black border-2 border-zinc-950 p-2 shadow-sm-custom w-full mt-4 relative">
                  <Image src={site.logo || "/placeholder.svg"} width={170} height={70} alt={site.name} className="w-full h-12 object-contain" />
                </div>
              </div>
              {/* Badges */}
              <div className="absolute top-0 left-0 flex gap-0 z-30">
                <div className="px-2 py-0.5 text-sm font-bold text-black bg-yellow-400">#{rank}</div>
                {rank <= 4 && (
                  <div className="px-2 py-0.5 text-xs font-bold text-black whitespace-nowrap bg-yellow-400">
                    {getRankLabel(rank)}
                  </div>
                )}
              </div>
              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-emerald-500 uppercase font-bold mb-1">{site.type}</div>
                <div className="text-sm font-bold text-amber-500 mb-1">{site.bonus}</div>
                {site.dopbonus && <div className="text-xs font-bold text-amber-500">{site.dopbonus}</div>}
              </div>
              {/* Rating & Score - 4 колонки (2+2) */}
              <div className="col-span-4 text-center">
                <div className="text-xs text-white mb-1">({formatReviews(site.votes)} recenzija)</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {renderStars(site.rating).map((star, i) => (
                    <div key={i} className="w-3 h-3 text-amber-500">
                      {React.cloneElement(star, { className: "w-3 h-3 fill-current text-amber-500" })}
                    </div>
                  ))}
                </div>
                <div className="text-xl font-bold leading-none text-emerald-500">{site.rating.toFixed(1)} OCJENA</div>
              </div>
              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-white border-2 border-emerald-800 px-2 py-1 text-xs w-full font-bold shadow-lg">
                  PREUZMI BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* Mobile Layout - RESTORED TO PREVIOUS WORKING VERSION */}
      <div className="md:hidden relative mb-1 mx-2">
        {" "}
        {/* Outer container for positioning */}
        {/* Badge for mobile - positioned relative to this new parent */}
        {rank <= 4 && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            {" "}
            {/* Increased z-index */}
            <div
              className={cn(
                "font-bold rounded-lg shadow-md-custom flex items-center whitespace-nowrap",
                rank === 1
                  ? "text-sm py-2 px-6 bg-emerald-600 text-white border-2 border-amber-400"
                  : "text-xs py-1.5 px-5 bg-amber-500 text-white border border-amber-400",
              )}
            >
              <span>{getRankLabel(rank)}</span>
            </div>
          </div>
        )}
        <Link
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden cursor-pointer border border-zinc-750"
        >
          {" "}
          {/* Card content wrapped in Link */}
          {/* Main Content */}
          <div className="p-4 relative bg-zinc-900/50">
            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-4 items-center mt-8 relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-black p-3 rounded shadow-sm w-40 h-24 flex items-center justify-center border border-zinc-750">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={180}
                    height={90}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              {/* Bonus Column */}
              <div className="text-center flex flex-col justify-center h-full min-h-[90px]">
                <div className="uppercase font-bold mb-2 text-base text-emerald-500">{site.type}</div>
                <div className="font-bold text-amber-500 text-lg leading-tight">{site.bonus}</div>
                {site.dopbonus && <div className="text-sm font-bold text-amber-500">{site.dopbonus}</div>}
              </div>
            </div>
            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center gap-3 pt-3 border-t border-zinc-750 min-h-[60px]">
              {/* Rating moved here for mobile */}
              <div className="col-span-2 text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {renderStars(site.rating).map((star, i) => (
                    <div key={i} className="w-4 h-4">
                      {React.cloneElement(star, { className: "w-4 h-4 fill-amber-400 text-amber-400" })}
                    </div>
                  ))}
                </div>
                <div className="text-white font-semibold">
                  {site.votes ? `(${site.votes} recenzija)` : "(2500 recenzija)"}
                </div>
                <div className="text-lg font-bold text-emerald-500 mt-1.5">{site.rating.toFixed(1)} OCJENA</div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-sm px-5 py-3 font-bold text-white" asChild>
                    <span>PREUZMI BONUS</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
