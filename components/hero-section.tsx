"use client"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("en-US", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="bg-black/80 relative text-white overflow-hidden h-[300px] flex items-center justify-center">
      {/* Fixed height to 300px and centered content */}
      {/* Main content - Centered and more prominent */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-8">
        {/* Adjusted max-width and vertical padding for compactness */}
        <h1
          className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight drop-shadow-xl animate-fade-in-up bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #c01212 0%, #c01212  33%, #FFFFFF 33%, #FFFFFF 66%, #1400a7 66%, #1400a7 100%)",
          }}
        >
          OTKRIJTE NAJBOLJE CASINE U HRVATSKOJ
        </h1>
        <p
          className="text-sm md:text-base text-gray-150 max-w-2xl mx-auto font-light mb-6 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Vaš izvor za detaljne recenzije, sigurne i licencirane casine te ekskluzivne bonuse za hrvatske igrače.
        </p>
        {/* Last Updated Date */}
        <div
          className="mb-4 text-xs md:text-sm text-gold-350 font-semibold animate-fade-in-up animate-pulse"
          style={{ animationDelay: "400ms" }}
        >
          Ocjene ažurirane: {lastUpdated}
        </div>
        {/* Responsible gambling message */}
        <div className="text-center mt-4 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <p className="text-sm md:text-base text-gray-100 font-medium drop-shadow-md">
            Igrajte odgovorno. Primjenjuju se uvjeti korištenja.
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-amber-300 hover:text-amber-200 hover:underline font-semibold transition-all duration-300 hover:scale-105"
            >
              Informacije o oglašivaču
            </button>
            <span className="text-gray-300 mx-1">|</span>
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="text-amber-300 hover:text-amber-200 hover:underline font-semibold transition-all duration-300 hover:scale-105"
            >
              Samo za 18+
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
