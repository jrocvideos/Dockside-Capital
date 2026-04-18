import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Stop Overpaying for Seafood</h1>
          <p className="text-xl mb-4 text-blue-100">
            Premium halibut, salmon & prawns at 30% below Safeway prices
          </p>
          <p className="text-sm text-blue-200 mb-8">
            Church-based distribution • Pre-order model • Zero inventory risk
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              Pre-Order Now
            </Link>
            <Link 
              href="/churches" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition"
            >
              Find Church Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900">30%</div>
            <div className="text-gray-600">Below Retail</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">$5.25</div>
            <div className="text-gray-600">Margin per lb</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">$16</div>
            <div className="text-gray-600">Halibut Wholesale</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">Zero</div>
            <div className="text-gray-600">Inventory Risk</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">How We Eliminate Risk</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-bold mb-2">1. You Pre-Order</h3>
              <p className="text-sm text-gray-600">
                Collect deposits Monday. No money spent until orders confirmed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-bold mb-2">2. We Source</h3>
              <p className="text-sm text-gray-600">
                Aero Trading delivers Tuesday. Your deposits fund the purchase.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-2xl mb-2">✝️</div>
              <h3 className="font-bold mb-2">3. Church Pickup</h3>
              <p className="text-sm text-gray-600">
                Pick up at your church parking lot Tuesday/Thursday 6PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
