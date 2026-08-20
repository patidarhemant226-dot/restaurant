export const cuisines = [
  { name: "All", image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85" },
  { name: "Indian", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85" },
  { name: "Chinese", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85" },
  { name: "Italian", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85" },
  { name: "Asian", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85" },
  { name: "Continental", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85" },
  { name: "Café", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" },
  { name: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" },
  { name: "Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85" },
] as const;

export const dishes = [
  { name: "Butter Paneer", cuisine: "Indian", description: "Silken paneer in a velvet tomato gravy", price: "₹320", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85" },
  { name: "Schezwan Noodles", cuisine: "Chinese", description: "Wok-tossed noodles, greens and fire", price: "₹240", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85" },
  { name: "Truffle Tagliolini", cuisine: "Italian", description: "Fresh pasta, parmesan and black truffle", price: "₹420", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85" },
  { name: "Burrata Pizza", cuisine: "Italian", description: "Charred crust, tomato, basil and burrata", price: "₹440", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85" },
  { name: "Miso Ramen", cuisine: "Asian", description: "Slow broth, greens, egg and sesame", price: "₹390", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85" },
  { name: "Tiramisu", cuisine: "Desserts", description: "Mascarpone, espresso and cocoa", price: "₹260", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85" },
  { name: "Cappuccino", cuisine: "Café", description: "Double espresso, silky steamed milk", price: "₹180", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1000&q=85" },
  { name: "Pistachio Croissant", cuisine: "Café", description: "Laminated pastry, pistachio cream", price: "₹220", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85" },
  { name: "Berry Fizz", cuisine: "Drinks", description: "Seasonal berries, citrus and soda", price: "₹210", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85" },
  { name: "Mango Chilli Cooler", cuisine: "Drinks", description: "Alphonso, lime, chilli and mint", price: "₹230", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=1000&q=85" },
  { name: "Basque Cheesecake", cuisine: "Desserts", description: "Burnt top, soft centre, sea salt", price: "₹280", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85" },
] as const;

export const housePours = [
  { name: "Cappuccino", note: "Espresso · Silk · Warmth", price: "₹180", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85" },
  { name: "Berry Fizz", note: "Berries · Citrus · Sparkle", price: "₹210", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85" },
  { name: "Mango Chilli", note: "Alphonso · Lime · Mint", price: "₹230", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=900&q=85" },
];

export const menuItems = [
  ["Butter Paneer", "Indian", "Creamy tomato gravy, paneer and aromatic spices", "₹320"],
  ["Paneer Tikka", "Indian", "Charred paneer, peppers and house spices", "₹280"],
  ["Dal Makhani", "Indian", "Slow-cooked black lentils, butter and cream", "₹260"],
  ["Schezwan Noodles", "Chinese", "Wok-tossed noodles, vegetables and Schezwan sauce", "₹240"],
  ["Chilli Paneer", "Chinese", "Crispy paneer, peppers and chilli glaze", "₹280"],
  ["Truffle Tagliolini", "Italian", "Fresh pasta, parmesan and truffle", "₹420"],
  ["Burrata Pizza", "Italian", "Burrata, tomato, basil and olive oil", "₹440"],
  ["Pesto Pasta", "Italian", "Basil pesto, parmesan and toasted pine nuts", "₹360"],
  ["Cappuccino", "Café", "Double espresso, silky steamed milk", "₹180"],
  ["Pistachio Croissant", "Café", "Laminated pastry and pistachio cream", "₹220"],
  ["Tiramisu", "Desserts", "Mascarpone, espresso and cocoa", "₹260"],
  ["Basque Cheesecake", "Desserts", "Burnt top, soft centre and sea salt", "₹280"],
  ["Berry Fizz", "Drinks", "Seasonal berries, citrus and soda", "₹210"],
  ["Mango Chilli Cooler", "Drinks", "Alphonso, lime, chilli and mint", "₹230"],
] as const;

export const gallery = [
  ["https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85", "Green table"],
  ["https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85", "Mediterra dining room"],
  ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85", "Morning coffee"],
  ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85", "Fresh pasta"],
  ["https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85", "Indian comfort"],
  ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85", "Sweet finish"],
];
