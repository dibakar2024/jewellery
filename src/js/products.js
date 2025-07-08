import ring1 from "../assets/images/ring1.png";
import necklace1 from "../assets/images/necklace1.png";
import earring1 from "../assets/images/earring1.png";
import earring2 from "../assets/images/earring2.png";
import earring3 from "../assets/images/earring3.png";
import earring4 from "../assets/images/earring4.png";
import bracelet1 from "../assets/images/bracelet1.png";
import chain1 from "../assets/images/chain.png";

const products = [
  {
    id: 1,
    name: "Gold Rings",
    category: "Ring",
    price: 38,
    originalPrice: 45,
    image: ring1,
    discount: "-15%",
    rating: 5,
    description: "Classic and captivating, these gold rings blend timeless elegance with modern style — perfect for everyday wear or memorable moments.",
  },
  {
    id: 2,
    name: "Gorgeous Silver Pendant",
    category: "Necklace",
    price: 12.5,
    image: necklace1,
    rating: 4.5,
    description: "Elegantly crafted, this Gorgeous Silver Pendant adds a timeless sparkle to any outfit. Perfect for both everyday wear and special occasions.",
  },
  {
    id: 3,
    name: "Glamour Crystal Earrings",
    category: "Earring",
    price: 15,
    image: earring1,
    rating: 4.5,
    description: "Dazzle with every turn—these Glamour Crystal Earrings feature shimmering crystals that add the perfect touch of sparkle to any look.",
  },
  {
    id: 4,
    name: "Bohemian Bracelet",
    category: "Bracelet",
    price: 70,
    image: bracelet1,
    rating: 5,
    description: "Embrace free-spirited charm with this Bohemian Bracelet, featuring earthy tones and artistic design for a relaxed, effortless vibe.",
  },
  {
    id: 5,
    name: "Men Gold Chain",
    category: "Necklace",
    price: 120,
    image: chain1,
    rating: 4.5,
    description: "Strong, sleek, and stylish — this Men’s Gold Chain makes a powerful statement with timeless appeal and modern edge.",
  },
  {
    id: 6,
    name: "Dolphin Gold Earrings",
    category: "Earring",
    price: 19,
    image: earring2,
    rating: 4.5,
    description: "Lightweight and eye-catching, they’re perfect for daily wear or as a unique gift for someone who loves marine life and fine jewelry.",
  },
  {
    id: 7,
    name: "Peacock Earrings",
    category: "Earring",
    price: 31,
    image: earring3,
    rating: 4.5,
    description: "Peacock Earrings add a touch of regal charm and artistic flair to any outfit. Perfect for festive occasions or bold everyday style.",
  },
  {
    id: 8,
    name: "Pretty Butterfly Earrings",
    category: "Earring",
    price: 29,
    image: earring4,
    rating: 4.5,
    description: "Delicate and graceful, these Pretty Butterfly Earrings capture the charm of fluttering wings in a stylish, lightweight design.",
  }
];

export default products;
