export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  hoverImage: string;
  category: string;
  status: "In Stock" | "Sold Out";
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "UFA-001",
    brand: "ACRONYM",
    name: "J1W-GTPL INTEROPS JACKET",
    price: "$1,240",
    originalPrice: "$1,550",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1544022613-e840050882e5?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
    status: "In Stock",
  },
  {
    id: "UFA-002",
    brand: "RICK OWENS",
    name: "GEOBASKET SNEAKERS BLACK/MILK",
    price: "$680",
    originalPrice: "$850",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    category: "Footwear",
    status: "In Stock",
  },
  {
    id: "UFA-003",
    brand: "HOMME PLISSÉ",
    name: "PLEATED STRAIGHT TRUOSERS",
    price: "$310",
    originalPrice: "$440",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop",
    category: "Pants",
    status: "Sold Out",
  },
  {
    id: "UFA-004",
    brand: "GOSHA RUBCHINSKIY",
    name: "OVERSIZED LOGO SWEATSHIRT",
    price: "$180",
    originalPrice: "$300",
    discount: "-40%",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
    status: "In Stock",
  },
  {
    id: "UFA-005",
    brand: "11 BY BBS",
    name: "BAMBA 2 HIGH SALOMON COLLAB",
    price: "$420",
    originalPrice: "$600",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop",
    category: "Footwear",
    status: "In Stock",
  },
  {
    id: "UFA-006",
    brand: "CAV EMPT",
    name: "NOISE PRINT CREWNECK",
    price: "$165",
    originalPrice: "$235",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
    status: "In Stock",
  },
  {
    id: "UFA-007",
    brand: "SALOMON",
    name: "XT-6 ADVANCED BLACK/PHANTOM",
    price: "$190",
    originalPrice: "$190",
    discount: "NEW",
    image: "https://images.unsplash.com/photo-1628413993904-94ecb60f1239?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    category: "Footwear",
    status: "In Stock",
  },
  {
    id: "UFA-008",
    brand: "STONE ISLAND",
    name: "NYLON METAL WAIST BAG",
    price: "$245",
    originalPrice: "$350",
    discount: "-30%",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1000&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    status: "In Stock",
  },
];
