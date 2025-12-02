"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentContextType {
  consent: CookieConsent
  showBanner: boolean
  acceptAll: () => void
  declineAll: () => void
  savePreferences: (preferences: CookieConsent) => void
  toggleBanner: (show: boolean) => void
}

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [showBanner, setShowBanner] = useState<boolean>(true)

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem("cookieConsentData") // Changed localStorage key
      if (storedConsent) {
        try {
          const parsedConsent = JSON.parse(storedConsent)
          if (typeof parsedConsent === "object" && parsedConsent !== null) {
            setConsent({
              necessary: parsedConsent.necessary ?? true,
              analytics: parsedConsent.analytics ?? false,
              marketing: parsedConsent.marketing ?? false,
            })
            setShowBanner(false)
          } else {
            localStorage.removeItem("cookieConsentData") // Changed localStorage key
          }
        } catch (error) {
          console.error("Invalid cookie consent data in localStorage:", error) // Changed error message
          localStorage.removeItem("cookieConsentData") // Changed localStorage key
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error) // Changed error message
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    try {
      setConsent(newConsent)
      localStorage.setItem("cookieConsentData", JSON.stringify(newConsent)) // Changed localStorage key
    } catch (error) {
      console.error("Error saving to localStorage:", error) // Changed error message
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveConsent(allAccepted)
    setShowBanner(false)
  }

  const declineAll = () => {
    saveConsent({ ...defaultConsent })
    setShowBanner(false)
  }

  const savePreferences = (preferences: CookieConsent) => {
    saveConsent({ ...preferences, necessary: true })
    setShowBanner(false)
  }

  const toggleBanner = (show: boolean) => {
    setShowBanner(show)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        declineAll,
        savePreferences,
        toggleBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider") // Changed error message
  }
  return context
}
