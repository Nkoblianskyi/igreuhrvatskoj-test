import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Pravila o kolačićima | igreuhrvatskoj",
  description: "Saznajte kako igreuhrvatskoj.com koristi kolačiće i kako možete upravljati svojim postavkama privatnosti.",
}

export default function CookiePolicy() {
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
            Pravila o korištenju kolačića
          </h1>
          {/* Unique heading, adjusted color and margin */}
          <div className="space-y-8 text-gray-350 leading-relaxed">
            {" "}
            {/* Adjusted spacing and text color */}
            <p className="text-sm text-gray-550">Zadnje ažuriranje: Studeni 2025</p>
            <p>
              Ova pravila o kolačićima objašnjavaju kako igreuhrvatskoj.com koristi kolačiće i slične tehnologije za prepoznavanje korisnika tijekom posjeta našoj web stranici. Ovdje saznajte što su kolačići, zašto ih koristimo i kako možete upravljati svojim postavkama.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">1. Što su kolačići?</h2>
            <p>
              Kolačići su male tekstualne datoteke koje se pohranjuju na vaše računalo ili mobilni uređaj kada posjetite web stranicu. Oni omogućuju ispravno funkcioniranje stranice, analizu korištenja i poboljšanje korisničkog iskustva.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">2. Kako koristimo kolačiće</h2>
            <p>Na igreuhrvatskoj.com koristimo kolačiće radi:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Neophodni kolačići:</strong> Omogućuju osnovne funkcije web stranice i sigurnu prijavu.
              </li>
              <li>
                <strong>Analitički kolačići:</strong> Prikupljaju anonimne podatke o korištenju stranice radi poboljšanja sadržaja i funkcionalnosti.
              </li>
              <li>
                <strong>Funkcionalni kolačići:</strong> Pamte vaše postavke (jezik, regija) i omogućuju personalizirano iskustvo.
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">3. Kolačići trećih strana</h2>
            <p>
              Osim vlastitih kolačića, možemo koristiti i kolačiće trećih strana za analitiku, oglašavanje i poboljšanje usluga. Te treće strane mogu koristiti podatke o vašim posjetima za prikaz relevantnih oglasa i statistika.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">4. Upravljanje kolačićima</h2>
            <p>
              Sami odlučujete želite li prihvatiti ili odbiti kolačiće. Postavke možete promijeniti u svom pregledniku. Odbijanje kolačića može ograničiti funkcionalnost stranice.
            </p>
            <h2 className="text-2xl font-bold text-gold-450 pt-6">5. Promjene pravila</h2>
            <p>
              Pravila o kolačićima povremeno se ažuriraju. O svim promjenama bit ćete obaviješteni na ovoj stranici.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
