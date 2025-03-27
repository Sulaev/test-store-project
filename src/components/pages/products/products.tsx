"use client";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useProductsStore } from "@/store/useProductsStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const {
    loading,
    error,
    fetchProducts,
    toggleFavorite,
    removeProduct,
    filteredProducts,
  } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`px-4 py-2 rounded-md ${
              showOnlyFavorites ? "bg-red-400 text-white" : "bg-gray-200"
            }`}
          >
            {showOnlyFavorites ? "Show All" : "Show Favorites"}
          </Button>
          <Link
            href="/create-product"
            className="px-4 py-2 text-white rounded-md"
          >
            Create Product
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts(showOnlyFavorites).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleFavorite={toggleFavorite}
            onDelete={removeProduct}
          />
        ))}
      </div>
    </div>
  );
}
