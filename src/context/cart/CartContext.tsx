"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import type {
  CartAddItem,
  CartContextValue,
  CartProviderProps,
} from "./CartContext.types";
import { cartInitialState, cartReducer } from "./cart.reducer";

const CartCtx = createContext<CartContextValue | null>(null);

export function CartProvider({ children, initialItems }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialItems,
    cartInitialState
  );

  const isInCart = useCallback(
    (id: string) => !!state.items[id],
    [state.items]
  );
  const getQty = useCallback(
    (id: string) => state.items[id]?.qty ?? 0,
    [state.items]
  );

  const add = useCallback((item: CartAddItem, qty = 1) => {
    dispatch({ type: "ADD", item, qty });
  }, []);

  const increment = useCallback(
    (id: string) => dispatch({ type: "INCREMENT", id }),
    []
  );
  const decrement = useCallback(
    (id: string) => dispatch({ type: "DECREMENT", id }),
    []
  );
  const setQty = useCallback(
    (id: string, qty: number) => dispatch({ type: "SET_QTY", id, qty }),
    []
  );
  const remove = useCallback(
    (id: string) => dispatch({ type: "REMOVE", id }),
    []
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const value = useMemo<CartContextValue>(
    () => ({
      isInCart,
      getQty,
      add,
      increment,
      decrement,
      setQty,
      remove,
      clear,
    }),
    [isInCart, getQty, add, increment, decrement, setQty, remove, clear]
  );

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
