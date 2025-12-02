"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BettingSite } from "@/data/mock-data"

interface SiteCardProps {
  site: BettingSite
  rank: number
  isGoldenHighlight?: boolean
}

// Component for rendering stars with partial fill
const StarRating = ({
  rating,
  maxStars = 5,
  className = "",
}: { rating: number; maxStars?: number; className?: string }) => {
  const stars = []

  for (let i = 1; i <= maxStars; i++) {
    const fillPercentage = Math.max(0, Math.min(100, (rating - (i - 1)) * 100))

    stars.push(
      <div key={i} className={`relative ${className}`}>
        <Star className="w-full h-full text-gray-300" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="w-full h-full fill-current text-yellow-400" />
        </div>
      </div>,
    )
  }

  return <div className="flex gap-1">{stars}</div>
}

export function BettingSiteCardSecond({ site, rank, isGoldenHighlight = false }: SiteCardProps) {
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
    if (!votes && votes !== 0) return "0"
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "VRUĆI SLOTOVI"
      case 2:
        return "ELITNI KAZINO"
      case 3:
        return "VIP KAZINO"
      case 4:
        return "PROVJERENI KAZINO"
      default:
        return "OCIJENJENI KAZINO"
    }
  }

  // ВСЕГДА золотой бордер для первого элемента
  const isFirstPlace = rank === 1

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div
        className={`hidden lg:block tech-card relative overflow-hidden cursor-pointer mb-2 mx-4 ${
          isFirstPlace ? "border-4 border-yellow-500" : "border border-tech-gray-300"
        }`}
        style={{
          background: "linear-gradient(135deg, #2c2c2c 0%, #404040 50%, #2c2c2c 100%)",
          ...(isFirstPlace
            ? {
                border: "4px solid #eab308",
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
              }
            : {}),
        }}
      >
        {/* Casino Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="h-40 flex items-center py-6 px-6 relative">
            {/* PLATFORM - 30% */}
            <div className="flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative z-10">
              <div className="bg-black border-2 border-tech-black p-4 shadow-tech-medium relative mt-4 rounded-lg">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
                {/* Simple corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-500"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500"></div>
              </div>
            </div>

            {/* Rank and Status Badges - positioned absolutely */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div className="tech-rank px-3 py-1 text-xs font-bold !text-white" style={{ backgroundColor: "#C8102E" }}>
                #{rank}
              </div>
              {rank <= 4 && (
                <div
                  className="tech-badge px-2 sm:px-3 md:px-4 py-1 text-xs font-bold !text-white whitespace-nowrap"
                  style={{ backgroundColor: "#C8102E" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* WELCOME PACKAGE - 25% */}
            <div className="flex-[0_0_25%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-yellow-300 uppercase font-bold mb-1 tech-subheading">BONUS DOBRODOŠLICE</div>
              <div className="text-lg xl:text-xl font-bold text-white mb-1 tech-heading drop-shadow-lg">
                {site.bonus}
              </div>
              <div className="text-lg xl:text-xl font-bold text-yellow-300 tech-heading drop-shadow-lg">
                {site.welcomeOffer}
              </div>
            </div>

            {/* RATING - 12% */}
            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-4xl xl:text-5xl font-bold leading-none mb-1 tech-heading text-yellow-400 drop-shadow-lg">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-bold text-yellow-300 tech-subheading">OCJENA</div>
            </div>

            {/* USER SCORE - 20% */}
            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full relative z-10">
              <div className="text-xs text-yellow-300 mb-2 tech-subheading">({formatVotes(site.votes)} RECENZIJA)</div>
              <div className="flex justify-center mb-2">
                <StarRating rating={site.rating / 2} className="w-4 xl:w-5 h-4 xl:h-5" />
              </div>
              <div className="text-sm text-white font-bold tech-subheading drop-shadow-lg">IZVRSNO</div>
            </div>

            {/* ACCESS - 13% */}
            <div className="flex-[0_0_13%] pl-2 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black border-2 border-yellow-700 w-full h-12 mb-2 text-sm font-bold tech-subheading shadow-lg">
                  IGRAJ SADA
                </Button>
                <div className="text-xs text-yellow-300 font-bold tech-subheading">
                  KAZINO {site.name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Footer Disclaimer */}
        <div className="px-6 pb-4 border-t border-gray-600/30 bg-black/30">
          <p className="text-xs text-yellow-300 text-center py-2">
            18+ | Odgovorno Klađenje |{" "}
            <a
              href="https://www.porezna-uprava.hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              porezna-uprava.hr
            </a>
          </p>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`pr-2 hidden md:block lg:hidden tech-card relative overflow-hidden cursor-pointer mb-2 mx-4 ${
          isFirstPlace ? "border-4 border-yellow-500" : "border border-tech-gray-300"
        }`}
        style={{
          background: "linear-gradient(135deg, #2c2c2c 0%, #404040 50%, #2c2c2c 100%)",
          ...(isFirstPlace
            ? {
                border: "4px solid #eab308",
                boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
              }
            : {}),
        }}
      >
        {/* Casino Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="pt-6 pb-4 relative">
            <div className="absolute top-0 left-0 flex z-30" style={{ margin: 0, padding: 0 }}>
              <div
                className="tech-rank px-2 py-0.5 text-sm font-bold !text-white"
                style={{ margin: 0, backgroundColor: "#C8102E" }}
              >
                #{rank}
              </div>
              {rank <= 4 && (
                <div
                  className="tech-badge px-2 py-0.5 text-xs font-bold !text-white whitespace-nowrap"
                  style={{ margin: 0, backgroundColor: "#C8102E" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            <div className="grid grid-cols-12 gap-2 items-center relative z-10">
              <div className="col-span-3 flex justify-center p-2">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft w-full max-w-[120px] relative rounded">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-yellow-500"></div>
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-yellow-500"></div>
                </div>
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-yellow-300 uppercase font-bold mb-1 tech-subheading">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-sm font-bold text-white mb-1 tech-heading drop-shadow-lg">{site.bonus}</div>
                <div className="text-sm font-bold text-yellow-300 tech-heading drop-shadow-lg">{site.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xl font-bold leading-none tech-heading text-yellow-400 drop-shadow-lg">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-xs font-bold text-yellow-300 tech-subheading">OCJENA</div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-yellow-300 mb-1 tech-subheading">({formatVotes(site.votes)})</div>
                <div className="flex justify-center mb-1">
                  <StarRating rating={site.rating / 2} className="w-3 h-3" />
                </div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black border-2 border-yellow-700 px-2 py-1 text-xs w-full font-bold tech-subheading shadow-lg">
                  IGRAJ SADA
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden tech-card relative overflow-hidden cursor-pointer mb-1 mx-2 ${
          isFirstPlace ? "border-4 border-yellow-500" : "border border-tech-gray-300"
        }`}
        style={{
          background: "linear-gradient(135deg, #2c2c2c 0%, #404040 50%, #2c2c2c 100%)",
          ...(isFirstPlace
            ? {
                border: "4px solid #eab308",
                boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
              }
            : {}),
        }}
      >
        {/* Casino Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="p-2 relative">
            {/* Badges */}
            <div className="absolute top-0 left-0 flex gap-0 z-30">
              <div
                className="tech-rank px-3 py-0.5 text-sm font-bold !text-white"
                style={{ backgroundColor: "#C8102E" }}
              >
                #{rank}
              </div>
              {rank <= 4 && (
                <div
                  className="tech-badge px-3 py-1 text-xs font-bold !text-white whitespace-nowrap bg-gradient-to-r"
                  style={{ backgroundColor: "#C8102E" }}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-2 items-center mt-5 relative z-10">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-black border-2 border-tech-black p-2 shadow-tech-soft relative rounded">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
                  <div className="absolute -top-1 -left-1 w-1 h-1 bg-yellow-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-yellow-500"></div>
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs text-yellow-300 uppercase font-bold mb-1 tech-subheading">
                  BONUS DOBRODOŠLICE
                </div>
                <div className="text-lg font-bold text-white leading-tight mb-1 tech-heading drop-shadow-lg">
                  {site.bonus}
                </div>
                <div className="text-lg font-bold text-yellow-300 leading-tight tech-heading drop-shadow-lg">
                  {site.welcomeOffer}
                </div>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-3 items-center justify-center gap-1 mt-1 pt-1 border-t-2 border-gray-600/30 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold leading-none mb-1 mt-1.5 tech-heading text-yellow-400 drop-shadow-lg">
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[8px] text-yellow-300 font-bold tech-subheading">OCJENA</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mt-2 mb-1">
                  <StarRating rating={site.rating / 2} className="w-4 h-4" />
                </div>
                <div className="text-[10px] text-yellow-300 font-bold tech-subheading">({formatVotes(site.votes)})</div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black border-2 border-yellow-700 px-4 py-2 text-sm w-full font-bold tech-subheading shadow-lg">
                  IGRAJ SADA
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
