import type { Product } from '../types/product'
import type { DisplayProduct } from '../types/DisplayProduct'

import football from '../assets/sports/football.jpg'
import basketball from '../assets/sports/basketball.jpg'
import cricketBat from '../assets/sports/cricket-bat.jpg'
import tennisRacket from '../assets/sports/tennis-racket.jpg'
import yogaMat from '../assets/sports/yoga-mat.jpg'
import dumbbells from '../assets/sports/dumbbells.jpg'
import boxingGloves from '../assets/sports/boxing-gloves.jpg'
import skippingRope from '../assets/sports/skipping-rope.jpg'
import baseballBat from '../assets/sports/baseball-bat.jpg'
import runningShoes from '../assets/sports/running-shoes.jpg'
import gymBag from '../assets/sports/gym-bag.jpg'
import waterBottle from '../assets/sports/water-bottle.jpg'
import cyclingHelmet from '../assets/sports/cycling-helmet.jpg'
import badmintonRacket from '../assets/sports/badminton-racket.jpg'
import tableTennisPaddle from '../assets/sports/table-tennis-paddle.jpg'
import hockeyStick from '../assets/sports/hockey-stick.jpg'
import golfClub from '../assets/sports/golf-club.jpg'
import fitnessTracker from '../assets/sports/fitness-tracker.jpg'
import resistanceBands from '../assets/sports/resistance-bands.jpg'
import pullUpBar from '../assets/sports/pull-up-bar.jpg'
import trainingCones from '../assets/sports/training-cones.jpg'
import agilityLadder from '../assets/sports/agility-ladder.jpg'
import kneeSupport from '../assets/sports/knee-support.jpg'
import wristWraps from '../assets/sports/wrist-wraps.jpg'
import proteinShaker from '../assets/sports/protein-shaker.jpg'
import gymTowel from '../assets/sports/gym-towel.jpg'
import exerciseBall from '../assets/sports/exercise-ball.jpg'
import ankleWeights from '../assets/sports/ankle-weights.jpg'
import speedParachute from '../assets/sports/speed-parachute.jpg'
import jumpBox from '../assets/sports/jump-box.jpg'

const sportsImages = [
  football,
  basketball,
  cricketBat,
  tennisRacket,
  yogaMat,
  dumbbells,
  boxingGloves,
  skippingRope,
  baseballBat,
  runningShoes,
  gymBag,
  waterBottle,
  cyclingHelmet,
  badmintonRacket,
  tableTennisPaddle,
  hockeyStick,
  golfClub,
  fitnessTracker,
  resistanceBands,
  pullUpBar,
  trainingCones,
  agilityLadder,
  kneeSupport,
  wristWraps,
  proteinShaker,
  gymTowel,
  exerciseBall,
  ankleWeights,
  speedParachute,
  jumpBox
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