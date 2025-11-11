"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import {
  ClubIcon as Football,
  TurtleIcon as Tennis,
  Target,
  Dices,
  Trophy,
  Timer,
  Flag,
  Shirt,
  BellIcon as Whistle,
  RatIcon as Racquet,
} from "lucide-react"

interface IconProps {
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
}

export function AnimatedSportsIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const iconsRef = useRef<IconProps[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to full width/height
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create icons if not already created
    if (iconsRef.current.length === 0) {
      const icons = [
        { key: 0, element: <Football className="text-emerald-500" /> },
        { key: 1, element: <Tennis className="text-amber-500" /> },
        { key: 2, element: <Target className="text-emerald-400" /> },
        { key: 3, element: <Dices className="text-amber-400" /> },
        { key: 4, element: <Trophy className="text-emerald-300" /> },
        { key: 5, element: <Timer className="text-amber-300" /> },
        { key: 6, element: <Flag className="text-emerald-200" /> },
        { key: 7, element: <Shirt className="text-amber-200" /> },
        { key: 8, element: <Whistle className="text-emerald-100" /> },
        { key: 9, element: <Racquet className="text-amber-100" /> },
      ]

      // Create 25 random icons (increased count)
      for (let i = 0; i < 25; i++) {
        const randomIcon = icons[Math.floor(Math.random() * icons.length)]
        iconsRef.current.push({
          icon: randomIcon.element,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 25 + Math.random() * 35, // Adjusted size
          speed: 0.3 + Math.random() * 0.6, // Adjusted speed
          opacity: 0.08 + Math.random() * 0.15, // Adjusted opacity
          rotation: Math.random() * 360,
        })
      }
    }

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw icons
      iconsRef.current.forEach((icon) => {
        // Move icon
        icon.y += icon.speed
        icon.rotation += 0.2 // Adjusted rotation speed

        // Reset position if out of bounds
        if (icon.y > canvas.height) {
          icon.y = -icon.size
          icon.x = Math.random() * canvas.width
        }

        // Draw icon (using a simple circle as placeholder)
        ctx.save()
        ctx.translate(icon.x, icon.y)
        ctx.rotate((icon.rotation * Math.PI) / 180)
        ctx.globalAlpha = icon.opacity
        ctx.fillStyle = "#12C085" // Updated Emerald-500 from new palette
        ctx.beginPath()
        ctx.arc(0, 0, icon.size / 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }} // Adjusted opacity
    />
  )
}
