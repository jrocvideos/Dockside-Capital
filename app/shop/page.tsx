// app/shop/page.tsx - CORRECTED PRICING

const products = [
  {
    name: "Wild BC Halibut",
    price: 23.68,  // WAS: 21 or 16 (wrong)
    retail: 32.00,
    unit: "/lb",
    savings: "Save $8.32/lb",
    description: "Line-caught, dock-to-door fresh"
  },
  {
    name: "Wild BC Sockeye Salmon", 
    price: 20.72,  // WAS: 19 (wrong)
    retail: 28.00,
    unit: "/lb", 
    savings: "Save $7.28/lb",
    description: "Glacier-fed, vibrant red flesh"
  },
  {
    name: "Jumbo Spot Prawns",
    price: 31.08,  // WAS: 29 (wrong)
    retail: 42.00,
    unit: "/lb",
    savings: "Save $10.92/lb", 
    description: "Live-trapped, sweet & firm"
  }
];

// In your JSX, display like this:
<h3 className="text-3xl font-bold text-blue-900">${product.price}<span className="text-lg text-gray-600">{product.unit}</span></h3>
<p className="text-sm text-red-500 line-through">Retail: ${product.retail}{product.unit}</p>
<p className="text-sm text-green-600 font-semibold">{product.savings}</p>
