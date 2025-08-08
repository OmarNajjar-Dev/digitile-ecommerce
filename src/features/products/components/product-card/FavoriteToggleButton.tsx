"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/favorites";
import { FavoriteToggleButtonProps } from "./FavoriteToggleButton.types";

export default function FavoriteToggleButton({ productId, className }: FavoriteToggleButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(productId);

  return (
    <button
      type="button"
      aria-pressed={fav}
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleFavorite(productId)}
      className={className}
    >
      <Heart
        className={`h-5 w-5 ${
          fav
            ? "text-secondary fill-secondary"
            : "text-gray-500 hover:text-secondary transition-colors duration-300"
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
