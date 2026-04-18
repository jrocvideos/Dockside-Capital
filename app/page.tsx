import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dockside Capital</h1>
          <p className="text-xl mb-8">Wild BC Seafood Direct to Your Church</p>
          <Link href="/shop" className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400">
            Pre-Order Now
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-blue-900">26%</h2>
            <p className="text-gray-600">Below Retail</p>
            <p className="text-xs text-gray-500 mt-1">vs Safeway/Superstore</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-blue-900">$23.68</h2>
            <p className="text-gray-600">Halibut per lb</p>
            <p className="text-xs text-gray-500 mt-1">Retail: $32.00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-4xl font-bold text-blue-900">3</h2>
            <p className="text-gray-600">Church Pickups</p>
            <p className="text-xs text-gray-500 mt-1">Vancouver Area</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Eliminates Risk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🎣</div>
            <h3 className="font-bold mb-2">We Buy Dockside</h3>
            <p className="text-sm text-gray-600">Direct from BC fishermen at wholesale</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">⛪</div>
            <h3 className="font-bold mb-2">Church Pickup</h3>
            <p className="text-sm text-gray-600">Pre-orders collected before we buy</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="font-bold mb-2">You Save 26%</h3>
            <p className="text-sm text-gray-600">vs retail with zero spoilage risk</p>
          </div>
        </div>
      </div>
    </div>
  );
}
