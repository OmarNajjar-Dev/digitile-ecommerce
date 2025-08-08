"use client";

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from "react";
import type {
  FavoritesContextValue,
  FavoritesProviderProps,
} from "./favorites-context.types";
import { favoritesInitialState, favoritesReducer } from "./favorites.reducer";

const FavoritesCtx = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({
  children,
  initialIds,
}: FavoritesProviderProps) {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialIds,
    favoritesInitialState
  );
  console.log(state);

  const isFavorite = useCallback(
    (id: string) => state.ids.has(id),
    [state.ids]
  );
  const toggleFavorite = useCallback((id: string) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  const value = useMemo<FavoritesContextValue>(
    () => ({ isFavorite, toggleFavorite }),
    [isFavorite, toggleFavorite]
  );

  return (
    <FavoritesCtx.Provider value={value}>{children}</FavoritesCtx.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesCtx);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
