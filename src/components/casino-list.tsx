"use client"

import { useState } from "react"
import { CasinoCard } from "@/components/casino-card"
import { casinoSites } from "@/data/casino-sites"

export function CasinoList() {
  const [sites] = useState(casinoSites)

  return (
    <section className="pt-6 md:pt-10 pb-10 md:pb-20 relative z-10 mx-auto bg-black/80">
      {/* Animated background with more visible effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient - REMOVED bg-gray-50 to make it transparent */}
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full space-y-2 md:space-y-4  max-w-[1200px] mx-auto">
          {sites.map((site, index) => (
            <CasinoCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
