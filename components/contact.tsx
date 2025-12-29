"use client"
import { ReactNode, useState } from "react"
import emailjs from "@emailjs/browser"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_12l9j1q",
        "template_zypzkrb",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "fT4CUHI5KgxM2Jrp-"
      )
      .then(() => {
        setStatus("Mesaj uğurla göndərildi ✅")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setLoading(false)
      })
      .catch(() => {
        setStatus("Xəta baş verdi ❌ Zəhmət olmasa yenidən cəhd edin.")
        setLoading(false)
      })
  }

  return (
    <section className="py-24 px-4 bg-[#1E3A2F]" id="contact">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">
            Əlaqə
          </h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">
            Bizimlə əlaqə saxlayın və layihənizi müzakirə edək
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0F2A1D] p-8 rounded-lg border border-[#2A4A3A] space-y-6"
          >
            <div>
              <label className="text-[#F5F1E8] font-semibold">Ad, Soyad</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full mt-2 p-3 bg-[#1E3A2F] text-white rounded border border-[#2A4A3A] focus:border-[#C9A24D]"
              />
            </div>

            <div>
              <label className="text-[#F5F1E8] font-semibold">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full mt-2 p-3 bg-[#1E3A2F] text-white rounded border border-[#2A4A3A] focus:border-[#C9A24D]"
              />
            </div>

            <div>
              <label className="text-[#F5F1E8] font-semibold">Telefon</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full mt-2 p-3 bg-[#1E3A2F] text-white rounded border border-[#2A4A3A] focus:border-[#C9A24D]"
              />
            </div>

            <div>
              <label className="text-[#F5F1E8] font-semibold">Mesaj</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full mt-2 p-3 bg-[#1E3A2F] text-white rounded border border-[#2A4A3A] min-h-[120px] focus:border-[#C9A24D]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A24D] hover:bg-[#B89240] text-[#0F2A1D] font-semibold py-4 rounded transition hover:scale-105"
            >
              {loading ? "Göndərilir..." : "Göndər"}
            </button>

            {status && (
              <p className="text-center text-[#C9A24D] mt-4">
                {status}
              </p>
            )}
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <Info icon={<Phone />} title="Telefon" value="+994 XX XXX XX XX" />
            <Info icon={<Mail />} title="Email" value="info@greenproject.az" />
            <Info icon={<MapPin />} title="Ünvan" value="Bakı, Azərbaycan" />

            <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A]">
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">
                Sosial Şəbəkələr
              </h3>
              <div className="flex gap-4">
                <Social icon={<Facebook />} />
                <Social icon={<Instagram />} />
                <Social icon={<Linkedin />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Info({
  icon,
  title,
  value,
}: {
  icon: ReactNode
  title: string
  value: ReactNode
}) {
  return (
    <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A] flex gap-4 items-center">
      <div className="bg-[#C9A24D]/10 p-3 rounded">
        {icon}
      </div>
      <div>
        <h3 className="text-[#F5F1E8] font-bold">{title}</h3>
        <p className="text-[#E5D5A8]">{value}</p>
      </div>
    </div>
  )
}

function Social({ icon }: { icon: ReactNode }) {
  return (
    <a
      href="#"
      className="bg-[#C9A24D]/10 p-3 rounded hover:bg-[#C9A24D] transition"
    >
      <div className="text-[#C9A24D] hover:text-[#0F2A1D]">
        {icon}
      </div>
    </a>
  );
}
