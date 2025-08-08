import Image from "next/image";
import type { ProductCardProps } from "./ProductCard.types";
import { calcDiscount } from "@/features/products/utils";
import StatusBadge from "./StatusBadge";
import FavoriteToggleButton from "./FavoriteToggleButton";
import PriceDisplay from "./PriceDisplay";
import CartControls from "./CartControls";

export default function ProductCard({
  id,
  name,
  image,
  price,
  currency = "USD",
  description = "",
  oldPrice,
  isSoldOut = false,
  hasVariants = false,
}: ProductCardProps) {
  const discount = calcDiscount(oldPrice, price);

  return (
    <article
      itemScope
      itemType="http://schema.org/Product"
      className="border w-56 rounded p-4 flex flex-col gap-2"
    >
      {/* media + badges + favourite */}
      <div className="relative">
        <figure className="relative aspect-square w-full overflow-hidden my-6">
          <Image
            src={image}
            alt={name}
            width={240}
            height={240}
            className="object-contain w-full h-auto"
            itemProp="image"
            priority
          />
          <figcaption className="sr-only">{name}</figcaption>
        </figure>

        <StatusBadge
          discount={discount}
          isSoldOut={isSoldOut}
          className="absolute top-0 left-0"
        />

        <FavoriteToggleButton
          productId={id}
          className="absolute top-0 right-0 rounded-full p-1 bg-white/80 backdrop-blur hover:bg-white transition-colors cursor-pointer"
        />
      </div>

      {/* name + description */}
      <h3 itemProp="name" className="text-xs text-muted-foreground">
        {name}
      </h3>
      {description && (
        <p itemProp="description" className="text-sm text-gray-800">
          {description}
        </p>
      )}

      {/* pricing + cart controls */}
      <div
        itemProp="offers"
        itemScope
        itemType="http://schema.org/Offer"
        className="mt-auto flex flex-col"
      >
        <PriceDisplay price={price} oldPrice={oldPrice} currency={currency} />

        {/* Client-side cart logic lives below */}
        <CartControls
          id={id}
          name={name}
          price={price}
          image={image}
          currency={currency}
          isSoldOut={isSoldOut}
          hasVariants={hasVariants}
          className="mt-4"
        />
      </div>
    </article>
  );
}
