import { NextResponse } from 'next/server'
import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const featuredProducts = data.products.filter((product) => {
    return product.featured
  })

  return NextResponse.json(featuredProducts)
}
