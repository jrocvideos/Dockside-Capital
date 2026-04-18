import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Stop Overpaying for Seafood</h1>
          <p className="text-xl mb-4 text-blue-100">
            Premium halibut, salmon & prawns at 30% below Safeway prices
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/shop" className="bg-amber-500 text-black font-bold py-4 px-8 rounded-lg">
              Pre-Order Now
            </Link>
            <Link href="/churches" className="border-2 border-white text-white py-4 px-8 rounded-lg">
              Find Church Pickup
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
