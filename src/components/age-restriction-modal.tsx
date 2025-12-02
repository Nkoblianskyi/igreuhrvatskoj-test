"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
            <div className="bg-amber-500 p-2 rounded mr-3">
              {" "}
              {/* Adjusted margin and border radius */}
              <span className="text-white font-bold text-sm">18+</span>
            </div>
            <h2 className="text-base md:text-xl font-bold text-white">Age Verification Required</h2>{" "}
            {/* Unique heading */}
          </div>
          <button onClick={onClose} className="text-gray-450 hover:text-white" aria-label="Close age verification">
            {" "}
            {/* Unique label, adjusted text color */}
            <X className="h-6 w-6" /> {/* Adjusted icon size */}
          </button>
        </div>
        <div className="text-sm md:text-base text-gray-350 space-y-3">
          {" "}
          {/* Adjusted text color and spacing */}
          <p>
            This website is exclusively designed for individuals who are 18 years of age or older. By proceeding to use
            our site, you unequivocally confirm that you meet this essential age requirement.
          </p>
          <p>
            Gambling should always be approached as a form of entertainment only. It is crucial to never gamble with
            funds that you cannot comfortably afford to lose.
          </p>
          <p>
            If you are experiencing any challenges related to gambling, we strongly urge you to seek immediate and
            confidential assistance from organizations like GamCare or other dedicated support services.
          </p>
        </div>
        <div className="mt-5 md:mt-8 flex justify-end">
          {" "}
          {/* Adjusted margin */}
          <Button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-600 text-sm md:text-base py-2.5 px-5 md:py-3 md:px-6 text-white" // Adjusted colors and padding
          >
            I Confirm My Age
          </Button>{" "}
          {/* Unique button text */}
        </div>
      </div>
    </div>
  )
}
