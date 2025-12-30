import { CheckCircle } from "lucide-react"

const standards = [
  "Beynəlxalq keyfiyyət standartlarına uyğunluq",
  "Ekoloji cəhətdən təmiz materiallar",
  "Sertifikatlı aqronomlar və dizaynerlər",
  "Kompleks zəmanət xidməti",
  "Müştəri məmnuniyyəti prioriteti",
  "Vaxtında layihə təhvili",
]

export default function QualityStandards() {
  return (
    <section className="py-24 px-4 bg-[#1E3A2F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
            <img src="/quality-landscaping-standards-premium-garden-certi.jpg" alt="Quality Standards" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-liner-to-t from-[#1E3A2F]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-6">Keyfiyyət Standartlarımız</h2>
            <p className="text-lg text-[#E5D5A8] leading-relaxed mb-8">
              Biz yüksək keyfiyyət standartlarına riayət edərək, hər bir layihədə mükəmməlliyə nail oluruq.
            </p>
            <div className="space-y-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="h-6 w-6 text-[#C9A24D] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-md text-[#E5D5A8]">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
