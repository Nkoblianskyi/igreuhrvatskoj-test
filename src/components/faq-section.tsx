"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ Data - Unique answers
const faqItems = [
  {
    question: "Je li online kockanje legalno u Hrvatskoj?",
    answer:
      "Da, online kockanje je potpuno legalno u Hrvatskoj ako operateri posjeduju važeće licence od nadležnih regulatornih tijela. Na našoj stranici prikazujemo isključivo licencirane i strogo regulirane casine radi vaše sigurnosti i usklađenosti sa zakonima RH.",
  },
  {
    question: "Kako odabrati najbolji online casino?",
    answer:
      "Za odabir idealnog casina obratite pažnju na licencu, raznolikost igara, transparentne bonuse, jednostavne metode plaćanja i kvalitetnu korisničku podršku. Naše recenzije nude detaljnu analizu za lakši izbor.",
  },
  {
    question: "Kako funkcioniraju bonusi dobrodošlice i na što paziti?",
    answer:
      "Bonusi dobrodošlice su posebne promocije za nove igrače, najčešće uključuju podudaranje depozita ili besplatne vrtnje. Uvijek pažljivo pročitajte uvjete bonusa, posebno zahtjeve za odigravanje, prije nego što ga preuzmete.",
  },
  {
    question: "Jesu li moji osobni i financijski podaci sigurni?",
    answer:
      "Renomirani online casini koriste napredne tehnologije enkripcije (npr. SSL) za zaštitu vaših podataka. Biramo casine koji strogo poštuju sigurnosne standarde i politiku privatnosti, kako bi vaši podaci ostali zaštićeni.",
  },
  {
    question: "Što učiniti ako imate problem s kockanjem?",
    answer:
      "Ako vi ili netko vama blizak ima poteškoća s kockanjem, odmah potražite pomoć. Organizacije poput GamblingCare.hr i HUZIP nude besplatnu, povjerljivu podršku. Zalažemo se za odgovorno igranje.",
  },
  {
    question: "Mogu li igrati casino igre na mobitelu?",
    answer:
      "Naravno! Većina modernih online casina optimizirana je za mobilne uređaje, bilo putem aplikacije ili responzivne web stranice. Očekujte glatko i ugodno iskustvo na pametnim telefonima i tabletima.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-20 bg-black/80 text-white">
      {" "}
      {/* Adjusted background to be more transparent */}
      <div className="container mx-auto px-6 max-w-4xl">
        {" "}
        {/* Adjusted padding */}
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Često postavljana pitanja</h2>{" "}
        {/* Adjusted margin */}
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-emerald-700">
              {" "}
              {/* Adjusted border color */}
              <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-amber-300 hover:no-underline hover:text-amber-400 transition-colors duration-300">
                {" "}
                {/* Adjusted color and transition duration */}
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-150 text-base md:text-lg py-5">
                {" "}
                {/* Adjusted text color and padding */}
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
