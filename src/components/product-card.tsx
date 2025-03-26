import { Card } from "./ui/card";

interface Product {
  id?: number;
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
      <div className="flex flex-col h-90 w-70">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {/* <FavoriteIcon isActive={product.isFavorite} /> */}
      </div>
    </Card>
  );
}
