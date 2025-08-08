"use client";

import { FavoritesProvider } from "@/context/favorites";
import { CartProvider } from "@/context/cart";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FavoritesProvider>
      <CartProvider>{children}</CartProvider>
    </FavoritesProvider>
  );
}
