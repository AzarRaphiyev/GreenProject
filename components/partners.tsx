"use client"

// Partner logos - using placeholders
const partners = [
  { name: "PMD Group", logo: "https://pmdgroup.az/images/pmd.svg" },
  { name: "PDM Projects", logo: "https://pmdprojects.az/M0/mainbgr/20240403_100914_1712124554_853e619585.svg" },
  { name: "FMG Group", logo: "https://www.fmg.az/assets/images/logo.svg" },
  { name: "MOR MMC", logo: "https://www.mor.az/svg/logo-ag.png" },
  { name: "IMF Group", logo: "https://imfco.az/images/logo.svg" },
  { name: "UNICO Group ", logo: "https://b4064436.smushcdn.com/4064436/wp-content/uploads/2025/08/uloq99.webp?lossy=2&strip=1&webp=1" },
]

export default function Partners() {
  return (
    <section className="py-24 px-4 bg-[#1E3A2F] overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Partnyorlarımız</h2>
          <p className="text-xl text-[#E5D5A8]">Güvənilən brendlərlə əməkdaşlıq</p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="shrink-0 w-40 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
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
                className="shrink-0 w-40 h-24 bg-[#0F2A1D] rounded-lg flex items-center justify-center border border-[#2A4A3A] hover:border-[#C9A24D] transition-colors duration-300"
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
