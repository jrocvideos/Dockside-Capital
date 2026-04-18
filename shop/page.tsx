import Link from "next/link"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Pre-Order This Week's Catch</h1>
        <p className="text-gray-600 mb-8">Orders close Friday 5PM • Pickup Tuesday/Thursday 6PM at church</p>
        
        {/* Zero-Risk Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center gap-4">
          <div className="text-2xl">🛡️</div>
          <div>
            <div className="font-bold text-green-900">Zero Capital Risk Guarantee</div>
            <div className="text-sm text-green-800">50% deposit required. Full refund if minimums not met.</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Halibut */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 h-32 flex items-center justify-center text-4xl">🐟</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Pacific Halibut Fillets</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PREMIUM</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-blue-900">$21</span>
                <span className="text-gray-500 line-through">$30</span>
              </div>
              <p className="text-sm text-green-600 mb-4">Save $9/lb (30% off Safeway)</p>
              
              <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                <div className="flex justify-between mb-1"><span>Wholesale:</span><span>$16/lb</span></div>
                <div className="flex justify-between font-bold text-green-700"><span>You save:</span><span>$9/lb</span></div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pre-Order (50% Deposit)
              </button>
            </div>
          </div>

          {/* Salmon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-red-100 h-32 flex items-center justify-center text-4xl">🐠</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Wild Sockeye Salmon</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PREMIUM</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-blue-900">$19</span>
                <span className="text-gray-500 line-through">$26</span>
              </div>
              <p className="text-sm text-green-600 mb-4">Save $7/lb (27% off)</p>
              
              <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                <div className="flex justify-between mb-1"><span>Wholesale:</span><span>$14/lb</span></div>
                <div className="flex justify-between font-bold text-green-700"><span>You save:</span><span>$7/lb</span></div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pre-Order Now
              </button>
            </div>
          </div>

          {/* Prawns */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-100 h-32 flex items-center justify-center text-4xl">🦐</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Spot Prawns</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">LUXURY</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-blue-900">$29</span>
                <span className="text-gray-500 line-through">$38</span>
              </div>
              <p className="text-sm text-green-600 mb-4">Save $9/lb (24% off)</p>
              
              <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                <div className="flex justify-between mb-1"><span>Wholesale:</span><span>$22/lb</span></div>
                <div className="flex justify-between font-bold text-green-700"><span>You save:</span><span>$9/lb</span></div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pre-Order Now
              </button>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">1️⃣</div>
            <h4 className="font-bold mb-1">Pre-Order</h4>
            <p className="text-sm text-gray-600">50% deposit by Friday 5PM</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">2️⃣</div>
            <h4 className="font-bold mb-1">We Source</h4>
            <p className="text-sm text-gray-600">Buy wholesale if minimums met</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">3️⃣</div>
            <h4 className="font-bold mb-1">Pickup</h4>
            <p className="text-sm text-gray-600">Tuesday/Thursday 6PM at church</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl mb-2">4️⃣</div>
            <h4 className="font-bold mb-1">Pay Balance</h4>
            <p className="text-sm text-gray-600">Or full refund. Zero risk.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
