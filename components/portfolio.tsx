"use client"

import { useState } from "react"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Hilton Garden İnn Baku",
    description: "Premium səviyyəli yaşıllaşdırma işlərinin tam icrası",
    image: "https://avatars.mds.yandex.net/i?id=f5431ec7e97c91e5ef10b18a2d2fde8cd2031d20-16476092-images-thumbs&n=13",
  },
  {
    id: 2,
    name: "Ambassador Suites Baku",
    description: "Premium təbii qazon örtüyünün salınması",
    image: "https://www.fmg.az/uploads/fields/2019/04/ambassador-suites-portfolio_1.jpg",
  },
  {
    id: 3,
    name: "Hillside Residence",
    description: "Premium təbii qazon örtüyünün salınması",
    image: "https://avatars.mds.yandex.net/i?id=5eb2d999f150e6ed297df522943c5088_l-4571839-images-thumbs&n=13",
  },
  {
    id: 4,
    name: "Təbriz Evləri",
    description: "Premium təbii qazon örtüyünün salınması",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 5,
    name: "Çinar Plaza",
    description: "Premium təbii qazon örtüyünün salınması",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 6,
    name: "Excelsior Hotel & Spa Baku",
    description: "Premium təbii qazon örtüyünün salınması",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 7,
    name: "Zaqatala Kapital Bank",
    description: "Yaşıllıqlara baxım xidməti",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 8,
    name: "Port Baku Tower 1 ",
    description: "Ofis daxilində premium dekorativ bitkilərin seçimi və quraşdırılması",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 9,
    name: "Azərbaycan Xəzər Dəniz Gəmiçiliyi ",
    description: "Premium səviyyəli yaşıllaşdırma işləri",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 10,
    name: "Pirallahi Nərəkənd",
    description: "Premium səviyyəli yaşıllaşdırma işləri",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 11,
    name: "Zəngilan rayonu Ağalı Hotel",
    description: "Premium səviyyəli yaşıllaşdırma işləri",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 12,
    name: "Xazri Villa Sea Side Baku",
    description: "Ərazinin peşəkar şəkildə təmizlənməsi və abadlığa hazırlığı",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 13,
    name: "Şuşa SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 14,
    name: "Müşfiqabad SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 15,
    name: "Şəmkir SOCAR petrolium",
    description: "Yaşıllaşdırma və dekorativ landşaft işləri.",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
 
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

  return (
    <section className="py-24 px-4 bg-[#0F2A1D]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Portfolio</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">Tamamladığımız layihələr</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={`${currentPage}-${project.id}`}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1D] via-[#0F2A1D]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-2">{project.name}</h3>
                  <p className="text-[#E5D5A8] text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg border-2 transition-all duration-300 font-semibold ${
                  currentPage === page
                    ? "bg-[#C9A24D] border-[#C9A24D] text-[#0F2A1D]"
                    : "border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#0F2A1D]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#C9A24D] transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.name}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 text-center">
              <h3 className="font-serif text-3xl font-bold text-[#F5F1E8] mb-2">{selectedProject.name}</h3>
              <p className="text-[#E5D5A8] text-lg">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
