import type { ProductResponse } from '../types/product'

export const fetchProducts = async (limit = 30, skip = 0): Promise<ProductResponse> => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  const data: ProductResponse = await response.json()
  return data
}