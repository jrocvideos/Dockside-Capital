// app/api/check-prices/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  // In reality, you'd scrape these or use an API
  // For now, manual weekly updates via this endpoint
  
  const currentPrices = {
    halibut: {
      safeway: 32.00,
      wholeFoods: 34.99,
      localAverage: 31.50,
      ourPrice: 23.68,
      savings: 8.32
    },
    salmon: {
      safeway: 28.00,
      wholeFoods: 29.99,
      localAverage: 27.50,
      ourPrice: 20.72,
      savings: 7.28
    },
    prawns: {
      safeway: 42.00,
      wholeFoods: 44.99,
      localAverage: 40.00,
      ourPrice: 31.08,
      savings: 10.92
    },
    lastUpdated: new Date().toISOString(),
    note: "Manual check required weekly - Safeway.ca blocks scraping"
  }

  return NextResponse.json(currentPrices)
}
