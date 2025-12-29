import { Leaf, Palette, Sprout, Wrench, GraduationCap, Flower2 } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "Kompleks yaşıllaşdırma",
    description: "Tam həllər sizin məkanınız üçün",
  },
  {
    icon: Palette,
    title: "Landşaft dizaynı",
    description: "Kreativ və funksional dizayn layihələri",
  },
  {
    icon: Sprout,
    title: "Bitki əkini",
    description: "Keyfiyyətli bitki materialları və peşəkar əkim",
  },
  {
    icon: Wrench,
    title: "Texniki qulluq",
    description: "Davamlı yaşıllıq üçün müntəzəm qulluq",
  },
  {
    icon: GraduationCap,
    title: "Aqronom konsultasiyası",
    description: "Peşəkar məsləhət və tövsiyələr",
  },
  {
    icon: Flower2,
    title: "Dekorativ kompozisiyalar",
    description: "Estetik və unikal landşaft həlləri",
  },
]

export default function Services() {
  return (
    <section className="py-24 px-4 bg-[#0F2A1D]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Xidmətlərimiz</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">
            Sizin üçün ən yaxşı landşaft həllərini təqdim edirik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1E3A2F] p-8 rounded-lg border border-[#2A4A3A] hover:border-[#C9A24D] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="bg-[#C9A24D]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C9A24D]/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-[#C9A24D]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F5F1E8] mb-3">{service.title}</h3>
              <p className="text-[#E5D5A8] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
