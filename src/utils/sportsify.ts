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
  "Football",
  "Basketball",
  "Cricket Bat",
  "Tennis Racket",
  "Yoga Mat",
  "Dumbbells",
  "Boxing Gloves",
  "Skipping Rope",
  "Baseball Bat",
  "Running Shoes",
  "Gym Bag",
  "Water Bottle",
  "Cycling Helmet",
  "Badminton Racket",
  "Table Tennis Paddle",
  "Hockey Stick",
  "Golf Club",
  "Fitness Tracker",
  "Resistance Bands",
  "Pull-up Bar",
  "Training Cones",
  "Agility Ladder",
  "Knee Support",
  "Wrist Wraps",
  "Protein Shaker",
  "Gym Towel",
  "Exercise Ball",
  "Ankle Weights",
  "Speed Parachute",
  "Jump Box"
]

const sportsCategories = [
  "Ball Sports",
  "Ball Sports",
  "Ball Sports",
  "Racket Sports",
  "Fitness & Gym",
  "Fitness & Gym",
  "Training Equipment",
  "Training Equipment",
  "Ball Sports",
  "Accessories & Gear",
  "Accessories & Gear",
  "Accessories & Gear",
  "Accessories & Gear",
  "Racket Sports",
  "Racket Sports",
  "Ball Sports",
  "Ball Sports",
  "Accessories & Gear",
  "Fitness & Gym",
  "Fitness & Gym",
  "Training Equipment",
  "Training Equipment",
  "Training Equipment",
  "Training Equipment",
  "Accessories & Gear",
  "Accessories & Gear",
  "Fitness & Gym",
  "Fitness & Gym",
  "Training Equipment",
  "Fitness & Gym"
]
export function sportsifyProducts(products: Product[]): DisplayProduct[] {
  return products.map((p, index) => {

    const i = index % sportsNames.length
    const imgIndex = index % sportsImages.length

    return {
      id: p.id,
      title: sportsNames[i] || "Sports Item",
      description: `Professional ${sportsNames[i] || "sports item"} for sports training.`,
      price: p.price,
      category: sportsCategories[i] || "Sports Equipment",
      rating: p.rating,
      thumbnail: sportsImages[imgIndex] || "",
      images: [sportsImages[imgIndex] || ""]
    }

  })
}