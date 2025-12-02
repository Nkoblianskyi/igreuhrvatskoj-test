"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="cookie-banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Close button - mobile */}
            <button
              onClick={handleClose}
              className="lg:hidden absolute top-2 right-2 cookie-banner-close"
              aria-label="Zatvori"
            >
              <X className="w-4 h-4 cookie-banner-close-icon" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-1">
                <h3 className="cookie-banner-title mb-1">Koristimo kolačiće</h3>
                <p className="cookie-banner-text">
                  Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj web stranici i prikazali vam
                  relevantne oglase. Nastavljanjem pregledavanja prihvaćate našu upotrebu kolačića.{" "}
                  <Link href="/privacy-policy" className="cookie-banner-link">
                    Saznajte više u našoj Politici privatnosti
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto lg:flex-shrink-0">
              <button onClick={handleDecline} className="cookie-banner-button-decline">
                Odbij
              </button>
              <button onClick={handleAccept} className="cookie-banner-button-accept">
                Prihvati kolačiće
              </button>
            </div>

            {/* Close button - desktop */}
            <button
              onClick={handleClose}
              className="hidden lg:block cookie-banner-close flex-shrink-0"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5 cookie-banner-close-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
