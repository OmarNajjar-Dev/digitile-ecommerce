import Image from "next/image";
import type { ProductCardProps } from "./ProductCard.types";
import { calcDiscount } from "@/features/products/utils";
import StatusBadge from "./StatusBadge";
import FavoriteToggleButton from "./FavoriteToggleButton";
import PriceDisplay from "./PriceDisplay";
import { Button } from "@/components/ui";

export default function ProductCard({
  id,
  name,
  image,
  price = 7,
  currency = "USD",
  description = "",
  oldPrice = 6,
  isSoldOut = false,
  hasVariants = false,
}: ProductCardProps) {
  const discount = calcDiscount(oldPrice, price);

  const btnLabel = isSoldOut ? "SOLD OUT" : hasVariants ? "OPTIONS" : "ADD TO CART";
  const btnBg = isSoldOut ? "bg-gray-200 hover:bg-gray-200" : hasVariants ? "bg-gray-300" : "bg-secondary";
  const btnHover = !isSoldOut && !hasVariants ? "hover:bg-secondary/90 active:after:bg-secondary" : "";

  return (
    <article
      itemScope
      itemType="http://schema.org/Product"
      className="border w-56 rounded p-4 flex flex-col gap-2"
      // no pointer on the whole card
    >
      <div className="relative">
        {/* not clickable image */}
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

        {/* top-left badge (sold-out or discount) */}
        <StatusBadge discount={discount} isSoldOut={isSoldOut} className="absolute top-0 left-0" />

        {/* favourite toggle (pointer + subtle hover only here) */}
        <FavoriteToggleButton
          productId={id}
          className="absolute top-0 right-0 rounded-full p-1 bg-white/80 backdrop-blur hover:bg-white transition-colors cursor-pointer hover:text-secondary"
        />
      </div>

      <h3 itemProp="name" className="text-xs text-muted-foreground">{name}</h3>

      {description && (
        <p itemProp="description" className="text-sm text-gray-800">{description}</p>
      )}

      <div itemProp="offers" itemScope itemType="http://schema.org/Offer" className="mt-auto flex flex-col">
        <PriceDisplay price={price} oldPrice={oldPrice} currency={currency} />
        <Button
          type="button"
          aria-label={btnLabel}
          disabled={isSoldOut}
          className={`w-full h-10 mt-2 px-4 py-2 rounded-sm text-white text-sm font-bold transition-colors cursor-pointer disabled:cursor-not-allowed ${btnBg} ${btnHover}`}
        >
          {btnLabel}
        </Button>
      </div>
    </article>
  );
}
