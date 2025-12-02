"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">UVJETI I ODREDBE</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">UVJETI I ODREDBE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Korištenjem Najboljih Hrvatskih Kladionica, slažete se poštovati i biti vezani sljedećim uvjetima i
                odredbama. Ovi uvjeti se primjenjuju na sve korisnike naše web stranice i usluga.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">DOBNA OGRANIČENJA</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Morate imati najmanje 18 godina za korištenje ove web stranice. Ozbiljno shvaćamo provjeru dobi i
                promičemo odgovorno klađenje. Ako imate manje od 18 godina, molimo odmah napustite ovu web stranicu.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">ODGOVORNO KLAĐENJE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Obvezujemo se promicati odgovorno klađenje. Molimo zapamtite:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Kladite se samo s novcem koji si možete priuštiti izgubiti</li>
                <li>Postavite granice vremena i troškova prije početka</li>
                <li>Nikada ne jurite svoje gubitke</li>
                <li>Pravite redovite pauze od klađenja</li>
                <li>Potražite pomoć ako klađenje postane problem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TOČNOST INFORMACIJA</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Iako se trudimo pružiti točne i ažurirane informacije o kladionicama, bonusima i promocijama, ne možemo
                jamčiti točnost cijelog sadržaja. Uvjeti i odredbe mogu se promijeniti bez prethodne najave.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                LINKOVI TREĆIH STRANA
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Naša web stranica sadrži linkove na kladionice trećih strana. Nismo odgovorni za sadržaj, uvjete ili
                prakse tih vanjskih stranica. Uvijek provjerite njihove uvjete i odredbe prije korištenja.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                OGRANIČENJE ODGOVORNOSTI
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Najbolje Hrvatske Kladionice neće biti odgovorne za bilo kakvu izravnu, neizravnu, slučajnu ili
                posljedičnu štetu koja proizlazi iz vašeg korištenja ove web stranice ili informacija sadržanih u njoj.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">POMOĆ I PODRŠKA</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Ako trebate pomoć za ovisnost o kockanju, molimo kontaktirajte:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>
                  <strong>Porezna uprava:</strong> www.porezna-uprava.hr
                </li>
                <li>
                  <strong>HZJZ:</strong> www.hzjz.hr
                </li>
                <li>
                  <strong>Plava linija:</strong> 01 4833 888
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Primjenjuju se uvjeti i odredbe | Igrajte odgovorno
          </p>
        </div>
      </div>
    </div>
  )
}
