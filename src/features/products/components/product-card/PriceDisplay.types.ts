import type { CurrencyCode } from "@/features/products/types";

export interface PriceDisplayProps {
  price: number;
  oldPrice?: number;
  currency?: CurrencyCode;
}
