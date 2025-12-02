"use client"

import { BettingSite, bettingSites } from "@/data/mock-data"
import { BettingSiteCard } from "./betting-site-card"


export function BettingSitesList() {
  return (
    <div className="space-y-1 w-full max-w-[1150px] mx-auto">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <BettingSiteCard site={site} rank={index + 1} />
        </div>
      ))}
    </div>
  )
}
