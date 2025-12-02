"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface IconProps {
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  color: string // Added color property
}

export function AnimatedCasinoIcons() {
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

    // Colors for icons (adjusted for uniqueness)
    const colors = ["#F6A215", "#DA7B0A", "#12C085"] // Gold-500, Amber-600, Emerald-500 from new palette

    // Create icons if not already created
    if (iconsRef.current.length === 0) {
      // Not directly rendering Lucide React components, but using their themes via color
      // The `icon` property is still present, but only for conceptual grouping.
      // We will draw simple shapes and color them.
      for (let i = 0; i < 30; i++) {
        // Increased icon count
        iconsRef.current.push({
          icon: null, // Placeholder for conceptual icon
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 25 + Math.random() * 38, // Adjusted size
          speed: 0.3 + Math.random() * 0.65, // Adjusted speed
          opacity: 0.08 + Math.random() * 0.2, // Increased opacity for better visibility on dark background
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)], // Assign a random color
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
        icon.rotation += 0.3 // Slightly faster rotation

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
        ctx.fillStyle = icon.color // Use the assigned color
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
      style={{ opacity: 0.9 }} // Adjusted opacity
    />
  )
}
