"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/luxury-garden-landscaping-premium-green-nature.jpg" alt="Luxury Garden" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A1D]/80 via-[#0F2A1D]/70 to-[#0F2A1D]/90" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#F5F1E8] mb-6 tracking-tight">GREEN PROJECT</h1>
        <p className="text-xl md:text-2xl text-[#E5D5A8] mb-12 max-w-2xl mx-auto leading-relaxed">
          Premium Yaşıllaşdırma və Landşaft Həlləri
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
        href="#contact"
        className="
          inline-flex items-center justify-center
          bg-[#C9A24D]
          hover:bg-[#B89240]
          text-[#0F2A1D]
          font-semibold
          px-8 
          py-4
          text-lg

          transition-all
          duration-300
          hover:scale-105
          rounded-md
        "
      >
        Bizimlə əlaqə
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
          <Link
          href="#portfolio"
          className="
            inline-flex items-center justify-center
            border-2 border-[#C9A24D]
            text-[#F5F1E8]
            hover:bg-[#C9A24D]
            hover:text-[#0F2A1D]
            font-semibold
            px-8 py-4
            text-lg
            transition-all
            duration-300
            hover:scale-105
            bg-transparent
            rounded-md
          "
            >
            Portfolioya bax
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#C9A24D] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#C9A24D] rounded-full" />
        </div>
      </div>
    </section>
  )
}
