import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) throw new Error('MONGODB_URI missing')

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }

export async function connectDB() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}

const ChurchSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  pastorName: String,
  pickupDays: [String]
})

const ProductSchema = new mongoose.Schema({
  sku: String,
  name: String,
  tier: String,
  wholesalePrice: Number,
  retailPrice: Number,
  marketPrice: Number,
  available: Boolean
})

const OrderSchema = new mongoose.Schema({
  userId: String,
  churchId: String,
  status: { type: String, default: 'PRE_ORDER' },
  items: [{ productId: String, quantity: Number, price: Number }],
  total: Number,
  depositAmount: Number,
  depositPaid: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

export const Church = mongoose.models.Church || mongoose.model('Church', ChurchSchema)
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)
export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema)
