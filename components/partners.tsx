"use client"

import { partners } from "@/lib/data"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

export default function Partners() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }) as any,
    ]
  )

  return (
    <section className="py-24 px-4 bg-[#1E3A2F] overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Partnyorlarımız</h2>
          <p className="text-xl text-[#E5D5A8]">Güvənilən brendlərlə əməkdaşlıq</p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative w-full">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="shrink-0 w-[200px] sm:w-[250px] md:w-40 mx-3 md:mx-6 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop calculation */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="shrink-0 w-[200px] sm:w-[250px] md:w-40 mx-3 md:mx-6 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
