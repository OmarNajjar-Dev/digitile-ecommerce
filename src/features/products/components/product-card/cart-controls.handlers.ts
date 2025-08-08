import type { CartControlsProps } from "./CartControls.types";
import type { CartAddItem } from "@/context/cart";

export function makeAddHandler(
  add: (item: CartAddItem, qty?: number) => void,
  p: Pick<CartControlsProps, "id" | "name" | "price" | "image" | "currency">
) {
  return () => add({ id: p.id, name: p.name, price: p.price, image: p.image, currency: p.currency }, 1);
}

export function makeIncHandler(increment: (id: string) => void, id: string) {
  return () => increment(id);
}

export function makeDecHandler(decrement: (id: string) => void, id: string) {
  return () => decrement(id);
}

export function makeOptionsHandler(onOptionsClick: CartControlsProps["onOptionsClick"], id: string) {
  return () => onOptionsClick?.(id);
}
