import type { CurrencyCode, ProductId } from "@/features/products/types";

export interface ProductCardProps {
  id: ProductId;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  currency?: CurrencyCode;
  description?: string;
  isSoldOut?: boolean;
  hasVariants?: boolean;
  href?: string;
}
