"use client";

import ProductCard from "../product-card";
import { useState } from "react";
import { Product } from "../types/productTypes";

const initialProducts: Product[] = [
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
  {
    id: 7,
    imageUrl: "/images/apple.jpg",
    name: "Apple",
    description: "Fresh organic apples from local farm",
    isFavorite: true,
  },
  {
    id: 8,
    imageUrl: "/images/banana.jpg",
    name: "Banana",
    description: "Sweet tropical bananas",
    isFavorite: false,
  },
  {
    id: 9,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 90999,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 99,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
  {
    id: 26,
    imageUrl: "/images/orange.jpg",
    name: "Orange",
    description: "Juicy citrus fruit",
    isFavorite: true,
  },
];

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const toggleFavorite = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
