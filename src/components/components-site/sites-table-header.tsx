export function TableHeader() {
  return (
    <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
      {/* Header Row - FLEXBOX З РІВНИМИ ПРОМІЖКАМИ */}
      <div className="h-[20px] flex items-center px-6">
        {/* RANK - 6% */}
        <div className="flex-[0_0_6%] text-left pr-2">
          <span className="text-xs font-bold">#</span>
        </div>

        {/* BOOKMAKER - 19% */}
        <div className="flex-[0_0_19%] text-center pr-2">
          <span className="text-xs font-bold">KLADIONICA</span>
        </div>

        {/* BONUS OFFER - 25% */}
        <div className="flex-[0_0_25%] text-center px-2">
          <span className="text-xs font-bold">BONUS DOBRODOŠLICE</span>
        </div>

        {/* USER RATING - 20% */}
        <div className="flex-[0_0_20%] text-center px-2">
          <span className="text-xs font-bold">KORISNIČKA OCJENA</span>
        </div>

        {/* SCORE - 15% */}
        <div className="flex-[0_0_15%] text-center px-2">
          <span className="text-xs font-bold">REZULTAT</span>
        </div>

        {/* VISIT SITE - 15% */}
        <div className="flex-[0_0_15%] text-center pl-2">
          <span className="text-xs font-bold">POSJETI STRANICU</span>
        </div>
      </div>
    </div>
  )
}
