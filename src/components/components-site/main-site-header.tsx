import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="bg-black/30 fixed w-full mx-auto top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-croatian-red"></div>
          
          <Link href="/" className="flex items-center gap-2">
            <div className="w-14 h-14  flex items-center justify-center relative">
              <Image src="/favicon.ico" alt="Logo" width={36} height={36} className="w-8 h-8" />
              
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3 max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}

            <div className="absolute left-0 top-0 bottom-0 w-1 bg-croatian-red"></div>
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12  flex items-center justify-center tech-scanner">
                  <Image src="/favicon.ico" alt="Logo" width={36} height={36} className="w-10 h-10" />
                </div>

              </div>

            </Link>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
