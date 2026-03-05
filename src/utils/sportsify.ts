import type { Product } from '../types/product'
import type { DisplayProduct } from '../types/DisplayProduct'

import football from '../assets/sports/football.jpg'
import basketball from '../assets/sports/basketball.jpg'
import cricketBat from '../assets/sports/cricket-bat.jpg'
import tennisRacket from '../assets/sports/tennis-racket.jpg'
import yogaMat from '../assets/sports/yoga-mat.jpg'
import dumbbells from '../assets/sports/dumbbells.jpg'

const sportsImages = [
  football,
  basketball,
  cricketBat,
  tennisRacket,
  yogaMat,
  dumbbells
]
const sportsNames = [
  'football',
  'basketball',
  'cricket Bat',
  'tennis Racket',
  'yoga Mat',
  'dumbbells'
]

const sportsCategories = [
  'Ball Sports',
  'Ball Sports',
  'Bat & Ball',
  'Racket Sports',
  'Fitness',
  'Gym Equipment'
]

export function sportsifyProducts(products: Product[]): DisplayProduct[] {
 return products.map((p, index) => {
  const i = index % sportsNames.length

  return {
    id: p.id,
    title: sportsNames[i] || "Sports Item",
    description: `Professional ${sportsNames[i] || "sports item"} for sports training.`,
    price: p.price,
    category: sportsCategories[i] || "Sports Equipment",
    rating: p.rating,
    thumbnail: sportsImages[i]!,
    images: [sportsImages[i]!],
  }
})
}