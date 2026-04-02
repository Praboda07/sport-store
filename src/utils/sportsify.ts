import type { DisplayProduct } from '../types/DisplayProduct'
import type { Product } from '../types/product'

const sportsItems = [
  {
    title: 'Professional Football',
    description: 'High-quality football designed for training sessions and competitive matches.',
    category: 'Football',
    price: 8500,
    thumbnail: 'https://images.prodirectsport.com/ProductImages/Main/1025807_Main_1944890.jpg'
  },
  {
    title: 'Goalkeeper Gloves',
    description: 'Strong grip goalkeeper gloves for maximum control and protection.',
    category: 'Football',
    price: 6500,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.km1NEMhrDS2g4zOPqA8-mQHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Football Boots',
    description: 'Lightweight football boots designed for speed and comfort on the field.',
    category: 'Football',
    price: 15000,
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.czLSd1jyFIhvy1U18jgfPQHaE7?pid=Api&h=220&P=0'
  },
  {
    title: 'Cricket Bat',
    description: 'Premium cricket bat with excellent balance and powerful stroke performance.',
    category: 'Cricket',
    price: 22000,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.5Pj6GkkZHgI3gB2GyKYCzgHaEq?pid=Api&h=220&P=0'
  },
  {
    title: 'Cricket Ball',
    description: 'Durable leather cricket ball suitable for professional matches.',
    category: 'Cricket',
    price: 2500,
    thumbnail: 'https://nwscdn.com/media/catalog/product/c/r/cricket-match-ball-family.jpg'
  },
  {
    title: 'Batting Gloves',
    description: 'Comfortable batting gloves offering strong grip and hand protection.',
    category: 'Cricket',
    price: 5400,
    thumbnail: 'https://m.media-amazon.com/images/I/71wWBtcygSL._AC_.jpg'
  },
  {
    title: 'Dumbbell Set',
    description: 'Heavy-duty dumbbell set perfect for strength training and muscle building.',
    category: 'Fitness',
    price: 18000,
    thumbnail: 'https://m.media-amazon.com/images/I/71FLWZgc1vL._AC_SL1500_.jpg'
  },
  {
    title: 'Yoga Mat',
    description: 'Soft and non-slip yoga mat designed for flexibility and comfort.',
    category: 'Fitness',
    price: 4800,
    thumbnail: 'https://as1.ftcdn.net/v2/jpg/02/24/84/82/1000_F_224848203_1o50r0XaFOKPURDFKl6XBkMe4LA9ztAq.jpg'
  },
  {
    title: 'Treadmill',
    description: 'Advanced treadmill ideal for home cardio workouts and endurance training.',
    category: 'Fitness',
    price: 185000,
    thumbnail: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
  },
  {
    title: 'Basketball',
    description: 'Official size basketball with superior grip for indoor and outdoor play.',
    category: 'Basketball',
    price: 7000,
    thumbnail: 'https://as1.ftcdn.net/v2/jpg/05/26/61/84/1000_F_526618406_Glrp035vUBoxOU3apFEos5M1ejxrH2X7.jpg'
  },
  {
    title: 'Basketball Hoop',
    description: 'Durable basketball hoop suitable for training and casual games.',
    category: 'Basketball',
    price: 28000,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.Ov7BlSk1FW1dgJ1H23BSFwHaFz?pid=Api&h=220&P=0'
  },
  {
    title: 'Basketball Shoes',
    description: 'High-performance shoes designed for stability and quick movement.',
    category: 'Basketball',
    price: 16500,
    thumbnail: 'https://d3pnpe87i1fkwu.cloudfront.net/wp-content/uploads/2018/03/Outdoor-Basketball-Shoes-scaled.jpg'
  },
  {
    title: 'Tennis Racket',
    description: 'Lightweight racket offering better control and powerful shots.',
    category: 'Tennis',
    price: 12000,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.DDFtuWMNbbgcXI03Hc56jAHaFj?pid=Api&h=220&P=0'
  },
  {
    title: 'Tennis Balls',
    description: 'Durable tennis balls with consistent bounce for all surfaces.',
    category: 'Tennis',
    price: 3200,
    thumbnail: 'https://jooinn.com/images/tennis-ball-9.jpg'
  },
  {
    title: 'Tennis Shoes',
    description: 'Comfortable shoes designed for agility and grip on court.',
    category: 'Tennis',
    price: 14500,
    thumbnail: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/f7dc3717e0a2465caf6a7827c364efef_9366/ID8560_HM11.jpg'
  },
  {
    title: 'Skipping Rope',
    description: 'Lightweight skipping rope ideal for cardio workouts and endurance.',
    category: 'Fitness',
    price: 2100,
    thumbnail: 'https://i5.walmartimages.com/seo/Jump-Ropes-for-Adults-Kids-Segmented-Skipping-Rope-Bulk-Soft-Beaded-Jumping-Ropes-for-Women-Men-Exercise-Training-Workout-Weight-Loss_fb481da1-8cc3-4e48-a82f-da052298e063.8188cbf35758007e53f66fa2c9e59b0c.jpeg'
  },
  {
    title: 'Resistance Bands',
    description: 'Flexible resistance bands for strength training and stretching.',
    category: 'Fitness',
    price: 3900,
    thumbnail: 'https://www.fitsimplify.com/wp-content/uploads/2018/06/bands1.jpg'
  },
  {
    title: 'Kettlebell',
    description: 'Durable kettlebell for strength training and full-body workouts.',
    category: 'Fitness',
    price: 9600,
    thumbnail: 'https://m.media-amazon.com/images/I/81mKJFfSONL._AC_SL1500_.jpg'
  },
  {
    title: 'Football Jersey',
    description: 'Breathable football jersey designed for comfort during matches.',
    category: 'Football',
    price: 5800,
    thumbnail: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb6c2822-2a8d-463a-8334-2e074807a55c/BUF+NIKE+TEAM+COL+PLYR+JSY.png'
  },
  {
    title: 'Cricket Helmet',
    description: 'Protective cricket helmet designed for maximum safety and comfort.',
    category: 'Cricket',
    price: 11000,
    thumbnail: 'https://procricket.com.au/wp-content/uploads/2024/07/Scud-Cricket-Helmet.jpg'
  },
  {
    title: 'Basketball Net',
    description: 'Strong basketball net suitable for indoor and outdoor hoops.',
    category: 'Basketball',
    price: 1800,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.MiihjMvVLZ7BmSQf1FUYWAHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Tennis Net',
    description: 'High-quality tennis net designed for training and matches.',
    category: 'Tennis',
    price: 15000,
    thumbnail: 'https://nwscdn.com/media/wysiwyg/3kf/vermont/Vermont_ProCourt_Mini_Tennis_Net_10ft_1.jpg'
  },
  {
    title: 'Gym Gloves',
    description: 'Comfortable gym gloves providing grip and protection during workouts.',
    category: 'Fitness',
    price: 2600,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.sGjdv81cmpmuQItV6PtBGAHaGl?pid=Api&h=220&P=0'
  },
  {
    title: 'Football Shin Guards',
    description: 'Protective shin guards designed to prevent injuries during games.',
    category: 'Football',
    price: 4300,
    thumbnail: 'https://m.media-amazon.com/images/I/71WSzjp4T5L._AC_SL1500_.jpg'
  },
  {
    title: 'Cricket Pads',
    description: 'Lightweight cricket pads offering excellent leg protection.',
    category: 'Cricket',
    price: 12500,
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.x7UPPIOam0lxVtGt55LCOgHaHa?pid=Api&h=220&P=0'
  },
  {
    title: 'Basketball Jersey',
    description: 'Stylish basketball jersey designed for performance and comfort.',
    category: 'Basketball',
    price: 6200,
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.h1LGWLef87zK_l3SV31VjAHaJQ?pid=Api&h=220&P=0'
  },
  {
    title: 'Tennis Cap',
    description: 'Lightweight cap to protect from sun during tennis matches.',
    category: 'Tennis',
    price: 2400,
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.wz90SU6UoDynLZPjjMTXuAHaHv?pid=Api&h=220&P=0'
  },
  {
    title: 'Foam Roller',
    description: 'Foam roller ideal for muscle recovery and flexibility exercises.',
    category: 'Fitness',
    price: 5200,
    thumbnail: 'https://resources.sport-tiedje.com/bilder/taurus/kleingeraete/foam-roller/taurus-foam-roller-blau-001_1600.jpg'
  },
  {
    title: 'Water Bottle',
    description: 'Durable sports water bottle to keep you hydrated during workouts.',
    category: 'Fitness',
    price: 1900,
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.ogPNg1G04vK_kPnKADcr-gHaGf?pid=Api&h=220&P=0'
  },
  {
    title: 'Sports Backpack',
    description: 'Spacious backpack designed to carry all your sports essentials.',
    category: 'Fitness',
    price: 8900,
    thumbnail: 'https://m.media-amazon.com/images/I/71KOE6-f5uL._AC_SL1500_.jpg'
  },

  {
    title: 'Badminton Racket',
    description: 'Lightweight badminton racket built for speed, balance, and accurate shots.',
    category: 'Badminton',
    price: 2800,
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.nfbwQifrCS65YnInyh0dUQHaHa?pid=Api&P=0&h=220'
  },
  {
    title: 'Badminton Shuttlecock Set',
    description: 'Premium shuttlecock set for practice sessions and competitive play.',
    category: 'Badminton',
    price: 1200,
    thumbnail: 'https://images.nexusapp.co/assets/93/18/b7/235918803.jpg'
  },
  {
    title: 'Volleyball',
    description: 'Durable volleyball with soft touch and excellent control for indoor matches.',
    category: 'Volleyball',
    price: 2800,
    thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.xlJsYOWmiG9QC7JktzbklAHaHa?pid=Api&P=0&h=220'
  },
  {
    title: 'Volleyball Knee Pads',
    description: 'Comfortable knee pads designed for support and protection during play.',
    category: 'Volleyball',
    price: 1600,
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.ka8FXmyXbS8Nif5CDzcIgwHaG1?pid=Api&P=0&h=220'
  },
  {
    title: 'Baseball Bat',
    description: 'Strong aluminum baseball bat for practice and match performance.',
    category: 'Baseball',
    price: 13500,
    thumbnail: 'https://batsplus.com/wp-content/uploads/2023/09/2024-Louisville-Slugger-Atlas-BBCOR-3-Baseball-Bat.png'
  },
  {
    title: 'Baseball Glove',
    description: 'Premium baseball glove built for comfort, grip, and durability.',
    category: 'Baseball',
    price: 8200,
    thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.Ep8mDsoVSoXV17qR6eguZQHaE9?pid=Api&P=0&h=220'
  },
  {
    title: 'Table Tennis Paddle',
    description: 'Professional paddle with excellent grip and spin control.',
    category: 'Table Tennis',
    price: 3400,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.HokcCvOFd6YV5UqRgp3A8AHaHa?pid=Api&P=0&h=220'
  },
  {
    title: 'Table Tennis Ball Set',
    description: 'Tournament-quality ping pong balls for training and matches.',
    category: 'Table Tennis',
    price: 1600,
    thumbnail: 'https://i5.walmartimages.com/seo/2-PACK-Franklin-38Mm-One-Star-White-Table-Tennis-Balls-6-pkg-total-of-12-balls_da240b36-3840-4446-bd67-735420c8d5b6.3f60180f38748e307ee0e6dda09e0683.jpeg'
  },
  {
    title: 'Boxing Punching Bag',
    description: 'Heavy-duty punching bag for boxing, cardio, and strength training.',
    category: 'Boxing',
    price: 32000,
    thumbnail: 'https://www.proboxingequipment.com/assets/images/blackpunchingbag.jpg'
  },
  {
    title: 'Boxing Head Guard',
    description: 'Protective head guard designed for safe sparring and training.',
    category: 'Boxing',
    price: 6900,
    thumbnail: 'https://tse4.mm.bing.net/th/id/OIP.oC1ogdFiYvrjnHc2L0XdzQHaHa?pid=Api&P=0&h=220'
  },
  {
    title: 'Cycling Helmet',
    description: 'Aerodynamic cycling helmet with superior comfort and ventilation.',
    category: 'Cycling',
    price: 4800,
    thumbnail: 'https://cyclingroad.com/wp-content/uploads/2022/10/Sweet-Protection-Falconer-Helmet.png'
  },
  {
    title: 'Cycling Water Bottle',
    description: 'Lightweight bottle designed to fit perfectly in bike bottle cages.',
    category: 'Cycling',
    price: 2200,
    thumbnail: 'https://cdn.mos.cms.futurecdn.net/yCbLFAfSZxcQgDCQG3QUCQ-1600-80.jpg'
  },
  {
    title: 'Swimming Goggles',
    description: 'Anti-fog swimming goggles with comfortable fit and clear vision.',
    category: 'Swimming',
    price: 3400,
    thumbnail: 'https://media.cnn.com/api/v1/images/stellar/prod/speedo-unisex-child-swim-goggles-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill'
  },
  {
    title: 'Swimming Cap',
    description: 'Flexible swim cap designed for comfort and reduced drag in water.',
    category: 'Swimming',
    price: 1800,
    thumbnail: 'https://i5.walmartimages.com/asr/e89b1621-99cd-46ad-9c1a-e0c784dcd8e1_1.7d0c480179449850a698e3074fa049e5.jpeg'
  },
  {
    title: 'Running Shorts',
    description: 'Breathable running shorts made for speed, comfort, and flexibility.',
    category: 'Running',
    price: 1900,
    thumbnail: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/d1d6d838-beb0-462f-8169-eef5580135d6/W+NK+TEMPO+SHORT.png'
  },
  {
    title: 'Running Jacket',
    description: 'Lightweight sports jacket perfect for outdoor runs and training.',
    category: 'Running',
    price: 5200,
    thumbnail: 'https://contents.mediadecathlon.com/p1276210/k$28fb990f08f892ba57b3c549b1f35a0d/picture.jpg?format=auto&f=3000x0'
  },
  {
    title: 'Fitness Bench',
    description: 'Adjustable workout bench for home and gym strength sessions.',
    category: 'Fitness',
    price: 42000,
    thumbnail: 'https://m.media-amazon.com/images/I/61F+Z9cRTfL._AC_SL1500_.jpg'
  },
  {
    title: 'Pull-Up Bar',
    description: 'Strong pull-up bar designed for upper-body workouts at home.',
    category: 'Fitness',
    price: 9800,
    thumbnail: 'https://m.media-amazon.com/images/I/613bEZWrXoL._AC_SL1500_.jpg'
  },
  {
    title: 'Hockey Stick',
    description: 'Durable hockey stick with balanced control and solid striking power.',
    category: 'Hockey',
    price: 8200,
    thumbnail: 'https://edsports.ie/wp-content/uploads/cm/data/product-2098/Adidas-LX24-Carbon-Composite-Hockey-Stick-2017.jpg'
  },
  {
    title: 'Hockey Ball',
    description: 'Professional hockey ball suitable for training and competitive use.',
    category: 'Hockey',
    price: 1100,
    thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.GkSCHFfTNYE-J--dNb8O_QHaFj?pid=Api&P=0&h=220'
  }
]

export function sportsifyProducts(products: Product[]): DisplayProduct[] {
  return products.map((p, index) => {
    const item = sportsItems[index % sportsItems.length]

    return {
      id: p.id,
      title: item.title,
      description: item.description,
      price: item.price,
      category: item.category,
      thumbnail: item.thumbnail,
      images: [item.thumbnail],
      rating: p.rating,
      stock: p.stock,
      brand: p.brand
    }
  })
}