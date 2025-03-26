import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "./types/productTypes";

interface ProductCardProps {
  product: Product;
  onToggleFavorite: (id: number) => void;
}

export default function ProductCard({
  product,
  onToggleFavorite,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleFavorite = () => {
    onToggleFavorite(product.id);
  };

  return (
    <Card>
      <div className="flex flex-col h-90 w-70 justify-between">
        <div>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <CardContent>
          <div className="flex justify-between flex-col">
            <div>
              <h3>{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.description}
              </p>
            </div>
            <div>
              <Button
                onClick={handleToggleFavorite}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mt-4 p-2 w-full hover:bg-gray-100 transition-colors"
                aria-label={
                  product.isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                {product.isFavorite ? (
                  <div className="flex gap-2 items-center">
                    <Heart
                      className={`w-5 h-5 ${
                        isHovered
                          ? "text-gray-400 fill-gray-400"
                          : "text-red-500 fill-red-500"
                      } transition-colors`}
                    />
                    <p>Remove from favorites?</p>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <HeartOff className="w-5 h-5 text-gray-400" />
                    <p>Add to favorites?</p>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
