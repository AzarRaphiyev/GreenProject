"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // EmailJS integration will be added here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 px-4 bg-[#1E3A2F]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F1E8] mb-4">Əlaqə</h2>
          <p className="text-xl text-[#E5D5A8] max-w-2xl mx-auto">Bizimlə əlaqə saxlayın və layihənizi müzakirə edək</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#0F2A1D] p-8 rounded-lg border border-[#2A4A3A]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#F5F1E8] mb-2 font-semibold">Ad, Soyad</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#1E3A2F] border-[#2A4A3A] text-[#F5F1E8] focus:border-[#C9A24D]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#F5F1E8] mb-2 font-semibold">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#1E3A2F] border-[#2A4A3A] text-[#F5F1E8] focus:border-[#C9A24D]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#F5F1E8] mb-2 font-semibold">Telefon</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#1E3A2F] border-[#2A4A3A] text-[#F5F1E8] focus:border-[#C9A24D]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#F5F1E8] mb-2 font-semibold">Mesaj</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#1E3A2F] border-[#2A4A3A] text-[#F5F1E8] focus:border-[#C9A24D] min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#C9A24D] hover:bg-[#B89240] text-[#0F2A1D] font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Göndər
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A] flex items-start gap-4 hover:border-[#C9A24D] transition-colors duration-300">
              <div className="bg-[#C9A24D]/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-[#C9A24D]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-1">Telefon</h3>
                <p className="text-[#E5D5A8]">+994 XX XXX XX XX</p>
              </div>
            </div>

            <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A] flex items-start gap-4 hover:border-[#C9A24D] transition-colors duration-300">
              <div className="bg-[#C9A24D]/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-[#C9A24D]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-1">Email</h3>
                <p className="text-[#E5D5A8]">info@greenproject.az</p>
              </div>
            </div>

            <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A] flex items-start gap-4 hover:border-[#C9A24D] transition-colors duration-300">
              <div className="bg-[#C9A24D]/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-[#C9A24D]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-1">Ünvan</h3>
                <p className="text-[#E5D5A8]">Bakı, Azərbaycan</p>
              </div>
            </div>

            <div className="bg-[#0F2A1D] p-6 rounded-lg border border-[#2A4A3A]">
              <h3 className="font-serif text-xl font-bold text-[#F5F1E8] mb-4">Sosial Şəbəkələr</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-[#C9A24D]/10 p-3 rounded-lg hover:bg-[#C9A24D] transition-colors duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-[#C9A24D] group-hover:text-[#0F2A1D]" />
                </a>
                <a
                  href="#"
                  className="bg-[#C9A24D]/10 p-3 rounded-lg hover:bg-[#C9A24D] transition-colors duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-[#C9A24D] group-hover:text-[#0F2A1D]" />
                </a>
                <a
                  href="#"
                  className="bg-[#C9A24D]/10 p-3 rounded-lg hover:bg-[#C9A24D] transition-colors duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-[#C9A24D] group-hover:text-[#0F2A1D]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
