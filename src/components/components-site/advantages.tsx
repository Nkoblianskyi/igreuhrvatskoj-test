import Image from "next/image"
import { Gift, CreditCard, Headphones } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Ekskluzivni bonusi",
      color: "text-yellow-400",
    },
    {
      icon: CreditCard,
      title: "Brza plaćanja",
      color: "text-yellow-400",
    },
    {
      icon: Headphones,
      title: "Podrška 24/7",
      color: "text-yellow-400",
    },
    {
      title: "Licencirano i sigurno",
      color: "text-red-400",
      image: "/flag.png",
    },
  ]

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-1 sm:gap-3 max-w-xs sm:max-w-2xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-4 sm:w-8 h-4 sm:h-8 mb-1 sm:mb-2">
                {advantage.image ? (
                  <Image
                    src={advantage.image || "/placeholder.svg"}
                    alt="Flag"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                ) : (
                  advantage.icon && <advantage.icon className={`h-4 sm:h-8 w-4 sm:w-8 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-xs sm:text-xs font-semibold text-white">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
