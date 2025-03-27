import { Card, CardContent } from "./ui/card";
import { Heart, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "./types/productTypes";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onToggleFavorite: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ProductCard({
  product,
  onToggleFavorite,
  onDelete,
}: ProductCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleActionClick = (e: MouseEvent, action: "favorite" | "delete") => {
    e.stopPropagation();
    if (action === "favorite") {
      onToggleFavorite(product.id);
    } else {
      onDelete(product.id);
    }
  };

  return (
    <Card>
      <div
        className="flex flex-col h-90 w-70 justify-between"
        onClick={handleCardClick}
      >
        <div className="relative pt-[75%] bg-gray-100">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority
              unoptimized={true}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span>No Image</span>
            </div>
          )}
        </div>
        <CardContent>
          <div className="flex justify-between flex-col">
            <div>
              <h3>{product.title}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.body}
              </p>
            </div>
            <div>
              <Button
                onClick={(e) => handleActionClick(e, "favorite")}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={
                  product.isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                {product.isFavorite ? (
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                ) : (
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                )}
              </Button>

              <Button
                onClick={(e) => handleActionClick(e, "delete")}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Delete product"
              >
                <TrashIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
