export default function ChurchesPage() {
  const churches = [
    {
      name: "St. Michael's Anglican Church",
      address: "123 Main Street, Vancouver",
      pastor: "Rev. Sarah Johnson",
      pickup: "Tuesday 6PM",
      congregation: 350,
      features: "Commercial Kitchen"
    },
    {
      name: "Hope Pentecostal Church", 
      address: "456 Oak Avenue, Burnaby",
      pastor: "Rev. Mike Chen",
      pickup: "Thursday 6PM",
      congregation: 520,
      features: "Parking Lot Access"
    },
    {
      name: "Vancouver Baptist Temple",
      address: "789 Kingsway, Vancouver", 
      pastor: "Rev. David Park",
      pickup: "Tuesday 6PM",
      congregation: 280,
      features: "Food Pantry Partnership"
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Church Pickup Locations</h1>
        <p className="text-gray-600 mb-8">Every Tuesday & Thursday 6:00 PM</p>
        
        <div className="grid gap-4">
          {churches.map((church, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">{church.name}</h3>
                  <p className="text-gray-600 mt-1">{church.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Pastor: {church.pastor}</p>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  church.pickup.includes('Tuesday') 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {church.pickup}
                </span>
              </div>
              <div className="mt-4 pt-4 border-t flex justify-between text-sm">
                <span className="text-gray-600">Congregation: {church.congregation}</span>
                <span className="text-green-600 font-medium">✓ {church.features}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-bold text-amber-900 mb-2">Want to Add Your Church?</h3>
          <p className="text-sm text-amber-800 mb-4">
            Churches earn $1/lb for their food pantry while members save 30%. 
            Zero setup cost—we handle logistics.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded">
            Contact Us About Partnership
          </button>
        </div>
      </div>
    </main>
  )
}
