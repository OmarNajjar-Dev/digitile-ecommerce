export interface CartAddItem {
  id: string;
  name: string;
  price: number;
  image: string;
  currency?: string;
}

export interface CartLine extends CartAddItem {
  qty: number;
}

export interface CartState {
  items: Record<string, CartLine>;
}

export type CartSnapshot = Array<{ id: string; qty: number }>;

export interface CartContextValue {
  isInCart: (id: string) => boolean;
  getQty: (id: string) => number;
  add: (item: CartAddItem, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export interface CartProviderProps {
  children: React.ReactNode;
  initialItems?: CartSnapshot;
}
