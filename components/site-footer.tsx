import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, Dices, Shield, Award, Users } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-linear-to-b from-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Conteúdo principal do rodapé */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Seção da marca */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight uppercase">Igre u Hrvatskoj</span>
                <span className="text-sm text-emerald-400 font-medium">Vaš pouzdani partner za  casine</span>
              </div>
            </Link>
            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              Najdetaljnija i najpouzdanija platforma u Hrvatskoj za recenzije casina. Nudimo stručne recenzije, ekskluzivne bonuse i nepristrane preporuke za sigurno i odgovorno igranje.
            </p>
            {/* Glavne značajke */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Licenciado & Seguro</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <Award className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium">Avaliações de especialistas</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                <Users className="h-5 w-5 text-red-400" />
                <span className="text-sm font-medium">Foco no jogador</span>
              </div>
            </div>
          </div>
          {/* Links rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Links rápidos
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-emerald-500 to-amber-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/safe-play", label: "Jogo responsável" },
                { href: "/privacy-policy", label: "Privacidade" },
                { href: "/cookie-policy", label: "Cookies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-emerald-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Seção de jogo responsável */}
        <div className="bg-linear-to-r from-zinc-800/70 to-zinc-700/50 rounded-2xl p-8 mb-12 border border-zinc-600/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-red-600 p-3 rounded-full">
                <span className="text-white font-bold text-lg">18+</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Compromisso com o jogo responsável</h3>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Defendemos o jogo responsável. Todos os cassinos apresentados são apenas para maiores de 18 anos. Jogar deve ser divertido, nunca uma solução financeira.
            </p>
          </div>
          {/* Organizações */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link href="https://www.hupis.hr/klok" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
              </div>
            </Link>
            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px]">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>
            <Link href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-black rounded px-2 py-1">
                <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Se você ou alguém que conhece tem problemas com jogos, procure ajuda imediatamente. Estas organizações oferecem suporte gratuito e confidencial. Lembre-se: jogar deve ser sempre divertido, nunca uma forma de ganhar dinheiro.
          </p>
        </div>
      </div>
      {/* Seção inferior */}
      <div className="border-t border-zinc-700/50 pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Aviso legal */}
          <div className="flex items-start gap-3 max-w-3xl">
            <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Igre u Hrvatskoj pruža informacije samo u zabavne svrhe. Možemo primati provizije od prikazanih operatera. Sadržaj je namijenjen isključivo osobama starijim od 18 godina koje borave u Hrvatskoj. Igranje nosi rizike - igrajte odgovorno.
            </p>
          </div>
          {/* Direitos autorais */}
          <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span>Jogue com responsabilidade</span>
            </div>
            <div className="hidden lg:block w-px h-4 bg-zinc-600"></div>
            <span>© 2025 Igre u Hrvatskoj. Sva prava pridržana.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
