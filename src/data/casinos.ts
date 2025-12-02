export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  dopBonus?: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.8,
    bonus: "100% do 600€ + 200 Besplatnih Vrtnji",
    dopBonus: "",
    features: ["Tjedni Cashback", "Besplatne Vrtnje", "Brza isplata"],
    isTopChoice: true,
    url: "https://qualityboost.top/4cPkdZPR",
  },
  {
    rank: 2,
    name: "BillyBets",
    logo: "/billybets.webp",
    rating: 9.5,
    bonus: "100% do 500€ + 200 Besplatnih Vrtnji ",
    dopBonus: "",
    features: ["Reload bonus", "Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/93mKYgt5",
  },
  {
    rank: 3,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 9.3,
    bonus: "100% do 500€ + 200 Besplatnih Vrtnji",
    dopBonus: "",
    features: ["Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/3VCrr6mB",
  },
  {
    rank: 4,
    name: "Winrolla",
    logo: "/winrolla.webp",
    rating: 9.1,
    bonus: "100% do 200€ + 50 Besplatnih Vrtnji",
    dopBonus: "",
    features: ["Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/4cPkdZPR",
  },
  {
    rank: 5,
    name: "betibet",
    logo: "/betibet.svg",
    rating: 9.0,
    bonus: "100% do 200€ + 50 Besplatnih Vrtnji",
    dopBonus: "",
    features: ["Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/4cPkdZPR",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
