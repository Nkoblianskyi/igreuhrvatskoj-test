export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
  votes: number
  welcomeOffer?: string
  terms?: string
  link: string
  id: number
}

export type BettingSite = Casino

export const casinos: Casino[] = [
  {
    id: 1,
    rank: 1,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.8,
    bonus: "Bonus na Prvu Uplatu 100% do 100€",
    welcomeOffer: "+ Tjedni Bonus za Dopunu 50% do 500€",
    features: ["Brza Isplata", "Mobilna Aplikacija", "15% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/xf5nknpc",
    link: "https://qualityboost.top/xf5nknpc",
    votes: 8647,
    terms: "18+ | Primjenjuju se Uvjeti i Odredbe | Igrajte Odgovorno",
  },
  {
    id: 2,
    rank: 2,
    name: "Billybets",
    logo: "/billybets.webp",
    rating: 9.5,
    bonus: "Bonus na Prvu Uplatu 100% do 100€",
    welcomeOffer: " + Cashback Bonus 10% do 500€",
    features: ["Mobilni Kazino", "Ekskluzivne Igre", "Sportsko Klađenje"],
    url: "https://qualityboost.top/wfSKxrtY",
    link: "https://qualityboost.top/wfSKxrtY",
    votes: 7251,
    terms: "18+ | Primjenjuju se Uvjeti i Odredbe | Igrajte Odgovorno",
  },
  {
    id: 3,
    rank: 3,
    name: "Mr.Pacho",
    logo: "/mrpacho.svg",
    rating: 9.3,
    bonus: "Bonus na Prvu Uplatu 100% do 100€",
    welcomeOffer: "",
    features: ["Kripto Plaćanje", "Tjedni Bonus", "Podrška Uživo"],
    url: "https://qualityboost.top/yR7NqMxF",
    link: "https://qualityboost.top/yR7NqMxF",
    votes: 6291,
    terms: "18+ | Primjenjuju se Uvjeti i Odredbe | Igrajte Odgovorno",
  },
  {
    id: 4,
    rank: 4,
    name: "Betibet",
    logo: "/winrolla.webp",
    rating: 9.3,
    bonus: "100% do 100€",
    welcomeOffer: "",
    features: ["Brza Isplata", "VIP Program", "Besplatne Vrtnje"],
    url: "https://qualityboost.top/xf5nknpc",
    link: "https://qualityboost.top/xf5nknpc",
    votes: 5372,
    terms: "18+ | Primjenjuju se Uvjeti i Odredbe | Igrajte Odgovorno",
  },
  {
    id: 5,
    rank: 5,
    name: "Spinstar",
    logo: "/mrpacho.svg",
    rating: 9.1,
    bonus: "100% do 100€",
    welcomeOffer: "",
    features: ["Niski Uvjeti", "Bonus za Ponovno Punjenje", "Chat 24/7"],
    url: "https://qualityboost.top/xf5nknpc",
    link: "https://qualityboost.top/xf5nknpc",
    votes: 4928,
    terms: "18+ | Primjenjuju se Uvjeti i Odredbe | Igrajte Odgovorno",
  },
]

export const bettingSites: BettingSite[] = casinos

export const bettingSitesSecond: BettingSite[] = casinos

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
