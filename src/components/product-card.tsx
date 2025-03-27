import { Card, CardContent } from "./ui/card";
import { Heart, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Product } from "./types/productTypes";
import Image from "next/image";
import Link from "next/link";

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
  const url = `/products/${product.id}`;

  const handleFavoriteClick = () => {
    onToggleFavorite(product.id);
  };

  const handleDeleteClick = () => {
    onDelete(product.id);
  };

  return (
    <Card>
      <Link href={url}>
        <div className="flex flex-col justify-between">
          <div className="p-3">
            <div className="relative aspect-square">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized={true}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>No Image</span>
                </div>
              )}
            </div>
          </div>
          <CardContent>
            <div className="flex justify-between flex-col">
              <div>
                <h3>{product.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {product.body}
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Link>
      <div className="flex justify-between px-3">
        <Button
          variant={"ghost"}
          onClick={() => handleFavoriteClick()}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={
            product.isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {product.isFavorite ? (
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          ) : (
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
          )}
        </Button>

        <Button
          variant={"ghost"}
          onClick={() => handleDeleteClick()}
          className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete product"
        >
          <TrashIcon className="w-5 h-5" />
          <div>Delete?</div>
        </Button>
      </div>
    </Card>
  );
}
