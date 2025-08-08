"use client";

import { FavoritesProvider } from "@/context/favorites";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}