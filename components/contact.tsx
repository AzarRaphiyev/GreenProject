"use client"
import { ReactNode, useState } from "react"
import emailjs from "@emailjs/browser"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";

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
      <div className="max-w-7xl mx-auto ">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-4">
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
            className="bg-[#0F2A1D] p-8 rounded-lg border 
             border-[#2A4A3A] space-y-6 "
          >
            <div>
              <label className="text-[#F5F1E8]  w-[95%] font-semibold">Ad, Soyad</label>
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
              <label className="text-[#F5F1E8] w-[95%] font-semibold">Email</label>
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
              <label className="text-[#F5F1E8] w-[95%] font-semibold">Telefon</label>
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
              <label className="text-[#F5F1E8] w-[95%]   font-semibold">Mesaj</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full mt-2 p-3 bg-[#1E3A2F] text-white rounded border border-[#2A4A3A] min-h-30 focus:border-[#C9A24D]"
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
            <Info icon={<Phone />}  title="Telefon" value="+994 55 619 13 13" />
            <Info icon={<Phone />} title="Telefon" value="+994 55 332 13 13" />
            <Info icon={<Mail />} title="Email" value="ismayilov_88@mail.ru" />
            <Info icon={<Mail />} title="Email" value="kamilla.greenproject@gmail.com" />
            <Info icon={<MapPin />} title="Ünvan" value="Bakı, Azərbaycan" />

            <div className="bg-[#0F2A1D] p-6  w-[95%] rounded-lg border border-[#2A4A3A]">
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">
                Sosial Şəbəkələr
              </h3>
              <div className="flex gap-4 ">
                <Link className="bg-transparent" href={'https://www.instagram.com/greenproject.az/'}>
                <FaInstagram  size={27} className="text-[#C9A24D] hover:scale-105 transition-transform duration-300 "/>
                </Link>
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
    <div className="bg-[#0F2A1D] p-6 rounded-lg w-[95%] border border-[#2A4A3A] flex gap-4 items-center">
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


