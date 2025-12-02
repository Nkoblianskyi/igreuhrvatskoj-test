import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Pravila privatnosti | igreuhrvatskoj",
  description: "Saznajte kako igreuhrvatskoj.com štiti i obrađuje vaše osobne podatke na siguran način.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {" "}
      {/* Adjusted background color */}
      <SiteHeader />
  <section className="pt-36 pb-16 grow">
        {" "}
        {/* Adjusted padding */}
        <div className="container mx-auto px-6 max-w-4xl">
          {" "}
          {/* Adjusted padding */}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-10 text-center">
            Pravila privatnosti
          </h1>
          {/* Unique heading, adjusted color and margin */}
          <div className="space-y-8 text-gray-350 leading-relaxed">
            {" "}
            {/* Adjusted spacing and text color */}
            <p className="text-sm text-gray-550">Zadnje ažuriranje: Studeni 2025</p>
            <p>
              Na igreuhrvatskoj.com zaštita vaše privatnosti je naš prioritet. Ova pravila privatnosti objašnjavaju kako prikupljamo, koristimo i štitimo vaše podatke tijekom korištenja naše web stranice.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">1. Koje podatke prikupljamo?</h2>
            <p>Možemo prikupljati sljedeće vrste podataka:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Podaci o korištenju:</strong> Automatski prikupljamo anonimne podatke o vašem korištenju stranice (posjećene stranice, vrijeme provedeno, tip uređaja). Ovi podaci služe za analizu i poboljšanje funkcionalnosti.
              </li>
              <li>
                <strong>Kolačići:</strong> Koristimo kolačiće za poboljšanje korisničkog iskustva. Više informacija pročitajte u Pravilima o kolačićima.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">2. Kako koristimo vaše podatke?</h2>
            <p>Vaše podatke koristimo za:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Osiguranje ispravnog rada web stranice igreuhrvatskoj.com.</li>
              <li>Poboljšanje sadržaja, funkcionalnosti i korisničkog iskustva.</li>
              <li>Analizu prometa i ponašanja korisnika radi optimizacije usluga.</li>
              <li>Zaštitu sigurnosti i integriteta web stranice.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">3. Dijeljenje podataka</h2>
            <p>
              Vaše osobne podatke ne prodajemo niti dijelimo s trećim stranama. Anonimne, agregirane podatke možemo dijeliti s partnerima radi analize, ali ti podaci ne omogućuju identifikaciju korisnika. Podatke možemo otkriti samo ako je to zakonski potrebno ili radi zaštite naših prava.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">4. Sigurnost podataka</h2>
            <p>
              Primjenjujemo tehničke i organizacijske mjere za zaštitu vaših podataka od neovlaštenog pristupa, izmjene ili gubitka. Ipak, nijedna metoda prijenosa ili pohrane nije 100% sigurna, pa ne možemo jamčiti apsolutnu sigurnost.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">5. Vaša prava</h2>
            <p>
              Ovisno o vašoj lokaciji, imate pravo na pristup, ispravak ili brisanje svojih podataka. Većinu podataka možete kontrolirati putem postavki preglednika ili našeg bannera za kolačiće.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">6. Promjene pravila privatnosti</h2>
            <p>
              Pravila privatnosti povremeno se ažuriraju. O svim promjenama bit ćete obaviješteni na ovoj stranici.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
