"use client";

import { useMemo } from "react";
import { useCart } from "@/context/cart";
import type { CartControlsProps } from "./CartControls.types";
import {
  makeAddHandler,
  makeDecHandler,
  makeIncHandler,
  makeOptionsHandler,
} from "./cart-controls.handlers";
import { Button } from "@/components/ui";

export default function CartControls({
  id,
  name,
  image,
  price,
  currency = "USD",
  isSoldOut = false,
  hasVariants = false,
  className = "",
  onOptionsClick,
}: CartControlsProps) {
  const { isInCart, getQty, add, increment, decrement } = useCart();
  const inCart = isInCart(id);
  const qty = getQty(id);

  const onAdd = useMemo(
    () => makeAddHandler(add, { id, name, price, image, currency }),
    [add, id, name, price, image, currency]
  );
  const onInc = useMemo(() => makeIncHandler(increment, id), [increment, id]);
  const onDec = useMemo(() => makeDecHandler(decrement, id), [decrement, id]);
  const onOptions = useMemo(
    () => makeOptionsHandler(onOptionsClick, id),
    [onOptionsClick, id]
  );

  if (isSoldOut) {
    return (
      <Button
        type="button"
        disabled
        className={`w-full h-10 px-4 rounded-sm bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm font-bold disabled:cursor-not-allowed ${className}`}
        aria-label="SOLD OUT"
      >
        SOLD OUT
      </Button>
    );
  }

  if (hasVariants && !inCart) {
    return (
      <Button
        type="button"
        onClick={onOptions}
        className={`w-full h-10 px-4 rounded-sm bg-gray-200 hover:bg-gray-200 hover:opacity-90 text-gray-800 text-sm font-bold cursor-pointer transition-opacity duration-300 ${className}`}
        aria-label="OPTIONS"
      >
        OPTIONS
      </Button>
    );
  }

  if (inCart) {
    return (
      <div
        role="group"
        aria-label="Quantity selector"
        className={`grid grid-cols-3 items-center h-10 rounded-full overflow-hidden border ${className}`}
      >
        <Button
          type="button"
          onClick={onDec}
          aria-label="Decrease quantity"
          className="h-full bg-gray-100 hover:bg-gray-200 text-black rounded-none cursor-pointer transition-colors duration-300"
        >
          -
        </Button>

        <div
          role="spinbutton"
          aria-valuenow={qty}
          aria-valuemin={0}
          className="text-center text-sm select-none"
        >
          {qty}
        </div>

        <Button
          type="button"
          onClick={onInc}
          aria-label="Increase quantity"
          className="h-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-none transition-colors duration-300 cursor-pointer"
        >
          +
        </Button>
      </div>
    );
  }

  return (
    <Button
      type="button"
      onClick={onAdd}
      className={`w-full h-10 px-4 rounded-sm bg-secondary text-white text-sm font-bold hover:bg-secondary/90 cursor-pointer active:after:bg-secondary transition-colors duration-300 ${className}`}
      aria-label="ADD TO CART"
    >
      ADD TO CART
    </Button>
  );
}
