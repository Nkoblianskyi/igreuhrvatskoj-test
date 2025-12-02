"use client"


import { BettingSite, bettingSitesSecond } from "@/data/mock-data"
import { BettingSiteCardSecond } from "./betting-site-card-second"

export function BettingSitesListSecond() {
  return (
    <section>
      <div className="w-full max-w-[1150px] mx-auto bg-black p-6 lg:p-10 rounded-lg mb-4 mt-10">
        <h2 className="text-xl lg:text-3xl font-bold text-center text-white">
          OTKRIJTE NAŠE NAJBOLJE <span style={{ color: "#FF0000" }}>CASINO PONUDE</span>
        </h2>
      </div>
      <div className="space-y-1 w-full max-w-[1150px] mx-auto">
        {bettingSitesSecond.map((site: BettingSite, index: number) => (
          <div key={site.id} className="w-full">
            <BettingSiteCardSecond site={site} rank={index + 1} isGoldenHighlight={index === 0} />
          </div>
        ))}
      </div>
    </section>
  )
}
