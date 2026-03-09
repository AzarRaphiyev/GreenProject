"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
    { name: "Haqqımızda", href: "#about" },
    { name: "Xidmətlər", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Əlaqə", href: "#contact" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0F2A1D] shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-serif text-2xl font-bold text-[#F5F1E8]">
                            Green<span className="text-[#C9A24D]">Project</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollToSection(e, link.href)}
                                className="text-[#F5F1E8] hover:text-[#C9A24D] transition-colors font-medium text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#F5F1E8] hover:text-[#C9A24D]"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0F2A1D] border-t border-[#C9A24D]/20 absolute top-full left-0 right-0 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollToSection(e, link.href)}
                                className="block px-3 py-2 text-base font-medium text-[#F5F1E8] hover:text-[#C9A24D] hover:bg-black/20 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
