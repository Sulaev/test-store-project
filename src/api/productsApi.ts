import { Product } from "@/components/types/productTypes";
import axios from "axios";

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
const PRODUCTS_API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const catsResponse = await axios.get(CAT_API_URL, {
    params: { limit: 10 },
  });

  const productsResponse = await axios.get(PRODUCTS_API_URL);

  return catsResponse.data.map((cat: { url: string }, index: number) => ({
    id: index + 1,
    title: productsResponse.data.products[index].title || `Cat №${index + 1}`,
    body: productsResponse.data.products[index].description || "Cute cat",
    imageUrl: cat.url,
    isFavorite: false,
  }));
};
