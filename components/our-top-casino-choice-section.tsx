"use client"

import { useState } from "react"
import { CasinoCard } from "@/components/casino-card"
import { casinoSites } from "@/data/casino-sites"

export function OurTopCasinoChoiceSection() {
  // For "Our Choice", we'll consistently pick the first site as the top recommendation.
  const [topSite] = useState(casinoSites[0])

  if (!topSite) {
    return null // Or display a placeholder if no sites are available
  }

  return (
    <section className="py-16 md:py-20 bg-black/80 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Our Top Casino Pick</h2>
        <div className="flex justify-center">
          {/* Render the CasinoCard for the top site, ensuring it gets the rank 1 styling */}
          <CasinoCard site={topSite} rank={1} />
        </div>
      </div>
    </section>
  )
}
