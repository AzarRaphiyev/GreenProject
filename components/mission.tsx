import { Award, CheckCircle, Sparkles, Users } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "Yüksək keyfiyyət",
    description: "Premium materiallar və peşəkar yanaşma",
  },
  {
    icon: CheckCircle,
    title: "Dəqiq icra",
    description: "Vaxtında və keyfiyyətli təhvil",
  },
  {
    icon: Sparkles,
    title: "Müasir landşaft yanaşması",
    description: "İnnovativ dizayn həlləri",
  },
  {
    icon: Users,
    title: "Müştəri məmnuniyyəti",
    description: "Sizin razılığınız bizim prioritetimizdir",
  },
]

export default function Mission() {
  return (
    <section className="py-24 px-4 bg-[#1E3A2F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Üstünlüklərimiz</h2>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-[#0F2A1D] p-8 rounded-lg border border-[#2A4A3A] hover:border-[#C9A24D] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <advantage.icon className="h-12 w-12 text-[#C9A24D] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-3">{advantage.title}</h3>
              <p className="text-[#E5D5A8] leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
