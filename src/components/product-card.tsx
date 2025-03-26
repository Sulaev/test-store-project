import { Card } from "./ui/card";

interface Product {
  id?: number; // Добавил id для ключа (лучшая практика)
  imageUrl: string;
  name: string;
  description: string;
  isFavorite: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* <FavoriteIcon isActive={product.isFavorite} /> */}
    </Card>
  );
}
