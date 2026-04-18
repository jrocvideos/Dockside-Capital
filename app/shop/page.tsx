import Link from "next/link"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Pre-Order This Week's Catch</h1>
        <p className="text-gray-600 mb-2">Orders close Friday 5PM • Pickup Tuesday/Thursday 6PM</p>
        <p className="text-red-600 text-sm mb-8 font-bold">🇨🇦 Vancouver Area • Cash E-Transfer Accepted • No Credit Card Fees</p>
        
        {/* Pricing Reality Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="text-2xl">📊</div>
            <div>
              <div className="font-bold text-blue-900">Live Market Pricing (Updated Weekly)</div>
              <div className="text-sm text-blue-800">
                We check Safeway, Whole Foods, and local fishmongers every Monday. 
                You always pay 26% below whatever they're charging this week.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Halibut - Real Vancouver Pricing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-900">
            <div className="bg-blue-100 h-32 flex items-center justify-center text-4xl">🐟</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Pacific Halibut Fillets</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">PREMIUM</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded mb-3 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Safeway (current):</span>
                  <span className="line-through">$32.00/lb</span>
                </div>
                <div className="flex justify-between mb-1 text-green-700 font-bold">
                  <span>Your price (26% off):</span>
                  <span>$23.68/lb</span>
                </div>
                <div className="flex justify-between text-blue-900 font-bold border-t pt-1 mt-1">
                  <span>You save:</span>
                  <span>$8.32/lb</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-blue-900">$23.68</span>
                <span className="text-lg text-gray-500">/lb CAD</span>
              </div>
              
              <div className="text-xs text-gray-500 mb-2">Minimum order: 5 lbs ($118.40)</div>
              
              <div className="bg-amber-50 p-2 rounded mb-4 text-xs">
                <span className="font-bold">Your cost breakdown:</span><br/>
                Wholesale: $16.00 | You pay: $23.68 | Margin: $7.68/lb
              </div>

              <div className="space-y-2 mb-4">
                <label className="text-xs font-medium text-gray-600">Select quantity:</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-blue-100 rounded hover:bg-blue-200 text-sm font-bold">5 lb</button>
                  <button className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">10 lb</button>
                  <button className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">20 lb</button>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-3 rounded mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Subtotal (5 lb):</span>
                  <span>$118.40</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-green-800">
                  <span>Required deposit (50%):</span>
                  <span>$59.20</span>
                </div>
                <div className="text-xs text-green-600 mt-1">Balance $59.20 due at pickup</div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pay Deposit $59.20 (E-Transfer)
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-2">Cancel anytime before Friday 5PM for full refund</p>
            </div>
          </div>

          {/* Sockeye Salmon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-500">
            <div className="bg-red-100 h-32 flex items-center justify-center text-4xl">🐠</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Wild Sockeye Salmon</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">PREMIUM</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded mb-3 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Market price:</span>
                  <span className="line-through">$28.00/lb</span>
                </div>
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Your price:</span>
                  <span>$20.72/lb</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-900">$20.72</span>
                <span className="text-sm text-gray-500">/lb CAD</span>
              </div>

              <div className="text-xs text-gray-500 mb-4">
                <span className="block">Wholesale: $14.50/lb</span>
                <span className="block text-green-600 font-bold">You save $7.28/lb vs Safeway</span>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pre-Order Now
              </button>
            </div>
          </div>

          {/* Spot Prawns */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-purple-500">
            <div className="bg-purple-100 h-32 flex items-center justify-center text-4xl">🦐</div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">BC Spot Prawns</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-bold">LUXURY</span>
              </div>
              
              <div className="bg-gray-100 p-3 rounded mb-3 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Market price:</span>
                  <span className="line-through">$42.00/lb</span>
                </div>
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Your price:</span>
                  <span>$31.08/lb</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-900">$31.08</span>
                <span className="text-sm text-gray-500">/lb CAD</span>
              </div>

              <div className="text-xs text-gray-500 mb-4">
                <span className="block">Wholesale: $24.00/lb</span>
                <span className="block text-green-600 font-bold">You save $10.92/lb vs retail</span>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-lg">
                Pre-Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Price Verification Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">📊 How We Calculate Your Price</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Step 1: Check Retail Prices (Monday Morning)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Safeway.ca online prices</li>
                <li>• Whole Foods Vancouver</li>
                <li>• Local fishmongers (3 quotes)</li>
                <li>• Take the highest retail price</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Step 2: Apply 26% Discount</h4>
              <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                Halibut example:<br/>
                Retail: $32.00<br/>
                − 26% ($8.32)<br/>
                = <strong>Your price: $23.68</strong><br/>
                <span className="text-green-600">Your savings: $8.32/lb</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
            <strong>Note:</strong> Prices locked when you pre-order. If retail drops during the week, you still get 26% off the original higher price. If retail spikes, you save even more.
          </div>
        </div>
      </div>
    </main>
  )
}
