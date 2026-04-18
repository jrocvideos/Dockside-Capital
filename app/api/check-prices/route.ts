import { NextResponse } from 'next/server';

export async function GET() {
  // Wild salmon pricing data (matches your BC dockside product)
  const wildSalmonData = {
    lastUpdated: new Date().toISOString(),
    product: "Wild BC Sockeye Salmon",
    yourPrice: 20.72,
    competitors: {
      safeway: 32.00,
      wholeFoods: 35.00,
      superstore: "N/A (farmed only)"
    },
    savingsPercent: 35,
    marketingMessage: "Save 35% vs Retail Wild Sockeye"
  };

  return NextResponse.json(wildSalmonData);
}
