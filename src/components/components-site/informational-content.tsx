"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                Vaš Konačni Vodič za <span className="text-brand-accent">Hrvatske Kladionice</span>
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Odabir savršene kladionice zahtijeva stručno znanje i detaljnu analizu. Naš sveobuhvatni vodič eliminira
                nagađanja s profesionalnim analizama i detaljnim usporedbama.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">
                  Pronađite Svog Idealnog Partnera za Klađenje
                </h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Svaki igrač ima različite preferencije i specifične potrebe. Započnite određivanjem koje sportske
                    discipline i tržišta klađenja vas najviše zanimaju, a zatim provjerite nude li vaši odabrani
                    pružatelji sveobuhvatnu pokrivenost u tim kategorijama.
                  </p>
                  <p>
                    Osim toga, trebate pažljivo istražiti strukturu cijena i stope povrata svakog pružatelja. Poboljšane
                    kvote značajno povećavaju vaše potencijalne povrate i ukupnu uspješnost u klađenju.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Iskoristite Prilike za Bonuse</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Konkurentno okruženje današnjeg klađenja tjera pružatelje da kontinuirano poboljšavaju svoje
                    promotivne ponude kako bi privukli i zadržali vjerne klijente. Paketi dobrodošlice su se značajno
                    razvili i nude iznimnu vrijednost pridošlicama koji ovladaju umjetnošću strateške eksploatacije
                    bonusa.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Razumijte Hrvatska Pravila Igara</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Hrvatsko tržište igara na sreću djeluje pod strogim regulatornim okvirom osmišljenim za zaštitu
                    potrošača uz osiguravanje poštene igre na svim platformama. Licencirani operateri moraju poštovati
                    sveobuhvatne smjernice koje pokrivaju sve od financijske sigurnosti do zaštite podataka klijenata.
                  </p>
                  <p>
                    Ovaj regulatorni nadzor pruža mir hrvatskim igračima, znajući da njihove odabrane platforme
                    ispunjavaju najviše industrijske standarde.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-brand-accent">
                Zašto Odabrati Licencirane Hrvatske Kladionice?
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Licencirane hrvatske kladionice nude neusporedivu sigurnost i zaštitu potrošača. Uz strogi regulatorni
                  nadzor Porezne uprave, ove platforme jamče poštenu igru, sigurne transakcije i odgovorno klađenje.
                </p>
                <p>
                  Osim toga, hrvatski operateri nude lokaliziranu korisničku podršku, poznate načine plaćanja i
                  sveobuhvatnu pokrivenost hrvatskih sportskih disciplina uključujući nogomet, rukomet i košarku s
                  istaknutih hrvatskih događaja.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  OVAJ MATERIJAL JE ZAŠTIĆEN AUTORSKIM PRAVIMA. SVE USLUGE I KAMPANJE SU ISKLJUČIVO ZA HRVATSKE
                  DRŽAVLJANE S 18 GODINA ILI VIŠE.
                </p>
                <p className="text-red-200 text-xs">
                  MOGU SE PRIMIJENITI DODATNA OGRANIČENJA UKLJUČUJUĆI PROVJERU IDENTITETA, OGRANIČENJA LOKACIJE I
                  ZAHTJEVE ZA DRŽAVLJANSTVO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
