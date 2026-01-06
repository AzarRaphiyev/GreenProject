export default function About() {
  return (
    <section className="py-24 px-4 bg-[#0F2A1D]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-6">Biz Kimik</h2>
            <div className="space-y-4 text-[#E5D5A8] leading-relaxed">
              <p className="text-lg">
                <span className="text-[#D2A85A] font-semibold">GREEN PROJECT</span> Azərbaycanda premium səviyyəli yaşıllaşdırma və landşaft xidmətləri göstərən ixtisaslaşmış şirkətdir.

              </p>
              <p className="text-lg">
                Biz hər bir layihəyə fərdi yanaşaraq, müştərilərimizin arzularını həqiqətə çeviririk. Yüksək keyfiyyətli
                materiallar, peşəkar komanda və müasir texnologiyalar ilə işləyirik.
              </p>
              <p className="text-lg">
                Təcrübəli aqronomlarımız və landşaft dizaynerlərimiz sizin üçün unikal yaşıl məkanlar yaradır.
              </p>
            </div>
            <div className="pt-4">
              {/* <div className="inline-block border-t-2 border-[#C9A24D] pt-4">
                <p className="text-[#C9A24D] font-semibold text-lg">10+ il təcrübə</p>
              </div> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-125 rounded-lg overflow-hidden shadow-2xl">
            <img src="/professional-landscaping-team-premium-garden-desig.jpg" alt="About GREEN PROJECT" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-liner-to-t from-[#0F2A1D]/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
