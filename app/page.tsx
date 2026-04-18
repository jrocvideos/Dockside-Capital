cd ~/Dockside-Capital

# Completely overwrite shop/page.tsx with correct content
cat > app/shop/page.tsx << 'EOF'
import Link from "next/link";

const products = [
  {
    name: "Wild BC Halibut",
    price: 23.68,
    retail: 32.00,
    unit: "/lb",
    savings: "Save $8.32/lb",
    description: "Line-caught, dock-to-door fresh"
  },
  {
    name: "Wild BC Sockeye Salmon", 
    price: 20.72,
    retail: 28.00,
    unit: "/lb", 
    savings: "Save $7.28/lb",
    description: "Glacier-fed, vibrant red flesh"
  },
  {
    name: "Jumbo Spot Prawns",
    price: 31.08,
    retail: 42.00,
    unit: "/lb",
    savings: "Save $10.92/lb", 
    description: "Live-trapped, sweet & firm"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-yellow-400 hover:text-yellow-300 mb-4 inline-block">← Back</Link>
          <h1 className="text-3xl font-bold">Pre-Order Seafood</h1>
          <p className="text-sm mt-2">50% deposit via e-Transfer to secure your order</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-900">${product.price}</span>
                <span className="text-gray-600">{product.unit}</span>
              </div>
              
              <p className="text-sm text-red-500 line-through">Retail: ${product.retail}{product.unit}</p>
              <p className="text-sm text-green-600 font-semibold mb-4">{product.savings}</p>
              
              <a 
                href={`mailto:orders@docksidecapital.ca?subject=Pre-Order: ${product.name}&body=Name:%0D%0APhone:%0D%0AChurch Pickup:%0D%0AQuantity (lbs):`}
                className="block w-full bg-yellow-500 text-blue-900 text-center py-2 rounded font-bold hover:bg-yellow-400"
              >
                Pre-Order via Email
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
EOF

# Also fix page.tsx if needed
cat > app/page.tsx << 'EOF'
import Image from "next/image";
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
EOF

# Remove any broken API files
rm -f app/api/check-prices/route.ts

# Commit and push
git add -A
git commit -m "Fix: Complete rewrite with correct customer pricing"
git push origin main
