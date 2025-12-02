"use client"

import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Siječanj",
      "Veljača",
      "Ožujak",
      "Travanj",
      "Svibanj",
      "Lipanj",
      "Srpanj",
      "Kolovoz",
      "Rujan",
      "Listopad",
      "Studeni",
      "Prosinac",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-6 mt-[70px]">
        <div className="bg-white/70 shadow-lg max-w-[1115px] mx-auto rounded-lg">
          <div className="relative px-4 py-4">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1
                  className="text-2xl xl:text-3xl font-bold mb-3 leading-tight uppercase"
                  style={{ color: "#C8102E" }}
                >
                  Najbolje <span style={{ color: "#0033A0" }}>Kladionice</span> u Hrvatskoj
                </h1>

                <div className="text-center mb-2">
                  <p className="text-xs font-bold" style={{ color: "#006600" }}>
                    Ažurirano: {getCurrentMonthYear()}
                  </p>
                </div>

                <h2 className="text-lg xl:text-lg font-medium mb-2 text-black">Stručne Analize & Ocjene</h2>

                <div className="w-20 h-0.5 mx-auto mb-4" style={{ backgroundColor: "#006600" }}></div>

                <p className="text-sm text-black max-w-3xl mx-auto leading-relaxed mb-4">
                  Postoje brojne kladionice u Hrvatskoj koje nude sigurne i atraktivne opcije klađenja. Najbolje
                  kladionice karakteriziraju jednostavne platforme, profitabilne kvote i širok raspon opcija za
                  klađenje.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-xs font-bold tech-subheading">100% Legalno</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Award className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">Visoki Bonusi</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <TrendingUp className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">Brze Isplate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div
        className="lg:hidden mb-1"
        style={{ backgroundImage: 'url("/bg.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-white/60 shadow-lg max-w-[1150px] mx-auto rounded-lg pt-[50px]">
          <div className="px-4 py-2 text-center">
            <h1 className="text-sm md:text-2xl font-bold uppercase" style={{ color: "#C8102E" }}>
              Najbolje <span style={{ color: "#0033A0" }}>Kladionice</span> u Hrvatskoj
            </h1>

            <div className="mb-1 text-center">
              <p className="text-xs font-bold" style={{ color: "#006600" }}>
                {getCurrentMonthYear()}
              </p>
            </div>

            <div className="w-16 h-0.5 mx-auto mb-1" style={{ backgroundColor: "#006600" }}></div>

            {/* Trust Indicators */}
            <div className="mt-[4px]">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Legalno</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Visoki Bonusi</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Brze Isplate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
