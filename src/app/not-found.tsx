import Link from "next/link"
import { Button } from "./[locale]/(root)/components/ui/button"

export const metadata = {
  title: "404 - Page Not Found",
}

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="text-center px-6 max-w-2xl">
        {/* Animated OOPS text */}
        <div className="mb-8 animate-bounce">
          <h1 className="text-9xl md:text-[180px] font-black text-orange-600 leading-none">OOPS!</h1>
        </div>

        {/* 404 Error Code */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">404 - Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-2">The page you are looking for might have been removed</p>
          <p className="text-lg text-gray-600 mb-8">had its name changed or is temporarily unavailable.</p>
        </div>

        {/* CTA Button */}
        <Link href="/">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
            GO TO HOMEPAGE
          </Button>
        </Link>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-4 opacity-20">
          <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
          <div className="w-12 h-12 bg-orange-400 rounded-full"></div>
          <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    </main>
  )
}
