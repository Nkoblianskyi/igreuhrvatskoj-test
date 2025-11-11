export interface CasinoSite {
  name: string
  url: string
  type: string
  bonus: string
  dopbonus?: string // Optional field
  logo: string
  rating: number
  votes: number
  usersCount: number
  trending: boolean
}

export const casinoSites: CasinoSite[] = [
  {
    name: "SuperSport",
    url: "https://www.supersport.hr/",
    type: "BONUS DOBRODOŠLICE",
    bonus: "Do 100€",
    logo: "/supersport.png",
    rating: 9.7,
    votes: 4691,
    usersCount: 1250,
    trending: true,
  },
  {
    name: "Favbet",
    url: "https://www.favbet.hr/",
    type: "BONUS DOBRODOŠLICE",
    bonus: "Do 300€",
    dopbonus: "+ 30€ Oklade Bez Rizika",
    logo: "/favbet.svg",
    rating: 9.5,
    votes: 3947,
    usersCount: 1200,
    trending: true,
  },
  {
    name: "PSK",
    url: "https://www.psk.hr/",
    type: "BONUS DOBRODOŠLICE",
    bonus: "Dvaput Je Dvaput 2x100€",
    logo: "/psk.webp",
    rating: 9.4,
    votes: 6184,
    usersCount: 1300,
    trending: true,
  },
  {
    name: "Germania Sport",
    url: "https://www.germaniasport.hr/",
    type: "CASH OUT NA KLAĐENJU UŽIVO",
    bonus: "Cash Out na Klađenju Uživo",
    logo: "/germania.svg",
    rating: 9.1,
    votes: 5916,
    usersCount: 1100,
    trending: true,
  },


]
