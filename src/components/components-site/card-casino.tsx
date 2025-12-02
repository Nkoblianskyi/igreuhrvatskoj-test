import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import React from "react"
import Link from "next/link"

function PartialStar({ fillPercent, size = "h-4 w-4" }: { fillPercent: number; size?: string }) {
    const clamped = Math.max(0, Math.min(100, fillPercent))
    return (
        <div className={`relative inline-block ${size}`} aria-hidden="true">
            <Star className={`absolute inset-0 text-gray-600 ${size}`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${clamped}%` }}>
                <Star className={`text-yellow-500 fill-current ${size}`} />
            </div>
        </div>
    )
}

function StarRating({ rating10, size = "h-4 w-4", gapClass = "gap-2" }: { rating10: number; size?: string; gapClass?: string }) {
    const rating5 = Math.max(0, Math.min(10, rating10)) / 2
    const stars = Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating5 - i))
        return <PartialStar key={i} fillPercent={fill * 100} size={size} />
    })
    return <div className={`flex items-center ${gapClass}`}>{stars}</div>
}

export function CardCasino({ casino, onClick }: { casino: any; onClick?: (url: string) => void }) {
    return (
        <Card
            key={casino.rank}
            className={`bg-gray-900 border-gray-800 transition-all duration-200 relative overflow-hidden min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ${casino.isTopChoice
                ? "ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
                : "hover:border-red-900/50 hover:shadow-lg hover:shadow-red-500/10"
                }`}
        >
            <CardContent className="p-4 h-full flex items-center">
                {casino.isTopChoice && (
                    <Badge className="absolute -top-1 -left-1 bg-yellow-400 text-black font-black text-xs px-3 py-1 z-10 rounded-sm">
                        NAJBOLJE CASINO
                    </Badge>
                )}
                {casino.rank === 2 && (
                    <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-black text-xs px-3 py-1 z-10 rounded-sm">
                        PREPORUČENO
                    </Badge>
                )}
                {casino.rank === 3 && (
                    <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-black text-xs px-3 py-1 z-10 rounded-sm">
                        TRENDOVI
                    </Badge>
                )}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage:
                                `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: "80px 80px",
                            backgroundRepeat: "repeat",
                        }}
                    />
                </div>
                {/* Mobile Layout (up to md) */}
                <div className="md:hidden w-full">
                    <div className="flex items-center mb-3">
                        {/* Logo + Rating: 40% */}
                        <div className="flex-shrink-0" style={{ width: '40%' }}>
                            <div className="bg-transparent rounded shadow-sm relative z-10 p-1">
                                <img
                                    src={casino.logo || "/placeholder.svg"}
                                    alt={`${casino.name} logo`}
                                    className="h-14 object-contain max-w-[140px] w-auto"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <StarRating rating10={casino.rating} size="h-3 w-3" gapClass="gap-1" />
                                <span className="text-white font-semibold text-2xl">{casino.rating.toFixed(1)}</span>
                            </div>
                        </div>
                        {/* Bonus: 60% */}
                        <div className="text-center" style={{ width: '60%' }}>
                            <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                                <span className="text-sm font-medium">Bonus Dobrodošlice</span>
                            </div>
                                            <div className="text-white font-bold text-lg leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                                                {casino.bonus}
                                            </div>
                                            {casino.dopBonus && (
                                                <div className="text-xs text-gray-300 mt-1">{casino.dopBonus}</div>
                                            )}
                        </div>
                    </div>
                    {/* Button - Center */}
                    <div className="text-center">
                        <Link
                            href={casino.url}
                            target="_blank"
                            rel="referrer noopener"
                            className={`inline-block font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg hover:opacity-90 transition-opacity ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-green-700 text-white"}`}
                            style={{
                                backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                                color: casino.isTopChoice ? "#000000" : "#ffffff",
                                textAlign: "center",
                                borderRadius: "0.375rem"
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            IGRAJ ODMAH
                        </Link>
                    </div>
                </div>
                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:block lg:hidden w-full">
                    <div className="flex items-center justify-between gap-4">
                        {/* Left Column: Rank + Casino Info */}
                        <div className="flex items-center gap-4 flex-shrink-0" style={{ width: "180px" }}>
                            {/* Rank */}
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg flex-shrink-0 ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"} relative z-10`}
                            >
                                {casino.rank}
                            </div>
                            {/* Casino Info Column */}
                            <div className="text-center flex-1">
                                <div className="bg-transparent rounded shadow-sm mb-2 mx-auto w-fit relative z-10 p-1">
                                    <img
                                        src={casino.logo || "/placeholder.svg"}
                                        alt={`${casino.name} logo`}
                                        className="h-14 object-contain max-w-[120px] w-auto"
                                    />
                                </div>
                                {/* Rating under logo */}
                                <div className="flex items-center justify-center gap-2">
                                    <StarRating rating10={casino.rating} size="h-4 w-4" />
                                    <span className="text-white font-semibold text-2xl">{casino.rating.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                        {/* Center Column: Bonus */}
                        <div className="text-center flex-shrink-0" style={{ width: "380px" }}>
                            <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                                <span className="text-sm font-medium">Bonus Dobrodošlice</span>
                            </div>
                            <div className="text-white font-bold text-lg leading-tight">{casino.bonus}</div>
                            {casino.dopBonus && (
                                <div className="text-xs text-gray-300 mt-1">{casino.dopBonus}</div>
                            )}
                        </div>
                        {/* Features Column */}
                        <div
                            className="flex flex-col gap-2 flex-1 min-h-[80px] justify-center"
                            style={{ maxWidth: "180px" }}
                        >
                            {casino.features.map((feature: string, index: number) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="border-red-900/70 text-gray-300 bg-red-950 text-xs px-2 py-1 text-center justify-center w-full relative z-10 font-bold"
                                >
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                        {/* Right Column: Button */}
                        <div className="flex-shrink-0" style={{ width: "120px" }}>
                            <Link
                                href={casino.url}
                                target="_blank"
                                rel="referrer noopener"
                                className={`inline-block font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-green-700 text-white"}`}
                                style={{
                                    backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                                    color: casino.isTopChoice ? "#000000" : "#ffffff",
                                    textAlign: "center",
                                    borderRadius: "0.375rem"
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                IGRAJ ODMAH
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Desktop Layout (lg and up) */}
                <div className="hidden lg:block w-full">
                    <div className="flex items-center justify-between gap-6">
                        {/* Left Column: Rank + Casino Info */}
                        <div className="flex items-center gap-6 flex-shrink-0" style={{ width: "240px" }}>
                            {/* Rank */}
                            <div
                                className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl flex-shrink-0 ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"} relative z-10`}
                            >
                                {casino.rank}
                            </div>
                            {/* Casino Info Column */}
                            <div className="text-center flex-1">
                                <div className="bg-transparent rounded shadow-sm mb-2 mx-auto w-fit relative z-10 p-1">
                                    <img
                                        src={casino.logo || "/placeholder.svg"}
                                        alt={`${casino.name} logo`}
                                        className="h-24 object-contain max-w-[200px] w-auto"
                                    />
                                </div>
                                {/* Rating under logo */}
                                <div className="flex items-center justify-center gap-3">
                                    <StarRating rating10={casino.rating} size="h-5 w-5" />
                                    <span className="text-white font-semibold text-4xl">{casino.rating.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                        {/* Center Column: Bonus */}
                        <div className="text-center flex-shrink-0" style={{ width: "400px" }}>
                            <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                                <span className="text-xl font-medium">Bonus Dobrodošlice</span>
                            </div>
                            <div className="text-white font-bold shadow-xl leading-tight text-2xl">{casino.bonus}</div>
                            {casino.dopBonus && (
                                <div className="text-sm text-gray-300 mt-2">{casino.dopBonus}</div>
                            )}
                        </div>
                        {/* Features Column */}
                        <div
                            className="flex flex-col gap-3 flex-1 min-h-[100px] justify-center"
                            style={{ maxWidth: "180px" }}
                        >
                            {casino.features.map((feature: string, index: number) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="border-red-900/70 text-gray-300 bg-red-950 text-sm px-2 py-1 text-center justify-center w-full relative z-10 font-bold"
                                >
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                        {/* Right Column: Button */}
                        <div className="flex-shrink-0" style={{ width: "140px" }}>
                            <Link
                                href={casino.url}
                                target="_blank"
                                rel="referrer noopener"
                                className={`inline-block font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-green-700 text-white"}`}
                                style={{
                                    backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                                    color: casino.isTopChoice ? "#000000" : "#ffffff",
                                    textAlign: "center",
                                    borderRadius: "0.375rem"
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                IGRAJ ODMAH
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
