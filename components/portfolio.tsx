"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

import { projects } from "@/lib/data"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

  return (
    <section className="py-24 px-4 bg-[#0F2A1D]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Portfolio</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">Tamamladığımız layihələr</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={`${currentPage}-${project.id}`}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1D] via-[#0F2A1D]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
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
                className={`w-10 h-10 rounded-lg border-2 transition-all duration-300 font-semibold ${currentPage === page
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
            <div className="relative group flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
              <img
                src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${selectedProject.name} - ${currentImageIndex + 1}`}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#C9A24D] text-white p-2 rounded-full transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#C9A24D] text-white p-2 rounded-full transition-colors flex items-center justify-center"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>
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
