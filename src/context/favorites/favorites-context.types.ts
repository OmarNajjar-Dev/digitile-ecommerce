export interface FavoritesContextValue {
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

export interface FavoritesProviderProps {
  children: React.ReactNode;
  initialIds?: string[]; // hydrate from server (cookies/db) if available
}
