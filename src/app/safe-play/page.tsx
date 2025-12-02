import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, ShieldCheck, Scale, HandCoins, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Sigurna igra | igreuhrvatskoj",
  description: "Saznajte sve o odgovornom igranju i sigurnosti na igreuhrvatskoj.com. Pronađite korisne savjete i podršku.",
}

export default function SafePlayPage() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {" "}
      {/* Adjusted background color */}
      <SiteHeader />
      <section className="pt-36 pb-16 flex-grow">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto px-6 max-w-4xl">
          {" "}
          {/* Adjusted padding */}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center">
            Sigurna igra i odgovorno klađenje
          </h1>
          {/* Unique heading, adjusted color and margin */}
          <div className="space-y-9 text-gray-350 leading-relaxed">
            {" "}
            {/* Adjusted spacing and text color */}
            <p className="text-lg text-center max-w-2xl mx-auto">
              Na igreuhrvatskoj.com promičemo odgovorno klađenje. Klađenje treba biti zabava, a ne izvor financijskih problema.
            </p>
            <p className="text-lg text-center max-w-2xl mx-auto font-semibold text-gold-350">
              Važno: Stranica je namijenjena osobama starijima od 18 godina. Nikada ne ulažite više nego što si možete priuštiti izgubiti.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
              {" "}
              {/* Adjusted spacing */}
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <Lightbulb className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                {/* Adjusted icon size and margin */}
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Razumite rizike klađenja</h3>
                  <p className="text-sm">
                    Klađenje uvijek nosi financijski rizik. Dobitak nije zajamčen, a gubitak je dio igre. Igrajte isključivo radi zabave, a ne zarade.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <ShieldCheck className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                {/* Adjusted icon size and margin */}
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Postavite granice</h3>
                  <p className="text-sm">
                    Prije igre odredite budžet i držite ga se. Koristite limite za depozit, gubitak i vrijeme igranja koje nude casina.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <Scale className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Upravljajte vremenom</h3>
                  <p className="text-sm">
                    Pratite koliko dugo igrate. Radite pauze i izbjegavajte dugotrajno klađenje bez prekida.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <HandCoins className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                {/* Adjusted icon size and margin */}
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Ne jurite gubitke</h3>
                  <p className="text-sm">
                    Ne pokušavajte vratiti izgubljeni novac povećanjem uloga. To može dovesti do još većih gubitaka i financijskih problema.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <Clock className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Izbjegavajte klađenje pod utjecajem</h3>
                  <p className="text-sm">
                    Ne igrajte kada ste pod stresom, emotivno uznemireni ili pod utjecajem alkohola ili droga. Odluke donosite racionalno.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-850/70 p-8 rounded-lg border border-zinc-750 flex items-start gap-5">
                {" "}
                {/* Adjusted background, padding, border, and spacing */}
                <Users className="h-9 w-9 text-emerald-500 shrink-0 mt-2" />
                <div>
                  <h3 className="text-xl font-bold text-gold-450 mb-3">Potražite pomoć</h3>
                  <p className="text-sm">
                    Ako klađenje prestane biti zabava ili primijetite problem, obratite se stručnjacima. Postoje brojne organizacije za podršku.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
