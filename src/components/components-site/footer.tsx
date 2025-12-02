import { Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Site Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Najbolja Casina Hrvatska
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Vaš pouzdan vodič za najbolja casina u Hrvatskoj. Ocjenjujemo i rangiramo samo licencirane i sigurne operatere.
            </p>
          </div>

          {/* Navigation
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Avaliações de Casinos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>  */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Organization Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
              >
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
              >
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                  <Image src="/pbsvi.svg" alt="pbsvi" fill className="object-contain" />
                </div>
              </Link>

              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
              >
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                  <Image src="/hupis.png" alt="hupis" fill className="object-contain" />
                </div>
              </Link>

              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
              >
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
                </div>
              </Link>

              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 bg-white rounded-lg p-2"
              >
                <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] ">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
            </div>
            {/* 18+ Badge */}
            <div className="flex justify-center">
              <div className="bg-red-600 text-white px-2 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
                18+
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © 2025 Najbolja Casina Hrvatska. Todos os direitos reservados. | Jogo Responsável
          </p>
        </div>
      </div>
    </footer>
  )
}
