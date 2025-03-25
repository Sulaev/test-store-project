"use client";

import { ProductCard } from "../product-card";

export default function Products() {
  return (
    <div className="flex">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
