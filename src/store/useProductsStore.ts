import { create } from "zustand";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../api/productsApi";
import { Product } from "@/components/types/productTypes";

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, "id">) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;
  toggleFavorite: (id: number) => void;
  filteredProducts: (showOnlyFavorites: boolean) => Product[];
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const products = await fetchProducts();
      set({ products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
    }
  },

  addProduct: async (product) => {
    set({ loading: true });
    try {
      const newProduct = await createProduct(product);
      set((state) => ({
        products: [...state.products, newProduct],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to create product", loading: false });
    }
  },

  removeProduct: async (id) => {
    set({ loading: true });
    try {
      await deleteProduct(id);
      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to delete product", loading: false });
    }
  },

  toggleFavorite: (id) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      ),
    }));
  },

  filteredProducts: (showOnlyFavorites) => {
    return showOnlyFavorites
      ? get().products.filter((product) => product.isFavorite)
      : get().products;
  },
}));
