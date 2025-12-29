"use client"

import { useState } from "react"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Villa Landşaftı",
    description: "Premium villa kompleksi üçün tam landşaft həlli",
    image: "/luxury-villa-garden-landscaping.jpg",
  },
  {
    id: 2,
    name: "Hovuz Sahəsi",
    description: "Hovuz ətrafı yaşıllaşdırma və dekorativ əkinlər",
    image: "/pool-area-landscaping-luxury.jpg",
  },
  {
    id: 3,
    name: "Korporativ Ofis",
    description: "Müasir ofis binası üçün yaşıl zona",
    image: "/corporate-office-green-space.jpg",
  },
  {
    id: 4,
    name: "Restoran Terrası",
    description: "Estetik restoran xarici sahəsi",
    image: "/restaurant-terrace-garden-elegant.jpg",
  },
  {
    id: 5,
    name: "Xüsusi Bağ",
    description: "Fərdi dizayn edilmiş xüsusi bağ layihəsi",
    image: "/private-garden-design-premium.jpg",
  },
  {
    id: 6,
    name: "Park Landşaftı",
    description: "İctimai park sahəsinin yaşıllaşdırılması",
    image: "/public-park-landscaping-modern.jpg",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section className="py-24 px-4 bg-[#0F2A1D]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Portfolio</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">Tamamladığımız layihələr</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
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
