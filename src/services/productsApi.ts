import type { Product, ProductResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com'

export async function fetchProducts(limit = 30, skip = 0): Promise<ProductResponse> {
  const url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }

  const data: ProductResponse = await res.json()
  return data
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }

  const data: Product = await res.json()
  return data
}