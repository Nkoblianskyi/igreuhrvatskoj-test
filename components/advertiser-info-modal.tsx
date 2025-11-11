"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
      {" "}
      {/* Adjusted background opacity and padding */}
      <div className="relative w-full max-w-md bg-zinc-900 text-white rounded-lg shadow-xl p-5 md:p-8 border border-zinc-750">
        {" "}
        {/* Adjusted shadow, padding, and border */}
        <div className="flex items-center justify-between mb-4">
          {" "}
          {/* Adjusted margin */}
          <div className="flex items-center">
            <div className="bg-emerald-700 p-2 rounded-full mr-3">
              {" "}
              {/* Adjusted margin and border radius */}
              <Info className="h-4 w-4  text-white" /> {/* Adjusted icon size */}
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Important Advertiser Disclosure</h2>{" "}
            {/* Unique heading */}
          </div>
          <button onClick={onClose} className="text-gray-450 hover:text-white" aria-label="Close disclosure">
            {" "}
            {/* Unique label, adjusted text color */}
            <X className="h-6 w-6" /> {/* Adjusted icon size */}
          </button>
        </div>
        <div className="text-sm md:text-base text-gray-350 space-y-3">
          {" "}
          {/* Adjusted text color and spacing */}
          <p>
            IrishTopCasinoGuide.com operates as a complimentary service, dedicated to assisting you in discovering
            reputable and licensed casino platforms. We receive a commission from the featured brands, which may
            influence their positioning and visibility on our site.
          </p>
          <p>
            Every featured site on our platform is rigorously licensed by esteemed authorities. While we strive for
            absolute accuracy, we cannot be held responsible for any inadvertent inaccuracies or omissions.
          </p>
          <p>
            Please note that bonuses and promotional offers are subject to change without prior notice. We strongly
            advise you to always thoroughly read the complete terms and conditions directly on the operator&apos;s
            website before claiming any offer.
          </p>
        </div>
        <div className="mt-5 md:mt-8 flex justify-end">
          {" "}
          {/* Adjusted margin */}
          <Button
            onClick={onClose}
            className="bg-emerald-700 hover:bg-emerald-800 text-sm md:text-base py-2.5 px-5 md:py-3 md:px-6 text-white" // Adjusted colors and padding
          >
            Understood
          </Button>{" "}
          {/* Unique button text */}
        </div>
      </div>
    </div>
  )
}
