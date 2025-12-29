"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Ruler, FileText, Hammer, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "İlkin müraciət",
    description: "Sizinlə əlaqə qururuq və tələblərinizi öyrənirik",
  },
  {
    icon: Ruler,
    title: "Ölçmə və analiz",
    description: "Sahəni detallı olaraq öyrənir və ölçülər aparırıq",
  },
  {
    icon: FileText,
    title: "Təklif",
    description: "Fərdi dizayn layihəsi və təklif hazırlayırıq",
  },
  {
    icon: Hammer,
    title: "Əkin və icra",
    description: "Peşəkar komandamız işləri yüksək keyfiyyətlə yerinə yetirir",
  },
  {
    icon: CheckCircle2,
    title: "Təhvil",
    description: "Layihəni təhvil verir və zəmanət təqdim edirik",
  },
]

export default function WorkProcess() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-[#0F2A1D]" id="process">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">İş Prosesimiz</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">Hər addımda peşəkarlıq və şəffaflıq</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#2A4A3A]" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-[#C9A24D] rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-[#0F2A1D]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-[#1E3A2F] p-6 rounded-lg border border-[#2A4A3A] hover:border-[#C9A24D] transition-all duration-300 hover:shadow-xl">
                    <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-2">{step.title}</h3>
                    <p className="text-[#E5D5A8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
