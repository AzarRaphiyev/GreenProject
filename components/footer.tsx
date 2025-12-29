import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0F2A1D] border-t border-[#2A4A3A] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#C9A24D] p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-[#0F2A1D]" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#F5F1E8]">GREEN PROJECT</span>
            </div>
            <p className="text-[#E5D5A8] leading-relaxed">
              Premium yaşıllaşdırma və landşaft dizaynı xidmətləri ilə sizin xəyallarınızı həqiqətə çeviririk.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-4">Sürətli Keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#E5D5A8] hover:text-[#C9A24D] transition-colors">
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#E5D5A8] hover:text-[#C9A24D] transition-colors">
                  Xidmətlər
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-[#E5D5A8] hover:text-[#C9A24D] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#E5D5A8] hover:text-[#C9A24D] transition-colors">
                  Əlaqə
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-4">Əlaqə</h3>
            <ul className="space-y-2 text-[#E5D5A8]">
              <li>+994 XX XXX XX XX</li>
              <li>info@greenproject.az</li>
              <li>Bakı, Azərbaycan</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2A4A3A] pt-8 text-center">
          <p className="text-[#B8A989]">© {new Date().getFullYear()} GREEN PROJECT. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}
