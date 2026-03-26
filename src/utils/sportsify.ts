// src/utils/sportsify.ts

import type { DisplayProduct } from '../types/DisplayProduct'

// ✅ 30 SPORTS ITEMS (name + description + image)
const sportsItems = [
  {
    title: 'Professional Football',
    description: 'High-quality football designed for training sessions and competitive matches.',
    category: 'Football',
    thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  },
  {
    title: 'Goalkeeper Gloves',
    description: 'Strong grip goalkeeper gloves for maximum control and protection.',
    category: 'Football',
    thumbnail: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg'
  },
  {
    title: 'Football Boots',
    description: 'Lightweight football boots designed for speed and comfort on the field.',
    category: 'Football',
    thumbnail: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  },
  {
    title: 'Cricket Bat',
    description: 'Premium cricket bat with excellent balance and powerful stroke performance.',
    category: 'Cricket',
    thumbnail: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg'
  },
  {
    title: 'Cricket Ball',
    description: 'Durable leather cricket ball suitable for professional matches.',
    category: 'Cricket',
    thumbnail: 'https://images.pexels.com/photos/163452/cricket-ball-red-leather-sports-163452.jpeg'
  },
  {
    title: 'Batting Gloves',
    description: 'Comfortable batting gloves offering strong grip and hand protection.',
    category: 'Cricket',
    thumbnail: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg'
  },
  {
    title: 'Dumbbell Set',
    description: 'Heavy-duty dumbbell set perfect for strength training and muscle building.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg'
  },
  {
    title: 'Yoga Mat',
    description: 'Soft and non-slip yoga mat designed for flexibility and comfort.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg'
  },
  {
    title: 'Treadmill',
    description: 'Advanced treadmill ideal for home cardio workouts and endurance training.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
  },
  {
    title: 'Basketball',
    description: 'Official size basketball with superior grip for indoor and outdoor play.',
    category: 'Basketball',
    thumbnail: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
  },
  {
    title: 'Basketball Hoop',
    description: 'Durable basketball hoop suitable for training and casual games.',
    category: 'Basketball',
    thumbnail: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Basketball Shoes',
    description: 'High-performance shoes designed for stability and quick movement.',
    category: 'Basketball',
    thumbnail: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  },
  {
    title: 'Tennis Racket',
    description: 'Lightweight racket offering better control and powerful shots.',
    category: 'Tennis',
    thumbnail: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
  },
  {
    title: 'Tennis Balls',
    description: 'Durable tennis balls with consistent bounce for all surfaces.',
    category: 'Tennis',
    thumbnail: 'https://images.pexels.com/photos/8224728/pexels-photo-8224728.jpeg'
  },
  {
    title: 'Tennis Shoes',
    description: 'Comfortable shoes designed for agility and grip on court.',
    category: 'Tennis',
    thumbnail: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  },
  {
    title: 'Skipping Rope',
    description: 'Lightweight skipping rope ideal for cardio workouts and endurance.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg'
  },
  {
    title: 'Resistance Bands',
    description: 'Flexible resistance bands for strength training and stretching.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg'
  },
  {
    title: 'Kettlebell',
    description: 'Durable kettlebell for strength training and full-body workouts.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg'
  },
  {
    title: 'Football Jersey',
    description: 'Breathable football jersey designed for comfort during matches.',
    category: 'Football',
    thumbnail: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg'
  },
  {
    title: 'Cricket Helmet',
    description: 'Protective cricket helmet designed for maximum safety and comfort.',
    category: 'Cricket',
    thumbnail: 'https://images.pexels.com/photos/163444/sport-cricket-ball-red-163444.jpeg'
  },
  {
    title: 'Basketball Net',
    description: 'Strong basketball net suitable for indoor and outdoor hoops.',
    category: 'Basketball',
    thumbnail: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg'
  },
  {
    title: 'Tennis Net',
    description: 'High-quality tennis net designed for training and matches.',
    category: 'Tennis',
    thumbnail: 'https://images.pexels.com/photos/573909/pexels-photo-573909.jpeg'
  },
  {
    title: 'Gym Gloves',
    description: 'Comfortable gym gloves providing grip and protection during workouts.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
  },
  {
    title: 'Football Shin Guards',
    description: 'Protective shin guards designed to prevent injuries during games.',
    category: 'Football',
    thumbnail: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg'
  },
  {
    title: 'Cricket Pads',
    description: 'Lightweight cricket pads offering excellent leg protection.',
    category: 'Cricket',
    thumbnail: 'https://images.pexels.com/photos/163444/sport-cricket-ball-red-163444.jpeg'
  },
  {
    title: 'Basketball Jersey',
    description: 'Stylish basketball jersey designed for performance and comfort.',
    category: 'Basketball',
    thumbnail: 'https://images.pexels.com/photos/1192069/pexels-photo-1192069.jpeg'
  },
  {
    title: 'Tennis Cap',
    description: 'Lightweight cap to protect from sun during tennis matches.',
    category: 'Tennis',
    thumbnail: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg'
  },
  {
    title: 'Foam Roller',
    description: 'Foam roller ideal for muscle recovery and flexibility exercises.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg'
  },
  {
    title: 'Water Bottle',
    description: 'Durable sports water bottle to keep you hydrated during workouts.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg'
  },
  {
    title: 'Sports Backpack',
    description: 'Spacious backpack designed to carry all your sports essentials.',
    category: 'Fitness',
    thumbnail: 'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg'
  }
]

// ✅ MAIN FUNCTION (NO ERROR)
export function sportsifyProducts(products: any[]): DisplayProduct[] {
  return products.map((p, index) => {
    const item = sportsItems[index % sportsItems.length]

    return {
      id: p.id,
      title: item.title,
      description: item.description,
      price: p.price,
      category: item.category,
      thumbnail: item.thumbnail
    }
  })
}