import type { CartAddItem, CartLine, CartSnapshot, CartState } from "./CartContext.types";

export type CartAction =
  | { type: "ADD"; item: CartAddItem; qty?: number }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" }
  | { type: "SET"; items: CartSnapshot };

export function cartInitialState(snapshot?: CartSnapshot): CartState {
  const items: Record<string, CartLine> = {};
  for (const s of snapshot ?? []) {
    if (s.qty > 0) {
      items[s.id] = { id: s.id, name: "", price: 0, image: "", qty: s.qty };
    }
  }
  return { items };
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const prev = state.items[action.item.id];
      const nextQty = (prev?.qty ?? 0) + (action.qty ?? 1);
      return {
        items: {
          ...state.items,
          [action.item.id]: { ...action.item, qty: nextQty },
        },
      };
    }
    case "INCREMENT": {
      const line = state.items[action.id];
      if (!line) return state;
      return {
        items: { ...state.items, [action.id]: { ...line, qty: line.qty + 1 } },
      };
    }
    case "DECREMENT": {
      const line = state.items[action.id];
      if (!line) return state;
      const nextQty = line.qty - 1;
      if (nextQty <= 0) {
        const { [action.id]: _, ...rest } = state.items; // Remove item by id
        return { items: rest };
      }
      return { items: { ...state.items, [action.id]: { ...line, qty: nextQty } } };
    }
    case "SET_QTY": {
      if (action.qty <= 0) {
        const { [action.id]: _, ...rest } = state.items;
        return { items: rest };
      }
      const line = state.items[action.id];
      const base: CartLine = line ?? { id: action.id, name: "", price: 0, image: "", qty: 0 };
      return { items: { ...state.items, [action.id]: { ...base, qty: action.qty } } };
    }
    case "REMOVE": {
      if (!state.items[action.id]) return state;
      const { [action.id]: _, ...rest } = state.items;
      return { items: rest };
    }
    case "CLEAR":
      return { items: {} };
    case "SET": {
      const next: Record<string, CartLine> = {};
      for (const s of action.items) {
        if (s.qty > 0) {
          next[s.id] = { id: s.id, name: "", price: 0, image: "", qty: s.qty };
        }
      }
      return { items: next };
    }
    default:
      return state;
  }
}
