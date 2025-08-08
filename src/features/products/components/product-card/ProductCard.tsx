import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { ProductCardProps } from "./ProductCard.types";

export default function ProductCard({
  id,
  name,
  image,
  price = 22,
  currency = "USD",
  href = `/products/${id}`,
  description = "Hello world!",
  oldPrice = 44,
  isSoldOut = false,
  isFavorite = true,
  hasVariants = true,
}: ProductCardProps) {
  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  const btnLabel = isSoldOut
    ? "SOLD OUT"
    : hasVariants
    ? "OPTIONS"
    : "ADD TO CART";

  const btnBg = isSoldOut
    ? "bg-gray-200"
    : hasVariants
    ? "bg-gray-300"
    : "bg-secondary";

  const btnClasses = `w-full h-10 mt-4 px-4 py-2 rounded-sm text-white text-sm font-bold transition-colors cursor-pointer ${btnBg} ${
    !isSoldOut && !hasVariants
      ? "hover:bg-secondary/90 active:after:bg-secondary"
      : ""
  }`;

  return (
    <article
      itemScope
      itemType="http://schema.org/Product"
      className="border w-56 rounded p-4 flex flex-col gap-2 mt-8 ml-8"
    >
      {/* media + favourite */}
      <div className="relative">
        <Link href={href} itemProp="url" aria-label={name}>
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
        </Link>

        {/* badge: discount or sold-out */}
        {isSoldOut ? (
          <span className="absolute top-0 left-0 text-red-600 text-xs font-semibold underline">
            SOLD&nbsp;OUT
          </span>
        ) : discount ? (
          <span className="absolute top-0 left-0 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        ) : null}

        {/* favourite */}
        <button
          type="button"
          aria-label="Toggle favourite"
          className="absolute top-0 right-0 rounded-full p-1 bg-white/80 backdrop-blur hover:bg-white transition-colors cursor-pointer"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "text-secondary fill-secondary" : "text-gray-500"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* title */}
      <h3 itemProp="name" className="text-xs text-muted-foreground">
        {name}
      </h3>

      {/* description */}
      {description && (
        <p itemProp="description" className="text-sm text-gray-800">
          {description}
        </p>
      )}

      {/* pricing + CTA */}
      <div
        itemProp="offers"
        itemScope
        itemType="http://schema.org/Offer"
        className="mt-auto flex flex-col"
      >
        <div className="flex items-center gap-2">
          <data
            value={price}
            itemProp="price"
            className="text-secondary font-semibold text-xs"
          >
            {price.toFixed(2)} {currency}
          </data>

          {oldPrice && oldPrice > price && (
            <span className="text-gray-400 line-through text-[10px]">
              {oldPrice.toFixed(2)} {currency}
            </span>
          )}

          <meta itemProp="priceCurrency" content={currency} />
        </div>

        <button type="button" aria-label={btnLabel} className={btnClasses}>
          {btnLabel}
        </button>
      </div>
    </article>
  );
}
