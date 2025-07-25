export const products = [
  {
    image: "/images/product1.jpg",
    name: "iPhone 14 Pro",
    sku: "SKU-IPHONE-1",
    category: "Smartphones",
    stock: 15,
    price: 124999
  },
  {
    image: "/images/product2.jpg",
    name: "MacBook Air M2",
    sku: "SKU-MACBOOK-2",
    category: "Laptops",
    stock: 5,
    price: 99999
  },
  {
    image: "/images/product3.jpg",
    name: "iPad Pro",
    sku: "SKU-IPADPR-3",
    category: "Tablets",
    stock: 10,
    price: 74999
  },
  {
    image: "/images/product4.jpg",
    name: "AirPods Pro",
    sku: "SKU-AIRPOD-4",
    category: "Accessories",
    stock: 50,
    price: 24999
  },
  {
    image: "/images/product5.jpg",
    name: "Apple Watch Series 9",
    sku: "SKU-WATCHS-5",
    category: "Wearables",
    stock: 20,
    price: 39999
  },
  {
    image: "/images/product6.jpg",
    name: "Samsung Galaxy S23",
    sku: "SKU-SAMSUN-6",
    category: "Smartphones",
    stock: 30,
    price: 79999
  },
  {
    image: "/images/product7.jpg",
    name: "Dell XPS 13",
    sku: "SKU-DELLXP-7",
    category: "Laptops",
    stock: 12,
    price: 84999
  },
  {
    image: "/images/product8.jpg",
    name: "Lenovo Legion 5",
    sku: "SKU-LENOVO-8",
    category: "Laptops",
    stock: 8,
    price: 75999
  },
  {
    image: "/images/product9.jpg",
    name: "Sony WH-1000XM5",
    sku: "SKU-SONYWH-9",
    category: "Accessories",
    stock: 35,
    price: 29999
  },
  {
    image: "/images/product10.jpg",
    name: "Canon EOS R5",
    sku: "SKU-CANONE-10",
    category: "Cameras",
    stock: 3,
    price: 189999
  },

  // Duplicating with slight variations for rest of the 50
  {
    image: "/images/product1.jpg",
    name: "iPhone 14 Pro Max",
    sku: "SKU-IPHONE-11",
    category: "Smartphones",
    stock: 25,
    price: 134999
  },
  {
    image: "/images/product2.jpg",
    name: "MacBook Pro M2",
    sku: "SKU-MACPRO-12",
    category: "Laptops",
    stock: 2,
    price: 159999
  },
  {
    image: "/images/product3.jpg",
    name: "iPad Air",
    sku: "SKU-IPADAIR-13",
    category: "Tablets",
    stock: 9,
    price: 58999
  },
  {
    image: "/images/product4.jpg",
    name: "AirPods Max",
    sku: "SKU-AIRMAX-14",
    category: "Accessories",
    stock: 15,
    price: 59999
  },
  {
    image: "/images/product5.jpg",
    name: "Apple Watch Ultra",
    sku: "SKU-WATCHU-15",
    category: "Wearables",
    stock: 6,
    price: 89999
  },
  {
    image: "/images/product6.jpg",
    name: "Samsung Galaxy Z Fold",
    sku: "SKU-SAMZFLD-16",
    category: "Smartphones",
    stock: 7,
    price: 149999
  },
  {
    image: "/images/product7.jpg",
    name: "Dell Inspiron",
    sku: "SKU-DELLIN-17",
    category: "Laptops",
    stock: 13,
    price: 67999
  },
  {
    image: "/images/product8.jpg",
    name: "Lenovo Yoga Slim",
    sku: "SKU-LENYOGA-18",
    category: "Laptops",
    stock: 4,
    price: 84999
  },
  {
    image: "/images/product9.jpg",
    name: "Sony WF-1000XM4",
    sku: "SKU-SONYWF-19",
    category: "Accessories",
    stock: 18,
    price: 17999
  },
  {
    image: "/images/product10.jpg",
    name: "Canon EOS R6",
    sku: "SKU-CANONE-20",
    category: "Cameras",
    stock: 5,
    price: 139999
  },

  // Entries 21 to 50 (Repeat with other variants or mix more random products)
  ...Array.from({ length: 30 }, (_, i) => ({
    image: `/images/product${(i % 10) + 1}.jpg`,
    name: `Product ${i + 21}`,
    sku: `SKU-RND-${i + 21}`,
    category: ["Smartphones", "Laptops", "Accessories", "Cameras", "Tablets", "Wearables"][i % 6],
    stock: Math.floor(Math.random() * 100),
    price: Math.floor(Math.random() * 50000 + 50000)
  }))
];

