import type { DisplayProduct } from '../types/DisplayProduct'
import type { Product } from '../types/product'

const sportsItems = [
  {
    title: 'Professional Football',
    description: 'High-quality football designed for training sessions and competitive matches.',
    category: 'Football',
    thumbnail: 'https://images.prodirectsport.com/ProductImages/Main/1025807_Main_1944890.jpg'
  },
  {
    title: 'Goalkeeper Gloves',
    description: 'Strong grip goalkeeper gloves for maximum control and protection.',
    category: 'Football',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.km1NEMhrDS2g4zOPqA8-mQHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Football Boots',
    description: 'Lightweight football boots designed for speed and comfort on the field.',
    category: 'Football',
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.czLSd1jyFIhvy1U18jgfPQHaE7?pid=Api&h=220&P=0'
  },
  {
    title: 'Cricket Bat',
    description: 'Premium cricket bat with excellent balance and powerful stroke performance.',
    category: 'Cricket',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.5Pj6GkkZHgI3gB2GyKYCzgHaEq?pid=Api&h=220&P=0'
  },
  {
    title: 'Cricket Ball',
    description: 'Durable all type of leather cricket ball suitable for professional matches.',
    category: 'Cricket',
    thumbnail: 'https://nwscdn.com/media/catalog/product/c/r/cricket-match-ball-family.jpg'
  },
  {
    title: 'Batting Gloves',
    description: 'Comfortable batting gloves offering strong grip and hand protection.',
    category: 'Cricket',
    thumbnail: 'https://m.media-amazon.com/images/I/71wWBtcygSL._AC_.jpg'
  },
  {
    title: 'Dumbbell Set',
    description: 'Heavy-duty dumbbell set perfect for strength training and muscle building.',
    category: 'Fitness',
    thumbnail: 'https://m.media-amazon.com/images/I/71FLWZgc1vL._AC_SL1500_.jpg'
  },
  {
    title: 'Yoga Mat',
    description: 'Soft and non-slip yoga mat designed for flexibility and comfort.',
    category: 'Fitness',
    thumbnail: 'https://as1.ftcdn.net/v2/jpg/02/24/84/82/1000_F_224848203_1o50r0XaFOKPURDFKl6XBkMe4LA9ztAq.jpg'
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
    thumbnail: 'https://as1.ftcdn.net/v2/jpg/05/26/61/84/1000_F_526618406_Glrp035vUBoxOU3apFEos5M1ejxrH2X7.jpg'
  },
  {
    title: 'Basketball Hoop',
    description: 'Durable basketball hoop suitable for training and casual games.',
    category: 'Basketball',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.Ov7BlSk1FW1dgJ1H23BSFwHaFz?pid=Api&h=220&P=0'
  },
  {
    title: 'Basketball Shoes',
    description: 'High-performance shoes designed for stability and quick movement.',
    category: 'Basketball',
    thumbnail: 'https://d3pnpe87i1fkwu.cloudfront.net/wp-content/uploads/2018/03/Outdoor-Basketball-Shoes-scaled.jpg'
  },
  {
    title: 'Tennis Racket',
    description: 'Lightweight racket offering better control and powerful shots.',
    category: 'Tennis',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.DDFtuWMNbbgcXI03Hc56jAHaFj?pid=Api&h=220&P=0'
  },
  {
    title: 'Tennis Balls',
    description: 'Durable tennis balls with consistent bounce for all surfaces.',
    category: 'Tennis',
    thumbnail: 'https://jooinn.com/images/tennis-ball-9.jpg'
  },
  {
    title: 'Tennis Shoes',
    description: 'Comfortable shoes designed for agility and grip on court.',
    category: 'Tennis',
    thumbnail: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f7dc3717e0a2465caf6a7827c364efef_9366/ID8560_HM11.jpg'
  },
  {
    title: 'Skipping Rope',
    description: 'Lightweight skipping rope ideal for cardio workouts and endurance.',
    category: 'Fitness',
    thumbnail: 'https://i5.walmartimages.com/seo/Jump-Ropes-for-Adults-Kids-Segmented-Skipping-Rope-Bulk-Soft-Beaded-Jumping-Ropes-for-Women-Men-Exercise-Training-Workout-Weight-Loss_fb481da1-8cc3-4e48-a82f-da052298e063.8188cbf35758007e53f66fa2c9e59b0c.jpeg'
  },
  {
    title: 'Resistance Bands',
    description: 'Flexible resistance bands for strength training and stretching.',
    category: 'Fitness',
    thumbnail: 'https://www.fitsimplify.com/wp-content/uploads/2018/06/bands1.jpg'
  },
  {
    title: 'Kettlebell',
    description: 'Durable kettlebell for strength training and full-body workouts.',
    category: 'Fitness',
    thumbnail: 'https://m.media-amazon.com/images/I/81mKJFfSONL._AC_SL1500_.jpg'
  },
  {
    title: 'Football Jersey',
    description: 'Breathable football jersey designed for comfort during matches.',
    category: 'Football',
    thumbnail: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb6c2822-2a8d-463a-8334-2e074807a55c/BUF+NIKE+TEAM+COL+PLYR+JSY.png'
  },
  {
    title: 'Cricket Helmet',
    description: 'Protective cricket helmet designed for maximum safety and comfort.',
    category: 'Cricket',
    thumbnail: 'https://procricket.com.au/wp-content/uploads/2024/07/Scud-Cricket-Helmet.jpg'
  },
  {
    title: 'Basketball Net',
    description: 'Strong basketball net suitable for indoor and outdoor hoops.',
    category: 'Basketball',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.MiihjMvVLZ7BmSQf1FUYWAHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Tennis Net',
    description: 'High-quality tennis net designed for training and matches.',
    category: 'Tennis',
    thumbnail: 'https://nwscdn.com/media/wysiwyg/3kf/vermont/Vermont_ProCourt_Mini_Tennis_Net_10ft_1.jpg'
  },
  {
    title: 'Gym Gloves',
    description: 'Comfortable gym gloves providing grip and protection during workouts.',
    category: 'Fitness',
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.sGjdv81cmpmuQItV6PtBGAHaGl?pid=Api&h=220&P=0'
  },
  {
    title: 'Football Shin Guards',
    description: 'Protective shin guards designed to prevent injuries during games.',
    category: 'Football',
    thumbnail: 'https://m.media-amazon.com/images/I/71WSzjp4T5L._AC_SL1500_.jpg'
  },
  {
    title: 'Cricket Pads',
    description: 'Lightweight cricket pads offering excellent leg protection.',
    category: 'Cricket',
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.x7UPPIOam0lxVtGt55LCOgHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Basketball Jersey',
    description: 'Stylish basketball jersey designed for performance and comfort.',
    category: 'Basketball',
    thumbnail: 'https://customized.com.ph/wp-content/uploads/2023/08/Basketball-Jersey-Front.jpg'
  },
  {
    title: 'Tennis Cap',
    description: 'Lightweight cap to protect from sun during tennis matches.',
    category: 'Tennis',
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.wz90SU6UoDynLZPjjMTXuAHaHv?pid=Api&h=220&P=0'
  },
  {
    title: 'Foam Roller',
    description: 'Foam roller ideal for muscle recovery and flexibility exercises.',
    category: 'Fitness',
    thumbnail: 'https://resources.sport-tiedje.com/bilder/taurus/kleingeraete/foam-roller/taurus-foam-roller-blau-001_1600.jpg'
  },
  {
    title: 'Water Bottle',
    description: 'Durable sports water bottle to keep you hydrated during workouts.',
    category: 'Fitness',
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.ogPNg1G04vK_kPnKADcr-gHaGf?pid=Api&h=220&P=0'
  },
  {
    title: 'Sports Backpack',
    description: 'Spacious backpack designed to carry all your sports essentials.',
    category: 'Fitness',
    thumbnail: 'https://m.media-amazon.com/images/I/71KOE6-f5uL._AC_SL1500_.jpg'
  }
]

export function sportsifyProducts(products: Product[]): DisplayProduct[] {
  return products.map((p, index) => {
    const item = sportsItems[index % sportsItems.length]

    return {
  id: p.id,
  title: item.title,
  description: item.description,
  price: p.price,
  category: item.category,
  thumbnail: item.thumbnail,
  images: [item.thumbnail],
  rating: p.rating
}
  })
}