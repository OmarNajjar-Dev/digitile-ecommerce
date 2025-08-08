import { PriceDisplayProps } from "./PriceDisplay.types";

export default function PriceDisplay({
  price,
  oldPrice,
  currency = "USD",
}: PriceDisplayProps) {
  return (
    <div className="flex items-center gap-2">
      {oldPrice && oldPrice > price && (
        <span className="text-gray-400 line-through text-[10px]">
          {oldPrice.toFixed(2)} {currency}
        </span>
      )}
      <data
        value={price}
        itemProp="price"
        className="text-secondary font-semibold text-xs"
      >
        {price.toFixed(2)} {currency}
      </data>

      <meta itemProp="priceCurrency" content={currency} />
    </div>
  );
}
