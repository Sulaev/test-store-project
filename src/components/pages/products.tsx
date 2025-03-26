"use client";

import ProductCard from "../product-card";

const products = [
  {
    id: 1,
    imageUrl: "/images/apple.jpg",
    name: "Apple",
    description: "Fresh organic apples from local farm",
    isFavorite: true,
  },
  {
    id: 2,
    imageUrl: "/images/banana.jpg",
    name: "Banana",
    description: "Sweet tropical bananas",
    isFavorite: false,
  },
  {
    id: 3,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 4,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 5,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 6,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
