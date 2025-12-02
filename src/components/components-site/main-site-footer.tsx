"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users, Zap, Target } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-black text-white py-16 mt-20 border-t-4 border-yellow-400 relative">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bgg opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-black flex items-center justify-center transition-all duration-300">
                  <Image src="/favicon.ico" alt="Hrvatska Zastava" width={32} height={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-croatian-red"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-croatian-blue"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tech-heading">
                  <span className="text-croatian-red">KLAĐENJE</span>
                  <span className="text-white"> NAJBOLJE</span>
                  <span className="text-croatian-blue"> STRANICE</span>
                  <span className="text-white"> HRVATSKA</span>
                </h3>
                <p className="text-sm text-gray-400 tech-subheading">VODEĆA ANALIZA KLAĐENJA U HRVATSKOJ</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 tech-body">
              Napredna algoritmička analiza najboljih hrvatskih platformi za klađenje. Pružamo sveobuhvatne tehničke
              analize, provjeru podataka u stvarnom vremenu i stručne preporuke za optimizaciju vašeg iskustva klađenja.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 bg-white/5 p-2 border border-yellow-400/20">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="tech-subheading">50.000+ PROVJERENIH KORISNIKA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 border border-croatian-red/20">
                <Award className="w-4 h-4 text-croatian-red" />
                <span className="tech-subheading">CERTIFICIRANI STRUČNJAK</span>
              </div>
            </div>
          </div>


          {/* Trust & Safety */}
          <div>
            <h4 className="text-lg font-bold mb-6 tech-heading flex items-center gap-2 text-croatian-red">
              <Shield className="w-5 h-5" />
              SIGURNOSNI PROTOKOL
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Shield className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">LICENCIRANO & REGULIRANO</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-croatian-red/20">
                <Clock className="w-4 h-4 text-croatian-red" />
                <span className="text-sm tech-subheading">SIGURNO & PROVJERENO</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Award className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">POTVRĐENO OD STRUČNJAKA</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-croatian-red/20">
                <Zap className="w-4 h-4 text-croatian-red" />
                <span className="text-sm tech-subheading">AŽURIRANJA U STVARNOM VREMENU</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-10 mb-10">
          <h3 className="text-base font-bold mb-6 text-yellow-400 text-center">Partneri za Odgovorno Klađenje</h3>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <Link href="https://www.hupis.hr/klok" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-white rounded px-2 py-1">
                <Image src="/hupis.png" alt="HUPIS" fill className="object-contain p-2" />
              </div>
            </Link>
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-white rounded">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain p-2" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-white rounded px-2 py-1">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>

            <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-white rounded">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain p-2" />
              </div>
            </Link>

            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] bg-white rounded">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain p-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 pt-8 text-center border-croatian-red/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-tech-gray-400 text-sm tech-body">
              © 2025 Najbolje Kladionice u Hrvatskoj | SVA PRAVA PRIDRŽANA
            </p>
            <div className="flex items-center gap-6 text-sm text-tech-gray-400">
              <span className="tech-subheading">RAZVIJENO U HRVATSKOJ</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-tech-black bg-croatian-red"></div>
                <div className="w-4 h-3 bg-croatian-white border border-tech-black"></div>
                <div className="w-4 h-3 border border-tech-black bg-croatian-blue"></div>
              </div>
            </div>
          </div>
          <div className="border-2 border-croatian-red p-6 relative bg-croatian-red/10">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-croatian-red"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-croatian-red"></div>

            <p className="font-bold text-sm mb-2 tech-heading text-croatian-red">
              🔞 18+ | SAMO HRVATSKI IGRAČI | KLAĐENJE MOŽE UZROKOVATI OVISNOST — IGRAJTE ODGOVORNO
            </p>
            <p className="text-xs tech-body text-croatian-red">
              AKO VI ILI NETKO KOGA POZNAJETE IMA PROBLEM S KOCKANJEM, POTRAŽITE POMOĆ.
              <Link href="/responsible-gaming" className="underline hover:text-tech-white ml-2 tech-subheading">
                DOBITI PODRŠKU
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
