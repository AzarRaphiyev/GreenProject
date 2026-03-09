"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-[#0F2A1D] flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-md w-full bg-[#F5F1E8]/10 p-8 rounded-2xl border border-[#C9A24D]/30 backdrop-blur-sm">
                <h2 className="font-serif text-3xl font-bold text-[#F5F1E8] mb-4">
                    Oops! Bir Şeyler Ters Gitti
                </h2>
                <p className="text-[#E5D5A8] mb-8">
                    Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya daha sonra geri dönün.
                </p>
                <button
                    onClick={() => reset()}
                    className="bg-[#C9A24D] hover:bg-[#B38D3B] text-[#0F2A1D] font-bold py-3 px-8 rounded-full transition-colors duration-300 w-full"
                >
                    Tekrar Dene
                </button>
            </div>
        </div>
    )
}
