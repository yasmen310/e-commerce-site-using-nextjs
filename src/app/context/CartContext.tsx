"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();

  const { data: cart = [] } = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      }
      return [];
    },
    initialData: [],
  });

  
  const updateCart = useMutation({
    mutationFn: (newCart: CartItem[]) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    },
    onMutate: async (newCart) => {
      queryClient.setQueryData(["cart"], newCart);
    },
  });

  const addToCart = (product: CartItem) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart.mutate(updatedCart);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart.mutate(updatedCart);
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart.mutate(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
