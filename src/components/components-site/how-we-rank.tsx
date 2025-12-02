"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { getTopCasino } from "@/data/casinos"
import { CardCasino } from "./card-casino"


export function HowWeRank() {
  const criteria = [
    {
      title: "Licenca & Sigurnost",
      description: "Ocjenjujemo samo casina s važećim licencama priznatih vlasti",
      weight: "25%",
    },
    {
      title: "Izbor igara",
      description: "Raznolikost i kvaliteta slotova, stolnih igara i opcija s djeliteljem uživo",
      weight: "20%",
    },
    {
      title: "Bonusi & Promocije",
      description: "Bonusi dobrodošlice, stalne promocije i pošteni uvjeti klađenja",
      weight: "20%",
    },
    {
      title: "Podrška korisnicima",
      description: "Dostupnost 24/7, vrijeme odgovora i kvaliteta podrške",
      weight: "15%",
    },
    {
      title: "Načini plaćanja",
      description: "Brze isplate, više opcija plaćanja i niske naknade",
      weight: "10%",
    },
    {
      title: "Korisničko iskustvo",
      description: "Dizajn web stranice, mobilna kompatibilnost i jednostavnost korištenja",
      weight: "10%",
    },
  ]

  const topCasino = getTopCasino()


  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Kako <span className="text-yellow-400">ocjenjujemo casina</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Naš tim stručnjaka koristi sveobuhvatan sustav ocjenjivanja kako bi procijenio sve aspekte online casina i osigurao najtočnije i najpouzdanije recenzije.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-900/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3">{criterion.description}</p>
                <Badge className="bg-red-600 text-white font-semibold text-xs md:text-sm">{criterion.weight}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Choice Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Naš <span className="text-yellow-400">glavni izbor</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-4">
            Nakon detaljnih testiranja i ocjenjivanja, ovo casino ističe se kao naša preporuka broj 1 za igrače iz Hrvatske.
          </p>
          <CardCasino casino={topCasino} />
        </div>
      </div>
    </section>
  )
}
