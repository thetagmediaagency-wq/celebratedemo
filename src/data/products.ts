import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";
import watch4 from "@/assets/watch-4.jpg";
import watch5 from "@/assets/watch-5.jpg";
import watch6 from "@/assets/watch-6.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  isBestseller?: boolean;
  specifications: {
    movement: string;
    caseMaterial: string;
    caseSize: string;
    waterResistance: string;
    strapMaterial: string;
    crystalType: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sovereign Chronograph",
    slug: "sovereign-chronograph",
    price: 12999,
    compareAtPrice: 18999,
    image: watch1,
    images: [watch1, watch1, watch1],
    category: "Chronograph",
    description: "A masterpiece of precision engineering. The Sovereign Chronograph combines timeless elegance with modern functionality, featuring a Japanese quartz movement and premium stainless steel construction.",
    isBestseller: true,
    specifications: {
      movement: "Japanese Quartz",
      caseMaterial: "316L Stainless Steel",
      caseSize: "42mm",
      waterResistance: "5 ATM",
      strapMaterial: "Stainless Steel Bracelet",
      crystalType: "Sapphire Crystal",
    },
    inStock: true,
  },
  {
    id: "2",
    name: "Aurelia Rose Gold",
    slug: "aurelia-rose-gold",
    price: 14999,
    compareAtPrice: 21999,
    image: watch2,
    images: [watch2, watch2, watch2],
    category: "Dress",
    description: "Elevate your presence with the Aurelia Rose Gold. Crafted with meticulous attention to detail, this timepiece features a stunning rose gold finish that commands attention.",
    isBestseller: true,
    specifications: {
      movement: "Swiss Quartz",
      caseMaterial: "Rose Gold PVD Coating",
      caseSize: "40mm",
      waterResistance: "3 ATM",
      strapMaterial: "Rose Gold Bracelet",
      crystalType: "Sapphire Crystal",
    },
    inStock: true,
  },
  {
    id: "3",
    name: "Noir Classique",
    slug: "noir-classique",
    price: 9999,
    compareAtPrice: 14999,
    image: watch3,
    images: [watch3, watch3, watch3],
    category: "Classic",
    description: "The Noir Classique embodies understated sophistication. With its all-black aesthetic and premium leather strap, it's the perfect companion for the modern gentleman.",
    specifications: {
      movement: "Japanese Quartz",
      caseMaterial: "Black PVD Steel",
      caseSize: "41mm",
      waterResistance: "5 ATM",
      strapMaterial: "Genuine Leather",
      crystalType: "Mineral Crystal",
    },
    inStock: true,
  },
  {
    id: "4",
    name: "Mechanism Elite",
    slug: "mechanism-elite",
    price: 19999,
    compareAtPrice: 28999,
    image: watch4,
    images: [watch4, watch4, watch4],
    category: "Skeleton",
    description: "Witness the art of horology through the transparent dial of the Mechanism Elite. This skeleton watch showcases intricate mechanical beauty with a bold gold case.",
    isBestseller: true,
    specifications: {
      movement: "Automatic Mechanical",
      caseMaterial: "Gold PVD Steel",
      caseSize: "44mm",
      waterResistance: "3 ATM",
      strapMaterial: "Premium Leather",
      crystalType: "Sapphire Crystal",
    },
    inStock: true,
  },
  {
    id: "5",
    name: "Oceanic Diver",
    slug: "oceanic-diver",
    price: 11999,
    compareAtPrice: 16999,
    image: watch5,
    images: [watch5, watch5, watch5],
    category: "Diver",
    description: "Built for adventure, designed for elegance. The Oceanic Diver features a stunning blue dial with superior water resistance, perfect for those who demand both style and substance.",
    specifications: {
      movement: "Japanese Automatic",
      caseMaterial: "316L Stainless Steel",
      caseSize: "43mm",
      waterResistance: "20 ATM",
      strapMaterial: "Stainless Steel Bracelet",
      crystalType: "Sapphire Crystal",
    },
    inStock: true,
  },
  {
    id: "6",
    name: "Heritage Green",
    slug: "heritage-green",
    price: 13999,
    compareAtPrice: 19999,
    image: watch6,
    images: [watch6, watch6, watch6],
    category: "Dress",
    description: "The Heritage Green pays homage to classic watchmaking with a contemporary twist. Its rich green dial paired with a tan leather strap creates an unforgettable statement.",
    specifications: {
      movement: "Swiss Quartz",
      caseMaterial: "Gold PVD Steel",
      caseSize: "40mm",
      waterResistance: "5 ATM",
      strapMaterial: "Italian Leather",
      crystalType: "Sapphire Crystal",
    },
    inStock: true,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const calculateDiscount = (price: number, compareAtPrice?: number): number => {
  if (!compareAtPrice) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
};
