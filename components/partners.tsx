"use client"

// Partner logos - using placeholders
const partners = [
  { name: "Partner 1", logo: "/abstract-logo-1.png" },
  { name: "Partner 2", logo: "/abstract-logo-geometric.png" },
  { name: "Partner 3", logo: "/abstract-logo-design-3.png" },
  { name: "Partner 4", logo: "/abstract-logo-4.png" },
  { name: "Partner 5", logo: "/abstract-logo-5.png" },
  { name: "Partner 6", logo: "/company-logo-6.png" },
]

export default function Partners() {
  return (
    <section className="py-24 px-4 bg-[#1E3A2F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Partnyorlarımız</h2>
          <p className="text-xl text-[#E5D5A8]">Güvənilən brendlərlə əməkdaşlıq</p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain p-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
