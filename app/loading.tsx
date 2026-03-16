export default function Loading() {
    return (
        <div className="min-h-screen bg-[#0F2A1D] flex items-center justify-center">
            <div className="relative">
                {/* Outer spinning ring */}
                <div className="w-16 h-16 border-4 border-[#C9A24D] border-t-transparent rounded-full animate-spin"></div>

                {/* Inner static leaf/point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-[#C9A24D] rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}
