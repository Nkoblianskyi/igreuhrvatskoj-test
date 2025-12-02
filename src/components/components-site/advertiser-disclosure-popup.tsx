"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">OGLAŠIVAČKA OBJAVA</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-tech-white hover:bg-tech-white/20 border border-tech-gold"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-tech-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                KAKO ZARAĐUJEMO NOVAC
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Najbolje Hrvatske Kladionice je neovisna stranica za usporedbu koja pomaže korisnicima pronaći najbolje
                kladionice u Hrvatskoj. Možemo primiti naknadu kada kliknete na linkove za kladionice prikazane na našoj
                web stranici.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                NAŠA OBVEZA PREMA VAMA
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Ova naknada ne utječe na naše rangiranje, recenzije ili preporuke. Naš uredničk tim održava potpunu
                neovisnost u evaluaciji kladionica na temelju faktora kao što su:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Licenca i regulacija</li>
                <li>Mjere sigurnosti i zaštite</li>
                <li>Kvote i tržišta klađenja</li>
                <li>Bonusi dobrodošlice i promocije</li>
                <li>Kvaliteta korisničke podrške</li>
                <li>Načini plaćanja i brzine isplate</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TRANSPARENTNOST</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Vjerujemo u potpunu transparentnost s našim korisnicima. Sve kladionice prikazane na našoj platformi su
                jasno označene, i preporučujemo samo operatere koji su licencirani i regulirani u Hrvatskoj ili drugim
                uglednim jurisdikcijama.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">VAŠA ODGOVORNOST</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Iako se trudimo pružiti točne i ažurirane informacije, vaša je odgovornost provjeriti sve uvjete i
                odredbe izravno s operaterom kladionice prije klađenja. Uvijek se kladite odgovorno i u skladu sa svojim
                mogućnostima.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Samo hrvatski igrači | Kockanje može izazvati ovisnost — Igrajte sigurno.
          </p>
        </div>
      </div>
    </div>
  )
}
