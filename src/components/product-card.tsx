import { Card } from "./ui/card";

export function ProductCard() {
  return (
    <Card>
      <div className="flex flex-col">
        <div>Image</div>
        <div>
          <div>Name + desc</div>
          <div>Price + LikeButton</div>
        </div>
      </div>
    </Card>
  );
}
